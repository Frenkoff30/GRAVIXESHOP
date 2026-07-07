"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

/**
 * Logo v heru s jemným parallaxem při scrollu + nájezdem.
 * Parallax (translateY) je na vnějším wrapperu, CSS float animace zůstává
 * na samotném Image — nekolidují, protože jsou na jiných elementech.
 */
export function HeroVisual() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, reduce ? 0 : -70]);

  return (
    <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
      <motion.div
        style={{ y }}
        className="relative w-[62vw] max-w-[260px] sm:max-w-[360px] lg:max-w-[480px]"
      >
        <motion.div
          className="relative"
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* šedivý dým / mlha */}
          <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
            <span className="animate-fog-breathe absolute inset-[8%] rounded-full bg-fog/20 blur-[65px]" />
            <span className="animate-smoke-a absolute inset-x-[26%] inset-y-[18%] rounded-full bg-fog/25 blur-[48px]" />
            <span className="animate-smoke-b absolute inset-x-[34%] inset-y-[22%] rounded-full bg-mist/25 blur-[42px]" />
          </div>
          <Image
            src="/images/gravix-logo2.webp"
            alt="GRAVIX"
            width={679}
            height={581}
            priority
            sizes="(max-width: 1024px) 62vw, 480px"
            className="animate-float-slow relative z-10 w-full object-contain opacity-80 brightness-90 drop-shadow-[0_18px_50px_rgba(0,0,0,0.55)]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
