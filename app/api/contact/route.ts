import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, message } = body as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !email.trim() ||
    typeof message !== "string" ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Please fill in name, email and message." }, { status: 400 });
  }

  const enquiry = await prisma.enquiry.create({
    data: {
      name: name.trim(),
      email: email.trim(),
      phone: typeof phone === "string" && phone.trim() ? phone.trim() : null,
      message: message.trim(),
    },
  });

  const ownerEmail = process.env.OWNER_EMAIL;
  if (ownerEmail) {
    try {
      await sendEmail({
        to: ownerEmail,
        subject: `New enquiry from ${enquiry.name}`,
        text: `Name: ${enquiry.name}\nEmail: ${enquiry.email}\nPhone: ${enquiry.phone ?? "n/a"}\n\n${enquiry.message}`,
      });
    } catch (err) {
      console.error("Failed to send enquiry email:", err);
      // The enquiry is already saved and visible in /admin, so don't fail the request.
    }
  }

  return NextResponse.json({ ok: true, enquiryId: enquiry.id });
}
