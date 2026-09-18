// Normalizes UK phone numbers (as typed by customers) to E.164 format for Twilio.
// Accepts "07857 873515", "+447857873515", "447857873515", etc.
export function toE164UK(raw: string): string {
  const digits = raw.replace(/[^\d+]/g, "");
  if (digits.startsWith("+")) return digits;
  if (digits.startsWith("0")) return `+44${digits.slice(1)}`;
  if (digits.startsWith("44")) return `+${digits}`;
  return `+44${digits}`;
}
