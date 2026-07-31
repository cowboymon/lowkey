import Reveal from "./Reveal";
import BottleMock from "./BottleMock";
import StudioBackdrop from "./StudioBackdrop";

/**
 * Hero, reworked to match the approved packaging concept's world: warm
 * neutral studio backdrop, soft single-direction daylight, product shown
 * (not hidden) with colour living on the object. CSS-rendered bottle mocks
 * stand in for the real renders — swap BottleMock for next/image the
 * moment product photography exists.
 */
export default function Hero() {
  return (
    <section id="top" className="relative mx-3 overflow-hidden rounded-3xl sm:mx-5">
      <StudioBackdrop />

      <div className="mx-auto grid w-full max-w-6xl items-end gap-10 px-5 pb-16 pt-32 sm:px-8 sm:pb-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-6">
        <div>
          <Reveal>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-cocoa">
              Bio-balanced. Body Ready.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="max-w-2xl font-display text-5xl font-light leading-[1.02] tracking-tight text-ink sm:text-7xl lg:text-8xl">
              Not everything that sweats <em className="font-normal">wears deodorant.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cocoa sm:text-xl">
              The full-body deodorant made for your most sensitive skin&nbsp;—
              so you know it&rsquo;s safe everywhere else.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9">
              <a
                href="#waitlist"
                className="inline-block rounded-full bg-ink px-9 py-4 text-lg font-semibold tracking-wide text-cream transition-colors hover:bg-periwinkle-deep"
              >
                Join the Waitlist
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mx-auto flex w-full max-w-[14rem] items-end justify-center gap-6 sm:max-w-xs">
          <BottleMock variant="periwinkle" className="w-1/2" />
          <BottleMock variant="blush" className="w-1/2 translate-y-4" />
        </Reveal>
      </div>

      {/* beat two — campaign statement, same studio world continuing */}
      <div className="relative mx-auto max-w-3xl px-5 py-28 text-center sm:px-8 sm:py-40">
        <Reveal>
          <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-ink sm:text-6xl">
            Some places sweat more than others.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-xl font-display text-xl italic leading-relaxed text-cocoa sm:text-2xl">
            Traditional deodorant wasn&rsquo;t made for that.
            <br />
            Low Key was.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
