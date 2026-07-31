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
    <section
      id="waitlist"
      className="relative scroll-mt-16 overflow-hidden px-5 py-28 sm:px-8 sm:py-36"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-cream to-butter-soft"
      />
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-24">
        <div>
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-periwinkle-deep">
              Founding Member Waitlist
            </p>
            <h2 className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-6xl">
              Your whole body deserves better.{" "}
              <em className="font-normal text-periwinkle-deep">Get it first.</em>
            </h2>
          </Reveal>
          <div className="mt-12 space-y-8">
            {PERKS.map((perk, i) => (
              <Reveal key={perk.title} delay={i * 0.08}>
                <div className="border-l-2 border-periwinkle pl-6">
                  <h3 className="font-display text-xl text-ink">{perk.title}</h3>
                  <p className="mt-1 text-stone">{perk.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.15} className="lg:pt-12">
          {/* the form card is a deliberate saturated moment */}
          <div className="rounded-3xl bg-butter-deep p-6 shadow-[0_40px_80px_-40px_rgba(44,40,36,0.35)] sm:p-10">
            <WaitlistForm source={source} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
