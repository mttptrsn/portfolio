import assert from "node:assert/strict";
import test from "node:test";
import { NextRequest } from "next/server.js";
import nodemailer from "nodemailer";
import { POST } from "../app/api/form/route.ts";
import { createFormToken } from "../app/lib/contact-security.ts";

test("the contact endpoint enforces every rejection path before email", async () => {
  process.env.CONTACT_FORM_SECRET = "route-test-secret-with-enough-entropy";
  process.env.SENDING_EMAIL = "owner@example.com";
  process.env.SENDING_SECRET = "gmail-secret";

  let emailsSent = 0;
  const mailer = nodemailer as unknown as { createTransport: typeof nodemailer.createTransport };
  const originalCreateTransport = mailer.createTransport;
  mailer.createTransport = (() => ({ sendMail: async () => { emailsSent += 1; return { messageId: "test-message" }; } })) as unknown as typeof nodemailer.createTransport;

  const token = createFormToken(Date.now() - 4000);
  assert.ok(token);
  const base = { title: "Jane Doe", email: "jane@example.com", subject: "Hello", message: "Hi", website: "", formToken: token };
  const request = (body: object, ip: string) => new NextRequest("https://portfolio.example/api/form", {
    method: "POST", headers: { "Content-Type": "application/json", "x-vercel-forwarded-for": ip }, body: JSON.stringify(body),
  });

  try {
    const valid = await POST(request(base, "203.0.113.1"));
    assert.equal(valid.status, 200);
    assert.equal(emailsSent, 1);

    const honeypot = await POST(request({ ...base, website: "spam.example" }, "203.0.113.2"));
    assert.equal(honeypot.status, 200);
    assert.equal(emailsSent, 1);

    const freshToken = createFormToken();
    assert.ok(freshToken);
    assert.equal((await POST(request({ ...base, formToken: freshToken }, "203.0.113.3"))).status, 400);
    assert.equal((await POST(request({ ...base, email: "invalid" }, "203.0.113.4"))).status, 400);
    assert.equal((await POST(request({ ...base, message: "x".repeat(5001) }, "203.0.113.5"))).status, 400);
    assert.equal((await POST(request({ ...base, message: "aaaaaaaaaaaaaaaaaaaa" }, "203.0.113.6"))).status, 400);
    assert.equal(emailsSent, 1);

    const rateIp = "203.0.113.7";
    assert.equal((await POST(request(base, rateIp))).status, 200);
    assert.equal((await POST(request(base, rateIp))).status, 200);
    assert.equal((await POST(request(base, rateIp))).status, 200);
    const limited = await POST(request(base, rateIp));
    assert.equal(limited.status, 429);
    assert.equal(limited.headers.get("Retry-After"), "900");
    assert.equal(emailsSent, 4);
  } finally {
    mailer.createTransport = originalCreateTransport;
  }
});
