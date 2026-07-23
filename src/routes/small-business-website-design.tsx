import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { StripeButton } from "../components/stripe-button";

export const Route = createFileRoute("/small-business-website-design")({
  head: () => ({
    meta: [
      { title: "Small Business Website Design | CoreLinkDev" },
      {
        name: "description",
        content:
          "Custom small business website design for a flat $499 build. See a working demo of your site before you pay a cent. Nationwide, remote-friendly.",
      },
      { property: "og:title", content: "Small Business Website Design | CoreLinkDev" },
      { property: "og:description", content: "Custom websites built for small businesses. Flat $499. See a demo before you pay." },
      { property: "og:url", content: "https://corelinkdev.com/small-business-website-design" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://corelinkdev.com/og-cover.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Small Business Website Design | CoreLinkDev" },
      { name: "twitter:description", content: "Custom websites built for small businesses. Flat $499." },
      { name: "twitter:image", content: "https://corelinkdev.com/og-cover.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://corelinkdev.com/small-business-website-design" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Small business website design",
          name: "Small Business Website Design",
          description:
            "Custom website design and launch for small businesses. Flat $499 build with an optional $39/month care plan.",
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
            { "@type": "ListItem", position: 2, name: "Small Business Website Design", item: "https://corelinkdev.com/small-business-website-design" },
          ],
        }),
      },
    ],
  }),
  component: ServicePage,
});

const INCLUDED = [
  "Custom design tailored to your business (no templates)",
  "Mobile-first responsive layout",
  "Up to 5 pages (home, services, about, contact, and one of your choosing)",
  "Contact form with spam protection",
  "Google Maps and click-to-call on mobile",
  "On-page SEO basics: titles, descriptions, headings, image alt text",
  "Fast performance and accessible markup",
  "Domain and hosting setup, transferred to your name at launch",
];

const NOT_INCLUDED = [
  "E-commerce stores with catalogs and inventory",
  "Custom web applications or booking systems built from scratch",
  "Ongoing content writing beyond launch copy edits",
  "Paid ad management or SEO campaigns",
];

const FAQ = [
  {
    q: "Who is this for?",
    a: "Independent and small businesses that need a professional site quickly and don't want to spend $3,000+ or fight with a DIY builder. Common fits: service trades, local shops, restaurants, salons, contractors.",
  },
  {
    q: "How long does it take?",
    a: "Most sites go from first call to live in 1 to 2 weeks, depending on how quickly you send content, photos, and feedback.",
  },
  {
    q: "What do I need to send you?",
    a: "Your business name, services, hours, contact info, and any photos or logos you already have. If you don't have professional photos, we work with what you have and use tasteful stock where needed.",
  },
];

function ServicePage() {
  return (
    <>
      <section>
        <div className="container-tight pt-16 pb-8 md:pt-20 md:pb-12">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-ink-mute">
            <Link to="/" className="hover:text-ink">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-ink">Small Business Website Design</span>
          </nav>
          <p className="eyebrow">Website design</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight tracking-tight text-ink md:text-5xl">
            Custom small business website design, built and launched for $499.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            Most small businesses don't need a $5,000 website. They need a
            site that looks credible, loads fast on a phone, and makes it
            easy for a customer to call or contact them. That's what we build.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">Get a free demo <ArrowRight className="h-4 w-4" /></Link>
            <StripeButton />
          </div>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-tight py-14">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="font-display text-2xl leading-tight text-ink md:text-3xl">The problem we solve</h2>
            </div>
            <div className="md:col-span-7 text-[15px] leading-relaxed text-ink-soft">
              <p>Owners come to us with the same two problems: a homemade site
              that looks unprofessional and quietly costs them customers, or
              a quote from an agency that runs into the thousands with a long
              contract attached. Both feel wrong for a small business.</p>
              <p className="mt-4">We fix both. A working demo of your site
              before any money changes hands, a flat $499 to launch, and a
              transfer of the domain and hosting into your name on day one.</p>
            </div>
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
              <h2 className="font-display text-2xl text-ink md:text-3xl">What's not included</h2>
              <ul className="mt-6 grid gap-2.5 text-[15px] text-ink-soft">
                {NOT_INCLUDED.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink-mute" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-ink-mute">Need one of these? Ask on the demo call. We'll tell you honestly whether it fits.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-tight py-14">
          <h2 className="font-display text-2xl text-ink md:text-3xl">How the process works</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              { n: "01", t: "Free demo", d: "Send a short brief. We build a working demo of your site so you can see it, not imagine it." },
              { n: "02", t: "Review", d: "You review the demo. Ask for changes. If you don't love it, you owe nothing." },
              { n: "03", t: "Launch", d: "Approve the design, pay $499, and we launch on your domain within a few business days." },
              { n: "04", t: "Handoff", d: "Domain, hosting, and files transferred to you. Optional $39/month care plan if you'd rather not manage it." },
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
            <Link to="/pricing" className="link-underline">See full pricing</Link>
            <span className="text-ink-mute">·</span>
            <Link to="/portfolio" className="link-underline">See concept demos</Link>
            <span className="text-ink-mute">·</span>
            <Link to="/website-redesign" className="link-underline">Redesign an old site</Link>
            <span className="text-ink-mute">·</span>
            <Link to="/website-care" className="link-underline">Care plan details</Link>
          </div>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-tight flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-end">
          <h2 className="max-w-xl font-display text-3xl leading-tight text-ink md:text-4xl">
            Ready to see what your site could look like?
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">Request a free demo <ArrowRight className="h-4 w-4" /></Link>
            <StripeButton />
          </div>
        </div>
      </section>
    </>
  );
}