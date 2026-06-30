import type { ReactNode } from "react";
import { clsx } from "@/lib/clsx";

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  light = false,
  className,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  align?: "left" | "center";
  light?: boolean;
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
            "inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.3em]",
            light ? "text-zinc-500" : "text-fog",
            align === "center" && "justify-center",
          )}
        >
          <span
            className={clsx("h-px w-6", light ? "bg-zinc-300" : "bg-line-hi")}
          />
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "mt-4 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl",
          light ? "text-zinc-950" : "text-chrome",
        )}
      >
        {title}
      </h2>
      {children && (
        <p
          className={clsx(
            "mt-4 max-w-xl text-base leading-relaxed",
            light ? "text-zinc-600" : "text-fog",
          )}
        >
          {children}
        </p>
      )}
    </div>
  );
}
