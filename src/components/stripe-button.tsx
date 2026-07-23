import { ArrowUpRight } from "lucide-react";
import { STRIPE_CHECKOUT_URL } from "../lib/stripe";

type StripeButtonProps = {
  label?: string;
  className?: string;
  ariaLabel?: string;
  size?: "sm" | "md" | "lg";
};

/**
 * StripeButton
 * Single, accessible payment CTA that opens the combined Stripe Checkout
 * ($499 build + $39/month care) in the same tab. All Stripe buttons on the
 * site route through this component and the STRIPE_CHECKOUT_URL constant.
 */
export function StripeButton({
  label = "Get Started",
  className = "",
  ariaLabel,
  size = "md",
}: StripeButtonProps) {
  const sizeCls =
    size === "sm"
      ? "px-4 py-2.5 text-[13.5px]"
      : size === "lg"
        ? "px-6 py-4 text-base"
        : "px-5 py-3 text-sm";
  return (
    <a
      href={STRIPE_CHECKOUT_URL}
      rel="noopener"
      aria-label={ariaLabel ?? `${label}. Secure checkout. $499 website build plus $39 per month care.`}
      className={[
        "group inline-flex min-h-11 items-center justify-center gap-2 rounded-[3px]",
        "bg-[var(--accent-1)] text-white font-semibold tracking-tight",
        "border border-[var(--accent-1)]",
        "shadow-[0_1px_0_rgba(0,0,0,0.04)]",
        "transition-[background,transform,box-shadow] duration-150 ease-out",
        "hover:bg-[color-mix(in_oklab,var(--accent-1)_85%,black_15%)]",
        "hover:shadow-[0_2px_0_var(--ink)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-1)] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "active:translate-y-[1px] active:shadow-none",
        sizeCls,
        className,
      ].join(" ")}
    >
      <span>{label}</span>
      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
        strokeWidth={2.5}
        aria-hidden="true"
      />
    </a>
  );
}