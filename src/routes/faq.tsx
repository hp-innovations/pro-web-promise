import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Small Business Website FAQ | CoreLinkDev" },
      {
        name: "description",
        content:
          "Answers to the questions small business owners ask before hiring us. Pricing, ownership, changes, cancellation, and what happens after you get in touch.",
      },
      { property: "og:title", content: "Small Business Website FAQ | CoreLinkDev" },
      { property: "og:description", content: "Straight answers on price, ownership, changes, and cancellation." },
      { property: "og:url", content: "https://corelinkdev.com/faq" },
      { property: "og:image", content: "https://corelinkdev.com/og-cover.jpg" },
      { name: "twitter:title", content: "Small Business Website FAQ | CoreLinkDev" },
      { name: "twitter:image", content: "https://corelinkdev.com/og-cover.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://corelinkdev.com/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://corelinkdev.com/" },
            { "@type": "ListItem", position: 2, name: "FAQ", item: "https://corelinkdev.com/faq" },
          ],
        }),
      },
    ],
  }),
  component: FaqPage,
});

const FAQ = [
  {
    q: "What does the $499 website include?",
    a: "A complete custom website: design, build, mobile responsiveness, contact form, basic SEO setup, SSL security, launch help, and full ownership transferred to you. See the full list on the pricing page.",
  },
  {
    q: "Are there additional charges?",
    a: "No surprise charges from us. The $39/month care plan includes hosting, security, backups, maintenance, one standard domain registration or renewal, business email hosting, and small content updates. Optional third-party services outside that scope are discussed before you approve them.",
  },
  {
    q: "What is included in the $39 monthly plan?",
    a: "Hosting, security monitoring, software updates, backups, bug fixes, content edits, small tweaks, performance optimization, priority support, and monthly health checks.",
  },
  {
    q: "Do I own my website?",
    a: "Yes. On launch day we transfer the domain, hosting access, and files to your name. If you ever leave, the site goes with you.",
  },
  {
    q: "Can I request changes?",
    a: "Yes. On the monthly plan, email or call us with a change and we take care of it. If you're not on the plan, we can quote one-off changes when you need them.",
  },
  {
    q: "Do you provide hosting?",
    a: "Yes, hosting is included in the $39 monthly care plan. If you'd rather host somewhere else, we can hand off the files and you host it wherever you prefer.",
  },
  {
    q: "Is a domain included?",
    a: "Yes. One standard domain registration or renewal is included while your $39/month care plan is active, along with business email hosting.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Yes. The demo-first process works the same way: we build a new design for your business, you see it before paying, and if you approve, we migrate the agreed website content and launch. If a project requires work outside the standard website scope, we explain it and agree on any additional cost before work begins.",
  },
  {
    q: "What information do I need to provide?",
    a: "The basics of your business: what you do, who your customers are, your logo if you have one, photos you'd like to use, and a few sentences about services and pricing. If you don't have all of it, we help you figure it out.",
  },
  {
    q: "What happens after I submit the form?",
    a: "A real person replies within one business day to ask a few questions and set up your free demo. No sales calls, no pressure.",
  },
  {
    q: "Can I cancel the monthly plan?",
    a: "Yes. You can cancel anytime with no cancellation fee. The plan stays active through the period you have already paid for. Cancelling does not affect your ownership of the website.",
  },
];

function FaqPage() {
  return (
    <>
      <section>
        <div className="container-tight pt-16 pb-10 md:pt-24 md:pb-14">
          <p className="eyebrow">FAQ</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight tracking-tight text-ink md:text-5xl">
            Frequently asked questions.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            The questions small business owners ask before hiring us, and
            how we answer them.
          </p>
        </div>
      </section>

      <section>
        <div className="container-tight pb-16">
          <div className="max-w-3xl divide-y divide-hairline hairline-t hairline-b">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <h2 className="text-base font-semibold text-ink">{f.q}</h2>
                  <span className="mt-1 text-xl leading-none text-ink-soft transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline-t">
        <div className="container-tight flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <h2 className="max-w-xl font-display text-2xl text-ink md:text-3xl">
            Still have a question?
          </h2>
          <Link to="/contact" className="btn-gold">
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}