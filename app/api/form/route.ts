import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);

  const userEmail = process.env.SENDING_EMAIL;
  const userSecret = process.env.SENDING_SECRET;

  if (!userEmail || !userSecret) {
    console.error("Missing SENDING_EMAIL or SENDING_SECRET env vars");
    return NextResponse.json(
      { success: false, error: "Server configuration error" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: userEmail,
      pass: userSecret,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: userEmail,
      to: userEmail,
      subject: `${body.title} - Portfolio Contact: ${body.subject}`,
      text: `Message from: ${body.email}, ${body.message}`,
    });

    console.log("Message sent:", info.messageId);

    return NextResponse.json(
      { success: true, messageId: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send the email:", error);

    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
