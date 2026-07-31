import Reveal from "./Reveal";

/**
 * Rhode-style full-bleed image hero: one campaign photograph filling the
 * viewport, minimal serif overlay, single CTA.
 * PLACEHOLDER: the soft peach/butter wash below stands in for the real
 * full-bleed campaign photograph/video — swap the div marked below for a
 * next/image with `fill` when photography is ready.
 */
export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-end overflow-hidden">
      {/* PLACEHOLDER full-bleed campaign image */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-butter via-butter-soft to-blush"
      />
      <span className="absolute right-5 top-24 rounded-full bg-cream/70 px-4 py-2 text-[0.65rem] uppercase tracking-[0.25em] text-cocoa backdrop-blur-sm sm:right-8">
        Campaign imagery coming soon
      </span>

      <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-40 sm:px-8 sm:pb-24">
        <Reveal>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-espresso/70">
            Bio-balanced. Body Ready.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="max-w-3xl font-display text-5xl font-light leading-[1.02] tracking-tight text-espresso sm:text-7xl lg:text-8xl">
            Not everything that sweats <em className="font-normal">wears deodorant.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-espresso/75 sm:text-xl">
            The full-body deodorant made for your most sensitive skin&nbsp;—
            so you know it&rsquo;s safe everywhere else.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#waitlist"
              className="rounded-full bg-periwinkle-deep px-9 py-4 text-lg font-medium tracking-wide text-cream transition-colors hover:bg-periwinkle-ink"
            >
              Join the Waitlist
            </a>
            <span className="text-sm text-espresso/60">
              Launching soon · founding members first
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
