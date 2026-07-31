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
      <div role="status" className="py-6 text-center">
        <p className="font-display text-3xl text-ink">
          {state.status === "success" ? "Bodies body. Yours is in." : "Already in."}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-stone">{state.message}</p>
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
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink/80">
          First name <span className="font-normal text-stone/60">(optional)</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          autoComplete="given-name"
          placeholder="Your name"
          className="w-full rounded-2xl border border-ink/15 bg-white px-5 py-4 text-ink outline-none transition-colors placeholder:text-stone/40 focus:border-periwinkle-deep"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink/80">
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
          className="w-full rounded-2xl border border-ink/15 bg-white px-5 py-4 text-ink outline-none transition-colors placeholder:text-stone/40 focus:border-periwinkle-deep"
        />
      </div>

      <p id="email-feedback" role="alert" className="min-h-5 text-sm font-medium text-red-800/80">
        {clientError ?? (state.status === "error" ? state.message : "")}
      </p>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-periwinkle-deep px-6 py-3 text-base font-medium tracking-wide text-cream transition-colors hover:bg-periwinkle-ink disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Adding you..." : "Count me in"}
      </button>

      <p className="text-center text-xs text-ink/60">
        No spam, no oversharing. Just launch news and founding-member perks.
      </p>
    </form>
  );
}
