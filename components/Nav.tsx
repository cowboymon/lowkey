import Image from "next/image";

/**
 * Retail-style nav mocked as launch-ready (Rhode reference): announcement
 * bar, then a block bar with menu left, centred logo, account/cart right.
 * Shop / Search / Account / Cart are non-functional placeholders until the
 * Shopify storefront exists.
 */
export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-cream/95 px-3 pb-3 pt-3 backdrop-blur-sm sm:px-5">
      <p className="rounded-2xl bg-butter py-2.5 text-center text-xs font-medium uppercase tracking-[0.2em] text-ink">
        Launching soon — the waitlist gets everything first
      </p>
      <nav
        aria-label="Main"
        className="mt-3 flex items-center justify-between rounded-2xl bg-ink px-5 py-4 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:px-8"
      >
        <div className="hidden items-center gap-5 text-xs font-medium uppercase tracking-[0.15em] text-cream/90 sm:order-1 sm:flex sm:gap-8 sm:text-sm">
          <a href="#product" className="transition-colors hover:text-butter">
            Shop
          </a>
          <a href="#why" className="transition-colors hover:text-butter">
            About
          </a>
          <a href="#waitlist" className="transition-colors hover:text-butter">
            Waitlist
          </a>
        </div>

        <a href="#top" aria-label="Low Key — back to top" className="px-3 sm:order-2">
          <Image
            src="/brand/logo-white.png"
            alt="Low Key"
            width={640}
            height={127}
            className="h-6 w-auto sm:h-7"
            priority
          />
        </a>

        <div className="flex items-center gap-5 text-xs font-medium uppercase tracking-[0.15em] text-cream/90 sm:order-3 sm:justify-end sm:gap-8 sm:text-sm">
          <a href="#product" className="transition-colors hover:text-butter sm:hidden">
            Shop
          </a>
          <a href="#" aria-disabled className="hidden transition-colors hover:text-butter sm:inline">
            Search
          </a>
          <a href="#" aria-disabled className="hidden transition-colors hover:text-butter sm:inline">
            Account
          </a>
          <a href="#" aria-disabled className="whitespace-nowrap transition-colors hover:text-butter">
            Cart (0)
          </a>
        </div>
      </nav>
    </header>
  );
}
