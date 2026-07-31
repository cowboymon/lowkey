# Low Key — Waitlist Site

Single-page waitlist site for the Low Key launch. Next.js (App Router) +
TypeScript + Tailwind CSS, with signups stored in Supabase.

## Setup

### 1. Supabase

1. Create a project at [supabase.com](https://supabase.com).
2. Run the migration in `supabase/migrations/20260731000000_create_waitlist.sql`
   — either paste it into the dashboard's **SQL Editor**, or with the CLI:

   ```bash
   supabase link --project-ref <your-project-ref>
   supabase db push
   ```

   This creates the `waitlist` table (unique email, `source` attribution,
   `synced_to_crm` flag) with RLS that allows the public anon key to
   **insert only** — it can never read the list back.
3. Grab **Project URL** and **anon key** from *Settings → API*.

### 2. Run locally

```bash
cp .env.example .env.local   # fill in the two Supabase values
npm install
npm run dev                  # http://localhost:3000
```

The service role key is intentionally unused — don't add it to the app.

### 3. Deploy to Vercel

1. Push this repo to GitHub and import it in [Vercel](https://vercel.com/new)
   (framework preset: Next.js, no extra config needed).
2. Add the two env vars from `.env.example` under
   *Project → Settings → Environment Variables*.
3. Deploy. Then update `metadataBase` in `app/layout.tsx` to the production
   domain so Open Graph URLs resolve correctly.

## Campaign tracking

Append `?ref=<campaign>` to any link (e.g. `lowkey.com/?ref=ig-bio`) and the
value is stored in the `waitlist.source` column with each signup.

## Placeholders to swap before launch

Everything below is clearly marked with `PLACEHOLDER` comments in the code:

- **Product imagery** — currently cropped packaging renders from the Stage 6
  pack-design PDF (`public/product/`). Swap for real product photography.
- **Hero visual** — gradient + product render; intended for full-bleed
  campaign imagery/video.
- **Benefit tile visuals** — brand tilde device / render close-ups standing
  in for ingredient & texture photography.
- **Social + contact links** in the footer (`components/Footer.tsx`).
- **Production domain** in `app/layout.tsx` (`metadataBase`) and the OG image
  (`public/og-image.jpg`, currently a logo lockup).

## Future integrations (deliberately not built yet)

- **Shopify (Storefront API)** — product data is isolated in
  `lib/products.ts`; swap its static data for a Storefront API query at
  launch. Same shape, no component rewrites. Not migrating to Hydrogen.
- **Klaviyo** — signups land in Supabase with `synced_to_crm = false`. A
  future cron/webhook (see comment in `app/actions.ts`) pushes unsynced rows
  to Klaviyo and flips the flag.
