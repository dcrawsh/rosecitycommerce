import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-paper-100 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(181,106,58,0.16),_transparent_35%),radial-gradient(circle_at_20%_10%,_rgba(22,50,41,0.18),_transparent_30%)]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <h1 className="text-balance font-sans text-4xl font-extrabold tracking-tight text-forest-900 md:text-6xl">
            Websites and digital tools for Portland businesses.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-700">
            We build fast websites, Shopify stores, and simple automations (Slack/Asana/Mailchimp)
            that help small teams get more leads and run smoother.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/#free-audit" variant="secondary">
              Request free audit
            </Button>
            <Button href="/work" variant="ghost">
              See work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
