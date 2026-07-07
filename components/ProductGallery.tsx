"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import type { ProductTone } from "@/lib/products";

const toneGradients: Record<ProductTone, string> = {
  steel: "from-zinc-900 via-zinc-800/60 to-zinc-900",
  carbon: "from-neutral-900 via-neutral-800/50 to-neutral-900",
  chrome: "from-zinc-900 via-slate-800/40 to-zinc-900",
  graphite: "from-stone-900 via-stone-800/50 to-stone-900",
};

export function ProductGallery({
  images,
  label,
  tone,
}: {
  images: string[];
  label: string;
  tone: ProductTone;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {/* hlavní snímek */}
      <div
        className={`relative aspect-square w-full overflow-hidden rounded-3xl border border-line bg-gradient-to-br ${toneGradients[tone]}`}
      >
        <div className="absolute inset-0 bg-[image:repeating-linear-gradient(90deg,rgba(255,255,255,.02)_0_1px,transparent_1px_60px),repeating-linear-gradient(0deg,rgba(255,255,255,.02)_0_1px,transparent_1px_60px)]" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-volt/[0.04] blur-3xl" />

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            <Image
              src={images[active]}
              alt={`${label} — foto ${active + 1}`}
              fill
              className="object-contain p-8 sm:p-12"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={active === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* náhledy */}
      <div className="flex gap-2.5">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Zobrazit foto ${i + 1}`}
            aria-pressed={i === active}
            className={`relative aspect-square w-20 shrink-0 cursor-pointer overflow-hidden rounded-xl border transition-colors sm:w-24 ${
              i === active
                ? "border-volt ring-1 ring-volt/40"
                : "border-line hover:border-fog"
            } bg-gradient-to-br ${toneGradients[tone]}`}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-contain p-2.5"
              sizes="96px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
