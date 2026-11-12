"use server";

import { resend } from "@/lib/resend";

export async function sendGerkaInquiry(formData: FormData) {
  try {
    const name = formData.get("name")?.toString() || "Website Visitor";
    const email = formData.get("email")?.toString();
    const treatment = formData.get("treatment")?.toString() || "General Inquiry";
    const message = formData.get("message")?.toString() || "";

    if (!email && !message) {
      return { success: false };
    }

    const toEmail = process.env.CLIENT_EMAIL || "info@gerkaclinic.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email || undefined,
      subject: `New Enquiry from ${name} - ${treatment}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #eaeaea; border-radius: 12px;">
          <h2 style="margin-top: 0; color: #18181b;">New Contact Form Enquiry</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email || "N/A"}</p>
          <p><b>Treatment:</b> ${treatment}</p>
          <div style="margin-top: 16px; padding: 12px; background: #f4f4f5; border-radius: 8px;">
            <b>Message:</b>
            <p style="white-space: pre-wrap; margin: 4px 0 0 0;">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Server Action Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Email Error:", error);
    return { success: false };
  }
}
