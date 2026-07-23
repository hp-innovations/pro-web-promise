import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CoreLinkDev | Small Business Web Design" },
      {
        name: "description",
        content:
          "Small business web design company serving businesses nationwide. We build professional websites for one flat $499, with an optional $39 monthly care plan.",
      },
      { property: "og:title", content: "About CoreLinkDev" },
      { property: "og:description", content: "A small team building professional websites for small businesses nationwide, at prices small businesses can actually afford." },
      { property: "og:url", content: "https://corelinkdev.com/about" },
      { property: "og:image", content: "https://corelinkdev.com/og-cover.jpg" },
      { name: "twitter:title", content: "About CoreLinkDev" },
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
            <div className="lg:col-span-6">
              <p className="eyebrow">About</p>
              <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight text-ink md:text-5xl">
                A small team building websites for small businesses.
              </h1>
            </div>
            <div className="lg:col-span-6">
              <div className="space-y-4 text-[15px] leading-relaxed text-ink-soft">
                <p>
                  CoreLinkDev is a small team that designs and builds
                  professional websites for small businesses. We've worked
                  on everything from one-page local shop sites to larger
                  web platforms, and we bring that same care to every
                  project.
                </p>
                <p>
                  We kept meeting owners who'd been quoted $5,000 or more
                  for a website. Most couldn't justify it, so they made do
                  with a social media page and quietly lost customers to
                  competitors who looked more professional online.
                </p>
                <p>
                  We built CoreLinkDev to fix that. Every small business
                  deserves a proper website they can afford. One flat
                  $499 to design and launch, $39 a month if you want us
                  to keep it running.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-tight py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow">About Us</p>
            </div>
            <div className="md:col-span-8 space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                CoreLinkDev is run by a small team with more than 20 years of
                experience in web development, hosting, server management,
                website security, performance, and business technology.
              </p>
              <p>
                Our team has worked with small businesses across service,
                construction, hospitality, and local retail industries. Our
                focus is simple: build professional websites that are fast,
                reliable, easy to manage, and priced fairly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-tight py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow">How we work</p>
            </div>
            <div className="md:col-span-8 space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                We answer the phone. The person who builds your site is
                the same person who talks to you about it.
              </p>
              <p>
                We show the work before you pay. A real demo, not a
                mockup, so you know what you're buying.
              </p>
              <p>
                We hand over the keys on launch day. The domain, hosting
                access, and files go into your name. If you ever want to
                leave, you can, and you take the site with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-tight py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 items-end">
            <div className="md:col-span-8">
              <p className="eyebrow">Where we work</p>
              <h2 className="mt-3 font-display text-2xl leading-tight text-ink md:text-3xl">
                Small businesses across the United States.
              </h2>
              <p className="mt-4 text-base text-ink-soft">
                We work with owner-operated businesses anywhere in the
                USA. Same free demo, same flat price, same person on the
                phone.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-gold">
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/portfolio" className="btn-ghost">
                See our work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}