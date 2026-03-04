import { Button } from "@/components/Button";

export function AuditOffer() {
  return (
    <div className="rounded-lg border border-copper-500/35 bg-paper-100 p-6 shadow-sm">
      <h3 className="font-sans text-2xl font-bold text-forest-900">Need quick direction first?</h3>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-700">
        Request a free 5-minute ecommerce audit and I will send practical next steps.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button href="/#free-audit" variant="secondary">
          Request free audit
        </Button>
        <Button href="/work" variant="ghost">
          See examples
        </Button>
      </div>
    </div>
  );
}
