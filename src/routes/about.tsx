import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Small Business Web Design Company — About CoreLinkDev" },
      {
        name: "description",
        content:
          "CoreLinkDev is a small business web design company serving businesses nationwide with 20+ years of combined experience — professional websites without the agency price tag.",
      },
      { property: "og:title", content: "Small Business Web Design Company — CoreLinkDev" },
      { property: "og:description", content: "Nationwide web design company for small businesses. 20+ years combined experience." },
      { property: "og:url", content: "https://corelinkdev.com/about" },
      { property: "og:image", content: "https://corelinkdev.com/og-cover.jpg" },
      { name: "twitter:title", content: "Small Business Web Design Company — CoreLinkDev" },
      { name: "twitter:image", content: "https://corelinkdev.com/og-cover.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://corelinkdev.com/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://corelinkdev.com/" },
            { "@type": "ListItem", position: 2, name: "About", item: "https://corelinkdev.com/about" },
          ],
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section>
        <div className="container-tight pt-16 pb-16 md:pt-24 md:pb-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow">Our story</p>
              <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-6xl">
                A small business web design company that{" "}
                <span className="italic text-ink-soft">answers the phone.</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <div className="space-y-5 text-[15px] leading-relaxed text-ink-soft">
                <p>
                  CoreLinkDev is a small, dedicated team with more than 20
                  years of combined experience — everything from one-page
                  sites for local shops to complex web platforms for larger
                  companies.
                </p>
                <p>
                  Somewhere along the way, we noticed the same story on
                  repeat: hard-working small business owners told a website
                  would cost them $5,000, $10,000, sometimes $20,000. Most
                  couldn't justify it, so they made do with a Facebook page —
                  and quietly lost customers to competitors who looked more
                  professional online.
                </p>
                <p>
                  We built CoreLinkDev to fix that. Every small business
                  deserves to compete online — and to be able to afford it.
                  When our clients grow, we grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-tight py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { k: "20+", v: "Years of combined experience" },
              { k: "$499", v: "One flat price — no surprises" },
              { k: "Days", v: "From kickoff to launch, not months" },
            ].map((s) => (
              <div key={s.k}>
                <p className="font-display text-5xl text-ink">{s.k}</p>
                <p className="mt-2 text-sm text-ink-soft">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-tight py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">What we believe</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
              Small businesses deserve serious tools — and a straight answer.
            </h2>
            <p className="mt-6 text-lg text-ink-soft">
              We answer the phone. We show our work before you pay. We hand
              you the keys on day one. We stay around if you need us.
              That's the whole idea.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="btn-gold">
                Talk to a real person <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/portfolio" className="btn-ghost">
                See our work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-tight py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Areas we serve</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
              Small businesses across the USA.
            </h2>
            <p className="mt-6 text-base text-ink-soft">
              We build professional websites for small businesses
              nationwide across the USA. Wherever you are, you get the same
              free demo, the same $499 flat price, and the same real person
              on the phone.
            </p>
            <p className="mt-6">
              <Link to="/pricing" className="text-ink underline-offset-4 hover:underline">
                See pricing
              </Link>{" "}
              ·{" "}
              <Link to="/contact" className="text-ink underline-offset-4 hover:underline">
                Request a free demo
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}