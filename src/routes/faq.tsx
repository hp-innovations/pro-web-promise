import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "How Much Does a Small Business Website Cost? FAQ — CoreLinkDev" },
      {
        name: "description",
        content:
          "How much does a small business website cost? Straight answers on pricing ($499), ownership, timelines, support and everything owners ask before hiring us.",
      },
      { property: "og:title", content: "How Much Does a Small Business Website Cost? — CoreLinkDev" },
      { property: "og:description", content: "Straight answers on price, ownership, timelines and support." },
      { property: "og:url", content: "https://corelinkdev.com/faq" },
      { property: "og:image", content: "https://corelinkdev.com/og-cover.jpg" },
      { name: "twitter:title", content: "How Much Does a Small Business Website Cost? — CoreLinkDev" },
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
    q: "Why is it only $499?",
    a: "Efficient process, focused scope, and volume — not lower quality. We've refined how we design and build so a professional site takes days, not months, without cutting corners. Plus, our demo-first model means we only work with owners who are genuinely going to move forward.",
  },
  {
    q: "Is there a catch?",
    a: "No. You see the demo first. If it's not right, you walk away and owe nothing. No deposit, no signed contract to escape from.",
  },
  {
    q: "Do I own my website?",
    a: "Yes — fully. On launch day we transfer the domain, hosting access and all files to your name. You can leave any time.",
  },
  {
    q: "What if I need changes later?",
    a: "That's what the $39/month care plan is for. Content updates, small tweaks, and technical maintenance are all covered. If you don't want the plan, we can quote one-off changes when you need them.",
  },
  {
    q: "How long does it take?",
    a: "Most sites launch in one to two weeks after you approve the demo. Simpler sites can be live in a few days.",
  },
  {
    q: "What if something breaks?",
    a: "On the care plan, we monitor your site around the clock and fix issues before you notice. Off the plan, we're still reachable — we just quote repairs individually.",
  },
  {
    q: "Do I need the monthly plan?",
    a: "Honestly? Most owners are happier with it because they'd rather not think about hosting, security patches or backups. But it's optional — you can start without it and add it later.",
  },
  {
    q: "Do you work with businesses nationwide?",
    a: "Yes. We build websites for small businesses across the entire USA — wherever you are, you get the same free demo, flat price, and personal service.",
  },
  {
    q: "Will my site show up on Google?",
    a: "Every site we build ships with clean semantic HTML, fast performance, meta tags, and schema markup — the technical foundations Google looks for. Ranking above competitors takes time and content, but you'll start from a much stronger base than a Facebook page.",
  },
];

function FaqPage() {
  return (
    <>
      <section>
        <div className="container-tight pt-16 pb-10 md:pt-24 md:pb-14">
          <p className="eyebrow">FAQ</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-6xl">
            How much does a small business website cost? Straight answers.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            The questions we get from owners considering a $499 website — and
            how we answer them.
          </p>
        </div>
      </section>

      <section>
        <div className="container-tight pb-16">
          <div className="mx-auto max-w-3xl divide-y divide-hairline border-t border-b border-hairline">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <h3 className="text-base font-semibold text-ink">{f.q}</h3>
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

      <section className="bg-surface">
        <div className="container-tight flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <h2 className="max-w-xl font-display text-3xl text-ink md:text-4xl">
            Still have a question? Ask a real person.
          </h2>
          <Link to="/contact" className="btn-gold">
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}