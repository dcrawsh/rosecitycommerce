import { capabilityBuckets } from "@/data/home";

export function CapabilityBuckets() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {capabilityBuckets.map((bucket) => (
        <article key={bucket.title} className="rounded-lg border border-border bg-white p-6 shadow-sm">
          <h3 className="font-sans text-xl font-bold text-forest-900">{bucket.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">{bucket.outcome}</p>
          <p className="mt-4 rounded-md bg-paper-100 px-3 py-2 text-xs font-semibold text-charcoal-900">
            {bucket.deliverable}
          </p>
        </article>
      ))}
    </div>
  );
}
