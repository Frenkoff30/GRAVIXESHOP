import { clsx } from "@/lib/clsx";

/**
 * GRAVIX brand mark.
 * Placeholder geometric interpretation of the logo (dark "coin" + metallic G).
 * Swap the SVG for the official asset when available (drop into /public).
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={clsx("h-9 w-9", className)}
      role="img"
      aria-label="GRAVIX"
    >
      <defs>
        <radialGradient id="gx-coin" cx="50%" cy="32%" r="80%">
          <stop offset="0%" stopColor="#2a2a31" />
          <stop offset="60%" stopColor="#141418" />
          <stop offset="100%" stopColor="#050506" />
        </radialGradient>
        <linearGradient id="gx-rim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6f6f7a" />
          <stop offset="50%" stopColor="#2a2a31" />
          <stop offset="100%" stopColor="#8c8c97" />
        </linearGradient>
        <linearGradient id="gx-letter" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="42%" stopColor="#d4d4dc" />
          <stop offset="60%" stopColor="#86868f" />
          <stop offset="100%" stopColor="#f2f2f6" />
        </linearGradient>
      </defs>

      <circle cx="32" cy="32" r="31" fill="url(#gx-rim)" />
      <circle cx="32" cy="32" r="29" fill="url(#gx-coin)" />

      {/* angular G */}
      <path
        d="M44 23.5C41.8 19.5 37.4 17 32 17c-8.3 0-15 6.7-15 15s6.7 15 15 15c5 0 9.4-2.4 12.1-6.2V31H31v6h7v3.4C36.5 41.6 34.4 42.5 32 42.5c-5.8 0-10.5-4.7-10.5-10.5S26.2 21.5 32 21.5c3.4 0 6.4 1.6 8.3 4.1l3.7-2.1Z"
        fill="url(#gx-letter)"
      />
    </svg>
  );
}

export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={clsx("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      {showWordmark && (
        <span className="font-display text-2xl font-bold tracking-[0.22em] text-metal-soft leading-none pt-0.5">
          GRAVIX
        </span>
      )}
    </span>
  );
}
