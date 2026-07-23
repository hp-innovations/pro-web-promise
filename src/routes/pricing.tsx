import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { CombinedPlanCard } from "./index";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing: $499 Website + $39 Monthly Care | CoreLinkDev" },
      {
        name: "description",
        content:
          "Small business website pricing. One flat $499 to build and launch, plus $39 a month for hosting, security, and updates. No setup fees, no contracts.",
      },
      { property: "og:title", content: "Pricing: $499 Website + $39 Monthly Care | CoreLinkDev" },
      { property: "og:description", content: "One flat $499 to build the site, $39 a month for ongoing care. Nothing hidden." },
      { property: "og:url", content: "https://corelinkdev.com/pricing" },
      { property: "og:image", content: "https://corelinkdev.com/og-cover.jpg" },
      { name: "twitter:title", content: "Pricing: $499 Website + $39 Monthly Care | CoreLinkDev" },
      { name: "twitter:description", content: "One flat $499 build plus $39 monthly care plan." },
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
        <div className="container-tight pt-16 pb-10 md:pt-24 md:pb-14">
          <div className="max-w-3xl">
            <p className="eyebrow">Pricing</p>
            <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight text-ink md:text-5xl">
              Simple pricing for small business websites.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
              A professional website costs $499, one time. If you want us
              to keep it hosted, secure, and updated, add the care plan
              for $39 a month. That's it.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container-tight pb-16">
          <h2 className="sr-only">Pricing plan</h2>
          <CombinedPlanCard />
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-tight py-20">
          <div className="max-w-2xl">
            <p className="eyebrow">Common questions</p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              Answers to what owners ask about the price.
            </h2>
          </div>
          <div className="mt-10 max-w-3xl divide-y divide-hairline hairline-t hairline-b">
            {PRICING_FAQ.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="text-base font-semibold text-ink">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="btn-gold">
              Request a free demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/faq" className="btn-ghost">
              Read the full FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const PRICING_FAQ = [
  {
    q: "Why is it only $499?",
    a: "We've built the process to be efficient and we don't carry the overhead of a downtown agency office or a sales team. You get the same care without paying for the extras.",
  },
  {
    q: "Is there a catch?",
    a: "No. You see your demo first. If you don't love it, you owe us nothing. If you do, you pay $499 once and the site is yours.",
  },
  {
    q: "Do I really own the website?",
    a: "Yes. On launch day we transfer the domain, hosting access, and files to your name. It's yours to keep, move, or hand off. No strings attached.",
  },
  {
    q: "Do I have to sign up for the $39 care plan?",
    a: "No. It's optional. Most owners sign up so they don't have to think about hosting, security patches, or backups, but it's your call.",
  },
];