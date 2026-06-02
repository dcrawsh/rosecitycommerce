export function PortfolioDisclaimer({ text }: { text: string }) {
  return (
    <div className="rounded-md border border-copper-500/30 bg-paper-100 px-4 py-3 text-sm font-medium leading-relaxed text-charcoal-900">
      {text}
    </div>
  );
}
