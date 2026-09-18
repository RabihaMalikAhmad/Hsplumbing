import { Resend } from "resend";

function getClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }
  return new Resend(apiKey);
}

export async function sendEmail(params: { to: string; subject: string; text: string }) {
  const from = process.env.EMAIL_FROM;
  if (!from) {
    throw new Error("EMAIL_FROM is not set");
  }
  const resend = getClient();
  return resend.emails.send({
    from,
    to: params.to,
    subject: params.subject,
    text: params.text,
  });
}
