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
      src="/images/gravix-mark2.webp"
      alt="GRAVIX"
      width={493}
      height={420}
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
      src="/images/gravix-logo2.webp"
      alt="GRAVIX"
      width={679}
      height={581}
      priority
      className={clsx("h-14 w-auto object-contain", className)}
    />
  );
}
