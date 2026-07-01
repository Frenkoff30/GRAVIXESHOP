import Image from "next/image";
import { clsx } from "@/lib/clsx";

/**
 * Samotný znak „G" z loga GRAVIX (kov + zelená).
 * Průhledné pozadí, funguje na světlém i tmavém.
 * Velikost se řídí přes className (h-* w-*).
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/gravix-mark.png"
      alt="GRAVIX"
      width={481}
      height={406}
      className={clsx("h-8 w-auto object-contain", className)}
    />
  );
}

/**
 * Plné logo GRAVIX — znak „G" nahoře, nápis GRAVIX pod ním.
 * Průhledné pozadí, čitelné na bílé liště i na tmavém patičce.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/gravix-logo.png"
      alt="GRAVIX"
      width={664}
      height={572}
      priority
      className={clsx("h-14 w-auto object-contain", className)}
    />
  );
}
