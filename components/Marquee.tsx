import { clsx } from "@/lib/clsx";

/**
 * Nekonečně rolující pás textu. Položky se duplikují kvůli plynulé smyčce.
 */
export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const loop = [...items, ...items];
  return (
    <div
      className={clsx(
        "group relative flex overflow-hidden border-y border-line bg-surface py-4 select-none",
        className,
      )}
    >
      {/* okrajové fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />

      <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10 group-hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-lg font-semibold uppercase tracking-[0.28em] text-fog whitespace-nowrap">
              {item}
            </span>
            <svg
              viewBox="0 0 10 10"
              className="h-2.5 w-2.5 shrink-0 text-line-hi"
              aria-hidden
            >
              <path d="M5 0 6.2 3.8 10 5 6.2 6.2 5 10 3.8 6.2 0 5 3.8 3.8Z" fill="currentColor" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
