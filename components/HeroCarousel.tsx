"use client";

import { Children, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clsx } from "@/lib/clsx";

/**
 * Ruční hero slider — vodorovný scroll-snap.
 * Slide 1 = editorial hero, slide 2 = promo banner.
 * Swipe na mobilu/trackpadu, šipky + tečky na desktopu. Bez auto-rotace.
 */
export function HeroCarousel({ children }: { children: React.ReactNode }) {
  const slides = Children.toArray(children);
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const go = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(slides.length - 1, i));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
    setIndex(clamped);
  };

  // aktivní tečka podle scroll pozice
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setIndex(Math.round(el.scrollLeft / el.clientWidth));
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-full shrink-0 snap-start">
            {slide}
          </div>
        ))}
      </div>

      {/* šipky (desktop) */}
      <button
        type="button"
        onClick={() => go(index - 1)}
        disabled={index === 0}
        aria-label="Předchozí"
        className={clsx(
          "absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink/50 p-3 text-chrome backdrop-blur transition-all duration-200 hover:border-volt hover:text-volt disabled:pointer-events-none disabled:opacity-0 md:grid",
        )}
      >
        <ChevronLeft className="h-5 w-5" strokeWidth={2} />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        disabled={index === slides.length - 1}
        aria-label="Další"
        className={clsx(
          "absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink/50 p-3 text-chrome backdrop-blur transition-all duration-200 hover:border-volt hover:text-volt disabled:pointer-events-none disabled:opacity-0 md:grid",
        )}
      >
        <ChevronRight className="h-5 w-5" strokeWidth={2} />
      </button>

      {/* tečky */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Přejít na slide ${i + 1}`}
            aria-current={i === index}
            className={clsx(
              "h-2 rounded-full transition-all duration-300",
              i === index ? "w-7 bg-volt" : "w-2 bg-white/40 hover:bg-white/70",
            )}
          />
        ))}
      </div>
    </section>
  );
}
