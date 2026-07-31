import Image from "next/image";
import Reveal from "./Reveal";

/**
 * "Why Low Key" — lihmon-style benefit callouts: short, bold, standalone
 * claim lines paired with a close-up visual, scannable in seconds.
 * PLACEHOLDER visuals: packaging render close-ups + brand tilde device.
 * Swap for ingredient/texture photography when available.
 */
const BENEFITS = [
  {
    label: "Full-body use",
    claim: "For pits, thighs, under boobs... wherever life gets a little sweaty.",
  },
  {
    label: "pH balanced",
    claim: "Kind to the skin that's anything but ordinary.",
  },
  {
    label: "Microbiome supportive",
    claim: "Works with your skin. Not against it.",
  },
  {
    label: "Dermatologist tested",
    claim: "Signed off by people in lab coats. Approved by actual skin.",
  },
  {
    label: "Aluminium free",
    claim: "No aluminium. No parabens. No second-guessing.",
  },
  {
    label: "24-hour odour control",
    claim: "On the clock all 24 hours, so you never have to think about it.",
  },
];

export default function Benefits() {
  return (
    <section id="why" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-periwinkle-deep">
            Why Low Key
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            Underarms were just the beginning.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Tile 1 — full-body use, with product close-up */}
          <Reveal className="sm:col-span-2 lg:col-span-2">
            <div className="flex h-full flex-col justify-between gap-6 overflow-hidden rounded-3xl bg-periwinkle p-8 sm:flex-row sm:items-center sm:p-10">
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-periwinkle-ink/60">
                  {BENEFITS[0].label}
                </p>
                <p className="mt-3 max-w-sm font-display text-2xl font-bold leading-snug text-periwinkle-ink sm:text-3xl">
                  {BENEFITS[0].claim}
                </p>
              </div>
              <div className="relative -mb-16 -mr-2 h-48 w-32 shrink-0 self-end sm:-mb-20 sm:h-64 sm:w-40">
                <Image
                  src="/product/deo-unscented.png"
                  alt="Low Key deodorant stick close-up — placeholder render"
                  fill
                  className="object-cover object-top"
                  sizes="10rem"
                />
              </div>
            </div>
          </Reveal>

          {/* Tile 2 — pH balanced */}
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-between gap-8 rounded-3xl bg-butter p-8 sm:p-10">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink/50">
                {BENEFITS[1].label}
              </p>
              <p className="font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
                {BENEFITS[1].claim}
              </p>
            </div>
          </Reveal>

          {/* Tile 3 — microbiome, with tilde device */}
          <Reveal>
            <div className="flex h-full flex-col justify-between gap-8 rounded-3xl bg-ink p-8 sm:p-10">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-butter/60">
                {BENEFITS[2].label}
              </p>
              <div>
                <p className="font-display text-2xl font-bold leading-snug text-cream sm:text-3xl">
                  {BENEFITS[2].claim}
                </p>
                <Image
                  src="/brand/tilde-device.png"
                  alt=""
                  aria-hidden
                  width={900}
                  height={348}
                  className="mt-6 w-28 opacity-80"
                />
              </div>
            </div>
          </Reveal>

          {/* Tile 4 — dermatologist tested */}
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-between gap-8 rounded-3xl border border-ink/10 bg-white p-8 sm:p-10">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-periwinkle-deep/70">
                {BENEFITS[3].label}
              </p>
              <p className="font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
                {BENEFITS[3].claim}
              </p>
            </div>
          </Reveal>

          {/* Tile 5 — aluminium free */}
          <Reveal delay={0.16}>
            <div className="flex h-full flex-col justify-between gap-8 rounded-3xl bg-periwinkle/30 p-8 sm:p-10">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-periwinkle-ink/60">
                {BENEFITS[4].label}
              </p>
              <p className="font-display text-2xl font-bold leading-snug text-periwinkle-ink sm:text-3xl">
                {BENEFITS[4].claim}
              </p>
            </div>
          </Reveal>

          {/* Tile 6 — 24h odour control, with product close-up */}
          <Reveal delay={0.08} className="sm:col-span-2 lg:col-span-2">
            <div className="flex h-full flex-col justify-between gap-6 overflow-hidden rounded-3xl bg-butter-warm p-8 sm:flex-row sm:items-center sm:p-10">
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink/50">
                  {BENEFITS[5].label}
                </p>
                <p className="mt-3 max-w-sm font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
                  {BENEFITS[5].claim}
                </p>
              </div>
              <div className="relative -mb-16 -mr-2 h-48 w-32 shrink-0 self-end sm:-mb-20 sm:h-64 sm:w-40">
                <Image
                  src="/product/deo-vanilla-glaze.png"
                  alt="Low Key deodorant stick close-up — placeholder render"
                  fill
                  className="object-cover object-top"
                  sizes="10rem"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
