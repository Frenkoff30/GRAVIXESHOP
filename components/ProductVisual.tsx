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
 * Auto-generated product artwork placeholder.
 * Až budou reálné fotky, nahraď tuhle komponentu <Image />.
 */
export function ProductVisual({
  tone,
  label,
  className,
}: {
  tone: ProductTone;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden bg-grid isolate",
        className,
      )}
      style={{ backgroundImage: tones[tone] }}
      aria-hidden
    >
      {/* soft top sheen */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-radial-glow" />
      {/* ghost mark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <LogoMark className="h-32 w-32 opacity-[0.10] blur-[0.5px] [transform:scale(2.6)]" />
      </div>
      {/* foreground mark + label */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
        <LogoMark className="h-12 w-12 drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)]" />
        <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-fog">
          {label}
        </span>
      </div>
      {/* bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}
