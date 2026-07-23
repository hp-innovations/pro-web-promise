// Single source of truth for the Stripe Payment Link.
// Covers the $499 one-time website build + $39/month care plan in one
// combined Stripe Checkout session. Update this constant in one place
// to change every payment button across the site.
export const STRIPE_CHECKOUT_URL =
  "https://buy.stripe.com/00w28q4Mo9Pr9O4eMr7N600";

export const STRIPE_CTA_LABEL = "Get Started";
export const STRIPE_CTA_SUBLINE = "$499 website build + $39/month care";