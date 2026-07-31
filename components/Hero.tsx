import Reveal from "./Reveal";
import ImageFrame from "./ImageFrame";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-24"
    >
      {/* PLACEHOLDER hero visual: tone-on-tone ombré wash. Swap for
          full-bleed campaign imagery/video when photography is ready. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-butter via-butter-warm to-blush"
      />
      <div
        aria-hidden
        className="absolute -right-40 top-1/3 -z-10 h-[36rem] w-[36rem] rounded-full bg-milk/60 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <Reveal>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-cocoa">
              Bio-balanced. Body Ready.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl font-light leading-[1.04] tracking-tight text-espresso sm:text-7xl lg:text-[5.5rem]">
              Not everything that sweats
              <br />
              <em className="font-normal">wears deodorant.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-cocoa sm:text-xl">
              Meet the full-body deodorant made for your most sensitive
              skin&nbsp;— so you know it&rsquo;s safe everywhere else.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#waitlist"
                className="rounded-full bg-espresso px-9 py-4 text-lg font-medium tracking-wide text-butter transition-all hover:bg-cocoa"
              >
                Join the Waitlist
              </a>
              <span className="text-sm text-cocoa/80">
                Launching soon · founding members first
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25} className="mx-auto w-56 sm:w-64 lg:w-72">
          <ImageFrame ratio="aspect-[3/4]" label="Hero product imagery coming soon" />
        </Reveal>
      </div>
    </section>
  );
}
