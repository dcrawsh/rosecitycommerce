"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  platform: string;
  revenue: string;
  needs: string;
  timeline: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  platform: "Shopify",
  revenue: "",
  needs: "",
  timeline: "",
  website: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.website.trim() !== "") {
      setSubmitted(true);
      return;
    }

    if (!form.name || !form.email || !form.company || !form.revenue || !form.needs || !form.timeline) {
      setError("Please complete all required fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-success/30 bg-white p-6 shadow-sm">
        <h3 className="font-sans text-xl font-bold text-forest-900">Thanks, your request is in.</h3>
        <p className="mt-2 text-sm text-slate-700">
          I will review your details and reply with next steps within one business day.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4 rounded-lg border border-border bg-white p-6 shadow-sm" onSubmit={onSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold text-charcoal-900">
          Name *
          <input
            className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-charcoal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
            onChange={(event) => setForm((state) => ({ ...state, name: event.target.value }))}
            required
            type="text"
            value={form.name}
          />
        </label>
        <label className="text-sm font-semibold text-charcoal-900">
          Email *
          <input
            className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-charcoal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
            onChange={(event) => setForm((state) => ({ ...state, email: event.target.value }))}
            required
            type="email"
            value={form.email}
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold text-charcoal-900">
          Company *
          <input
            className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-charcoal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
            onChange={(event) => setForm((state) => ({ ...state, company: event.target.value }))}
            required
            type="text"
            value={form.company}
          />
        </label>
        <label className="text-sm font-semibold text-charcoal-900">
          Store platform
          <select
            className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-charcoal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
            onChange={(event) => setForm((state) => ({ ...state, platform: event.target.value }))}
            value={form.platform}
          >
            <option>Shopify</option>
            <option>SFCC</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold text-charcoal-900">
          Monthly revenue range *
          <select
            className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-charcoal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
            onChange={(event) => setForm((state) => ({ ...state, revenue: event.target.value }))}
            required
            value={form.revenue}
          >
            <option value="">Select range</option>
            <option>$20k-$50k</option>
            <option>$50k-$100k</option>
            <option>$100k-$250k</option>
            <option>$250k-$1M</option>
            <option>$1M-$10M</option>
          </select>
        </label>
        <label className="text-sm font-semibold text-charcoal-900">
          Timeline *
          <select
            className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-charcoal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
            onChange={(event) => setForm((state) => ({ ...state, timeline: event.target.value }))}
            required
            value={form.timeline}
          >
            <option value="">Select timeline</option>
            <option>ASAP (this month)</option>
            <option>1-2 months</option>
            <option>Quarter planning</option>
          </select>
        </label>
      </div>

      <label className="text-sm font-semibold text-charcoal-900">
        What do you need? *
        <textarea
          className="mt-1 min-h-32 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-charcoal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
          onChange={(event) => setForm((state) => ({ ...state, needs: event.target.value }))}
          required
          value={form.needs}
        />
      </label>

      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input
            onChange={(event) => setForm((state) => ({ ...state, website: event.target.value }))}
            tabIndex={-1}
            type="text"
            value={form.website}
          />
        </label>
      </div>

      {error ? <p className="text-sm font-medium text-danger">{error}</p> : null}

      <button
        className="inline-flex items-center justify-center rounded-md bg-copper-500 px-5 py-3 text-sm font-semibold text-paper-50 transition hover:bg-copper-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
        type="submit"
      >
        Send inquiry
      </button>
      <p className="text-xs text-slate-700">Friendly note: limited project slots each month.</p>
    </form>
  );
}
