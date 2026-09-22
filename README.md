# Reehal Plumbing & Heating — website

A full-stack booking website for Reehal Plumbing & Heating (Smethwick & Birmingham), run by Harpreet Singh, built with
Next.js (App Router). The original static design and copy are preserved exactly — this adds a real
booking form, SMS alerts, Google Calendar integration, a general enquiry form, and a password-protected
admin page.

This guide assumes you've never set any of this up before. Follow it top to bottom.

## What this site does

- **Booking form** (`/#booking`): a customer fills in their name, phone, job type, preferred date/time
  and a short description. On submit:
  1. The booking is saved to a database.
  2. Harpreet gets an SMS immediately with the booking details.
  3. An event is created on his Google Calendar for the requested time.
  4. The customer gets a confirmation SMS.
- **General enquiry form** (`/#enquiry`): a simpler "get in touch" form that emails Harpreet via Resend.
- **Admin page** (`/admin`): a single password protects a page listing every booking and enquiry, so
  Harpreet (or you) can check requests without digging through texts/emails.

## 1. Prerequisites

- [Node.js](https://nodejs.org/) 18.18 or newer installed.
- A free [Vercel](https://vercel.com) account (for deployment) — sign up with GitHub.
- A free [Twilio](https://www.twilio.com/try-twilio) account (for SMS).
- A [Google Cloud](https://console.cloud.google.com/) account (free, for Calendar integration) — any
  normal Google account works.
- A free [Resend](https://resend.com) account (for the enquiry form email).

## 2. Get the code running locally

Clone the repository:

```bash
git clone https://github.com/RabihaMalikAhmad/Hsplumbing.git
cd Hsplumbing
```

Install dependencies and set up your environment file:

```bash
npm install
cp .env.example .env
```

Open `.env` and fill in values as you complete the steps below. You can start with just
`DATABASE_URL="file:./dev.db"` and `ADMIN_PASSWORD` set, run the site, and add the Twilio/Google/Resend
keys as you set each one up — features that aren't configured yet will simply be skipped (the booking
still saves, you just won't get the SMS/calendar side of it until it's configured).

Create the local database:

```bash
npx prisma db push
```

Run the dev server:

```bash
npm run dev
```

Visit http://localhost:3000. Visit http://localhost:3000/admin to see the admin login (password is
whatever you set as `ADMIN_PASSWORD`).

## 3. Set up Twilio (SMS)

1. Sign up at https://www.twilio.com/try-twilio (free trial includes credit and a free number).
2. On the [Twilio Console](https://console.twilio.com) dashboard, copy your **Account SID** and
   **Auth Token** into `.env` as `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN`.
3. Under **Phone Numbers > Manage > Buy a number**, get a number capable of SMS (trial accounts get one
   free). Copy it in E.164 format (e.g. `+441234567890`) into `TWILIO_FROM_NUMBER`.
4. Set `OWNER_PHONE` to Harpreet's mobile number — `07857873515` is already filled in for you.

**Note on Twilio trial accounts:** a trial account can only send SMS to phone numbers you've verified in
the Twilio Console (under **Phone Numbers > Verified Caller IDs**). Verify Harpreet's number there while
testing. To send to any customer's number without verifying it first, upgrade the Twilio account (pay-as-
you-go — no ongoing subscription fee, you only pay a few pence per SMS).

## 4. Set up Google Calendar

This uses a "refresh token" so the site can add events to one specific Google Calendar without needing
anyone to log in.

1. Go to https://console.cloud.google.com/ and create a new project (top-left project dropdown → New
   Project). Name it anything, e.g. "Harpreet Plumbing".
2. In the search bar, find **Google Calendar API** and click **Enable**.
3. Go to **APIs & Services > OAuth consent screen**. Choose **External**, fill in an app name and your
   email, and save. On the "Test users" step, add the Google account whose calendar bookings should land
   on (this can be Harpreet's own Gmail, or yours if you manage his calendar).
4. Go to **APIs & Services > Credentials > Create Credentials > OAuth client ID**. Choose **Web
   application**. Under **Authorized redirect URIs**, add:
   `https://developers.google.com/oauthplayground`
   Click Create, then copy the **Client ID** and **Client Secret** into `.env` as `GOOGLE_CLIENT_ID` and
   `GOOGLE_CLIENT_SECRET`.
5. Go to https://developers.google.com/oauthplayground
   - Click the gear icon (top right) → check **"Use your own OAuth credentials"** → paste in the Client
     ID and Client Secret from step 4.
   - In the panel on the left, scroll to **Calendar API v3**, expand it, and select the scope
     `https://www.googleapis.com/auth/calendar`.
   - Click **Authorize APIs**, sign in with the Google account from step 3, and allow access.
   - Click **Exchange authorization code for tokens**. Copy the **Refresh token** value into `.env` as
     `GOOGLE_REFRESH_TOKEN`.
6. Leave `GOOGLE_CALENDAR_ID="primary"` unless you want events to go on a specific secondary calendar —
   if so, find that calendar's ID under its Settings page in Google Calendar and use that instead.

Refresh tokens don't expire under normal use, so this is a one-time setup.

## 5. Set up Resend (email for the enquiry form)

1. Sign up free at https://resend.com.
2. Go to **API Keys** in the dashboard, create a key, and copy it into `.env` as `RESEND_API_KEY`.
3. Leave `EMAIL_FROM="onboarding@resend.dev"` to start — this works immediately with no extra setup and
   is fine for a low-volume enquiry form. If you want emails to come from your own domain later, add and
   verify it under **Domains** in Resend, then change `EMAIL_FROM` to an address on that domain.
4. Set `OWNER_EMAIL` to the address enquiries should be sent to.

## 6. Set the admin password

Set `ADMIN_PASSWORD` in `.env` to anything memorable but not guessable. This is the only password used by
the site — there's no separate user accounts system.

## 7. Deploy to Vercel

The database is already Postgres (see below), so no schema changes are needed before deploying.

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Get a Postgres database if you don't already have one — the easiest way is Vercel's own
   **Storage > Create Database > Postgres** (powered by Neon) once your project exists, or sign up
   separately at https://neon.tech or https://supabase.com and copy the connection string it gives you.
3. Go to https://vercel.com/new, import the repository, and click Deploy — Vercel auto-detects Next.js.
4. In the Vercel project's **Settings > Environment Variables**, add every variable from your `.env` file,
   including `DATABASE_URL` set to that Postgres connection string. This has to be set before the build
   runs, because the build step creates the database tables automatically (see below) — redeploy after
   adding it if the first deploy ran without it.
5. Visit your `*.vercel.app` URL to confirm the site loads, then test a booking end-to-end.

Vercel's free tier is enough for a single tradesman's booking traffic.

### Why the tables appear automatically

The `build` script in `package.json` runs `prisma db push` before `next build`, which creates or updates
the database tables to match `prisma/schema.prisma` on every deploy — there's no separate migration step
to remember. This is intentionally simple rather than using Prisma's full migration system, which suits a
small single-developer project; the trade-off is that `db push` will apply schema changes (including ones
that could drop data) without asking for confirmation, since Vercel's build has no interactive terminal to
confirm in. For this project's size that's an acceptable trade-off, but keep it in mind if you ever add a
column and remove another in the same change — back up data first if you're not sure.

## Project structure

```
app/
  page.tsx              the homepage (converted from the original static HTML)
  globals.css           all styling (unchanged design, plus new form styles)
  admin/                password-protected admin dashboard
  api/booking/route.ts  booking form handler (DB + SMS + Calendar)
  api/contact/route.ts  general enquiry form handler (DB + email)
  api/admin/            admin login/logout
components/
  BookingForm.tsx        the real booking form (client component)
  EnquiryForm.tsx         the general enquiry form (client component)
lib/
  prisma.ts               Prisma client singleton
  sms.ts                  Twilio helper
  googleCalendar.ts       Google Calendar helper
  email.ts                Resend helper
  auth.ts                 admin password/session helpers
  phone.ts                UK phone number formatting for Twilio
prisma/schema.prisma      database schema (Booking, Enquiry)
middleware.ts             protects /admin routes
.env.example              every required secret, with instructions
```

## Notes

- If Twilio, Google Calendar or Resend aren't configured, the relevant feature is skipped gracefully —
  bookings and enquiries are always saved to the database and visible in `/admin` either way.
- The booking form assumes UK phone numbers; `lib/phone.ts` converts common formats
  (`07xxx xxxxxx`, `+447xxx`, `447xxx`) to the E.164 format Twilio requires.
- No general-purpose user accounts or auth library is used — the admin page needs only the shared
  password, matching the "simple, no unnecessary libraries" brief.
