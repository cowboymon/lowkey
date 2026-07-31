"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";

type Claim = { label: string; claim: string };

/**
 * Desktop-only radial layout: 6 claims float around a central product mark,
 * each linked by a line that lights up on hover. Hand-placed (not evenly
 * circular) so label blocks don't collide — ported from the orbit prototype.
 */
const LAYOUT: { dotX: number; dotY: number; style: CSSProperties }[] = [
  { dotX: 160, dotY: 170, style: { top: "9.38%", left: "0%", width: "29.69%", textAlign: "center", transform: "translateX(-4.69%)" } },
  { dotX: 480, dotY: 170, style: { top: "9.38%", right: "0%", width: "29.69%", textAlign: "center", transform: "translateX(4.69%)" } },
  { dotX: 440, dotY: 320, style: { top: "50%", right: "0%", width: "26.56%", textAlign: "right", transform: "translateY(-50%)" } },
  { dotX: 480, dotY: 470, style: { bottom: "4.06%", right: "0%", width: "29.69%", textAlign: "center", transform: "translateX(4.69%)" } },
  { dotX: 160, dotY: 470, style: { bottom: "4.06%", left: "0%", width: "29.69%", textAlign: "center", transform: "translateX(-4.69%)" } },
  { dotX: 200, dotY: 320, style: { top: "50%", left: "0%", width: "26.56%", textAlign: "left", transform: "translateY(-50%)" } },
];

const VIEWBOX = 640;
const CENTER = VIEWBOX / 2;

export default function BenefitsOrbit({ claims }: { claims: Claim[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[640px]">
      <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-periwinkle/40 motion-safe:animate-[spin_40s_linear_infinite]" />
      <div
        className="absolute left-1/2 top-1/2 h-[47%] w-[47%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-periwinkle/40 motion-safe:animate-[spin_28s_linear_infinite]"
        style={{ animationDirection: "reverse" }}
      />

      <svg viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`} className="pointer-events-none absolute inset-0 h-full w-full">
        {LAYOUT.map((l, i) => (
          <line
            key={i}
            x1={CENTER}
            y1={CENTER}
            x2={l.dotX}
            y2={l.dotY}
            stroke={active === i ? "var(--color-periwinkle-deep)" : "#d8cfc0"}
            strokeWidth={active === i ? 2.5 : 1.5}
            className="transition-[stroke,stroke-width] duration-200"
          />
        ))}
      </svg>

      {LAYOUT.map((l, i) => {
        const claim = claims[i];
        if (!claim) return null;
        return (
          <div key={claim.label}>
            <span
              aria-hidden
              className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full motion-safe:animate-pulse"
              style={{
                left: `${(l.dotX / VIEWBOX) * 100}%`,
                top: `${(l.dotY / VIEWBOX) * 100}%`,
                background: active === i ? "var(--color-periwinkle-deep)" : "var(--color-periwinkle)",
                animationDelay: `${i * 0.3}s`,
              }}
            />
            <div
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="absolute cursor-default"
              style={l.style}
            >
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200"
                style={{ color: active === i ? "var(--color-periwinkle-deep)" : "#a89c88" }}
              >
                {claim.label}
              </p>
              <p className="mt-1 text-[13px] leading-snug text-stone">{claim.claim}</p>
            </div>
          </div>
        );
      })}

      {/* PLACEHOLDER centre mark — swap for a real product-bottle shot once
          photography exists */}
      <div className="absolute left-1/2 top-1/2 z-10 flex h-[17%] w-[17%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-b from-butter to-blush shadow-lg">
        <Image
          src="/brand/tilde-device.png"
          alt="Low Key"
          width={64}
          height={64}
          className="h-2/5 w-2/5 object-contain opacity-80"
        />
      </div>
    </div>
  );
}
