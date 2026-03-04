import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, website, businessType, goal, honeypot } = body as {
      name?: string;
      email?: string;
      website?: string;
      businessType?: string;
      goal?: string;
      honeypot?: string;
    };

    if (honeypot && honeypot.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !website || !goal) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const gmailAddress = process.env.GOOGLE_EMAIL || "rosecitycommerce@gmail.com";
    const gmailAppKey = process.env.GOOGLE_EMAIL_APP_KEY;
    const to = process.env.AUDIT_FORM_TO || gmailAddress;

    if (!gmailAppKey) {
      return NextResponse.json({ error: "Email transport not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailAddress, pass: gmailAppKey }
    });

    await transporter.sendMail({
      from: `Rose City Commerce <${gmailAddress}>`,
      to,
      subject: `Free Audit Request: ${name}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Website: ${website}`,
        `Business type: ${businessType || "Not provided"}`,
        `Biggest goal: ${goal}`
      ].join("\n")
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to submit audit request" }, { status: 500 });
  }
}
