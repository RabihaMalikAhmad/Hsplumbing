import nodemailer from "nodemailer";

function getTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    throw new Error("GMAIL_USER and GMAIL_APP_PASSWORD must be set");
  }
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

export async function sendEmail(params: { to: string; subject: string; text: string }) {
  const from = process.env.GMAIL_USER;
  const transporter = getTransporter();
  return transporter.sendMail({
    from,
    to: params.to,
    subject: params.subject,
    text: params.text,
  });
}
