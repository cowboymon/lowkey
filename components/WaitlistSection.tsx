import Reveal from "./Reveal";
import WaitlistForm from "./WaitlistForm";

/**
 * The conversion moment. One job: get noticed and get the email —
 * centred, minimal copy, form front and centre (no perk-list clutter).
 */
export default function WaitlistSection({ source }: { source: string | null }) {
  return (
    <section id="waitlist" className="scroll-mt-32 px-3 sm:px-5">
      <div className="rounded-3xl bg-butter px-5 py-24 text-center sm:px-8 sm:py-36">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-7xl">
            Your whole body deserves better. Get it first.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mx-auto mt-20 max-w-xl text-left sm:mt-24">
            <WaitlistForm source={source} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
