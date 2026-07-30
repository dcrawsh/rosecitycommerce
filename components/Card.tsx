import { ReactNode } from "react";
import { cn } from "@/components/utils";

type CardVariant = "default" | "elevated" | "feature" | "dark" | "metric" | "subtle";

type CardProps = {
  as?: "article" | "div" | "section";
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
};

const variants: Record<CardVariant, string> = {
  default: "rounded-lg border border-border bg-surface-50 p-6 shadow-sm",
  elevated:
    "rounded-lg border border-border bg-surface-50 p-6 shadow-md transition duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-lg",
  feature: "rounded-lg border border-border-cool bg-surface-50 p-7 shadow-md md:p-8",
  dark: "rounded-lg border border-forest-950 bg-forest-900 p-7 text-paper-50 shadow-md md:p-8",
  metric: "rounded-md border border-border-cool bg-mist-100 p-4",
  subtle: "rounded-lg border border-border-cool bg-surface-200 p-6"
};

export function Card({
  as: Component = "article",
  children,
  className,
  variant = "default"
}: CardProps) {
  return <Component className={cn(variants[variant], className)}>{children}</Component>;
}

export const Surface = Card;
