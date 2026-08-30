import { createHmac, timingSafeEqual } from "node:crypto";

export const CONTACT_LIMITS = {
  title: { min: 2, max: 80 }, email: { min: 3, max: 254 },
  subject: { min: 2, max: 120 }, message: { min: 2, max: 5000 },
} as const;
export type ContactPayload = { title: string; email: string; subject: string; message: string; website: string; formToken: string };
export type RejectionReason = "invalid_body" | "honeypot" | "invalid_timing" | "too_fast" | "throttled" | "invalid_fields" | "garbage_message" | "mail_failed" | "server_misconfigured";
const FORM_TOKEN_MAX_AGE_MS = 24 * 60 * 60 * 1000;
export const MIN_FORM_COMPLETION_MS = 3000;
const THROTTLE_WINDOW_MS = 15 * 60 * 1000;
const THROTTLE_MAX = 3;
const THROTTLE_MAX_ENTRIES = 1000;
const throttleEntries = new Map<string, { count: number; expiresAt: number }>();
const secret = () => process.env.CONTACT_FORM_SECRET?.trim() || null;
const signature = (value: string, key: string) => createHmac("sha256", key).update(value).digest("base64url");

export function createFormToken(now = Date.now()): string | null {
  const key = secret();
  if (!key) return null;
  const timestamp = now.toString(36);
  return `${timestamp}.${signature(timestamp, key)}`;
}
export function validateFormToken(token: string, now = Date.now()): "valid" | "too_fast" | "invalid" {
  const key = secret();
  const [timestamp, suppliedSignature, extra] = token.split(".");
  if (!key || !timestamp || !suppliedSignature || extra) return "invalid";
  const expected = Buffer.from(signature(timestamp, key));
  const supplied = Buffer.from(suppliedSignature);
  if (expected.length !== supplied.length || !timingSafeEqual(expected, supplied)) return "invalid";
  const issuedAt = Number.parseInt(timestamp, 36);
  const age = now - issuedAt;
  if (!Number.isSafeInteger(issuedAt) || age < 0 || age > FORM_TOKEN_MAX_AGE_MS) return "invalid";
  return age < MIN_FORM_COMPLETION_MS ? "too_fast" : "valid";
}
const normalizedString = (value: unknown) => typeof value === "string" ? value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim() : null;
export function parseContactPayload(body: unknown): ContactPayload | null {
  if (!body || typeof body !== "object" || Array.isArray(body)) return null;
  const value = body as Record<string, unknown>;
  const fields = { title: normalizedString(value.title), email: normalizedString(value.email), subject: normalizedString(value.subject), message: normalizedString(value.message), website: normalizedString(value.website), formToken: normalizedString(value.formToken) };
  return Object.values(fields).some((field) => field === null) ? null : fields as ContactPayload;
}
export const isHoneypotTriggered = (payload: Pick<ContactPayload, "website">) => payload.website.length > 0;
const inRange = (value: string, field: keyof typeof CONTACT_LIMITS) => value.length >= CONTACT_LIMITS[field].min && value.length <= CONTACT_LIMITS[field].max;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export function validateContactFields(payload: ContactPayload): string[] {
  const invalid: string[] = [];
  if (!inRange(payload.title, "title")) invalid.push("title");
  if (!inRange(payload.email, "email") || !EMAIL_PATTERN.test(payload.email)) invalid.push("email");
  if (!inRange(payload.subject, "subject")) invalid.push("subject");
  if (!inRange(payload.message, "message")) invalid.push("message");
  return invalid;
}
export function looksLikeAutomatedGarbage(message: string): boolean {
  const compact = message.replace(/\s/g, "");
  if (compact.length < 12) return false;
  if (/(.)\1{9,}/i.test(compact)) return true;
  const counts = new Map<string, number>();
  for (const char of compact.toLowerCase()) counts.set(char, (counts.get(char) ?? 0) + 1);
  if (Math.max(...Array.from(counts.values())) / compact.length > 0.7) return true;
  const tokens = message.split(/\s+/).filter(Boolean);
  const suspiciousLength = tokens.reduce((total, token) => { const plain = token.replace(/[^a-z0-9]/gi, ""); return total + (/^(?=.*[a-z])(?=.*\d)[a-z\d]{20,}$/i.test(plain) ? token.length : 0); }, 0);
  return message.length >= 20 && suspiciousLength / message.length >= 0.65;
}
export function getClientIp(request: Request): string {
  const raw = request.headers.get("x-vercel-forwarded-for") || request.headers.get("x-forwarded-for") || "unknown";
  return raw.split(",")[0].trim().slice(0, 64) || "unknown";
}
export function hashIp(ip: string): string { return createHmac("sha256", secret() || "contact-form-unconfigured").update(ip).digest("hex").slice(0, 16); }
export type ThrottleResult = { allowed: true } | { allowed: false; retryAfter: number };
export function checkInMemoryThrottle(ipHash: string, now = Date.now()): ThrottleResult {
  let entry = throttleEntries.get(ipHash);
  if (!entry || entry.expiresAt <= now) {
    if (throttleEntries.size >= THROTTLE_MAX_ENTRIES) {
      for (const [key, value] of Array.from(throttleEntries.entries())) {
        if (value.expiresAt <= now) throttleEntries.delete(key);
      }
      if (throttleEntries.size >= THROTTLE_MAX_ENTRIES) {
        const oldestKey = throttleEntries.keys().next().value;
        if (oldestKey) throttleEntries.delete(oldestKey);
      }
    }
    entry = { count: 0, expiresAt: now + THROTTLE_WINDOW_MS };
    throttleEntries.set(ipHash, entry);
  }
  entry.count += 1;
  if (entry.count <= THROTTLE_MAX) return { allowed: true };
  return { allowed: false, retryAfter: Math.max(1, Math.ceil((entry.expiresAt - now) / 1000)) };
}
export function logContactRejection(reason: RejectionReason, ipHash: string, details?: Record<string, unknown>) { console.warn("contact_submission_rejected", { reason, ipHash, ...details }); }
