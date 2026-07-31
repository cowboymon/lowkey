// Shared email validation — used client-side (form) and server-side (action).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email.trim()) && email.trim().length <= 320;
}

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}
