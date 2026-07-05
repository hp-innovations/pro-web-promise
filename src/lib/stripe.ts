// Single source of truth for the Stripe Payment Link.
// This link covers both the $499 one-time build and the $39/month care plan
// in one combined checkout. After payment, Stripe redirects back to /thank-you.
export const STRIPE_CHECKOUT_URL =
  "https://buy.stripe.com/00w28q4Mo9Pr9O4eMr7N600";

export const STRIPE_CTA_LABEL = "Get started — $499 + $39/mo";
export const STRIPE_CTA_SUBLINE =
  "One secure checkout. Cancel the care plan anytime.";