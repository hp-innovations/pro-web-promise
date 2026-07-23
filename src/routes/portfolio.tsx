import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import barbershop from "../assets/mockup-barbershop.jpg?w=1200&format=webp&quality=60";
import barbershopSet from "../assets/mockup-barbershop.jpg?w=480;800;1200&format=webp&quality=60&as=srcset";
import plumber from "../assets/mockup-plumber.jpg?w=1200&format=webp&quality=60";
import plumberSet from "../assets/mockup-plumber.jpg?w=480;800;1200&format=webp&quality=60&as=srcset";
import restaurant from "../assets/mockup-restaurant.jpg?w=1200&format=webp&quality=60";
import restaurantSet from "../assets/mockup-restaurant.jpg?w=480;800;1200&format=webp&quality=60&as=srcset";
import landscaper from "../assets/mockup-landscaper.jpg?w=1200&format=webp&quality=60";
import landscaperSet from "../assets/mockup-landscaper.jpg?w=480;800;1200&format=webp&quality=60&as=srcset";
import cleaning from "../assets/mockup-cleaning.jpg?w=1200&format=webp&quality=60";
import cleaningSet from "../assets/mockup-cleaning.jpg?w=480;800;1200&format=webp&quality=60&as=srcset";
import contractor from "../assets/mockup-contractor.jpg?w=1200&format=webp&quality=60";
import contractorSet from "../assets/mockup-contractor.jpg?w=480;800;1200&format=webp&quality=60&as=srcset";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Small Business Website Examples | CoreLinkDev" },
      {
        name: "description",
        content:
          "Example website designs for small businesses. Barbershops, plumbers, restaurants, contractors, landscapers, and cleaners built for $499.",
      },
      { property: "og:title", content: "Small Business Website Examples | CoreLinkDev" },
      { property: "og:description", content: "A look at the kinds of small business websites we design and launch for $499." },
      { property: "og:url", content: "https://corelinkdev.com/portfolio" },
      { property: "og:image", content: "https://corelinkdev.com/og-cover.jpg" },
      { name: "twitter:title", content: "Small Business Website Examples | CoreLinkDev" },
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
  { src: barbershop, srcSet: barbershopSet, name: "Barbershop", place: "Booking-focused", note: "Design centered on booking appointments, showing the shop, and quick tap-to-call on mobile." },
  { src: plumber, srcSet: plumberSet, name: "Plumbing service", place: "Emergency call", note: "Emergency-first layout with tap-to-call above the fold and a simple service list." },
  { src: restaurant, srcSet: restaurantSet, name: "Restaurant", place: "Menu and hours", note: "Editorial homepage with the menu, hours, and reservation link within reach." },
  { src: landscaper, srcSet: landscaperSet, name: "Landscaping", place: "Photo-led", note: "Photo-led site built for local search and quote requests." },
  { src: cleaning, srcSet: cleaningSet, name: "Cleaning service", place: "Instant quote", note: "Instant-quote form built for weekend inquiries and quick response." },
  { src: contractor, srcSet: contractorSet, name: "General contractor", place: "Project showcase", note: "Project showcase layout to help close bigger residential jobs." },
];

function PortfolioPage() {
  return (
    <>
      <section>
        <div className="container-tight pt-16 pb-8 md:pt-24 md:pb-14">
          <p className="eyebrow">Examples of our work</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight tracking-tight text-ink md:text-5xl">
            Example small business websites.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            The designs below show the kinds of small business websites we
            build. Each one started as a free demo and launched for $499.
          </p>
        </div>
      </section>

      <section>
        <div className="container-tight pb-20">
          <div className="grid gap-10 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <figure key={p.name} className="group">
                <div className="overflow-hidden rounded-md border border-hairline bg-surface">
                  <img
                    src={p.src}
                    srcSet={p.srcSet}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    alt={`Example ${p.name.toLowerCase()} website design by CoreLinkDev.`}
                    width={1600}
                    height={1104}
                    loading="lazy"
                    decoding="async"
                    className="w-full"
                  />
                </div>
                <figcaption className="mt-4">
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

      <section className="hairline-t">
        <div className="container-tight flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-end">
          <h2 className="max-w-xl font-display text-3xl leading-tight text-ink md:text-4xl">
            Want to see one built for your business?
          </h2>
          <Link to="/contact" className="btn-gold">
            Request a free demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}