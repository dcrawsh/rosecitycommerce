import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MetricComparison } from "@/components/MetricComparison";
import { PortfolioDisclaimer } from "@/components/PortfolioDisclaimer";
import { Section } from "@/components/Section";
import { getCaseStudyBySlug } from "@/data/case-studies";

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: study.title,
    description: study.excerpt
  };
}

export default async function CaseStudyDetail({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <Section compactTop titleAs="h1" title={study.title} intro={study.excerpt}>
      <div className="grid gap-8">
        <Image
          alt={`${study.title} screenshot`}
          className="h-auto w-full rounded-lg border border-border bg-white"
          height={540}
          priority
          src={study.image}
          width={1200}
        />

        {study.disclaimer ? <PortfolioDisclaimer text={study.disclaimer} /> : null}

        {study.impactSummary ? (
          <div className="rounded-lg border border-copper-500/30 bg-paper-100 p-5 text-sm font-medium leading-relaxed text-charcoal-900">
            {study.impactSummary}
          </div>
        ) : null}

        {study.url ? (
          <Link
            className="inline-flex w-fit items-center rounded-md border border-border bg-white px-5 py-3 text-sm font-semibold text-charcoal-900"
            href={study.url}
          >
            Visit project
          </Link>
        ) : null}

        {study.sections ? (
          <div className="grid gap-6">
            {study.sections.map((section) => (
              <article key={section.title} className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <h2 className="font-sans text-2xl font-bold text-forest-900">{section.title}</h2>
                {section.intro ? (
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
                    {(Array.isArray(section.intro) ? section.intro : [section.intro]).map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}
                {section.subsections ? (
                  <div className="mt-5 grid gap-5">
                    {section.subsections.map((subsection) => (
                      <section key={subsection.title}>
                        <h3 className="font-sans text-lg font-bold text-forest-900">{subsection.title}</h3>
                        {subsection.body ? (
                          <div className="mt-2 space-y-3 text-sm leading-relaxed text-slate-700">
                            {subsection.body.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        ) : null}
                        {subsection.bullets ? (
                          <ul className="mt-2 space-y-2 text-sm leading-relaxed text-slate-700">
                            {subsection.bullets.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        ) : null}
                        {subsection.table ? (
                          <div className="mt-3 overflow-x-auto rounded-md border border-border">
                            <table className="min-w-full divide-y divide-border text-left text-sm">
                              <thead className="bg-paper-100 text-xs font-semibold uppercase tracking-wider text-slate-700">
                                <tr>
                                  {subsection.table.headers.map((header) => (
                                    <th key={header} className="px-4 py-3">
                                      {header}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border text-slate-700">
                                {subsection.table.rows.map((row) => (
                                  <tr key={row.join("|")}>
                                    {row.map((cell) => (
                                      <td key={cell} className="px-4 py-3 align-top">
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        ) : null}
                      </section>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <h2 className="font-sans text-xl font-bold text-forest-900">Context</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{study.context}</p>
              </article>
              <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <h2 className="font-sans text-xl font-bold text-forest-900">Problem</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{study.problem}</p>
              </article>
            </div>

            <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
              <h2 className="font-sans text-2xl font-bold text-forest-900">Solution</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {study.solution.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </>
        )}

        {study.metricGroups ? <MetricComparison groups={study.metricGroups} /> : null}

        {!study.sections ? (
          <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
            <h2 className="font-sans text-2xl font-bold text-forest-900">Results</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {study.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </article>
        ) : null}

        {study.sidebarHighlights ? (
          <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
            <h2 className="font-sans text-2xl font-bold text-forest-900">Technical Highlights</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
              {study.sidebarHighlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ) : null}

        <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
          <h2 className="font-sans text-2xl font-bold text-forest-900">Stack</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {study.stack.map((item) => (
              <span key={item} className="rounded-full bg-paper-100 px-3 py-1 text-sm font-semibold text-charcoal-900">
                {item}
              </span>
            ))}
          </div>
        </article>

        <div className="flex flex-wrap gap-3">
          <Link
            className="inline-flex items-center rounded-md bg-copper-500 px-5 py-3 text-sm font-semibold text-paper-50"
            href="/#free-audit"
          >
            Request a free audit
          </Link>
          <Link
            className="inline-flex items-center rounded-md border border-border bg-white px-5 py-3 text-sm font-semibold text-charcoal-900"
            href="/work"
          >
            Back to work
          </Link>
        </div>
      </div>
    </Section>
  );
}
