import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendSms } from "@/lib/sms";
import { createCalendarEvent } from "@/lib/googleCalendar";
import { toE164UK } from "@/lib/phone";
import { sendEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, email, jobType, preferredAt, description } = body as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof phone !== "string" ||
    !phone.trim() ||
    typeof jobType !== "string" ||
    !jobType.trim() ||
    typeof preferredAt !== "string" ||
    !preferredAt.trim()
  ) {
    return NextResponse.json({ error: "Please fill in name, phone, job type and preferred date/time." }, { status: 400 });
  }

  const preferredDate = new Date(preferredAt);
  if (Number.isNaN(preferredDate.getTime())) {
    return NextResponse.json({ error: "Preferred date/time is not valid." }, { status: 400 });
  }

  const booking = await prisma.booking.create({
    data: {
      name: name.trim(),
      phone: phone.trim(),
      email: typeof email === "string" && email.trim() ? email.trim() : null,
      jobType: jobType.trim(),
      preferredAt,
      description: typeof description === "string" ? description.trim() : null,
    },
  });

  const warnings: string[] = [];
  const ownerPhone = process.env.OWNER_PHONE;

  // Notify Harpreet by SMS immediately — best-effort, does not block the booking.
  if (ownerPhone) {
    try {
      await sendSms(
        toE164UK(ownerPhone),
        `New booking request:\n${booking.name} (${booking.phone})\nJob: ${booking.jobType}\nWhen: ${preferredDate.toLocaleString("en-GB", { timeZone: "Europe/London" })}\n${booking.description ? `Notes: ${booking.description}` : ""}`.trim()
      );
      await prisma.booking.update({ where: { id: booking.id }, data: { smsSent: true } });
    } catch (err) {
      console.error("Failed to send owner SMS:", err);
      warnings.push("Could not send SMS notification to Harpreet — please also call/text directly.");
    }
  } else {
    warnings.push("OWNER_PHONE is not configured — no SMS notification was sent.");
  }

  // Notify Harpreet by email too, as a second channel alongside the SMS.
  const ownerEmail = process.env.OWNER_EMAIL;
  if (ownerEmail) {
    try {
      await sendEmail({
        to: ownerEmail,
        subject: `New booking request from ${booking.name}`,
        text: `${booking.name} (${booking.phone})\nJob: ${booking.jobType}\nWhen: ${preferredDate.toLocaleString("en-GB", { timeZone: "Europe/London" })}\n${booking.description ? `Notes: ${booking.description}` : ""}`.trim(),
      });
    } catch (err) {
      console.error("Failed to send owner booking email:", err);
      // SMS and calendar are the primary channels, so don't fail the request over this.
    }
  }

  // Create a Google Calendar event for the requested slot.
  try {
    const start = preferredDate;
    const end = new Date(start.getTime() + 60 * 60 * 1000); // default 1 hour slot
    const event = await createCalendarEvent({
      summary: `${booking.jobType} — ${booking.name}`,
      description: `Phone: ${booking.phone}\nEmail: ${booking.email ?? "n/a"}\nNotes: ${booking.description ?? "n/a"}`,
      startISO: start.toISOString(),
      endISO: end.toISOString(),
    });
    if (event.id) {
      await prisma.booking.update({ where: { id: booking.id }, data: { calendarEventId: event.id } });
    }
  } catch (err) {
    console.error("Failed to create calendar event:", err);
    warnings.push("Could not add this to Google Calendar automatically — Harpreet will confirm manually.");
  }

  // Confirmation SMS to the customer.
  try {
    await sendSms(
      toE164UK(booking.phone),
      `Hi ${booking.name}, thanks for your booking request with Reehal Plumbing & Heating for ${preferredDate.toLocaleString("en-GB", { timeZone: "Europe/London" })}. Harpreet will confirm shortly. Call/text 07857 873515 with any questions.`
    );
  } catch (err) {
    console.error("Failed to send customer confirmation SMS:", err);
    warnings.push("Could not send you a confirmation SMS — you'll be contacted directly instead.");
  }

  return NextResponse.json({ ok: true, bookingId: booking.id, warnings });
}
