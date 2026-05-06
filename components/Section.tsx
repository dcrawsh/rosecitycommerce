import { ReactNode } from "react";
import { cn } from "@/components/utils";

type SectionProps = {
  id?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  compactTop?: boolean;
  titleAs?: "h1" | "h2" | "h3";
};

export function Section({
  id,
  title,
  intro,
  children,
  className,
  compactTop = false,
  titleAs = "h2"
}: SectionProps) {
  const Heading = titleAs;

  return (
    <section
      className={cn(compactTop ? "pb-16 pt-10 md:pb-20 md:pt-12" : "py-16 md:py-20", className)}
      id={id}
    >
      <div className="mx-auto max-w-6xl px-5">
        {(title || intro) && (
          <div className="mb-8 max-w-3xl md:mb-10">
            {title ? (
              <Heading className="text-balance font-sans text-3xl font-bold tracking-tight text-forest-900 md:text-4xl">
                {title}
              </Heading>
            ) : null}
            {intro ? <p className="mt-3 text-base leading-relaxed text-slate-700">{intro}</p> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
