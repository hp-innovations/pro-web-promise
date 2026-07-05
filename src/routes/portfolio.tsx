import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import barbershop from "../assets/mockup-barbershop.jpg";
import plumber from "../assets/mockup-plumber.jpg";
import restaurant from "../assets/mockup-restaurant.jpg";
import landscaper from "../assets/mockup-landscaper.jpg";
import cleaning from "../assets/mockup-cleaning.jpg";
import contractor from "../assets/mockup-contractor.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Small Business Website Examples — Our Work | CoreLinkDev" },
      {
        name: "description",
        content:
          "Small business website examples we've designed and launched — barbershops, plumbers, restaurants, contractors, landscapers and cleaners. See real work built for $499.",
      },
      { property: "og:title", content: "Small Business Website Examples — CoreLinkDev" },
      { property: "og:description", content: "Real small business websites built and launched for $499." },
      { property: "og:url", content: "https://corelinkdev.com/portfolio" },
      { property: "og:image", content: "https://corelinkdev.com/og-cover.jpg" },
      { name: "twitter:title", content: "Small Business Website Examples — CoreLinkDev" },
      { name: "twitter:image", content: "https://corelinkdev.com/og-cover.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://corelinkdev.com/portfolio" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://corelinkdev.com/" },
            { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://corelinkdev.com/portfolio" },
          ],
        }),
      },
    ],
  }),
  component: PortfolioPage,
});

const PROJECTS = [
  { src: barbershop, name: "Oak & Blade Barbershop", place: "Barbershop", note: "Booking-first site with drive-through-fast load times." },
  { src: plumber, name: "RapidFlow Plumbing", place: "Plumbing", note: "Emergency-focused layout with tap-to-call above the fold." },
  { src: restaurant, name: "Trattoria Milano", place: "Restaurant", note: "Editorial homepage with online reservations and menu." },
  { src: landscaper, name: "GreenScape Landscaping", place: "Landscaping", note: "Portfolio-led site optimized for local search." },
  { src: cleaning, name: "Sparkle Clean", place: "Cleaning services", note: "Instant-quote form built for weekend bookings." },
  { src: contractor, name: "Craftwood Builders", place: "General contractor", note: "Case-study driven site to close bigger jobs." },
];

function PortfolioPage() {
  return (
    <>
      <section>
        <div className="container-tight pt-16 pb-8 md:pt-24 md:pb-14">
          <p className="eyebrow">Selected work</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-6xl">
            Small business website examples that win jobs.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Every site below started as a free demo. Every one launched for
            $499. Different businesses, same promise: professional design,
            fast delivery, real ownership.
          </p>
        </div>
      </section>

      <section>
        <div className="container-tight pb-20">
          <div className="grid gap-10 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <figure key={p.name} className="group">
                <div className="overflow-hidden rounded-xl border border-hairline bg-surface">
                  <img
                    src={p.src}
                    alt={`Custom ${p.place.toLowerCase()} website design by CoreLinkDev — ${p.name}`}
                    width={1600}
                    height={1104}
                    loading="lazy"
                    className="w-full transition-transform duration-500 group-hover:scale-[1.015]"
                  />
                </div>
                <figcaption className="mt-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-base font-medium text-ink">{p.name}</span>
                    <span className="text-xs text-ink-soft">{p.place}</span>
                  </div>
                  <p className="mt-2 text-sm text-ink-soft">{p.note}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-tight flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <h2 className="max-w-xl font-display text-3xl leading-tight text-ink md:text-4xl">
            Yours could be next — and you'll see it before you pay.
          </h2>
          <Link to="/contact" className="btn-gold">
            Get my free demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}