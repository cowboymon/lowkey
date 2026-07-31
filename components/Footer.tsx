import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink px-5 pb-10 pt-16 text-cream sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-center">
          <Image
            src="/brand/logo-periwinkle.png"
            alt="Low Key"
            width={640}
            height={133}
            className="h-8 w-auto"
          />
          <a
            href="#waitlist"
            className="rounded-full border border-butter/40 px-6 py-3 font-display text-sm font-semibold text-butter transition-colors hover:bg-butter hover:text-ink"
          >
            Join the Waitlist
          </a>
        </div>

        <nav className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-cream/70">
          {/* PLACEHOLDER links — swap for real social handles before launch */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-butter">
            Instagram
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-butter">
            TikTok
          </a>
          <a href="mailto:hello@lowkey.example.com" className="transition-colors hover:text-butter">
            hello@lowkey.example.com
          </a>
        </nav>

        <div className="mt-10 flex flex-col gap-2 border-t border-cream/15 pt-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Low Key. All rights reserved.</p>
          <p>Bio-balanced. Body Ready. ~</p>
        </div>
      </div>
    </footer>
  );
}
