import Image from "next/image";
import WaitlistForm from "./WaitlistForm";

/**
 * Kindred-style footer: full-bleed golden-hour ocean photograph with a
 * floating frosted card — generous internal spacing, newsletter column
 * widest. PLACEHOLDER imagery + menu links: pre-launch mock; swap image
 * for campaign photography and links for real pages when they exist.
 */
const COLUMNS = [
  {
    header: "Company",
    links: [
      { label: "Our Story", href: "#" },
      { label: "The Science", href: "#how" },
      { label: "Ingredients", href: "#how" },
    ],
  },
  {
    header: "Help",
    links: [
      { label: "Shipping", href: "#" },
      { label: "Returns & Exchanges", href: "#" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "mailto:hello@lowkey.example.com" },
    ],
  },
];

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

        <div className="mx-auto max-w-6xl rounded-2xl bg-cream/85 px-7 py-12 backdrop-blur-md sm:px-12 sm:py-14">
          <div className="grid gap-x-8 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Image
                src="/brand/logo-periwinkle.png"
                alt="Low Key"
                width={640}
                height={127}
                className="h-7 w-auto"
              />
              <p className="mt-4 text-sm leading-7 text-stone">
                Bio-balanced. Body Ready. ~
              </p>
            </div>

            {COLUMNS.map((column) => (
              <nav key={column.header} aria-label={column.header} className="lg:col-span-2">
                <p className="font-display text-xl text-ink">{column.header}</p>
                <ul className="mt-5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="block text-sm leading-8 text-stone transition-colors hover:text-periwinkle-deep"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div className="lg:col-span-5">
              <p className="font-display text-xl text-ink">Low Key Post</p>
              <p className="mt-5 text-sm leading-7 text-stone">
                Launch news and first-access perks, straight to your inbox.
              </p>
              <div className="mt-6">
                <WaitlistForm source={source} />
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-2 border-t border-ink/10 pt-6 text-xs text-stone sm:flex-row sm:items-center sm:justify-between">
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
