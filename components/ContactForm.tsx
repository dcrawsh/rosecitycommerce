"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  website: string;
  needs: string;
  honeypot: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  website: "",
  needs: "",
  honeypot: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.honeypot.trim() !== "") {
      setSubmitted(true);
      return;
    }

    if (!form.name || !form.email || !form.website || !form.needs) {
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitted(true);
    } catch {
      setError("Could not send right now. Please email rosecitycommerce@gmail.com.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-success/30 bg-white p-6 shadow-sm">
        <h3 className="font-sans text-xl font-bold text-forest-900">Thanks, your message is in.</h3>
        <p className="mt-2 text-sm text-slate-700">
          I reply within 2 business days. If I am not a fit, I will say so.
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

      <label className="text-sm font-semibold text-charcoal-900">
        Website *
        <input
          className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-charcoal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
          onChange={(event) => setForm((state) => ({ ...state, website: event.target.value }))}
          placeholder="https://"
          required
          type="url"
          value={form.website}
        />
      </label>

      <label className="text-sm font-semibold text-charcoal-900">
        What are you trying to improve? *
        <textarea
          className="mt-1 min-h-32 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-charcoal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
          onChange={(event) => setForm((state) => ({ ...state, needs: event.target.value }))}
          required
          value={form.needs}
        />
      </label>

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
        className="inline-flex items-center justify-center rounded-md bg-copper-500 px-5 py-3 text-sm font-semibold text-paper-50 transition hover:bg-copper-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 disabled:opacity-70"
        disabled={loading}
        type="submit"
      >
        {loading ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
