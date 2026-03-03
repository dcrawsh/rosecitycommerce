import { Button } from "@/components/Button";

export function FinalCTA() {
  return (
    <div className="rounded-lg border border-border bg-forest-900 p-8 text-paper-50 shadow-md md:p-10">
      <h2 className="font-sans text-3xl font-bold">Ready to improve conversion, speed, and tracking?</h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-paper-50/90">
        Bring your current storefront, team, and stack. I will meet you where you are and focus on
        measurable next wins.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="/contact" variant="secondary">
          Get a quote
        </Button>
        <Button href="/work" variant="ghost" className="border-paper-50/40 bg-transparent text-paper-50 hover:bg-paper-50/10">
          See work
        </Button>
      </div>
    </div>
  );
}
