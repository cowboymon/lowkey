import Image from "next/image";
import Reveal from "./Reveal";
import { getProducts } from "@/lib/products";

export default function ProductShowcase() {
  const products = getProducts();

  return (
    <section id="product" className="bg-white px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-periwinkle-deep">
            The Product
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            We made deodorant for the rest of you.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-ink/60">
            One stick, two moods. Coming soon&nbsp;— founding members get to it
            first.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.1}>
              <article
                className={`group relative overflow-hidden rounded-3xl p-8 sm:p-12 ${
                  product.accent === "pink" ? "bg-butter-warm" : "bg-periwinkle/25"
                }`}
              >
                <span className="absolute right-6 top-6 rounded-full bg-ink px-3.5 py-1.5 font-display text-xs font-semibold uppercase tracking-wider text-butter">
                  Coming soon
                </span>
                {/* PLACEHOLDER: packaging render, not final photography */}
                <div className="mx-auto w-44 pt-6 transition-transform duration-500 group-hover:scale-[1.04] sm:w-52">
                  <Image
                    src={product.image}
                    alt={`${product.imageAlt} (placeholder render)`}
                    width={640}
                    height={1197}
                    className="drop-shadow-xl"
                    sizes="13rem"
                  />
                </div>
                <div className="mt-8">
                  <h3 className="font-display text-2xl font-bold text-ink">
                    {product.variant}
                  </h3>
                  <p className="mt-1 font-display text-sm font-medium uppercase tracking-[0.15em] text-ink/50">
                    {product.name} · {product.size}
                  </p>
                  <p className="mt-3 text-ink/70">{product.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
