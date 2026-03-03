import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-paper-100 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(181,106,58,0.16),_transparent_35%),radial-gradient(circle_at_20%_10%,_rgba(22,50,41,0.18),_transparent_30%)]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700">
            Senior eCommerce engineering + growth
          </p>
          <h1 className="text-balance font-sans text-4xl font-extrabold tracking-tight text-forest-900 md:text-6xl">
            Faster stores. Higher conversion. Clean data.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-700">
            I build and optimize Shopify + SFCC storefronts with CRO, SEO, analytics, and paid
            search support.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" variant="secondary">
              Get a quote
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
