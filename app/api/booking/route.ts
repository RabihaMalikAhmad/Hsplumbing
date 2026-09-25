import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createCalendarEvent } from "@/lib/googleCalendar";
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

  // Notify Harpreet by email — the primary notification channel for now.
  const ownerEmail = process.env.OWNER_EMAIL;
  if (ownerEmail) {
    try {
      await sendEmail({
        to: ownerEmail,
        subject: `New booking request from ${booking.name}`,
        text: `${booking.name} (${booking.phone})\nJob: ${booking.jobType}\nWhen: ${preferredDate.toLocaleString("en-GB", { timeZone: "Europe/London" })}\n${booking.description ? `Notes: ${booking.description}` : ""}`.trim(),
      });
      await prisma.booking.update({ where: { id: booking.id }, data: { emailSent: true } });
    } catch (err) {
      console.error("Failed to send owner booking email:", err instanceof Error ? err.message : err);
      warnings.push("Could not email Harpreet about this booking — please also call/text directly.");
    }
  } else {
    warnings.push("OWNER_EMAIL is not configured — no email notification was sent.");
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
  } catch {
    // lib/googleCalendar.ts already logs the underlying Google API error in detail.
    warnings.push("Could not add this to Google Calendar automatically — Harpreet will confirm manually.");
  }

  return NextResponse.json({ ok: true, bookingId: booking.id, warnings });
}
