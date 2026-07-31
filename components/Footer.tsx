import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-butter px-5 pb-10 pt-16 text-espresso sm:px-8">
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
            className="rounded-full bg-periwinkle-deep px-6 py-3 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-periwinkle-ink"
          >
            Join the Waitlist
          </a>
        </div>

        <nav className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-cocoa">
          {/* PLACEHOLDER links — swap for real social handles before launch */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-periwinkle-deep">
            Instagram
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-periwinkle-deep">
            TikTok
          </a>
          <a href="mailto:hello@lowkey.example.com" className="transition-colors hover:text-periwinkle-deep">
            hello@lowkey.example.com
          </a>
        </nav>

        <div className="mt-10 flex flex-col gap-2 border-t border-espresso/10 pt-6 text-xs text-cocoa/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Low Key. All rights reserved.</p>
          <p>Bio-balanced. Body Ready. ~</p>
        </div>
      </div>
    </footer>
  );
}
