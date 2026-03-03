import { ServiceItem } from "@/data/services";

export function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
      <h3 className="font-sans text-2xl font-bold text-forest-900">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-700">{service.problem}</p>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700">Outcomes</h4>
          <ul className="mt-2 space-y-2 text-sm text-charcoal-900">
            {service.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700">
            Deliverables
          </h4>
          <ul className="mt-2 space-y-2 text-sm text-charcoal-900">
            {service.deliverables.map((deliverable) => (
              <li key={deliverable}>{deliverable}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 grid gap-3 rounded-md bg-paper-100 p-4 text-sm md:grid-cols-2">
        <p>
          <span className="font-semibold text-forest-900">Ideal for:</span> {service.idealFor}
        </p>
        <p>
          <span className="font-semibold text-forest-900">Typical timeline:</span> {service.timeline}
        </p>
      </div>
    </article>
  );
}
