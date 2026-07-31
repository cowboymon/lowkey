import Reveal from "./Reveal";
import BottleMock from "./BottleMock";

/**
 * "Why Low Key" — reworked as mini product-card tiles per the packaging
 * concept's "one accent colour per SKU" logic: warm neutral card, one
 * confident brand hue carried by a bottle mock, one short claim line.
 * No stock photography, no icons.
 */
const BENEFITS = [
  {
    label: "Full-body use",
    claim: "For pits, thighs, under boobs... wherever life gets a little sweaty.",
    variant: "periwinkle",
  },
  {
    label: "pH balanced",
    claim: "Kind to the skin that's anything but ordinary.",
    variant: "butter",
  },
  {
    label: "Microbiome supportive",
    claim: "Works with your skin. Not against it.",
    variant: "blush",
  },
  {
    label: "Dermatologist tested",
    claim: "Signed off by people in lab coats. Approved by actual skin.",
    variant: "butter",
  },
  {
    label: "Aluminium free",
    claim: "No aluminium. No parabens. No second-guessing.",
    variant: "periwinkle",
  },
  {
    label: "24-hour odour control",
    claim: "On the clock all 24 hours, so you never have to think about it.",
    variant: "blush",
  },
] as const;

export default function Benefits() {
  return (
    <section id="why" className="px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-6xl">
            Underarms were just the beginning.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.label} delay={(i % 3) * 0.08}>
              <div className="flex h-full items-center gap-5 rounded-2xl bg-butter-soft p-6">
                <BottleMock variant={benefit.variant} className="w-10 shrink-0" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-periwinkle-deep">
                    {benefit.label}
                  </p>
                  <p className="mt-2 font-display text-lg leading-snug text-ink sm:text-xl">
                    {benefit.claim}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
