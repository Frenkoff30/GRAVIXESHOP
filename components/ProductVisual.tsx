import Image from "next/image";
import { clsx } from "@/lib/clsx";
import type { ProductTone } from "@/lib/products";
import { LogoMark } from "@/components/Logo";

const tones: Record<ProductTone, string> = {
  steel:
    "radial-gradient(120% 90% at 30% 15%, #34343d 0%, #1a1a1f 45%, #0b0b0e 100%)",
  carbon:
    "radial-gradient(120% 90% at 70% 10%, #2c2c34 0%, #15151a 50%, #08080a 100%)",
  chrome:
    "radial-gradient(120% 90% at 50% 0%, #44444e 0%, #20202733 40%, #0c0c0f 100%)",
  graphite:
    "radial-gradient(120% 90% at 25% 85%, #2e2e36 0%, #161619 55%, #090909 100%)",
};

/**
 * Vizuál produktu. Když má produkt fotku (`image`), vykreslí ji
 * rovnou plně barevnou; jinak spadne na značkový gradient.
 * Fotky jsou zatím stock placeholdery — vyměň za reálné produktové.
 */
export function ProductVisual({
  tone,
  image,
  className,
}: {
  tone: ProductTone;
  label?: string;
  image?: string;
  className?: string;
}) {
  return (
    <div
      className={clsx("relative isolate overflow-hidden bg-card", className)}
      aria-hidden
    >
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover photo-grade reveal-color"
        />
      ) : (
        <div
          className="absolute inset-0 bg-grid"
          style={{ backgroundImage: tones[tone] }}
        />
      )}

      {/* jen jemné spodní ztmavení kvůli čitelnosti badge/loga */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />

      {/* jemný brand znak */}
      <LogoMark className="absolute bottom-3 left-3 h-7 w-7 opacity-80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]" />
    </div>
  );
}
