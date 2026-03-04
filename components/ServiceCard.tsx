import { ServicePackage } from "@/data/services";

export function ServiceCard({ service }: { service: ServicePackage }) {
  return (
    <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-sans text-2xl font-bold text-forest-900">{service.title}</h3>
        <p className="text-sm font-semibold text-copper-600">Starting at {service.startingAt}</p>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-700">{service.summary}</p>

      <div className="mt-4 space-y-2 text-sm text-charcoal-900">
        <p>
          <span className="font-semibold text-forest-900">Ideal for:</span> {service.idealFor}
        </p>
        <p>
          <span className="font-semibold text-forest-900">Timeline:</span> {service.timeline}
        </p>
      </div>

      <div className="mt-4">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700">Deliverables</h4>
        <ul className="mt-2 space-y-2 text-sm text-charcoal-900">
          {service.deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
