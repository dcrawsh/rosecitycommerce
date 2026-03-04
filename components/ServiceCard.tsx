import { ServiceItem } from "@/data/services";

export function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
      <h3 className="font-sans text-xl font-bold text-forest-900">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-700">{service.outcome}</p>
      <ul className="mt-4 space-y-2 text-sm text-charcoal-900">
        {service.details.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
