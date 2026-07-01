import type { ReactNode } from "react";
import { clsx } from "@/lib/clsx";

export function SectionHeading({
  eyebrow,
  title,
  index,
  align = "left",
  light = false,
  className,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  /** volitelný editorial index vpravo, např. „01 — 04" */
  index?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  const center = align === "center";

  return (
    <div
      className={clsx(
        center ? "mx-auto max-w-3xl text-center" : "text-left",
        className,
      )}
    >
      {/* editorial eyebrow řádek s hairline linkou */}
      {eyebrow && (
        <div
          className={clsx(
            "flex items-center gap-4",
            center && "justify-center",
          )}
        >
          <span
            className={clsx(
              "tech-label whitespace-nowrap",
              light ? "text-zinc-500" : "text-volt",
            )}
          >
            {eyebrow}
          </span>
          {!center && (
            <span
              className={clsx(
                "h-px flex-1",
                light ? "bg-zinc-200" : "bg-line",
              )}
            />
          )}
          {index && !center && (
            <span className="tech-label whitespace-nowrap text-mist">
              {index}
            </span>
          )}
        </div>
      )}

      <h2
        className={clsx(
          "mt-5 font-display font-bold uppercase leading-[0.9] tracking-tight text-[clamp(2.25rem,5vw,4rem)]",
          light ? "text-zinc-950" : "text-chrome",
        )}
      >
        {title}
      </h2>

      {children && (
        <p
          className={clsx(
            "mt-5 max-w-xl text-base leading-relaxed",
            center && "mx-auto",
            light ? "text-zinc-600" : "text-fog",
          )}
        >
          {children}
        </p>
      )}
    </div>
  );
}
