import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 text-center">
      <h1 className="font-sans text-4xl font-bold text-forest-900">Page not found</h1>
      <p className="mt-3 text-slate-700">The page you were looking for does not exist.</p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-md bg-copper-500 px-5 py-3 text-sm font-semibold text-paper-50"
      >
        Back home
      </Link>
    </section>
  );
}
