import { Button } from "@/components/Button";

export function FinalCTA() {
  return (
    <div className="rounded-lg border border-border bg-forest-900 p-8 text-paper-50 shadow-md md:p-10">
      <h2 className="font-sans text-3xl font-bold">Need a digital partner for your next build?</h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-paper-50/90">
        You work directly with us. Small team, clear communication, and practical next steps.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="/#free-audit" variant="accent">
          Request free audit
        </Button>
        <Button href="/work" variant="primary" className="border-paper-50/40 bg-transparent text-paper-50 hover:bg-paper-50/10">
          See work
        </Button>
      </div>
    </div>
  );
}
