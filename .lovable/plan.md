## Add meta-tag fallback for Google Search Console verification

Second verification method so you stay verified even if the HTML file is ever removed.

### What I need from you first

Google generates a **different** token for the meta-tag method than for the HTML file. Grab it:

1. Search Console → **Settings** → **Ownership verification** → **HTML tag**.
2. Copy the full tag Google shows. It looks like:
   ```html
   <meta name="google-site-verification" content="XXXXXXXXXXXXXXXXXXXXXXXXXXXX" />
   ```
3. Paste it into chat.

### What I'll do once you paste the tag

1. Open `src/routes/__root.tsx` and add one entry to the sitewide `meta` array in `head()`:
   ```ts
   { name: "google-site-verification", content: "<the content value you paste>" }
   ```
   Adding it in `__root.tsx` means the tag renders on every route (Google only checks the homepage, but this is the standard place).
2. Nothing else changes — no styling, no routes, no other metadata.

### What you'll do after

1. **Publish** so the new tag is live on `pro-web-promise.lovable.app` and (via your DNS) on `corelinkdev.com`.
2. In Search Console → **Ownership verification** → **HTML tag** → click **Verify**.
3. Both methods will now be listed as active. If either one ever breaks, the other keeps you verified.

### Notes

- Do **not** remove the existing `public/google8a2652386648bd2c.html` — that's your primary method.
- The meta tag is safe to keep forever; it has no effect on users, SEO, or performance.
