import { packages } from "@/data/home";
import { cn } from "@/components/utils";
import { Button } from "@/components/Button";

export function PricingTable() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {packages.map((pkg) => (
        <article
          key={pkg.name}
          className={cn(
            "rounded-lg border bg-white p-6 shadow-sm",
            pkg.featured ? "border-copper-500 shadow-md" : "border-border"
          )}
        >
          <h3 className="font-sans text-xl font-bold text-forest-900">{pkg.name}</h3>
          <p className="mt-2 text-sm text-slate-700">{pkg.summary}</p>
          <p className="mt-4 text-3xl font-extrabold text-charcoal-900">{pkg.startingAt}</p>
          <p className="text-xs uppercase tracking-wider text-slate-700">Starting at</p>
          <ul className="mt-5 space-y-2 text-sm text-charcoal-900">
            {pkg.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <Button href="/contact" className="mt-6 w-full" variant={pkg.featured ? "secondary" : "primary"}>
            Get a quote
          </Button>
        </article>
      ))}
    </div>
  );
}
