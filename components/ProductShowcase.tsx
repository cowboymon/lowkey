import Reveal from "./Reveal";
import ImageFrame from "./ImageFrame";
import { getProducts } from "@/lib/products";

export default function ProductShowcase() {
  const products = getProducts();

  return (
    <section id="product" className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-36">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-milk-soft to-cream" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cocoa">
            The Product
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-6xl">
            We made deodorant for <em className="font-normal">the rest of you.</em>
          </h2>
          <p className="mt-5 max-w-xl text-lg text-cocoa">
            One stick, two moods. Coming soon&nbsp;— founding members get to it
            first.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-14 sm:grid-cols-2 sm:gap-10">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.1}>
              <article className="text-center">
                <ImageFrame className="mx-auto w-full max-w-xs" />
                <h3 className="mt-7 font-display text-3xl text-espresso">
                  {product.variant}
                </h3>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.25em] text-cocoa/80">
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
    </section>
  );
}
