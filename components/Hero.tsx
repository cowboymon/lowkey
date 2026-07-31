import Image from "next/image";
import Reveal from "./Reveal";

/**
 * Rhode-style full-bleed image hero: campaign photograph filling the
 * viewport, black & white treatment (CSS grayscale — delete the class to
 * run it in colour), text overlaid.
 *
 * PLACEHOLDER imagery: licensed stock stand-in (Pexels, free licence)
 * matching the approved art direction — swap src for the brand's own
 * campaign photograph when the shoot happens.
 */
export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-end overflow-hidden">
      <Image
        src="/hero-skin.jpg"
        alt="Sweat beading on the bare skin of a shoulder and back"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover grayscale"
      />
      {/* legibility scrim */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/60 via-ink/15 to-transparent"
      />

      <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-40 sm:px-8 sm:pb-24">
        <Reveal>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-butter">
            Bio-balanced. Body Ready.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="max-w-3xl font-display text-5xl font-light leading-[1.02] tracking-tight text-cream sm:text-7xl lg:text-8xl">
            Not everything that sweats <em className="font-normal">wears deodorant.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/85 sm:text-xl">
            The full-body deodorant made for your most sensitive skin&nbsp;—
            so you know it&rsquo;s safe everywhere else.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#waitlist"
              className="rounded-full bg-periwinkle px-9 py-4 text-lg font-semibold tracking-wide text-periwinkle-ink transition-colors hover:bg-butter hover:text-ink"
            >
              Join the Waitlist
            </a>
            <span className="text-sm text-cream/70">
              Launching soon · founding members first
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
