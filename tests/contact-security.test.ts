import assert from "node:assert/strict";
import test from "node:test";
import {
  checkInMemoryThrottle,
  createFormToken,
  isHoneypotTriggered,
  looksLikeAutomatedGarbage,
  parseContactPayload,
  validateContactFields,
  validateFormToken,
} from "../app/lib/contact-security.ts";

const validBody = {
  title: "Jane Doe", email: "jane@example.com", subject: "Hello",
  message: "Hi", website: "", formToken: "token",
};

test.beforeEach(() => {
  process.env.CONTACT_FORM_SECRET = "test-secret-with-enough-entropy";
});

test("accepts a legitimate short contact message", () => {
  const parsed = parseContactPayload(validBody);
  assert.ok(parsed);
  assert.deepEqual(validateContactFields(parsed), []);
  assert.equal(looksLikeAutomatedGarbage(parsed.message), false);
});

test("detects the honeypot without inspecting legitimate content", () => {
  assert.equal(isHoneypotTriggered({ website: "https://spam.example" }), true);
  assert.equal(isHoneypotTriggered({ website: "" }), false);
});

test("rejects rapid and forged timing tokens", () => {
  const issuedAt = 1_700_000_000_000;
  const token = createFormToken(issuedAt);
  assert.ok(token);
  assert.equal(validateFormToken(token, issuedAt + 2999), "too_fast");
  assert.equal(validateFormToken(token, issuedAt + 3000), "valid");
  assert.equal(validateFormToken(`${token}x`, issuedAt + 3000), "invalid");
});

test("rejects malformed email and oversized messages", () => {
  const malformed = parseContactPayload({ ...validBody, email: "not-an-email" });
  const oversized = parseContactPayload({ ...validBody, message: "x".repeat(5001) });
  assert.ok(malformed && oversized);
  assert.deepEqual(validateContactFields(malformed), ["email"]);
  assert.deepEqual(validateContactFields(oversized), ["message"]);
});

test("rejects obvious generated garbage while allowing terse human text", () => {
  assert.equal(looksLikeAutomatedGarbage("aaaaaaaaaaaaaaaaaaaa"), true);
  assert.equal(looksLikeAutomatedGarbage("a8F2z90Lm4Qx71Pkd03Ws6"), true);
  assert.equal(looksLikeAutomatedGarbage("Call me?"), false);
});

test("best-effort throttle rejects the fourth in-process submission", () => {
  const key = `throttle-${Date.now()}-${Math.random()}`;
  const now = 1_700_000_000_000;
  assert.deepEqual(checkInMemoryThrottle(key, now), { allowed: true });
  assert.deepEqual(checkInMemoryThrottle(key, now), { allowed: true });
  assert.deepEqual(checkInMemoryThrottle(key, now), { allowed: true });
  assert.deepEqual(checkInMemoryThrottle(key, now), { allowed: false, retryAfter: 900 });
});
