import Image from "next/image";
import { clsx } from "@/lib/clsx";

/**
 * Znak GRAVIX vysazený v kartáčované stříbrné minci.
 * Velikost se řídí přes className (h-* w-*).
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full coin-silver ring-1 ring-black/25 shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),inset_0_-2px_5px_rgba(0,0,0,0.28),0_2px_10px_rgba(0,0,0,0.45)]",
        className,
      )}
    >
      <Image
        src="/images/gravix-mark.png"
        alt="GRAVIX"
        width={1513}
        height={1023}
        className="h-auto w-[58%]"
      />
    </span>
  );
}

/**
 * Plné logo GRAVIX (znak + wordmark s červeným X). Pro tmavé pozadí.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/gravix-logo.png"
      alt="GRAVIX"
      width={1523}
      height={1023}
      className={clsx("h-8 w-auto", className)}
    />
  );
}
