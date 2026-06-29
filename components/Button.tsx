import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { clsx } from "@/lib/clsx";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold uppercase tracking-[0.16em] cursor-pointer transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-chrome focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-chrome text-ink hover:bg-white hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.45)]",
  outline:
    "border border-line-hi text-chrome hover:border-chrome hover:bg-card",
  ghost: "text-fog hover:text-chrome",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<typeof Link>) {
  return (
    <Link
      className={clsx(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </Link>
  );
}
