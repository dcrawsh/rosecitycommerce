import { processSteps } from "@/data/home";

export function ProcessSteps() {
  return (
    <ol className="grid gap-4 md:grid-cols-4">
      {processSteps.map((step, index) => (
        <li key={step.title} className="rounded-lg border border-border bg-white p-5 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-wider text-copper-600">
            Step {index + 1}
          </div>
          <h3 className="mt-1 font-sans text-xl font-bold text-forest-900">{step.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
