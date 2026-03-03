export function WhoItsFor() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
        <h3 className="font-sans text-xl font-bold text-forest-900">Who this is for</h3>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          <li>eCommerce brands doing roughly $250k-$10M annually.</li>
          <li>Teams that need a senior dev who owns storefront + data + growth execution.</li>
          <li>Local or regional brands moving into serious eCommerce operations.</li>
        </ul>
      </article>
      <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
        <h3 className="font-sans text-xl font-bold text-forest-900">Who this is not for</h3>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          <li>Teams looking only for cheapest hourly implementation.</li>
          <li>Brands unwilling to prioritize measurement and clean tracking.</li>
          <li>Projects needing large creative agency services across dozens of disciplines.</li>
        </ul>
      </article>
    </div>
  );
}
