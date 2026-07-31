/**
 * Studio-style bottle mock — CSS-rendered stand-in for the real packaging
 * renders, built to match the approved concept: one confident colour per
 * SKU, vertical debossed "LOW KEY" wordmark, soft cap, warm neutral shadow.
 * Swap for the real product photography as soon as it exists.
 */
const VARIANTS = {
  periwinkle: "from-periwinkle via-milk to-periwinkle",
  butter: "from-butter-deep via-butter to-butter-soft",
  blush: "from-blush-deep via-blush to-butter-soft",
} as const;

export default function BottleMock({
  variant = "periwinkle",
  className = "",
}: {
  variant?: keyof typeof VARIANTS;
  className?: string;
}) {
  return (
    <div className={`relative aspect-[3/7] ${className}`} aria-hidden>
      {/* cap */}
      <div
        className={`absolute inset-x-[16%] top-0 h-[16%] rounded-t-full bg-gradient-to-b ${VARIANTS[variant]} shadow-inner`}
      />
      {/* body */}
      <div
        className={`absolute inset-x-0 top-[13%] bottom-0 overflow-hidden rounded-[22%/10%] bg-gradient-to-b ${VARIANTS[variant]} shadow-[0_18px_34px_-14px_rgba(29,28,26,0.35)]`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-black/10" />
        <span
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-display text-[0.55em] font-medium uppercase tracking-[0.3em] text-white/85 mix-blend-overlay"
          style={{ writingMode: "vertical-rl" }}
        >
          Low Key
        </span>
      </div>
    </div>
  );
}
