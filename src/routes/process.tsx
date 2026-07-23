import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { StripeButton } from "../components/stripe-button";

const CANONICAL = "https://corelinkdev.com/process";
const TITLE = "Our Website Design Process | CoreLinkDev";
const DESCRIPTION =
  "See how CoreLinkDev takes your small business from a short introduction to a working website demo, revisions, approval, and launch.";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://corelinkdev.com/og-cover.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "https://corelinkdev.com/og-cover.jpg" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://corelinkdev.com/" },
            { "@type": "ListItem", position: 2, name: "Process", item: CANONICAL },
          ],
        }),
      },
    ],
  }),
  component: ProcessPage,
});

const STEPS = [
  {
    n: "01",
    t: "Tell us about your business",
    d: "A short form or a quick 15-minute call. We ask what you do, who your customers are, what you want the site to say, and any examples of sites you like. No twenty-page brief, no sales pitch. If you already have a logo, existing site, or photos, send them over. If you don't, that's fine too. We can work from a plain description.",
  },
  {
    n: "02",
    t: "We create a working demo",
    d: "Within a few days you get a real website you can click through on your phone or laptop. Not a slide deck, not a static mockup. Real pages, real navigation, your business name and content in place. This is how you decide if we're a good fit. You see the actual product before anything else happens.",
  },
  {
    n: "03",
    t: "You review it and request changes",
    d: "You send notes: copy tweaks, color changes, a different photo, a section you want added or removed. We make the adjustments and send it back. We keep revising until it feels right. There's no revision cap and no pressure to approve something you're not happy with.",
  },
  {
    n: "04",
    t: "You approve the website",
    d: "Once you're happy with the demo, you give the green light. Nothing before this step is billed. If you decide the site isn't for you, you walk away with no cost and no obligation.",
  },
  {
    n: "05",
    t: "Payment and launch",
    d: "You pay the one-time $499 build fee. We connect your domain (or register a new one for you), set up hosting, business email, and any integrations you need. The site goes live, usually within 24 to 48 hours of approval.",
  },
  {
    n: "06",
    t: "Website ownership",
    d: "The website is yours. You own the design, the content, the domain, and the code. If you ever want to move it elsewhere, we hand over everything cleanly. No lock-in, no gatekeeping, no data hostage.",
  },
  {
    n: "07",
    t: "Optional $39 monthly care plan",
    d: "If you'd like us to keep the site hosted, secured, backed up, and updated, the care plan is $39 a month. It also includes your domain renewal, business email hosting, standard integrations, and small content edits when you need them. Cancel anytime. There is no contract and no cancellation fee.",
  },
];

const FAQ = [
  {
    q: "How long does the whole process take?",
    a: "Most projects go from first conversation to launched website in one to two weeks. The demo is usually ready within a few days of receiving your information.",
  },
  {
    q: "Do I pay anything to see the demo?",
    a: "No. The demo is completely free. You only pay the $499 build fee after you approve the site and want it launched.",
  },
  {
    q: "How many revisions do I get?",
    a: "As many as it takes to get it right. We don't cap revisions during the demo stage. The goal is a site you're genuinely happy with.",
  },
  {
    q: "What if I already have a website?",
    a: "We can redesign your existing site or start fresh. Either way, we handle the migration so nothing breaks and you don't lose search rankings or email.",
  },
  {
    q: "Do I have to sign the monthly care plan?",
    a: "No. The $39 monthly plan is optional. If you'd rather host and maintain the site yourself, you can. We'll hand over everything after launch.",
  },
  {
    q: "Can I cancel the monthly plan later?",
    a: "Yes, anytime. There's no contract and no cancellation fee. If you cancel, you keep your website and we help you move hosting elsewhere.",
  },
];

function ProcessPage() {
  return (
    <>
      {/* Intro */}
      <section className="border-b border-hairline py-20 md:py-28">
        <div className="container-wide grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="label-tag text-accent-1">Our Process</p>
            <nav aria-label="Breadcrumb" className="mt-6 text-xs text-ink-mute">
              <Link to="/" className="hover:text-ink">Home</Link>
              <span aria-hidden className="px-2">/</span>
              <span className="text-ink">Process</span>
            </nav>
          </div>
          <div className="md:col-span-8">
            <h1 className="text-4xl leading-[1.05] text-ink md:text-6xl">
              From a short conversation to a{" "}
              <span className="font-serif font-normal italic">working</span>{" "}
              website.
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-soft">
              We keep things simple on purpose. You describe your business, we
              build a real demo, you review it, and only when you're happy do
              we talk about payment. No brief templates, no discovery-phase
              invoices, no lock-in. Here's exactly how it works, step by step.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <ol className="relative space-y-14 md:space-y-16">
            {STEPS.map((s) => (
              <li key={s.n} className="grid gap-6 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-3">
                  <p className="label-tag text-accent-1">Step {s.n}</p>
                  <span
                    aria-hidden
                    className="mt-4 hidden h-px w-16 bg-ink md:block"
                  />
                </div>
                <div className="md:col-span-9">
                  <h2 className="text-2xl leading-tight text-ink md:text-3xl">
                    {s.t}
                  </h2>
                  <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-ink-soft">
                    {s.d}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-hairline bg-surface py-20 md:py-28">
        <div className="container-wide grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="label-tag text-accent-1">Common questions</p>
            <h2 className="mt-3 text-3xl leading-[1.1] text-ink md:text-4xl">
              About the{" "}
              <span className="font-serif font-normal italic">process</span>.
            </h2>
          </div>
          <div className="md:col-span-8">
            <dl className="divide-y divide-hairline border-y border-hairline">
              {FAQ.map((f) => (
                <div key={f.q} className="py-6">
                  <dt className="text-base font-medium text-ink md:text-lg">
                    {f.q}
                  </dt>
                  <dd className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-hairline py-20 md:py-28">
        <div className="container-wide max-w-3xl">
          <p className="label-tag text-accent-1">Ready when you are</p>
          <h2 className="mt-3 text-4xl leading-[1.05] text-ink md:text-5xl">
            Start with a{" "}
            <span className="font-serif font-normal italic">free demo</span>.
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink-soft">
            Tell us about your business and we'll build a working demo you can
            click through. If you like it, it's $499 to launch. If not, no
            cost, no pressure.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-[3px] border border-ink bg-ink px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-background hover:text-ink"
            >
              Request a Free Demo
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
            </Link>
            <StripeButton />
          </div>
          <p className="mt-4 text-xs text-ink-mute">
            $499 one-time website build · $39/month optional care plan · cancel anytime
          </p>
        </div>
      </section>
    </>
  );
}