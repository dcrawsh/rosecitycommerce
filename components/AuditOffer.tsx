import { Button } from "@/components/Button";

export function AuditOffer() {
  return (
    <div className="rounded-lg border border-copper-500/40 bg-paper-100 p-7 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-copper-600">Limited availability</p>
      <h3 className="mt-2 font-sans text-2xl font-bold text-forest-900">Free 20-min audit</h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-700">
        Bring one problem: slow store, tracking issues, low conversion, or paid inefficiency. You
        will leave with clear next actions.
      </p>
      <div className="mt-5">
        <Button href="/contact" variant="secondary">
          Claim your audit spot
        </Button>
      </div>
    </div>
  );
}
