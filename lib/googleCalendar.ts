import { google } from "googleapis";

function getOAuthClient() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error(
      "Google Calendar is not configured (GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET / GOOGLE_REFRESH_TOKEN missing)"
    );
  }

  const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);
  oauth2Client.setCredentials({ refresh_token: refreshToken });
  return oauth2Client;
}

export async function createCalendarEvent(params: {
  summary: string;
  description: string;
  startISO: string;
  endISO: string;
  location?: string;
}) {
  const auth = getOAuthClient();
  const calendar = google.calendar({ version: "v3", auth });
  const calendarId = process.env.GOOGLE_CALENDAR_ID || "primary";

  try {
    const event = await calendar.events.insert({
      calendarId,
      requestBody: {
        summary: params.summary,
        description: params.description,
        location: params.location,
        start: { dateTime: params.startISO, timeZone: "Europe/London" },
        end: { dateTime: params.endISO, timeZone: "Europe/London" },
      },
    });

    return event.data;
  } catch (err) {
    const googleErr = err as { message?: string; code?: number; status?: number; errors?: unknown; response?: { data?: unknown } };
    console.error("Google Calendar event creation failed:", {
      calendarId,
      message: googleErr.message,
      code: googleErr.code,
      status: googleErr.status,
      details: googleErr.errors ?? googleErr.response?.data,
    });
    throw err;
  }
}
