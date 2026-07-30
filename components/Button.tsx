import Link from "next/link";
import { cn } from "@/components/utils";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "accent" | "secondary" | "ghost" | "tertiary" | "link";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  rightIcon?: ReactNode;
  type?: "button" | "submit";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-100 disabled:pointer-events-none disabled:opacity-70";

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3.5 text-base"
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-forest-900 text-paper-50 shadow-sm hover:bg-forest-950",
  accent: "bg-copper-500 text-paper-50 shadow-sm hover:bg-copper-600",
  secondary: "border border-border-strong bg-surface-50 text-neutral-900 shadow-sm hover:border-forest-900/35 hover:bg-surface-200",
  ghost: "border border-border bg-surface-50 text-neutral-900 hover:border-border-strong hover:bg-surface-200",
  tertiary: "px-0 text-neutral-900 underline-offset-4 hover:text-forest-900 hover:underline",
  link: "px-0 text-copper-600 underline-offset-4 hover:text-copper-500 hover:underline"
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  rightIcon,
  type = "button"
}: ButtonProps) {
  const cls = cn(base, sizes[size], variants[variant], className);
  const content = (
    <>
      <span>{children}</span>
      {rightIcon ? <span aria-hidden="true">{rightIcon}</span> : null}
    </>
  );

  if (href) {
    return (
      <Link className={cls} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cls} type={type}>
      {content}
    </button>
  );
}
