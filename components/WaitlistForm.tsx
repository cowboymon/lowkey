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
      <div role="status" className="text-center">
        <p className="font-display text-3xl text-ink">
          {state.status === "success" ? "Bodies body. Yours is in." : "Already in."}
        </p>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-ink/70">
          {state.message}
        </p>
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
    >
      {/* Campaign source from ?ref= — stored for attribution */}
      <input type="hidden" name="source" value={source ?? ""} />

      {/* Honeypot — hidden from humans, tempting to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company (leave this blank)</label>
        <input id="company" type="text" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {/* single underlined line: input left, submit right */}
      <div className="flex items-center gap-4 border-b border-ink pb-3">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="EMAIL"
          aria-invalid={Boolean(clientError) || state.status === "error"}
          aria-describedby="email-feedback"
          className="w-full flex-1 bg-transparent text-sm uppercase tracking-[0.2em] text-ink outline-none placeholder:text-ink/60"
        />
        <button
          type="submit"
          disabled={pending}
          className="shrink-0 text-sm font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:text-periwinkle-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Adding..." : "Notify me"}
        </button>
      </div>

      <p id="email-feedback" role="alert" className="mt-3 min-h-5 text-sm font-medium text-poppy">
        {clientError ?? (state.status === "error" ? state.message : "")}
      </p>
    </form>
  );
}
