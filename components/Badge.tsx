import { ReactNode } from "react";
import { cn } from "@/components/utils";

type BadgeVariant = "default" | "accent" | "tech" | "outline";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  variant?: BadgeVariant;
};

const variants: Record<BadgeVariant, string> = {
  default: "bg-surface-200 text-neutral-800",
  accent: "bg-copper-500 text-paper-50 ring-1 ring-copper-600/20",
  tech: "bg-mist-100 text-mist-700 ring-1 ring-mist-300",
  outline: "border border-border bg-surface-50 text-neutral-800"
};

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold leading-none",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
