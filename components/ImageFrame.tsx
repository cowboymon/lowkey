/**
 * PLACEHOLDER image frame — a neutral, softly-toned empty frame marking
 * where product/campaign photography will go. Deliberately uncommitted:
 * swap for real imagery (e.g. next/image) when photography is ready.
 */
export default function ImageFrame({
  label = "Product imagery coming soon",
  ratio = "aspect-[4/5]",
  bg = "bg-white/40",
  className = "",
}: {
  label?: string;
  ratio?: string;
  bg?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex ${ratio} items-center justify-center rounded-3xl border border-ink/10 ${bg} ${className}`}
    >
      <span className="max-w-[70%] text-center text-xs uppercase tracking-[0.25em] leading-relaxed text-stone/60">
        {label}
      </span>
    </div>
  );
}
