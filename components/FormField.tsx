import { cn } from "@/components/utils";

export const fieldLabelClass = "block text-sm font-semibold text-neutral-900";

export const fieldControlClass = cn(
  "mt-1 w-full rounded-md border border-border bg-surface-50 px-3 py-2 text-sm text-neutral-900 shadow-sm",
  "transition-colors placeholder:text-neutral-700/60",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-100"
);

export const fieldTextareaClass = cn(fieldControlClass, "min-h-32");

export const fieldHelperClass = "mt-1 text-xs leading-relaxed text-neutral-700";

export const fieldErrorClass = "text-sm font-medium text-danger";
