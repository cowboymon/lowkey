"use client";

import { useActionState, useState } from "react";
import { joinWaitlist, type WaitlistState } from "@/app/actions";
import { isValidEmail } from "@/lib/validation";

const initialState: WaitlistState = { status: "idle", message: "" };

export default function WaitlistForm({ source }: { source: string | null }) {
  const [state, formAction, pending] = useActionState(joinWaitlist, initialState);
  const [clientError, setClientError] = useState<string | null>(null);

  if (state.status === "success" || state.status === "already") {
    return (
      <div
        role="status"
        className="rounded-3xl bg-ink p-8 text-center sm:p-10"
      >
        <p className="font-display text-3xl font-bold text-butter">
          {state.status === "success" ? "Bodies body. Yours is in." : "Already in."}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-cream/80">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      onSubmit={(e) => {
        const email = new FormData(e.currentTarget).get("email");
        if (typeof email !== "string" || !isValidEmail(email)) {
          e.preventDefault();
          setClientError("That email doesn't look quite right — mind double-checking it?");
          return;
        }
        setClientError(null);
      }}
      className="space-y-4"
    >
      {/* Campaign source from ?ref= — stored for attribution */}
      <input type="hidden" name="source" value={source ?? ""} />

      {/* Honeypot — hidden from humans, tempting to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company (leave this blank)</label>
        <input id="company" type="text" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block font-display text-sm font-semibold text-ink/70">
          First name <span className="font-normal text-ink/40">(optional)</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          autoComplete="given-name"
          placeholder="Your name"
          className="w-full rounded-2xl border border-ink/15 bg-white px-5 py-4 text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-periwinkle-deep"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block font-display text-sm font-semibold text-ink/70">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={Boolean(clientError) || state.status === "error"}
          aria-describedby="email-feedback"
          className="w-full rounded-2xl border border-ink/15 bg-white px-5 py-4 text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-periwinkle-deep"
        />
      </div>

      <p id="email-feedback" role="alert" className="min-h-5 text-sm font-medium text-red-700/80">
        {clientError ?? (state.status === "error" ? state.message : "")}
      </p>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-ink px-8 py-4 font-display text-lg font-semibold text-butter transition-all hover:bg-periwinkle-deep disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Adding you..." : "Count me in"}
      </button>

      <p className="text-center text-xs text-ink/45">
        No spam, no oversharing. Just launch news and founding-member perks.
      </p>
    </form>
  );
}
