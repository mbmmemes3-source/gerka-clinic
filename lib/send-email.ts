/**
 * Helper to send email notifications via internal Resend API route
 */
export async function sendNotificationEmail(params: Record<string, any>) {
  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to send notification email");
  }

  return { text: "OK", data };
}

