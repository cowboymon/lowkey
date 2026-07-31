import Image from "next/image";
import Reveal from "./Reveal";

/**
 * Campaign statement beat — continues the hero photograph down the page
 * with a different crop, per the packaging-brief campaign mock pairing
 * this line with skin imagery.
 * PLACEHOLDER imagery: same licensed Pexels stand-in as the hero — swap
 * for the brand's own campaign photograph when the shoot happens.
 */
export default function Problem() {
  return (
    <section className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-40">
      <Image
        src="/hero-skin.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="-z-10 object-cover object-[50%_85%] grayscale"
      />
      {/* legibility scrim */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/45" />

      <div className="mx-auto max-w-3xl text-center">
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
          <p className="mt-10 text-sm uppercase tracking-[0.3em] text-butter">
            Not just underarms
          </p>
        </Reveal>
      </div>
    </section>
  );
}
