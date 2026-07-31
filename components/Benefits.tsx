import Reveal from "./Reveal";

/**
 * "Why Low Key" — restrained, editorial benefit callouts (lihmon-style:
 * short bold claim lines, scannable in seconds). Per the packaging brief:
 * sensory over functional, no badges/icons, tone-on-tone only.
 * PLACEHOLDER visuals: soft ombré washes stand in for ingredient/texture
 * photography.
 */
const BENEFITS = [
  {
    label: "Full-body use",
    claim: "For pits, thighs, under boobs... wherever life gets a little sweaty.",
    wash: "from-butter to-butter-warm",
  },
  {
    label: "pH balanced",
    claim: "Kind to the skin that's anything but ordinary.",
    wash: "from-milk-soft to-milk",
  },
  {
    label: "Microbiome supportive",
    claim: "Works with your skin. Not against it.",
    wash: "from-blush to-blush-deep/70",
  },
  {
    label: "Dermatologist tested",
    claim: "Signed off by people in lab coats. Approved by actual skin.",
    wash: "from-milk-soft to-milk",
  },
  {
    label: "Aluminium free",
    claim: "No aluminium. No parabens. No second-guessing.",
    wash: "from-blush to-blush-deep/70",
  },
  {
    label: "24-hour odour control",
    claim: "On the clock all 24 hours, so you never have to think about it.",
    wash: "from-butter to-butter-warm",
  },
];

export default function Benefits() {
  return (
    <section id="why" className="px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cocoa">
            Why Low Key
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-6xl">
            Underarms were just <em className="font-normal">the beginning.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.label} delay={(i % 3) * 0.08}>
              <div>
                {/* PLACEHOLDER: soft tonal wash → swap for close-up
                    ingredient/texture photograph */}
                <div
                  aria-hidden
                  className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${benefit.wash}`}
                />
                <p className="mt-6 text-xs font-medium uppercase tracking-[0.25em] text-cocoa/80">
                  {benefit.label}
                </p>
                <p className="mt-3 font-display text-xl leading-snug text-espresso sm:text-2xl">
                  {benefit.claim}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
