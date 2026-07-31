import Reveal from "./Reveal";

/**
 * Campaign statement beat. PLACEHOLDER: intended as a second full-bleed
 * editorial photograph (warm skin close-up) with serif overlay, per the
 * packaging brief campaign mocks — a light peach wash stands in until
 * photography is ready.
 */
export default function Problem() {
  return (
    <section className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-40">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-blush to-blush-deep/70"
      />
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-ink sm:text-6xl">
            Some places sweat more than others.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-xl font-display text-xl italic leading-relaxed text-ink/75 sm:text-2xl">
            Traditional deodorant wasn&rsquo;t made for that.
            <br />
            Low Key was.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-10 text-sm uppercase tracking-[0.3em] text-ink/50">
            Not just underarms
          </p>
        </Reveal>
      </div>
    </section>
  );
}
