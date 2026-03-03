import Link from "next/link";
import { cn } from "@/components/utils";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

const base =
  "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper-50";

const variants = {
  primary: "bg-forest-900 text-paper-50 hover:bg-forest-950",
  secondary: "bg-copper-500 text-paper-50 hover:bg-copper-600",
  ghost:
    "border border-border bg-white text-charcoal-900 hover:bg-paper-100"
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button"
}: ButtonProps) {
  const cls = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link className={cls} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} type={type}>
      {children}
    </button>
  );
}
