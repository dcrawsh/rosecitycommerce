import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    <Section title={study.title} intro={study.excerpt}>
      <div className="grid gap-8">
        <Image
          alt={`${study.client} storefront screenshot placeholder`}
          className="h-auto w-full rounded-lg border border-border bg-white"
          height={540}
          priority
          src={study.image}
          width={1200}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
            <h2 className="font-sans text-2xl font-bold text-forest-900">Context</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{study.context}</p>
          </article>
          <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
            <h2 className="font-sans text-2xl font-bold text-forest-900">Goals</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {study.goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </article>
        </div>

        <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
          <h2 className="font-sans text-2xl font-bold text-forest-900">What I did</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {study.workDone.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

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

        <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
          <h2 className="font-sans text-2xl font-bold text-forest-900">Before / after metrics</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2 pr-2">Metric</th>
                  <th className="py-2 pr-2">Before</th>
                  <th className="py-2 pr-2">After</th>
                  <th className="py-2">Change</th>
                </tr>
              </thead>
              <tbody>
                {study.metrics.map((metric) => (
                  <tr key={metric.label} className="border-b border-border/70">
                    <td className="py-3 pr-2 font-semibold text-charcoal-900">{metric.label}</td>
                    <td className="py-3 pr-2 text-slate-700">{metric.before}</td>
                    <td className="py-3 pr-2 text-slate-700">{metric.after}</td>
                    <td className="py-3 font-semibold text-success">{metric.delta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
          <h2 className="font-sans text-2xl font-bold text-forest-900">Lessons learned</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {study.lessons.map((lesson) => (
              <li key={lesson}>{lesson}</li>
            ))}
          </ul>
        </article>

        <div className="flex flex-wrap gap-3">
          <Link
            className="inline-flex items-center rounded-md bg-copper-500 px-5 py-3 text-sm font-semibold text-paper-50"
            href="/contact"
          >
            Get a quote
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
