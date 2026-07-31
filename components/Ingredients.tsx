import Image from "next/image";
import Reveal from "./Reveal";

/**
 * "How it works" — lihmon-style ingredient storytelling: three tall
 * photo-filled cards, white serif titles and short science copy overlaid.
 *
 * PLACEHOLDER × 2 (both clearly swappable before launch):
 * - Imagery: licensed Pexels macros standing in for the brand's own
 *   ingredient photography.
 * - Copy: plausible hero-ingredient stories mapped to the brand claims —
 *   confirm/replace with the real formula.
 */
const INGREDIENTS = [
  {
    name: "Prebiotic actives",
    copy: "Feeds the good bacteria your skin already has, so the odour-causing kind never gets the upper hand.",
    image: "/ingredients/prebiotic.jpg",
    alt: "Glassy bubbles suspended in clear liquid",
  },
  {
    name: "Soothing botanicals",
    copy: "Calms and conditions skin that moves, rubs and sweats — gentle enough for the most sensitive places.",
    image: "/ingredients/botanical.jpg",
    alt: "Green leaf with water droplets on a soft background",
  },
  {
    name: "pH-balancing acids",
    copy: "Keeps skin at its happy, slightly-acidic best — where odour struggles and your barrier thrives.",
    image: "/ingredients/ph.jpg",
    alt: "Backlit lemon slice in sparkling water",
  },
];

export default function Ingredients() {
  return (
    <section id="how" className="px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-periwinkle-deep">
            How it works
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-6xl">
            Science, but make it gentle.
          </h2>
        </Reveal>

        {/* three columns at every breakpoint (lihmon reference) — cards go
            tall and narrow on mobile rather than stacking */}
        <div className="mt-12 grid grid-cols-3 gap-2.5 sm:mt-16 sm:gap-6">
          {INGREDIENTS.map((ingredient, i) => (
            <Reveal key={ingredient.name} delay={i * 0.1}>
              <article className="relative flex aspect-[10/29] flex-col justify-end overflow-hidden rounded-2xl p-3 sm:aspect-[2/3] sm:rounded-3xl sm:p-8">
                <Image
                  src={ingredient.image}
                  alt={ingredient.alt}
                  fill
                  sizes="33vw"
                  className="-z-10 object-cover"
                />
                {/* legibility scrim */}
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/60 via-ink/15 to-transparent"
                />
                <h3 className="font-display text-[0.8rem] font-light uppercase leading-[1.25] text-white sm:text-3xl sm:tracking-wide">
                  {ingredient.name}
                </h3>
                <p className="mt-2 text-[0.7rem] leading-snug text-white/90 sm:mt-3 sm:text-base sm:leading-relaxed">
                  {ingredient.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-stone/60">
            Placeholder imagery &amp; ingredient stories — final formula to come
          </p>
        </Reveal>
      </div>
    </section>
  );
}
