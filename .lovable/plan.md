This is a large, multi-page overhaul. Before I touch code, here's the scope I'll execute and where I need your input.

## Scope

### 1. De-AI the copy and design (all existing pages)
- Strip em dashes across all route files (`index`, `pricing`, `portfolio`, `about`, `faq`, `contact`, `__root`) and the site layout. Replace with periods, commas, or short sentences.
- Remove/reduce: decorative dash separators, generic gradients/glow blobs, excessive pill badges, repeated icon circles, over-rounded cards, redundant three-column card sections, generic marketing phrases ("premium," "elevate," "seamless," "transform," "digital presence," etc.), unverifiable stats.
- Rewrite hero, offer, and section copy in plain, specific language covering: who it's for, $499 build, $39/mo maintenance, demo-first, what's included / not included, how changes are requested, what happens after the form is submitted. I will NOT invent a project timeline (you haven't given one).
- Tighten typography scale, reduce heading sizes where they're oversized, cut unnecessary bold, use mixed left-aligned and centered compositions instead of every section being centered cards.

### 2. Design refinements (no rebuild)
- Cleaner nav (already close, minor polish).
- More restrained palette: keep ink/gold/surface, reduce gradient use.
- More whitespace, consistent section rhythm, subtle borders over heavy shadows, smaller radii on over-rounded cards, remove leftover animations.
- Keep working functionality: Stripe CTA, Web3Forms contact, geo hook stays as-is unless you want it removed (open question below).

### 3. New pages (all using existing header/footer/typography)
- `/privacy` Privacy Policy
- `/terms` Terms and Conditions
- `/cookies` Cookie Policy (essential-cookies-only draft, since I found no analytics/marketing scripts in the project)
- `/accessibility` Accessibility Statement
- `/refunds` Refund and Cancellation Policy
- Enhanced `/contact` (add Business name, existing website, requested service, project details, Privacy Policy consent checkbox)
- Existing `/faq` will be rewritten with the 11 real questions listed; unanswered ones marked `[BUSINESS OWNER MUST COMPLETE]`.
- 404 already exists at `src/routes/$.tsx`; will restyle to match.

All legal pages will use visible `[BUSINESS OWNER MUST COMPLETE: ...]` placeholders wherever a fact isn't already in the project (legal entity, jurisdiction, retention windows, refund windows, revision limits, etc.). No invented facts.

### 4. Footer
Rebuild with: business description, main nav, services, contact, and a Legal column linking to all 5 legal pages, plus copyright year. No empty social icons.

### 5. Accessibility & QA
- Verify focus states, form labels, alt text, heading hierarchy, contrast, keyboard nav.
- `prefers-reduced-motion` support in `styles.css`.
- Manual responsive check at 320 / 375 / 768 / 1280 via Playwright screenshots.
- Typecheck + build pass.

### 6. What I will NOT do
- Not publish (you asked for preview-only).
- Not invent business info, testimonials, timelines, certifications, awards, statistics, or legal terms.
- Not remove Stripe / Web3Forms / geo hook logic without your OK.

## Questions I need answered before writing legal pages

I'll use `[BUSINESS OWNER MUST COMPLETE]` placeholders for anything you don't answer, but the more you fill in now, the less cleanup later:

1. **Legal entity & address for legal pages** — you already have "CoreLink LLC, 1209 Mountain Road Place NE, Albuquerque, NM 87110" in the footer. OK to use that as the legal entity + governing law = New Mexico, USA? (If yes I'll use it. If no, I'll placeholder it.)
2. **Geo hook** — the `useGeo` hook still personalizes hero/footer text based on visitor IP city. Given the recent "why does it say Chicago on my phone" issue, do you want me to remove it entirely as part of this cleanup? (Recommended: yes.)
3. **Refund policy stance** — one-line preference so I draft it correctly: (a) no refunds once work has started, (b) partial refund pro-rated to work completed, or (c) you'll decide later and I should placeholder it.
4. **Monthly plan cancellation** — cancel anytime effective end of current billing month, or 30-day notice? (Or placeholder.)

## Execution order

1. Answer questions 1–4 (or say "placeholder everything").
2. I'll do de-AI pass on existing pages + footer rebuild.
3. Add 5 legal pages + enhanced contact + rewritten FAQ.
4. Accessibility + responsive QA with screenshots.
5. Hand back changelog, placeholder list, and decisions-needed list. No publish.

Approve this plan (and answer the 4 questions if you can) and I'll start.
