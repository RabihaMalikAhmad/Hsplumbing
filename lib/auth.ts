// Uses the Web Crypto API (not Node's `crypto` module) so this also works
// inside Next.js Middleware, which runs on the Edge runtime.

export const ADMIN_COOKIE_NAME = "admin_session";

function getSecret() {
  const secret = process.env.ADMIN_PASSWORD;
  if (!secret) {
    throw new Error("ADMIN_PASSWORD is not set");
  }
  return secret;
}

async function hmac(secret: string, message: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

// Signed, timestamped token so we don't need a sessions table for a single admin user.
export async function createAdminToken(): Promise<string> {
  const secret = getSecret();
  const timestamp = Date.now().toString();
  const signature = await hmac(secret, timestamp);
  return `${timestamp}.${signature}`;
}

export async function verifyAdminToken(token: string | undefined | null): Promise<boolean> {
  if (!token) return false;
  const [timestamp, signature] = token.split(".");
  if (!timestamp || !signature) return false;

  let secret: string;
  try {
    secret = getSecret();
  } catch {
    return false;
  }

  const expected = await hmac(secret, timestamp);
  if (!timingSafeEqual(expected, signature)) return false;

  const age = Date.now() - Number(timestamp);
  const maxAge = 1000 * 60 * 60 * 24 * 7; // 7 days
  return age >= 0 && age < maxAge;
}

export function checkPassword(input: string): boolean {
  const secret = getSecret();
  return timingSafeEqual(input, secret);
}
