import type { CaseStudy } from "@/data/case-studies/types";

type MetricGroups = NonNullable<CaseStudy["metricGroups"]>;

export function MetricComparison({ groups }: { groups: MetricGroups }) {
  return (
    <article className="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
      <div className="border-b border-border bg-forest-900 px-6 py-5 text-paper-50">
        <p className="text-xs font-semibold uppercase tracking-wider text-paper-50/75">
          Measured performance
        </p>
        <h2 className="mt-1 font-sans text-2xl font-bold">WordPress site vs custom Next.js site</h2>
      </div>

      <div className="grid gap-6 p-5 lg:grid-cols-2">
        {groups.map((group) => (
          <section key={group.title} className="rounded-md border border-border bg-paper-50 p-4">
            <h3 className="font-sans text-xl font-bold text-forest-900">{group.title}</h3>

            <div className="mt-4 overflow-x-auto rounded-md border border-border bg-white">
              <div className="grid min-w-[620px] grid-cols-[1.2fr_0.75fr_0.75fr_1fr] bg-paper-100 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700">
                <span>Metric</span>
                <span>Before</span>
                <span>After</span>
                <span>Change</span>
              </div>

              <div className="min-w-[620px] divide-y divide-border">
                {group.metrics.map((metric) => (
                  <div
                    key={`${group.title}-${metric.label}`}
                    className="grid grid-cols-[1.2fr_0.75fr_0.75fr_1fr] items-center gap-2 px-3 py-3 text-sm"
                  >
                    <span className="font-medium text-charcoal-900">{metric.label}</span>
                    <span className="font-mono text-xs text-slate-700">{metric.before}</span>
                    <span className="font-mono text-xs font-semibold text-forest-900">{metric.after}</span>
                    <span className="rounded-full bg-copper-500/10 px-2 py-1 text-xs font-semibold text-copper-600">
                      {metric.improvement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
