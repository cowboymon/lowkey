import Image from "next/image";
import Reveal from "./Reveal";

/**
 * Brand philosophy as a magazine-cover moment (moodboard Vogue reference:
 * white serif on a sun-washed ocean field).
 * PLACEHOLDER imagery: licensed Pexels ocean, graded dusty to sit in the
 * brand blue family — swap for campaign photography if shot.
 */
export default function Philosophy() {
  return (
    <section className="px-3 sm:px-5">
      <div className="relative overflow-hidden rounded-3xl px-5 py-32 sm:px-8 sm:py-48">
        <Image
          src="/ocean.jpg"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-periwinkle-ink/20" />

        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-butter">
              Sun · Skin · Sweat
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="mt-6 font-display text-3xl font-light leading-[1.2] tracking-tight text-white sm:text-5xl">
              &ldquo;No one should have to choose between products that{" "}
              <em>work</em> and products gentle enough for their most sensitive
              skin.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            {/* ribbon device kept small + secondary, per packaging brief */}
            <Image
              src="/brand/tilde-device-white.png"
              alt="Bio-balanced. Body Ready."
              width={900}
              height={348}
              className="mx-auto mt-12 w-32 sm:w-36"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
