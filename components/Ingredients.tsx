import Reveal from "./Reveal";

/**
 * "How it works" — lihmon-style ingredient storytelling: three tall cards,
 * short science copy over a close-up ingredient image.
 *
 * PLACEHOLDER × 2:
 * - Visuals: soft brand-tint panels stand in for macro ingredient
 *   photography (lemon-water/aloe-drip energy).
 * - Copy: plausible hero-ingredient stories mapped to the brand claims —
 *   confirm/replace with the real formula before launch.
 */
const INGREDIENTS = [
  {
    name: "Prebiotic actives",
    copy: "Feeds the good bacteria your skin already has, so the odour-causing kind never gets the upper hand.",
    tint: "bg-butter",
  },
  {
    name: "Soothing botanicals",
    copy: "Calms and conditions skin that moves, rubs and sweats — gentle enough for the most sensitive places.",
    tint: "bg-blush-deep",
  },
  {
    name: "pH-balancing acids",
    copy: "Keeps skin at its happy, slightly-acidic best — where odour struggles and your barrier thrives.",
    tint: "bg-periwinkle",
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
            Science, but make it <em className="font-normal text-periwinkle-deep">gentle.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {INGREDIENTS.map((ingredient, i) => (
            <Reveal key={ingredient.name} delay={i * 0.1}>
              <article
                className={`relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-3xl ${ingredient.tint} p-7 sm:aspect-[2/3] sm:p-8`}
              >
                {/* PLACEHOLDER: macro ingredient photograph goes here
                    (absolute-fill next/image behind the text) */}
                <span className="absolute right-5 top-5 text-[0.6rem] uppercase tracking-[0.2em] text-ink/40">
                  Ingredient imagery coming soon
                </span>
                <h3 className="font-display text-2xl font-light leading-tight text-ink sm:text-3xl">
                  {ingredient.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75 sm:text-base">
                  {ingredient.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-stone/60">
            Placeholder ingredient stories — final formula copy to come
          </p>
        </Reveal>
      </div>
    </section>
  );
}
