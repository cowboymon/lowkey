"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "Is it only for vulvas?",
    a: "Nope — it's for bodies, all of them. Low Key is formulated to be gentle enough for intimate skin, which is exactly why it's safe everywhere else too: pits, thighs, chest, feet, wherever. If skin sweats, it's covered.",
  },
  {
    q: "Is it an antiperspirant?",
    a: "No, and that's on purpose. Antiperspirants use aluminium salts to block sweat glands. Low Key is a deodorant: it lets your body do its thing while neutralising odour for 24 hours. Sweat happens. Smell doesn't have to.",
  },
  {
    q: "Is it safe for sensitive skin?",
    a: "Yes — that was the starting point, not an afterthought. Low Key is pH balanced, aluminium free, dermatologist tested, and designed for intimate areas first. If it's gentle enough there, it's gentle enough anywhere.",
  },
  {
    q: "What makes it microbiome supportive?",
    a: "Your skin is home to a community of good bacteria that keeps it healthy and balanced. Harsh formulas wipe that out indiscriminately. Low Key targets odour-causing bacteria while supporting the rest, so your skin's natural ecosystem stays intact.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-periwinkle-deep">
            FAQ
          </p>
          <h2 className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-6xl">
            Asking <em className="font-normal">for a friend.</em>
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-espresso/10 border-y border-espresso/10">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-xl text-espresso sm:text-2xl">
                    {faq.q}
                  </span>
                  <span
                    aria-hidden
                    className={`shrink-0 font-display text-2xl font-light text-periwinkle-deep transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 leading-relaxed text-cocoa">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
