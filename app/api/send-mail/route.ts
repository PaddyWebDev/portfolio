import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Create a transporter for sending emails via Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL!,
        pass: process.env.PASSWORD!,
      },
    });

    const toContactPerson = {
      from: process.env.EMAIL,
      to: email,
      subject: "Thank you for contacting me",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to me. I truly appreciate you taking the time to get in touch.</p>
        <p>Your message:</p>
        <blockquote style="font-style: italic; color: #555;">${message}</blockquote>
        <p>I will get back to you as soon as possible.</p>
        <p>Best regards,<br/>Padmanabh Malwade</p>
      `,
      replyTo: process.env.EMAIL,
    };

    // Email to yourself to notify about the contact
    const toSelf = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="font-style: italic; color: #555;">${message}</blockquote>
      `,
      replyTo: email,
    };

    await transporter.sendMail(toContactPerson);
    await transporter.sendMail(toSelf);

    return new NextResponse("Emails Sent", { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
