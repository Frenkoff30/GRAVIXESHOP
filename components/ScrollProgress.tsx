"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Tenká lišta nahoře ukazující průběh scrollování. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-gradient-to-r from-volt/40 via-volt to-volt/40"
      aria-hidden
    />
  );
}
