"use server";

import { getSupabaseServerClient } from "@/lib/supabase-server";
import { isValidEmail, normalizeEmail } from "@/lib/validation";

export type WaitlistState = {
  status: "idle" | "success" | "already" | "error";
  message: string;
};

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  // Honeypot: real users never see or fill this field. Bots do. If it has a
  // value, quietly pretend everything worked.
  const honeypot = formData.get("company");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return {
      status: "success",
      message: "You're in. Underarms had a monopoly — you just helped end it.",
    };
  }

  const rawEmail = formData.get("email");
  const rawName = formData.get("name");
  const rawSource = formData.get("source");

  if (typeof rawEmail !== "string" || !isValidEmail(rawEmail)) {
    return {
      status: "error",
      message: "That email doesn't look quite right — mind double-checking it?",
    };
  }

  const email = normalizeEmail(rawEmail);
  const name =
    typeof rawName === "string" && rawName.trim().length > 0
      ? rawName.trim().slice(0, 120)
      : null;
  const source =
    typeof rawSource === "string" && rawSource.trim().length > 0
      ? rawSource.trim().slice(0, 120)
      : null;

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    console.error("Supabase env vars missing — see .env.example");
    return {
      status: "error",
      message: "Something's not working on our end. Please try again in a bit.",
    };
  }

  const { error } = await supabase
    .from("waitlist")
    .insert({ email, name, source });

  if (error) {
    // 23505 = Postgres unique violation → email already on the list.
    if (error.code === "23505") {
      return {
        status: "already",
        message: "Good news: you're already on the list. We like the enthusiasm.",
      };
    }
    console.error("Waitlist insert failed:", error.code, error.message);
    return {
      status: "error",
      message: "Something's not working on our end. Please try again in a bit.",
    };
  }

  // FUTURE (post-v1): Klaviyo sync plugs in here — either enqueue a webhook
  // call, or (preferred) leave rows with synced_to_crm=false for a scheduled
  // job (Vercel Cron / Supabase Edge Function) that pushes new signups to
  // Klaviyo and flips the flag.

  return {
    status: "success",
    message:
      "You're in. Your whole body just got on the guest list — we'll email you before everyone else. Smell less. Live more.",
  };
}
