"use client";

import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { clsx } from "@/lib/clsx";

/**
 * Lišta „do košíku" přilepená dole — jen na mobilu.
 * Objeví se, jakmile hlavní nákupní blok (#buy) vyscrolluje nad viewport.
 * Klik plynule sjede zpět k nákupnímu bloku (košík je zatím vizuální).
 */
export function StickyBuyBar({
  name,
  price,
  comingSoon = false,
  targetId = "buy",
}: {
  name: string;
  price: string;
  comingSoon?: boolean;
  targetId?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [targetId]);

  const go = () =>
    document
      .getElementById(targetId)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <div
      className={clsx(
        "fixed inset-x-0 bottom-0 z-50 border-t border-line-hi bg-surface/95 px-4 pt-3 backdrop-blur transition-transform duration-300 lg:hidden",
        "pb-[calc(0.75rem+env(safe-area-inset-bottom))]",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="mx-auto flex max-w-md items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-sm font-bold uppercase tracking-wide text-chrome">
            {name}
          </p>
          <p className="text-sm text-fog">{price}</p>
        </div>
        <button
          type="button"
          onClick={go}
          className={clsx(
            "inline-flex h-12 shrink-0 cursor-pointer items-center gap-2 rounded-full px-6 font-display text-sm font-semibold uppercase tracking-[0.14em] transition-colors",
            comingSoon
              ? "border border-line-hi text-fog hover:text-chrome"
              : "bg-volt text-ink hover:bg-volt-bright",
          )}
        >
          {comingSoon ? (
            "Připravujeme"
          ) : (
            <>
              <ShoppingBag className="h-4 w-4" strokeWidth={2} />
              Do košíku
            </>
          )}
        </button>
      </div>
    </div>
  );
}
