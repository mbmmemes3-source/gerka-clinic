"use server";

import nodemailer from "nodemailer";

export async function sendGerkaInquiry(formData: FormData) {
  try {
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const treatment = formData.get("treatment")?.toString();
    const message = formData.get("message")?.toString();

    if (!name || !email || !message) {
      return { success: false };
    }

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_USER,
        pass: process.env.BREVO_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Gerka Clinic Website" <${process.env.BREVO_USER}>`, // must be verified in Brevo
      to: process.env.CLIENT_EMAIL, // client mail
      replyTo: email, // 🔥 important
      subject: `New Enquiry from ${name}`,
      html: `
        <h2>New Contact Form Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Treatment:</b> ${treatment}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Email Error:", error);
    return { success: false };
  }
}