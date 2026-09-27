# SEO and lead measurement — September 27, 2026

## Scope
The public marketing app only. Do not alter /dpr/, /DPR/V1/ or the demo applications.
Preserve the red CORELINK·DEV wordmark, current design, $499 build and optional $39 care plan.
No paid ads, fabricated customers/reviews, local offices or ranking guarantees.

## Events
- `generate_lead`: only after Web3Forms returns HTTP success AND JSON `success: true`.
  This means provider acceptance, not verified inbox delivery, humanity, qualification or a sale.
- `demo_request_click`: click to the contact page, NOT a submitted lead.
- `phone_click`, `sms_click`, `email_click`: link clicks, NOT completed conversations.
- `demo_open`: click to a demo, NOT a customer project or a conversion.
- Existing automatic GA4 events are unchanged; do not mark `form_submit` as proof of delivery.
- No contact-field contents are passed in custom GA4 events. No lead dollar value is invented.

## Owner and QA exclusion
Open the site with `?corelink_test=1` to exclude subsequent activity in that browser.
Open `?corelink_test=0` to end this mode. It does not remove historic activity.
The tag also stays disabled on non-production hostnames and detected WebDriver browsers.
/cookies has a browser-local analytics preference. Browser tests intercept GA network calls.
No IP-based exclusions are set until the owner confirms the relevant networks.

## GA4 follow-up
GA4 property: 555325472, measurement ID: G-M7DDB9HRY0.
The existing connector has read-only Analytics access. Verify the new event in Realtime/DebugView,
then mark `generate_lead` as a key event in GA4 Admin. Do not assign a $499 value to an inquiry.
The reporting timezone is America/Los_Angeles; normalize server-log timestamps when comparing.

## Google discovery
Keep canonical non-www URLs and true 404s. The sitemap lists 16 marketing URLs.
Submitting a sitemap queues discovery; it does not force Google indexing.
URL Inspection API reads status. Manual Request Indexing is a separate Search Console action.
Do not use the Google Indexing API (jobs/livestreams) as a substitute for ordinary website pages.

## Business facts still requiring owner input
Revision limits and exceptions, confirmed real customer work/reviews, real in-person service
eligibility for a Business Profile, and an approved advertising budget.
