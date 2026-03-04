import Link from "next/link";
import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-paper-100 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(181,106,58,0.16),_transparent_35%),radial-gradient(circle_at_20%_10%,_rgba(22,50,41,0.18),_transparent_30%)]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700">
            Senior ecommerce engineer helping Portland businesses sell online.
          </p>
          <h1 className="text-balance font-sans text-4xl font-extrabold tracking-tight text-forest-900 md:text-6xl">
            Helping Portland businesses sell online
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-700">
            Shopify development, ecommerce optimization, SEO, and analytics to help local brands
            grow.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" variant="secondary">
              Get a quote
            </Button>
            <Button href="/work" variant="ghost">
              See recent work
            </Button>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
            <Link className="text-copper-600 underline-offset-4 hover:underline" href="/#free-audit">
              Jump to free audit
            </Link>
            <Link className="text-copper-600 underline-offset-4 hover:underline" href="/shopify-developer-portland">
              Shopify developer Portland
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
