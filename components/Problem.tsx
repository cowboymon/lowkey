import Reveal from "./Reveal";

export default function Problem() {
  return (
    <section className="bg-ink px-5 py-24 text-cream sm:px-8 sm:py-36">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Traditional deodorant had one job.
            <br />
            <span className="text-periwinkle">Bodies had other ideas.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/70 sm:text-xl">
            Some places sweat more than others. Some skin is more sensitive
            than the rest. Traditional deodorant wasn&rsquo;t made for
            that.&nbsp;
            <span className="font-semibold text-butter">Low Key was.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
