import EmailTemplate from "@/components/email-template";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.PERSONAL_EMAIL!,
      subject: `Message from ${name} `,
      react: EmailTemplate({ name, message, email }),
      reply_to: email,
    });
    if (error) {
      return new NextResponse("Failed to Send Email", { status: 502 });
    }

    return new NextResponse("Email Sent", { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
