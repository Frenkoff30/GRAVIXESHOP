import { clsx } from "@/lib/clsx";

/** Hodnocení hvězdičkami (0–5) složené z SVG. */
export function Stars({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) {
  return (
    <span
      className={clsx("inline-flex items-center gap-0.5", className)}
      aria-label={`Hodnocení ${rating} z 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i)) * 100;
        return (
          <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5" aria-hidden>
            <defs>
              <linearGradient id={`star-${i}-${fill}`}>
                <stop offset={`${fill}%`} stopColor="#ededf2" />
                <stop offset={`${fill}%`} stopColor="#3a3a45" />
              </linearGradient>
            </defs>
            <path
              d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.6 1-5.8L1.5 7.7l5.9-.9L10 1.5z"
              fill={`url(#star-${i}-${fill})`}
            />
          </svg>
        );
      })}
    </span>
  );
}
