"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Jemný přechod mezi stránkami. Obsah se při každé navigaci prolne.
 * Animujeme JEN opacity — žádný transform, aby se nerozbil `position: sticky`
 * uvnitř stránek (transform na předkovi vytváří nový containing block).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
