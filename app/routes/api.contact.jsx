import { json } from "@remix-run/cloudflare";
import sgMail from "@sendgrid/mail";

export async function action({ request, context }) {
  const { email, message } = await request.json();

  if (!email || !message) {
    return json({ error: "Fields not filled in the form..." }, { status: 400 });
  }

  const apiKey = context.cloudflare.env.SENDGRID_API_KEY;
  if (!apiKey) {
    console.error("SENDGRID_API_KEY not configured");
    return json({ error: "Email service not configured" }, { status: 500 });
  }

  sgMail.setApiKey(apiKey);

  const msg = {
    to: "aurora.amanda.huovinen@gmail.com",
    from: "support@vjxsoft.com",
    replyTo: email,
    subject: `Viesti sähköpostista: ${email}`,
    text: message,
  };

  try {
    await sgMail.send(msg);
    return json({ message: "All good, email sent" }, { status: 200 });
  } catch (error) {
    console.error("SendGrid error:", error);
    return json({ error: "Failed to send email" }, { status: 500 });
  }
}
