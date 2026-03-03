import { siteConfig } from "@/config/site";

export function MobileBookCall() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
      <a
        className="block rounded-full bg-copper-500 px-5 py-3 text-center text-sm font-bold text-paper-50 shadow-lg transition hover:bg-copper-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
        href={siteConfig.bookingUrl}
      >
        Book a call
      </a>
    </div>
  );
}
