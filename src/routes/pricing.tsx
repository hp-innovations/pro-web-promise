import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { CombinedPlanCard } from "./index";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Cheap Business Website — $499 Affordable Small Business Web Design | CoreLinkDev" },
      {
        name: "description",
        content:
          "Looking for a cheap business website? Get a custom small business website build for one flat $499 (plus optional $39/month care). Cheap price, professional result — no setup fees, no contracts.",
      },
      { property: "og:title", content: "Cheap Business Website Build — $499 Small Business Web Design" },
      { property: "og:description", content: "A cheap business website that looks anything but. One flat $499 build + $39/month care." },
      { name: "keywords", content: "cheap website build, cheap business website, cheap small business website, affordable website design for small business, $499 website" },
      { property: "og:url", content: "https://corelinkdev.com/pricing" },
      { property: "og:image", content: "https://corelinkdev.com/og-cover.jpg" },
      { name: "twitter:title", content: "Affordable Website Design for Small Business — $499" },
      { name: "twitter:description", content: "One flat $499 build + $39/month care plan." },
      { name: "twitter:image", content: "https://corelinkdev.com/og-cover.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://corelinkdev.com/pricing" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Small business website design",
          provider: { "@type": "ProfessionalService", name: "CoreLinkDev", url: "https://corelinkdev.com" },
          areaServed: [
            { "@type": "Country", name: "United States" },
            { "@type": "City", name: "Chicago" },
          ],
          offers: [
            {
              "@type": "Offer",
              name: "Professional Website Build",
              description: "One-time custom website design and launch for small businesses.",
              price: "499",
              priceCurrency: "USD",
              url: "https://corelinkdev.com/pricing",
              availability: "https://schema.org/InStock",
            },
            {
              "@type": "Offer",
              name: "Website Care Plan",
              description: "Monthly hosting, security, backups, updates and support.",
              price: "39",
              priceCurrency: "USD",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "39",
                priceCurrency: "USD",
                billingIncrement: 1,
                unitCode: "MON",
              },
              url: "https://corelinkdev.com/pricing",
              availability: "https://schema.org/InStock",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://corelinkdev.com/" },
            { "@type": "ListItem", position: 2, name: "Pricing", item: "https://corelinkdev.com/pricing" },
          ],
        }),
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <section>
        <div className="container-tight pt-16 pb-10 md:pt-24 md:pb-14 text-center">
          <p className="eyebrow">Pricing</p>
          <h1 className="mt-4 mx-auto max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-6xl">
            Affordable website design for small business — one flat $499.
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-ink-soft">
            We keep it simple on purpose. A professional website costs $499,
            one time. If you want us to keep it fast, secure and updated, add
            our care plan for $39/month. That's it.
          </p>
          <p className="mt-4 mx-auto max-w-2xl text-sm text-ink-soft">
            It's the cheap business website build owners have been asking
            for — cheap on price, not on quality.
          </p>
        </div>
      </section>

      <section>
        <div className="container-tight pb-16">
          <CombinedPlanCard />

          <p className="mt-10 rounded-full border border-hairline bg-surface px-5 py-3 text-center text-sm text-ink-soft">
            100% transparent pricing. No setup fees. No long-term contracts. No expensive surprises.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-tight py-20">
          <p className="eyebrow text-center">Common questions</p>
          <h2 className="mt-4 text-center font-display text-3xl text-ink md:text-4xl">
            Straight answers to the questions we hear most.
          </h2>
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-hairline border-t border-b border-hairline">
            {PRICING_FAQ.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="text-base font-semibold text-ink">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn-gold">
              Get my free demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/faq" className="btn-ghost">
              Read the full FAQ
            </Link>
          </div>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-soft">
            {["No deposit", "No contract", "Cancel anytime", "You own your site"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-gold" strokeWidth={2.5} /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

const PRICING_FAQ = [
  {
    q: "Why is it only $499?",
    a: "Because we've built our process to be efficient, and because we work with a lot of small businesses. We're not passing the cost of a downtown agency office and a sales team onto you. Same care, none of the overhead.",
  },
  {
    q: "Is there a catch?",
    a: "No. You see your demo first. If you don't love it, you owe us nothing. If you do, you pay $499 once and the site is yours.",
  },
  {
    q: "Do I really own the website?",
    a: "Yes. On launch day we transfer the domain, hosting access and files to your name. It's yours to keep, move, or hand off — no strings attached.",
  },
  {
    q: "Do I have to sign up for the $39 care plan?",
    a: "No. It's optional. Most owners sign up because they'd rather not think about hosting, security patches, or backups — but it's your call.",
  },
];