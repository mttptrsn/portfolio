import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server.js";
import nodemailer from "nodemailer";
import { checkInMemoryThrottle, getClientIp, hashIp, isHoneypotTriggered, logContactRejection, looksLikeAutomatedGarbage, parseContactPayload, validateContactFields, validateFormToken, type RejectionReason } from "../../lib/contact-security.ts";

export const runtime = "nodejs";

function rejection(reason: RejectionReason, ipHash: string, status = 400, retryAfter?: number) {
  logContactRejection(reason, ipHash);
  return NextResponse.json(
    { success: false, error: status === 429 ? "Too many messages. Please try again later." : "Unable to send message." },
    { status, headers: retryAfter ? { "Retry-After": String(retryAfter) } : undefined },
  );
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const ipHash = hashIp(ip);
  let rawBody: unknown;
  try { rawBody = await req.json(); } catch { return rejection("invalid_body", ipHash); }
  const body = parseContactPayload(rawBody);
  if (!body) return rejection("invalid_body", ipHash);

  // Return an ordinary success response so a bot cannot learn that the trap fired.
  if (isHoneypotTriggered(body)) {
    logContactRejection("honeypot", ipHash);
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const timing = validateFormToken(body.formToken);
  if (timing !== "valid") return rejection(timing === "too_fast" ? "too_fast" : "invalid_timing", ipHash);

  const invalidFields = validateContactFields(body);
  if (invalidFields.length) {
    logContactRejection("invalid_fields", ipHash, { fields: invalidFields });
    return NextResponse.json({ success: false, error: "Please check the form fields and try again." }, { status: 400 });
  }
  if (looksLikeAutomatedGarbage(body.message)) return rejection("garbage_message", ipHash);

  const throttle = checkInMemoryThrottle(ipHash);
  if (!throttle.allowed) return rejection("throttled", ipHash, 429, throttle.retryAfter);

  const userEmail = process.env.SENDING_EMAIL;
  const userSecret = process.env.SENDING_SECRET;
  if (!userEmail || !userSecret) return rejection("server_misconfigured", ipHash, 503);

  try {
    const transporter = nodemailer.createTransport({ service: "gmail", auth: { user: userEmail, pass: userSecret } });
    const info = await transporter.sendMail({
      from: userEmail,
      to: userEmail,
      replyTo: body.email,
      subject: `${body.title.replace(/[\r\n]/g, " ")} - Portfolio Contact: ${body.subject.replace(/[\r\n]/g, " ")}`,
      text: `Message from: ${body.title} <${body.email}>\n\n${body.message}`,
    });
    console.info("contact_submission_accepted", { ipHash, requestId: randomUUID(), messageId: info.messageId });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch { return rejection("mail_failed", ipHash, 500); }
}
