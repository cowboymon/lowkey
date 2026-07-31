import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-gradient-to-b from-butter via-butter-warm to-cream pt-24"
    >
      {/* PLACEHOLDER hero visual: gradient + product render. Swap for
          full-bleed campaign imagery/video when photography is ready. */}
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <Reveal>
            <p className="mb-5 inline-block rounded-full border border-periwinkle-deep/30 px-4 py-1.5 font-display text-sm font-medium tracking-wide text-periwinkle-deep">
              Bio-balanced. Body Ready. ~ Launching soon
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-7xl lg:text-8xl">
              Not everything that sweats wears deodorant.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70 sm:text-xl">
              Meet the full-body deodorant made for your most sensitive
              skin&nbsp;— so you know it&rsquo;s safe everywhere else.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#waitlist"
                className="rounded-full bg-ink px-8 py-4 font-display text-lg font-semibold text-butter transition-transform hover:scale-[1.03] hover:bg-periwinkle-deep"
              >
                Join the Waitlist
              </a>
              <span className="text-sm text-ink/50">
                Founding members get first everything.
              </span>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.25} className="relative mx-auto w-56 sm:w-64 lg:w-full lg:max-w-xs">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 scale-125 rounded-full bg-periwinkle/40 blur-3xl"
          />
          <Image
            src="/product/deo-vanilla-glaze.png"
            alt="Low Key full-body deodorant stick — placeholder packaging render"
            width={640}
            height={1197}
            priority
            className="drop-shadow-2xl"
            sizes="(min-width: 1024px) 20rem, 16rem"
          />
        </Reveal>
      </div>
    </section>
  );
}
