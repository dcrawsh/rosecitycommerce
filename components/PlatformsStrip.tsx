import { platformBadges } from "@/data/home";

export function PlatformsStrip() {
  return (
    <section aria-label="Popular systems" className="border-b border-border bg-paper-50 py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5">
        <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-slate-700">
          Popular systems I work with
        </span>
        {platformBadges.map((platform) => (
          <span
            key={platform}
            className="rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold text-charcoal-900"
          >
            {platform}
          </span>
        ))}
      </div>
    </section>
  );
}
