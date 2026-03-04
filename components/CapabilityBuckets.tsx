import { capabilityBuckets } from "@/data/home";

export function CapabilityBuckets() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {capabilityBuckets.map((bucket) => (
        <article key={bucket.title} className="rounded-lg border border-border bg-white p-6 shadow-sm">
          <h3 className="font-sans text-xl font-bold text-forest-900">{bucket.title}</h3>
          <ul className="mt-4 space-y-2">
            {bucket.items.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
