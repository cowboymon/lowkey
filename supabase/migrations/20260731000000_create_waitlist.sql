-- Low Key waitlist table + row-level security.
-- Run via `supabase db push`, or paste into the Supabase SQL editor.

create extension if not exists pgcrypto;

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  name text,
  created_at timestamptz not null default now(),
  -- which link/campaign the signup came from (?ref= query param)
  source text,
  -- placeholder for a future Klaviyo/CRM sync job: the job selects rows
  -- where synced_to_crm = false, pushes them, then flips the flag.
  synced_to_crm boolean not null default false
);

-- Uniqueness enforced at the DB level, case-insensitively.
-- (The app also lowercases emails before insert; this index is the backstop.)
create unique index if not exists waitlist_email_unique_idx
  on public.waitlist (lower(email));

alter table public.waitlist enable row level security;

-- Public (anon key) may ONLY insert. No select/update/delete policies exist,
-- so the anon role can never read the list back.
create policy "Public can join the waitlist"
  on public.waitlist
  for insert
  to anon
  with check (true);
