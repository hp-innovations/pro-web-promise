## What changes

Replace the two side-by-side pricing cards ($499 Build + $39/mo Care Plan) with **one combined card** that explains both offers together and has **one single CTA button** going to Stripe. Also drop the word "optional" from the monthly label.

## The new single card

- **Eyebrow:** "Everything included"
- **Title:** "Professional Website + Website Care"
- **Price display:** `$499` *one-time* **+** `$39/mo` *care plan* — shown side by side so both are obvious at a glance
- **Headline:** "Everything you need to launch — and stay online."
- **Body:** Two short paragraphs, one explaining the $499 build (what you get), one explaining the $39/month care (why it matters, cancel anytime).
- **Features list:** Merged into two visually grouped sections inside the same card:
  - *The Build (one-time $499)* — 11 build features
  - *The Care Plan (monthly $39)* — 9 care features
- **Single CTA:** "Get started — $499 + $39/mo" → your Stripe Payment Link
- **Fine print under button:** "One secure checkout. Cancel the care plan anytime."

## Files to change

- `src/routes/index.tsx` — replace the two-card `Pricing()` section with the combined card. Simplify or remove the `PriceCard` component and replace with a purpose-built `CombinedPlanCard` (cleaner than trying to generalize).
- `src/routes/pricing.tsx` — use the same combined card here too, plus keep the FAQ + trust bar. Remove the "MONTHLY · OPTIONAL" eyebrow (which now doesn't exist at all — the whole two-card layout is gone).
- `src/lib/stripe.ts` — no changes needed (already exports the CTA constants).

## Layout note

The combined card will be centered and roughly the width of the current two cards combined so it doesn't look lonely. On mobile it stacks naturally. Keeps the same premium editorial feel — hairlines, gold accents, generous spacing.
