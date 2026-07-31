import Image from "next/image";
import Reveal from "./Reveal";

export default function Philosophy() {
  return (
    <section className="bg-periwinkle px-5 py-28 sm:px-8 sm:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <Image
            src="/brand/tilde-device-white.png"
            alt="Bio-balanced. Body Ready."
            width={900}
            height={348}
            className="mx-auto mb-10 w-40 sm:w-52"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <blockquote className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-periwinkle-ink sm:text-5xl">
            &ldquo;No one should have to choose between products that work and
            products gentle enough for their most sensitive skin.&rdquo;
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
