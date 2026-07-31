import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  // PLACEHOLDER: swap for the real production domain before launch
  metadataBase: new URL("https://lowkey.example.com"),
  title: "Low Key — Full-Body Deodorant for Sensitive Skin | Join the Waitlist",
  description:
    "Not everything that sweats wears deodorant. Low Key is the full-body deodorant made for your most sensitive skin — pH balanced, microbiome supportive, aluminium free. Join the waitlist for first access.",
  openGraph: {
    title: "Low Key — Bio-balanced. Body Ready.",
    description:
      "The full-body deodorant made for your most sensitive skin, so you know it's safe everywhere else. Join the waitlist for early access.",
    url: "/",
    siteName: "Low Key",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Low Key — Bio-balanced. Body Ready." }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Low Key — Bio-balanced. Body Ready.",
    description:
      "The full-body deodorant made for your most sensitive skin. Join the waitlist for early access.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
