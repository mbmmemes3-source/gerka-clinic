import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      name,
      patient_name,
      email,
      patient_email,
      phone,
      patient_phone,
      treatment,
      service,
      service_requested,
      concern,
      interested_in,
      subject,
      message,
      file_url,
      language,
      contact_method,
      booking_fee,
      preferred_time,
      time,
      ...extra
    } = data;

    const senderName = name || patient_name || "Website Visitor";
    const senderEmail = email || patient_email || "";
    const senderPhone = phone || patient_phone || "Not specified";
    const inquiryService =
      service_requested ||
      treatment ||
      service?.title ||
      concern ||
      interested_in ||
      "General Consultation / Enquiry";

    const emailSubject =
      subject ||
      `New Enquiry: ${inquiryService} - ${senderName}`;

    const toEmail = process.env.CLIENT_EMAIL || "info@gerkaclinic.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    // Format extra fields if any
    const extraRows = Object.entries(extra)
      .filter(([_, v]) => v !== undefined && v !== null && v !== "")
      .map(
        ([k, v]) =>
          `<tr><td style="padding: 8px 12px; font-weight: bold; color: #555; text-transform: capitalize;">${k.replace(/_/g, " ")}</td><td style="padding: 8px 12px; color: #111;">${String(v)}</td></tr>`
      )
      .join("");

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #eaeaea; border-radius: 12px; background-color: #ffffff;">
        <div style="border-bottom: 2px solid #18181b; padding-bottom: 12px; margin-bottom: 20px;">
          <h2 style="margin: 0; color: #18181b; font-size: 20px; font-weight: 600;">Gerka Clinic - New Website Submission</h2>
          <p style="margin: 4px 0 0; color: #71717a; font-size: 13px;">${time || new Date().toLocaleString()}</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tbody>
            <tr style="background-color: #fbfbfa;">
              <td style="padding: 8px 12px; font-weight: bold; color: #555; width: 35%;">Name</td>
              <td style="padding: 8px 12px; color: #111;">${senderName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 8px 12px; color: #111;"><a href="mailto:${senderEmail}" style="color: #18181b;">${senderEmail || "N/A"}</a></td>
            </tr>
            <tr style="background-color: #fbfbfa;">
              <td style="padding: 8px 12px; font-weight: bold; color: #555;">Phone</td>
              <td style="padding: 8px 12px; color: #111;"><a href="tel:${senderPhone}" style="color: #18181b;">${senderPhone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #555;">Service / Concern</td>
              <td style="padding: 8px 12px; color: #111; font-weight: 600;">${inquiryService}</td>
            </tr>
            ${
              booking_fee
                ? `<tr style="background-color: #fbfbfa;"><td style="padding: 8px 12px; font-weight: bold; color: #555;">Fee / Deposit</td><td style="padding: 8px 12px; color: #111; font-weight: 600;">${booking_fee}</td></tr>`
                : ""
            }
            ${
              language
                ? `<tr><td style="padding: 8px 12px; font-weight: bold; color: #555;">Preferred Language</td><td style="padding: 8px 12px; color: #111;">${language}</td></tr>`
                : ""
            }
            ${
              contact_method
                ? `<tr style="background-color: #fbfbfa;"><td style="padding: 8px 12px; font-weight: bold; color: #555;">Preferred Contact Method</td><td style="padding: 8px 12px; color: #111;">${contact_method}</td></tr>`
                : ""
            }
            ${
              preferred_time
                ? `<tr><td style="padding: 8px 12px; font-weight: bold; color: #555;">Preferred Time / Details</td><td style="padding: 8px 12px; color: #111; white-space: pre-wrap;">${preferred_time}</td></tr>`
                : ""
            }
            ${extraRows}
            ${
              file_url
                ? `<tr><td style="padding: 8px 12px; font-weight: bold; color: #555;">Uploaded Photo</td><td style="padding: 8px 12px;"><a href="${file_url}" target="_blank" style="color: #0284c7; text-decoration: underline;">View Uploaded Photo</a></td></tr>`
                : ""
            }
          </tbody>
        </table>

        ${
          message
            ? `<div style="margin-top: 20px; padding: 14px; background-color: #f4f4f5; border-radius: 8px;">
                 <h4 style="margin: 0 0 6px 0; font-size: 13px; color: #52525b; text-transform: uppercase; letter-spacing: 0.05em;">Message / Note:</h4>
                 <p style="margin: 0; color: #18181b; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">${message}</p>
               </div>`
            : ""
        }
      </div>
    `;

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: senderEmail || undefined,
      subject: emailSubject,
      html: htmlContent,
    });

    if (resendError) {
      console.error("Resend API error:", resendError);
      return NextResponse.json({ error: resendError.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: resendData });
  } catch (error: any) {
    console.error("Email send route error:", error);
    return NextResponse.json({ error: error.message || "Failed to send email" }, { status: 500 });
  }
}
