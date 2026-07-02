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
    "radial-gradient(120% 90% at 50% 0%, #44444e 0%, #202027 40%, #0c0c0f 100%)",
  graphite:
    "radial-gradient(120% 90% at 25% 85%, #2e2e36 0%, #161619 55%, #090909 100%)",
};

/**
 * Vizuál produktu. Produktové fotky jsou průhledné rendery (WebP),
 * takže je vždy vykreslíme přes `object-contain` na značkovém pozadí
 * (gradient + jemná mřížka + zelený nádech). `variant="spotlight"`
 * dá produktu víc vzduchu (menší) a výraznější pozadí.
 */
export function ProductVisual({
  tone,
  image,
  variant = "card",
  className,
}: {
  tone: ProductTone;
  label?: string;
  image?: string;
  variant?: "card" | "spotlight";
  className?: string;
}) {
  const spotlight = variant === "spotlight";

  return (
    <div
      className={clsx("relative isolate overflow-hidden bg-card", className)}
      style={{ backgroundImage: tones[tone] }}
      aria-hidden
    >
      {/* jemná mřížka */}
      <div
        className={clsx(
          "absolute inset-0 bg-grid",
          spotlight ? "opacity-[0.12]" : "opacity-[0.08]",
        )}
      />

      {/* zelený spotlight v rohu */}
      <div
        className={clsx(
          "absolute -right-1/4 -top-1/4 rounded-full blur-[80px]",
          spotlight ? "h-3/4 w-3/4 bg-volt/[0.07]" : "h-3/4 w-3/4 bg-volt/[0.04]",
        )}
      />

      {image && (
        <Image
          src={image}
          alt=""
          fill
          sizes={spotlight ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          className={clsx(
            "photo-grade reveal-color object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.55)]",
            spotlight ? "p-10 sm:p-14 lg:p-20" : "p-6",
          )}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />

      <LogoMark className="absolute bottom-3 left-3 h-7 w-7 opacity-80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]" />
    </div>
  );
}
