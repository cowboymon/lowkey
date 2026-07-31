import Reveal from "./Reveal";

export default function Problem() {
  return (
    <section className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-44">
      {/* PLACEHOLDER: intended as a full-bleed warm skin close-up with serif
          overlay (per packaging brief campaign mock). Warm gourmand gradient
          stands in until photography is ready. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-blush via-blush-deep to-caramel"
      />
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-light leading-[1.12] tracking-tight text-espresso sm:text-6xl">
            Some places sweat more than others.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-xl font-display text-xl italic leading-relaxed text-espresso/80 sm:text-2xl">
            Traditional deodorant wasn&rsquo;t made for that.
            <br />
            Low Key was.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-10 text-sm uppercase tracking-[0.3em] text-espresso/60">
            Not just underarms
          </p>
        </Reveal>
      </div>
    </section>
  );
}
