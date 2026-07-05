## What you're getting

One clean "Get started — $499 + $39/mo" button across the site that sends visitors straight to your Stripe Payment Link, then bounces them back to a branded Thank You page on corelinkdev.com. Stripe emails the official receipt automatically. Optionally, we also send a CoreLinkDev-branded "Thanks, order #XXXX" email.

## Scope

### 1. Single combined CTA
- Add a shared `STRIPE_CHECKOUT_URL` constant = `https://buy.stripe.com/00w28q4Mo9Pr9O4eMr7N600`.
- Replace the current "Get my free demo / Start your project / Add the care plan" primary CTAs on the homepage hero, pricing page, and sticky header with a single button: **"Get started — $499 + $39/mo"**.
- Under the button, small line: *"One secure checkout. Cancel the care plan anytime."*
- Opens in the same tab (cleaner, no popup blockers, matches your "minimalist and integrated" ask). Contact form + "Request a free demo" secondary CTA stay as they are for people not ready to pay.

### 2. Same-tab redirect back to site
- In your Stripe dashboard → Payment Links → this link → **After payment**, set redirect to `https://corelinkdev.com/thank-you?session_id={CHECKOUT_SESSION_ID}`. I'll give you the one-click steps in chat after building; it's a dashboard toggle, not code.
- Build `src/routes/thank-you.tsx`: full-page confirmation, "Thank you — we've received your payment", shows the Stripe session ID as their order reference, next-steps timeline (kickoff email within 1 business day, demo revisions, launch), and links back to home/contact.

### 3. Stripe receipt (automatic, no work needed)
- Stripe automatically emails a professional PDF-style receipt from `receipts@stripe.com` with the charge ID, amount, and card last-4 as soon as payment succeeds. You just need "Successful payments" emails enabled in Stripe → Settings → Emails (on by default).

### 4. Branded "Thanks — order #XXXX" email — *optional, requires backend*
Doing a branded email properly (with the real order number, not a fake one) requires:
- Enabling **Lovable Cloud** (backend).
- A **Stripe webhook** so we hear about the payment server-side.
- Your **Stripe secret key** (added as a secret — never in code) so we can verify the webhook.
- Setting up **Lovable Emails** on a subdomain of corelinkdev.com so email comes from `office@corelinkdev.com`.

I'll build this if you want it. Otherwise, Stripe's own receipt covers the legal/financial confirmation and the Thank You page covers the brand moment — that's a perfectly professional setup.

## Files to change

- `src/components/site-layout.tsx` — export `STRIPE_CHECKOUT_URL`, swap sticky header CTA to the combined button.
- `src/routes/index.tsx` — swap hero + pricing-preview CTAs.
- `src/routes/pricing.tsx` — merge the two pricing cards' CTAs into the single combined checkout button (cards stay as-is visually so people still see the breakdown).
- `src/routes/thank-you.tsx` — new page.
- `src/routes/__root.tsx` — add `/thank-you` to sitemap if needed.

## One question before I build

Do you want the **branded confirmation email** (Section 4)? Pick one:

- **A. No** — just wire the button, Thank You page, and rely on Stripe's automatic receipt. Fastest, zero backend.
- **B. Yes** — I'll also enable Lovable Cloud, set up the Stripe webhook, and send a CoreLinkDev-branded "Thanks, your order #XXXX is confirmed" email. Needs your Stripe secret key + email domain setup after the plan is approved.

Reply with **A** or **B** (or just approve the plan and I'll assume **A**).
