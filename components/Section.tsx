import { ReactNode } from "react";
import { cn } from "@/components/utils";

type SectionVariant = "default" | "band" | "dark" | "compact" | "editorial";

type SectionProps = {
  id?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  compactTop?: boolean;
  eyebrow?: string;
  actions?: ReactNode;
  variant?: SectionVariant;
  titleAs?: "h1" | "h2" | "h3";
};

const variants: Record<SectionVariant, string> = {
  default: "bg-transparent py-12 md:py-16",
  band: "border-y border-border-cool bg-surface-50 py-12 md:py-16",
  dark: "bg-forest-900 py-12 text-paper-50 md:py-16",
  compact: "py-8 md:py-10",
  editorial: "py-14 md:py-24"
};

export function Section({
  id,
  title,
  intro,
  children,
  className,
  compactTop = false,
  eyebrow,
  actions,
  variant = "default",
  titleAs = "h2"
}: SectionProps) {
  const Heading = titleAs;
  const resolvedVariant = compactTop ? "compact" : variant;
  const isDark = resolvedVariant === "dark";

  return (
    <section
      className={cn(variants[resolvedVariant], className)}
      id={id}
    >
      <div className="mx-auto max-w-6xl px-5">
        {(eyebrow || title || intro || actions) && (
          <div className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              {eyebrow ? (
                <p className={cn("mb-2 text-xs font-semibold uppercase tracking-wider", isDark ? "text-paper-50/70" : "text-copper-600")}>
                  {eyebrow}
                </p>
              ) : null}
              {title ? (
                <Heading
                  className={cn(
                    "text-balance font-sans text-3xl font-bold tracking-tight md:text-4xl",
                    isDark ? "text-paper-50" : "text-forest-900"
                  )}
                >
                  {title}
                </Heading>
              ) : null}
              {intro ? (
                <p className={cn("mt-3 text-base leading-relaxed", isDark ? "text-paper-50/80" : "text-neutral-700")}>
                  {intro}
                </p>
              ) : null}
            </div>
            {actions ? <div className="flex flex-wrap gap-3 md:justify-end">{actions}</div> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
