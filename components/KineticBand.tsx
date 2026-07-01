import { clsx } from "@/lib/clsx";

/**
 * Obří kinetická typografie jedoucí přes celou šířku.
 * Střídá obrysové a metalické „skeleton" písmo — editorial / streetwear vibe.
 */
export function KineticBand({
  word = "GRAVIX",
  repeat = 8,
}: {
  word?: string;
  repeat?: number;
}) {
  const items = Array.from({ length: repeat });
  return (
    <div
      className="relative flex overflow-hidden border-y border-line bg-ink py-5 select-none sm:py-8"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />

      <div className="flex w-max shrink-0 animate-marquee items-center gap-10 whitespace-nowrap pr-10">
        {[...items, ...items].map((_, i) => (
          <span
            key={i}
            className={clsx(
              "font-display text-6xl font-bold uppercase leading-none tracking-tight sm:text-8xl lg:text-9xl",
              i % 2 === 0 ? "text-outline" : "text-metal",
            )}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
