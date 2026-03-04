import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, website, needs, honeypot } = body as {
      name?: string;
      email?: string;
      website?: string;
      needs?: string;
      honeypot?: string;
    };

    if (honeypot && honeypot.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !website || !needs) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const gmailAddress = process.env.GOOGLE_EMAIL || "rosecitycommerce@gmail.com";
    const gmailAppKey = process.env.GOOGLE_EMAIL_APP_KEY;
    const to = process.env.CONTACT_FORM_TO || gmailAddress;

    if (!gmailAppKey) {
      return NextResponse.json({ error: "Email transport not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailAddress, pass: gmailAppKey }
    });

    const result = await transporter.sendMail({
      from: `Rose City Commerce <${gmailAddress}>`,
      to,
      subject: `Contact Form Inquiry: ${name}`,
      replyTo: email,
      text: [`Name: ${name}`, `Email: ${email}`, `Website: ${website}`, "Goals:", needs].join("\n")
    });

    const debugEnabled =
      process.env.CONTACT_FORM_DEBUG === "true" || process.env.NODE_ENV !== "production";

    if (debugEnabled) {
      console.log("[contact-form] email result", {
        messageId: result.messageId,
        accepted: result.accepted,
        rejected: result.rejected,
        response: result.response
      });
    }

    return NextResponse.json(
      debugEnabled
        ? {
            ok: true,
            debug: {
              messageId: result.messageId,
              accepted: result.accepted,
              rejected: result.rejected
            }
          }
        : { ok: true }
    );
  } catch {
    return NextResponse.json({ error: "Unable to submit contact request" }, { status: 500 });
  }
}
