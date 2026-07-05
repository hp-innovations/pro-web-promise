## What changes

Stripe will show its own confirmation page and email its own receipt after payment. No redirect back to corelinkdev.com. That means the `/thank-you` page I built is dead code — nothing will ever land there — so I'll remove it to keep the codebase clean.

**Keeping:** the gold "Get started — $499 + $39/mo" button on the header, hero, pricing cards, and final CTA. All still go straight to your Stripe Payment Link.

**Removing:** `src/routes/thank-you.tsx`.

**No Stripe dashboard changes needed on your end.** Skip the redirect setup entirely.

## Files touched

- Delete `src/routes/thank-you.tsx`.
- `src/routeTree.gen.ts` regenerates automatically on next build.

## What you should do next

1. Say "publish" and I'll ship the current site live.
2. Test the flow: click the gold button → pay on Stripe → you'll see Stripe's built-in confirmation page and get Stripe's automatic receipt email. Done.
