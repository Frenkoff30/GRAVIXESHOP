"use client";

import { motion, useReducedMotion } from "motion/react";
import { clsx } from "@/lib/clsx";

/** Tenká volt linka, která se při načtení „nakreslí" zleva doprava. */
export function DrawLine({
  className,
  delay = 0.4,
}: {
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      aria-hidden
      className={clsx("block h-px origin-left bg-volt/70", className)}
      initial={reduce ? false : { scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
