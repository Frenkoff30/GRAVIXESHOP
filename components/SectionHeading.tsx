import type { ReactNode } from "react";
import { clsx } from "@/lib/clsx";

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={clsx(
        align === "center" ? "text-center mx-auto max-w-2xl" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            "inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.3em] text-fog",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-6 bg-line-hi" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-chrome sm:text-5xl">
        {title}
      </h2>
      {children && (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-fog">
          {children}
        </p>
      )}
    </div>
  );
}
