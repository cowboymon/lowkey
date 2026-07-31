import Reveal from "./Reveal";
import StudioBackdrop from "./StudioBackdrop";

/**
 * Brand philosophy statement — same warm studio world as the hero/product
 * sections instead of a separate ocean image, so the site reads as one
 * consistent object language throughout.
 */
export default function Philosophy() {
  return (
    <section className="px-3 sm:px-5">
      <div className="relative overflow-hidden rounded-3xl px-5 py-32 sm:px-8 sm:py-48">
        <StudioBackdrop />
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <blockquote className="font-display text-3xl font-light leading-[1.25] tracking-tight text-ink sm:text-5xl">
              &ldquo;No one should have to choose between products that{" "}
              <em>work</em> and products gentle enough for their most sensitive
              skin.&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
