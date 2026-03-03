import { ReactNode } from "react";
import { cn } from "@/components/utils";

type SectionProps = {
  id?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, intro, children, className }: SectionProps) {
  return (
    <section className={cn("py-16 md:py-20", className)} id={id}>
      <div className="mx-auto max-w-6xl px-5">
        {(title || intro) && (
          <div className="mb-8 max-w-3xl md:mb-10">
            {title ? (
              <h2 className="text-balance font-sans text-3xl font-bold tracking-tight text-forest-900 md:text-4xl">
                {title}
              </h2>
            ) : null}
            {intro ? <p className="mt-3 text-base leading-relaxed text-slate-700">{intro}</p> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
