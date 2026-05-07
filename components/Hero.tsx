import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-paper-100 pb-16 pt-10 md:pb-20 md:pt-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(181,106,58,0.16),_transparent_35%),radial-gradient(circle_at_20%_10%,_rgba(22,50,41,0.18),_transparent_30%)]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <h1 className="text-balance font-sans text-4xl font-extrabold tracking-tight text-forest-900 md:text-6xl">
            Shopify, websites, and workflow fixes for small teams.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-700">
            We help Portland-area businesses improve storefronts, rebuild aging sites,
            clean up product data, and connect the tools that keep orders and leads moving.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/#free-audit" variant="secondary">
              Request free audit
            </Button>
            <Button href="/work" variant="ghost">
              See work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
