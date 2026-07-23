import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { StripeButton } from "../components/stripe-button";

export const Route = createFileRoute("/website-redesign")({
  head: () => ({
    meta: [
      { title: "Small Business Website Redesign | CoreLinkDev" },
      {
        name: "description",
        content:
          "Redesign your outdated small business website for a flat $499. Faster, mobile-friendly, easier to update — with a free demo before you pay.",
      },
      { property: "og:title", content: "Small Business Website Redesign | CoreLinkDev" },
      { property: "og:description", content: "Redesign an outdated business website. Flat $499. See a demo of the redesign first." },
      { property: "og:url", content: "https://corelinkdev.com/website-redesign" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://corelinkdev.com/og-cover.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Small Business Website Redesign | CoreLinkDev" },
      { name: "twitter:description", content: "Redesign an outdated business website. Flat $499." },
      { name: "twitter:image", content: "https://corelinkdev.com/og-cover.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://corelinkdev.com/website-redesign" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Small business website redesign",
          name: "Website Redesign",
          description:
            "Redesign of an existing small business website with a modern layout, mobile-first responsive design, and improved performance.",
          provider: { "@id": "https://corelinkdev.com/#organization" },
          areaServed: { "@type": "Country", name: "United States" },
          offers: {
            "@type": "Offer",
            price: "499",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: "https://corelinkdev.com/pricing",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://corelinkdev.com/" },
            { "@type": "ListItem", position: 2, name: "Website Redesign", item: "https://corelinkdev.com/website-redesign" },
          ],
        }),
      },
    ],
  }),
  component: RedesignPage,
});

const INCLUDED = [
  "Modern redesign of your current pages",
  "Mobile-first responsive layout",
  "Migration of existing content, photos, and contact info",
  "Preserved URLs where practical, with 301 redirects for anything changed",
  "Improved page speed and Core Web Vitals",
  "Updated on-page SEO: titles, descriptions, headings",
  "New contact form with spam protection",
  "Launch on your existing domain with no downtime",
];

const FIT = [
  "The site looks dated or was built more than 5 years ago",
  "It's hard to read or use on a phone",
  "Pages load slowly or the layout jumps around",
  "You can't easily update prices, hours, or services",
  "The design no longer reflects the quality of your work",
];

const FAQ = [
  {
    q: "Do I lose my Google rankings?",
    a: "No, if it's done carefully — which is how we do it. We keep the same URLs where practical and set up 301 redirects for any that change, so the pages Google already knows about keep their history.",
  },
  {
    q: "Do you keep my content?",
    a: "Yes. Existing text, photos, and details move over. You can also send updated content if some of it is outdated.",
  },
  {
    q: "Will my site go offline during the switch?",
    a: "No. We build and preview the new site on a staging address, then cut over at launch. Downtime is typically a few minutes at most.",
  },
];

function RedesignPage() {
  return (
    <>
      <section>
        <div className="container-tight pt-16 pb-8 md:pt-20 md:pb-12">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-ink-mute">
            <Link to="/" className="hover:text-ink">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-ink">Website Redesign</span>
          </nav>
          <p className="eyebrow">Website redesign</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight tracking-tight text-ink md:text-5xl">
            Redesign your outdated small business website for $499.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            If your current site is embarrassing to send to a customer,
            we'll rebuild it. Same content, modern layout, faster on a
            phone, transferred back to you at launch.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">Show me a redesign <ArrowRight className="h-4 w-4" /></Link>
            <StripeButton />
          </div>
        </div>
      </section>

      <section className="hairline-t bg-surface">
        <div className="container-tight py-16">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="font-display text-2xl leading-tight text-ink md:text-3xl">Is a redesign right?</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">You probably need one if any of these sound familiar:</p>
            </div>
            <ul className="md:col-span-7 grid gap-2.5 text-[15px] text-ink">
              {FIT.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="mt-[3px] h-4 w-4 shrink-0 text-accent-1" strokeWidth={2.5} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-tight py-14">
          <h2 className="font-display text-2xl text-ink md:text-3xl">What's included</h2>
          <ul className="mt-6 grid gap-2.5 text-[15px] text-ink md:grid-cols-2">
            {INCLUDED.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <Check className="mt-[3px] h-4 w-4 shrink-0 text-accent-1" strokeWidth={2.5} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="hairline-t bg-surface">
        <div className="container-tight py-14">
          <h2 className="font-display text-2xl text-ink md:text-3xl">How the redesign works</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              { n: "01", t: "Send the URL", d: "Give us your current site and tell us what's wrong with it." },
              { n: "02", t: "Free demo", d: "We rebuild the homepage as a working demo so you can see the new direction." },
              { n: "03", t: "Refine and approve", d: "We adjust based on your feedback, then extend the redesign to the rest of the site." },
              { n: "04", t: "Cutover", d: "Launch on your existing domain with 301 redirects preserved. You keep your Google history." },
            ].map((s) => (
              <li key={s.n} className="border-t border-hairline pt-4">
                <p className="label-tag text-accent-1">{s.n}</p>
                <h3 className="mt-2 text-base font-medium text-ink">{s.t}</h3>
                <p className="mt-2 text-sm text-ink-soft">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-tight py-16">
          <h2 className="font-display text-2xl text-ink md:text-3xl">Common questions</h2>
          <div className="mt-8 divide-y divide-hairline hairline-t hairline-b">
            {FAQ.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="text-base font-semibold text-ink">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
            <Link to="/small-business-website-design" className="link-underline">Starting fresh instead</Link>
            <span className="text-ink-mute">·</span>
            <Link to="/website-care" className="link-underline">Website care plan</Link>
            <span className="text-ink-mute">·</span>
            <Link to="/pricing" className="link-underline">See pricing</Link>
            <span className="text-ink-mute">·</span>
            <Link to="/contact" className="link-underline">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}