export function CommonWins() {
  const wins = [
    "+12-35% conversion uplift opportunities identified",
    "-20-45% load time improvements on core templates",
    "Cleaner analytics and attribution confidence",
    "Improved crawl/indexing for revenue pages"
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
      <h3 className="font-sans text-xl font-bold text-forest-900">Common wins</h3>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {wins.map((win) => (
          <li key={win} className="rounded-md bg-paper-100 px-4 py-3 text-sm font-medium text-charcoal-900">
            {win}
          </li>
        ))}
      </ul>
    </div>
  );
}
