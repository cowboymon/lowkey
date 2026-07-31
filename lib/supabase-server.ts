import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client.
 *
 * Uses the anon key on purpose: RLS on the `waitlist` table only allows
 * INSERTs (no reads) for the anon role, so even if this key leaked it can't
 * exfiltrate the list. The service role key is never used in this app.
 */
export function getSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return null;
  }

  return createClient(url, anonKey, {
    auth: { persistSession: false },
  });
}
