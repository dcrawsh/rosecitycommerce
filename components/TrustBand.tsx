import { trustStats } from "@/data/home";

export function TrustBand() {
  return (
    <section className="border-b border-border bg-white py-8" aria-label="Trust signals">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-700">
          Trusted by growing commerce teams
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat) => (
            <div
              key={stat}
              className="rounded-md border border-border bg-paper-50 px-4 py-3 text-sm font-semibold text-charcoal-900"
            >
              {stat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
