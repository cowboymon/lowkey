import Image from "next/image";
import Reveal from "./Reveal";

/**
 * "Why Low Key" — restrained, editorial benefit callouts (lihmon-style:
 * short bold claim lines with a sensory close-up image, no badges/icons).
 * PLACEHOLDER imagery: licensed Pexels macros standing in for brand
 * photography — one sensory image per claim, per the shot list.
 */
const BENEFITS = [
  {
    label: "Full-body use",
    claim: "For pits, thighs, under boobs... wherever life gets a little sweaty.",
    image: "/benefits/fullbody.jpg",
    alt: "Bare shoulder and neck in soft natural light",
  },
  {
    label: "pH balanced",
    claim: "Kind to the skin that's anything but ordinary.",
    image: "/benefits/ph.jpg",
    alt: "Soft cream swirl close-up",
  },
  {
    label: "Microbiome supportive",
    claim: "Works with your skin. Not against it.",
    image: "/benefits/microbiome.jpg",
    alt: "Silky white texture close-up",
  },
  {
    label: "Dermatologist tested",
    claim: "Signed off by people in lab coats. Approved by actual skin.",
    image: "/benefits/derm.jpg",
    alt: "Glass pipette on a clean white surface",
  },
  {
    label: "Aluminium free",
    claim: "No aluminium. No parabens. No second-guessing.",
    image: "/benefits/aluminium.jpg",
    alt: "Clear water splash crown on a light background",
  },
  {
    label: "24-hour odour control",
    claim: "On the clock all 24 hours, so you never have to think about it.",
    image: "/benefits/odour.jpg",
    alt: "Warm sunlight through a sheer curtain",
  },
];

export default function Benefits() {
  return (
    <section id="why" className="px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-periwinkle-deep">
            Why Low Key
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-6xl">
            Underarms were just the beginning.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.label} delay={(i % 3) * 0.08}>
              <div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={benefit.image}
                    alt={benefit.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-6 text-xs font-medium uppercase tracking-[0.25em] text-periwinkle-deep">
                  {benefit.label}
                </p>
                <p className="mt-3 font-display text-xl leading-snug text-ink sm:text-2xl">
                  {benefit.claim}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-xs uppercase tracking-[0.2em] text-stone/60">
            Placeholder imagery — swap for brand photography
          </p>
        </Reveal>
      </div>
    </section>
  );
}
