import Reveal from "./Reveal";
import WaitlistForm from "./WaitlistForm";

const PERKS = [
  {
    title: "Early access",
    copy: "Shop before the rest of the internet finds out.",
  },
  {
    title: "Exclusive launch pricing",
    copy: "Founding members pay less. That's the whole perk. It's a good one.",
  },
  {
    title: "Founding member updates",
    copy: "The behind-the-scenes stuff — formulas, launch dates, honest chaos.",
  },
  {
    title: "First access to new scents",
    copy: "Vanilla Glaze is just the beginning. You'll smell what's next, first.",
  },
];

export default function WaitlistSection({ source }: { source: string | null }) {
  return (
    <section id="waitlist" className="scroll-mt-16 bg-butter px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-periwinkle-deep">
              Founding Member Waitlist
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
              Your whole body deserves better. Get it first.
            </h2>
          </Reveal>
          <div className="mt-10 space-y-6">
            {PERKS.map((perk, i) => (
              <Reveal key={perk.title} delay={i * 0.08}>
                <div className="flex gap-4">
                  <span className="mt-1 font-display text-xl font-bold text-periwinkle-deep">
                    ~
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{perk.title}</h3>
                    <p className="text-ink/65">{perk.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.15} className="lg:pt-10">
          <div className="rounded-3xl bg-cream p-6 shadow-xl shadow-ink/5 sm:p-10">
            <WaitlistForm source={source} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
