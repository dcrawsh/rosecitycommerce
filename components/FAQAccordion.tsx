import { faqs } from "@/data/faqs";

export function FAQAccordion() {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details key={faq.question} className="rounded-md border border-border bg-white p-4 shadow-sm">
          <summary className="cursor-pointer list-none pr-6 text-base font-semibold text-forest-900">
            {faq.question}
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
