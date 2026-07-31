import Reveal from "./Reveal";
import ImageFrame from "./ImageFrame";
import { getProducts } from "@/lib/products";

export default function ProductShowcase() {
  const products = getProducts();

  return (
    <section id="product" className="px-3 sm:px-5">
      <div className="rounded-3xl bg-butter-soft px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-periwinkle-deep">
            The Product
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-6xl">
            We made deodorant for <em className="font-normal">the rest of you.</em>
          </h2>
          <p className="mt-5 max-w-xl text-lg text-stone">
            One stick, two moods. Coming soon&nbsp;— founding members get to it
            first.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.1}>
              <article className="rounded-3xl bg-cream p-8 text-center sm:p-10">
                <ImageFrame
                  bg={product.accent === "pink" ? "bg-blush/50" : "bg-milk/50"}
                  className="mx-auto w-full max-w-xs"
                />
                <h3 className="mt-7 font-display text-3xl text-ink">
                  {product.variant}
                </h3>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.25em] text-periwinkle-deep">
                  {product.name} · {product.size}
                </p>
                <p className="mx-auto mt-4 max-w-xs text-stone">
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
