import Image from "next/image";
import Reveal from "./Reveal";
import BenefitsOrbit from "./BenefitsOrbit";

/**
 * "Why Low Key" — six claims radiating from a central product mark
 * (desktop: BenefitsOrbit) or a vertical spine echoing the same dot/line
 * motif (mobile/tablet, where the radial layout has no room to breathe).
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
    label: "24-hour odour control",
    claim: "On the clock all 24 hours, so you never have to think about it.",
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
];

export default function Benefits() {
  return (
    <section id="why" className="px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-6xl">
            Underarms were just the beginning.
          </h2>
        </Reveal>

        {/* desktop — radial orbit */}
        <Reveal delay={0.1}>
          <div className="mt-16 hidden lg:block">
            <BenefitsOrbit claims={BENEFITS} />
          </div>
        </Reveal>

        {/* mobile/tablet — vertical spine, same dot/line motif */}
        <div className="mt-16 lg:hidden">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-b from-butter to-blush shadow-md">
            <Image
              src="/brand/tilde-device.png"
              alt="Low Key"
              width={64}
              height={64}
              className="h-2/5 w-2/5 object-contain opacity-80"
            />
          </div>

          <div className="relative mx-auto mt-12 max-w-md">
            <span
              aria-hidden
              className="absolute left-[5px] top-3 bottom-3 w-px bg-periwinkle/40"
            />
            <ul className="space-y-8">
              {BENEFITS.map((benefit, i) => (
                <Reveal key={benefit.label} delay={i * 0.06}>
                  <li className="flex gap-4">
                    <span
                      aria-hidden
                      className="relative z-10 mt-1.5 h-2.5 w-2.5 flex-none rounded-full bg-cream ring-2 ring-periwinkle-deep"
                    />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.25em] text-periwinkle-deep">
                        {benefit.label}
                      </p>
                      <p className="mt-2 font-display text-xl leading-snug text-ink sm:text-2xl">
                        {benefit.claim}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
