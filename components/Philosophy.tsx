import Image from "next/image";
import Reveal from "./Reveal";

export default function Philosophy() {
  return (
    <section className="bg-periwinkle px-5 py-32 sm:px-8 sm:py-44">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <blockquote className="font-display text-3xl font-light leading-[1.25] tracking-tight text-periwinkle-ink sm:text-5xl">
            &ldquo;No one should have to choose between products that{" "}
            <em>work</em> and products gentle enough for their most sensitive
            skin.&rdquo;
          </blockquote>
        </Reveal>
        <Reveal delay={0.15}>
          {/* ribbon device kept small + secondary, per packaging brief */}
          <Image
            src="/brand/tilde-device-white.png"
            alt="Bio-balanced. Body Ready."
            width={900}
            height={348}
            className="mx-auto mt-12 w-32 opacity-90 sm:w-36"
          />
        </Reveal>
      </div>
    </section>
  );
}
