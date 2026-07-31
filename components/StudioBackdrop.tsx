/**
 * One consistent warm-neutral studio backdrop (oat wall, soft daylight from
 * upper-left, faint shadow pooling at the base) — reused behind every
 * product-adjacent section so they read as one object world, not five.
 */
export default function StudioBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 bg-butter-soft">
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_0%,rgba(255,255,255,0.9),transparent_60%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/10 to-transparent" />
    </div>
  );
}
