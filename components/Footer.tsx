import Image from "next/image";
import WaitlistForm from "./WaitlistForm";

/**
 * Kindred-style footer: full-bleed golden-hour ocean photograph with a
 * frosted panel carrying the link columns and a second waitlist signup.
 * PLACEHOLDER imagery: licensed Pexels stand-in — swap for campaign
 * photography if shot.
 */
export default function Footer({ source }: { source: string | null }) {
  return (
    <footer className="px-3 pb-3 pt-6 sm:px-5">
      <div className="relative overflow-hidden rounded-3xl px-4 py-16 sm:px-10 sm:py-24">
        <Image
          src="/footer-gold.jpg"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />

        <div className="mx-auto max-w-6xl rounded-2xl bg-cream/80 p-7 backdrop-blur-md sm:p-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr_1.6fr] lg:gap-8">
            <div>
              <Image
                src="/brand/logo-periwinkle.png"
                alt="Low Key"
                width={640}
                height={127}
                className="h-7 w-auto"
              />
              <p className="mt-4 text-sm text-stone">Bio-balanced. Body Ready. ~</p>
            </div>

            {/* PLACEHOLDER menu — mock launch-ready items, most link nowhere yet */}
            <nav aria-label="Footer" className="grid grid-cols-2 gap-8 text-sm">
              <div className="space-y-3">
                <p className="font-display text-lg text-ink">Company</p>
                <a href="#product" className="block text-stone transition-colors hover:text-periwinkle-deep">
                  Shop
                </a>
                <a href="#" className="block text-stone transition-colors hover:text-periwinkle-deep">
                  Our Story
                </a>
                <a href="#how" className="block text-stone transition-colors hover:text-periwinkle-deep">
                  Ingredients
                </a>
                <a href="#" className="block text-stone transition-colors hover:text-periwinkle-deep">
                  Journal
                </a>
              </div>
              <div className="space-y-3">
                <p className="font-display text-lg text-ink">Help</p>
                <a href="#" className="block text-stone transition-colors hover:text-periwinkle-deep">
                  Shipping
                </a>
                <a href="#" className="block text-stone transition-colors hover:text-periwinkle-deep">
                  Returns &amp; Refunds
                </a>
                <a href="#faq" className="block text-stone transition-colors hover:text-periwinkle-deep">
                  FAQ
                </a>
                <a href="mailto:hello@lowkey.example.com" className="block text-stone transition-colors hover:text-periwinkle-deep">
                  Contact
                </a>
              </div>
            </nav>

            <div>
              <p className="font-display text-lg text-ink">Low Key Post</p>
              <p className="mt-2 text-sm text-stone">
                Launch news and first-access perks, straight to your inbox.
              </p>
              <div className="mt-6">
                <WaitlistForm source={source} />
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-ink/10 pt-6 text-xs text-stone sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Low Key. All rights reserved.</p>
            <div className="flex gap-6">
              {/* PLACEHOLDER social links — swap for real handles */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-periwinkle-deep">
                Instagram
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-periwinkle-deep">
                TikTok
              </a>
              <a href="#waitlist" className="transition-colors hover:text-periwinkle-deep">
                Join the Waitlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
