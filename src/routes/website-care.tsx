import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { StripeButton } from "../components/stripe-button";

export const Route = createFileRoute("/website-care")({
  head: () => ({
    meta: [
      { title: "Website Maintenance & Care for Small Businesses | CoreLinkDev" },
      {
        name: "description",
        content:
          "Website maintenance and support for small businesses. Hosting, security, backups, updates, and small content edits for $39 a month. Cancel anytime.",
      },
      { property: "og:title", content: "Website Maintenance & Care | CoreLinkDev" },
      { property: "og:description", content: "$39/month care plan: hosting, security, backups, updates, and small edits. Cancel anytime." },
      { property: "og:url", content: "https://corelinkdev.com/website-care" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://corelinkdev.com/og-cover.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Website Maintenance & Care | CoreLinkDev" },
      { name: "twitter:description", content: "$39/month care plan for small business websites." },
      { name: "twitter:image", content: "https://corelinkdev.com/og-cover.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://corelinkdev.com/website-care" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Website maintenance and support",
          name: "Website Care Plan",
          description:
            "Monthly website maintenance for small businesses: hosting, security, backups, software updates, and small content edits.",
          provider: { "@id": "https://corelinkdev.com/#organization" },
          areaServed: { "@type": "Country", name: "United States" },
          offers: {
            "@type": "Offer",
            price: "39",
            priceCurrency: "USD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "39",
              priceCurrency: "USD",
              billingIncrement: 1,
              unitCode: "MON",
            },
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
            { "@type": "ListItem", position: 2, name: "Website Care", item: "https://corelinkdev.com/website-care" },
          ],
        }),
      },
    ],
  }),
  component: CarePage,
});

const INCLUDED = [
  "Managed hosting on a fast, secure platform",
  "SSL certificate kept renewed",
  "Domain registration for one standard domain",
  "Business email hosting",
  "Software and security patch updates",
  "Daily backups and quick restore if something breaks",
  "Monthly uptime and performance check",
  "Small content edits (hours, prices, services, photos)",
  "Email and phone support during business hours",
];

const NOT_INCLUDED = [
  "Full page redesigns or new sections (a small change fee applies)",
  "New custom features or integrations built from scratch",
  "Paid ad management or SEO campaigns",
  "E-commerce catalog management",
];

const FAQ = [
  {
    q: "Is the care plan required?",
    a: "No. It's optional. You can launch the $499 site, take the files and hosting, and manage it yourself. Most owners choose the plan so they don't have to think about it.",
  },
  {
    q: "Can I cancel?",
    a: "Yes, any time. There's no contract. If you cancel, we hand off the site so nothing is lost.",
  },
  {
    q: "How quickly do small edits go live?",
    a: "Most edits ship the same or next business day. Bigger changes get a quick heads-up on timing.",
  },
  {
    q: "What counts as a small edit?",
    a: "Hours, prices, phone numbers, staff photos, adding a service to a list, swapping a photo, fixing a typo — the kind of thing that would take an owner an hour of fighting with a builder.",
  },
];

function CarePage() {
  return (
    <>
      <section>
        <div className="container-tight pt-16 pb-8 md:pt-20 md:pb-12">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-ink-mute">
            <Link to="/" className="hover:text-ink">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-ink">Website Care</span>
          </nav>
          <p className="eyebrow">Website care</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight tracking-tight text-ink md:text-5xl">
            Website maintenance and support for small businesses.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            $39 a month for hosting, security, backups, updates, and small
            content edits. Cancel any time. The site stays yours either way.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <StripeButton />
            <Link to="/contact" className="btn-ghost">Ask a question</Link>
          </div>
        </div>
      </section>

      <section className="hairline-t bg-surface">
        <div className="container-tight py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl text-ink md:text-3xl">What's included</h2>
              <ul className="mt-6 grid gap-2.5 text-[15px] text-ink">
                {INCLUDED.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-[3px] h-4 w-4 shrink-0 text-accent-1" strokeWidth={2.5} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl text-ink md:text-3xl">What isn't</h2>
              <ul className="mt-6 grid gap-2.5 text-[15px] text-ink-soft">
                {NOT_INCLUDED.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-[3px] h-4 w-4 shrink-0 text-ink-mute">—</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-ink-mute">Bigger changes are quoted separately at a flat rate so there are no surprises.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-tight py-14">
          <h2 className="font-display text-2xl text-ink md:text-3xl">Who this is for</h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            Owners who want a professional website that stays online, stays
            fast, and stays up to date — without learning WordPress, chasing
            hosting invoices, or waiting weeks for a freelancer to change a
            phone number. Send us an email; we handle it.
          </p>
        </div>
      </section>

      <section className="hairline-t bg-surface">
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
            <Link to="/small-business-website-design" className="link-underline">Website design</Link>
            <span className="text-ink-mute">·</span>
            <Link to="/website-redesign" className="link-underline">Website redesign</Link>
            <span className="text-ink-mute">·</span>
            <Link to="/pricing" className="link-underline">See pricing</Link>
            <span className="text-ink-mute">·</span>
            <Link to="/contact" className="link-underline">Contact us</Link>
          </div>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-tight flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-end">
          <h2 className="max-w-xl font-display text-3xl leading-tight text-ink md:text-4xl">
            Ready to hand off the maintenance?
          </h2>
          <div className="flex flex-wrap gap-3">
            <StripeButton />
            <Link to="/contact" className="btn-ghost">Talk to us first <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}