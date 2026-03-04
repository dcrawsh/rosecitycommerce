"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/Button";
import { freeAuditCopy } from "@/data/copy/free-audit";

type AuditFormState = {
  name: string;
  email: string;
  website: string;
  businessType: "Home services" | "Pro services" | "Retail & food" | "Other";
  goal: "Leads" | "Ecommerce sales" | "SEO" | "Ads" | "Automations" | "Tracking" | "";
  honeypot: string;
};

const initialState: AuditFormState = {
  name: "",
  email: "",
  website: "",
  businessType: "Home services",
  goal: "",
  honeypot: ""
};

export function FreeAuditSection() {
  const [form, setForm] = useState<AuditFormState>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.website || !form.goal) {
      setError("Please complete all required fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/free-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitted(true);
      setForm(initialState);
    } catch {
      setError("Could not send right now. Please email rosecitycommerce@gmail.com.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="free-audit" className="rounded-lg border border-copper-500/35 bg-paper-100 p-7 shadow-sm md:p-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-copper-600">{freeAuditCopy.eyebrow}</p>
      <h2 className="mt-2 font-sans text-3xl font-bold text-forest-900">{freeAuditCopy.title}</h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700">{freeAuditCopy.description}</p>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-700">What you get</h3>
          <ul className="mt-2 space-y-2 text-sm text-charcoal-900">
            {freeAuditCopy.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-3">
            <Button href="#free-audit" variant="secondary">
              Request free audit
            </Button>
            <Button href="/work" variant="ghost">
              See work
            </Button>
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="rounded-md border border-success/35 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-forest-900">Thanks, your audit request is in.</p>
              <p className="mt-2 text-sm text-slate-700">
                I reply within 2 business days with next steps and whether I am a good fit.
              </p>
            </div>
          ) : (
            <form className="space-y-3 rounded-md border border-border bg-white p-5 shadow-sm" onSubmit={onSubmit}>
              <label className="block text-sm font-semibold text-charcoal-900">
                Name *
                <input
                  className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
                  onChange={(event) => setForm((state) => ({ ...state, name: event.target.value }))}
                  required
                  type="text"
                  value={form.name}
                />
              </label>
              <label className="block text-sm font-semibold text-charcoal-900">
                Email *
                <input
                  className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
                  onChange={(event) => setForm((state) => ({ ...state, email: event.target.value }))}
                  required
                  type="email"
                  value={form.email}
                />
              </label>
              <label className="block text-sm font-semibold text-charcoal-900">
                Website *
                <input
                  className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
                  onChange={(event) => setForm((state) => ({ ...state, website: event.target.value }))}
                  placeholder="https://"
                  required
                  type="url"
                  value={form.website}
                />
              </label>
              <div className="grid gap-3 md:grid-cols-2">
                <label className="block text-sm font-semibold text-charcoal-900">
                  Business type
                  <select
                    className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
                    onChange={(event) =>
                      setForm((state) => ({ ...state, businessType: event.target.value as AuditFormState["businessType"] }))
                    }
                    value={form.businessType}
                  >
                    {freeAuditCopy.businessTypes.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm font-semibold text-charcoal-900">
                  Biggest goal *
                  <select
                    className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
                    onChange={(event) =>
                      setForm((state) => ({ ...state, goal: event.target.value as AuditFormState["goal"] }))
                    }
                    required
                    value={form.goal}
                  >
                    <option value="">Select</option>
                    {freeAuditCopy.goals.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="hidden" aria-hidden="true">
                <label>
                  Leave this blank
                  <input
                    onChange={(event) => setForm((state) => ({ ...state, honeypot: event.target.value }))}
                    tabIndex={-1}
                    type="text"
                    value={form.honeypot}
                  />
                </label>
              </div>

              {error ? <p className="text-sm font-medium text-danger">{error}</p> : null}

              <button
                className="inline-flex items-center justify-center rounded-md bg-copper-500 px-4 py-2 text-sm font-semibold text-paper-50 transition hover:bg-copper-600 disabled:opacity-70"
                disabled={loading}
                type="submit"
              >
                {loading ? "Sending..." : "Request free audit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
