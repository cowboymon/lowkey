import Reveal from "./Reveal";
import BottleMock from "./BottleMock";
import StudioBackdrop from "./StudioBackdrop";
import { getProducts } from "@/lib/products";

export default function ProductShowcase() {
  const products = getProducts();

  return (
    <section id="product" className="px-3 sm:px-5">
      <div className="relative overflow-hidden rounded-3xl px-5 py-24 sm:px-8 sm:py-32">
        <StudioBackdrop />
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="max-w-2xl font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-6xl">
              We made deodorant for the rest of you.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-cocoa">
              One stick, two moods. Coming soon&nbsp;— the waitlist gets it first.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-10 sm:grid-cols-2">
            {products.map((product, i) => (
              <Reveal key={product.id} delay={i * 0.1}>
                <article className="rounded-3xl bg-cream/70 p-8 text-center backdrop-blur-sm sm:p-10">
                  <BottleMock
                    variant={product.accent === "pink" ? "blush" : "periwinkle"}
                    className="mx-auto w-24 sm:w-28"
                  />
                  <h3 className="mt-8 font-display text-3xl text-ink">
                    {product.variant}
                  </h3>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.25em] text-periwinkle-deep">
                    {product.name} · {product.size}
                  </p>
                  <p className="mx-auto mt-4 max-w-xs text-cocoa">
                    {product.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
