import Image from "next/image";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-cream/75 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" aria-label="Low Key — back to top">
          <Image
            src="/brand/logo-periwinkle.png"
            alt="Low Key"
            width={640}
            height={133}
            className="h-6 w-auto sm:h-7"
            priority
          />
        </a>
        <a
          href="#waitlist"
          className="rounded-full bg-periwinkle-deep px-4 py-2 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-periwinkle-ink sm:text-base"
        >
          Join the Waitlist
        </a>
      </nav>
    </header>
  );
}
