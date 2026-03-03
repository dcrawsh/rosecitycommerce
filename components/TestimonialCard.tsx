export function TestimonialCard({
  quote,
  name,
  company
}: {
  quote: string;
  name: string;
  company: string;
}) {
  return (
    <figure className="rounded-lg border border-border bg-white p-6 shadow-sm">
      <blockquote className="font-serif text-lg leading-relaxed text-charcoal-900">"{quote}"</blockquote>
      <figcaption className="mt-4 text-sm text-slate-700">
        <span className="font-semibold text-forest-900">{name}</span>, {company}
      </figcaption>
    </figure>
  );
}
