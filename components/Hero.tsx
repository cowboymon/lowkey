import Image from "next/image";
import Reveal from "./Reveal";

/**
 * Opening campaign block — ONE full-bleed photograph (~two viewports tall)
 * carrying both copy beats: the hero headline/CTA in the first viewport and
 * the "Some places sweat more than others." statement in the second.
 * Black & white treatment via CSS grayscale (delete the class for colour).
 *
 * PLACEHOLDER imagery: licensed stock stand-in (Pexels, free licence)
 * matching the approved art direction — swap src for the brand's own
 * campaign photograph when the shoot happens.
 */
export default function Hero() {
  return (
    <section id="top" className="relative mx-3 mt-3 overflow-hidden rounded-3xl sm:mx-5">
      {/* single continuous image behind both copy sections */}
      <Image
        src="/hero-skin.jpg"
        alt="Sweat beading on the bare skin of a shoulder and back"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover grayscale"
      />
      {/* legibility scrims: soft overall veil + heavier feet under the copy */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/25" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/4 -z-10 h-1/4 bg-gradient-to-t from-ink/45 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-ink/40 to-transparent"
      />

      {/* beat one — hero */}
      <div className="flex min-h-[88svh] flex-col justify-end">
        <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
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
                className="rounded-full bg-periwinkle-deep px-7 py-3 text-base font-medium tracking-wide text-cream transition-colors hover:bg-periwinkle-ink"
              >
                Join the Waitlist
              </a>
              <span className="text-sm text-cream/70">
                Launching soon
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* beat two — campaign statement, same photograph continuing */}
      <div className="mx-auto max-w-3xl px-5 py-28 text-center sm:px-8 sm:py-40">
        <Reveal>
          <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-cream sm:text-6xl">
            Some places sweat more than others.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-xl font-display text-xl italic leading-relaxed text-cream/85 sm:text-2xl">
            Traditional deodorant wasn&rsquo;t made for that.
            <br />
            Low Key was.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-10 pb-4 text-sm uppercase tracking-[0.3em] text-butter">
            Not just underarms
          </p>
        </Reveal>
      </div>
    </section>
  );
}
