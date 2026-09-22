import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
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
          "Concept demo websites showing how CoreLinkDev designs small business sites for barbershops, plumbers, restaurants, contractors, landscapers, and cleaners.",
      },
      { property: "og:title", content: "Small Business Website Examples | CoreLinkDev" },
      { property: "og:description", content: "Concept demos of the small business websites we design and launch." },
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
        <div className="container-wide pt-16 pb-10 md:pt-24 md:pb-16">
          <p className="eyebrow">Selected concepts</p>
          <h1 className="mt-5 max-w-4xl text-5xl leading-[.98] text-ink md:text-7xl lg:text-8xl">
            Different businesses need different websites.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            The designs below are concept demos we created to show the kinds of
            small business websites we build. They are not live client sites.
            Your free demo will be built for your actual business.
          </p>
        </div>
      </section>

      <section>
        <div className="container-wide pb-24">
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <figure key={p.name} className="group overflow-hidden rounded-[26px] border border-hairline bg-white p-3 shadow-[0_18px_60px_rgba(25,36,56,.05)]">
                <div className="overflow-hidden rounded-[20px] bg-surface">
                  <img
                    src={p.src}
                    srcSet={p.srcSet}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    alt={`Example ${p.name.toLowerCase()} website design by CoreLinkDev.`}
                    width={1600}
                    height={1104}
                    loading="lazy"
                    decoding="async"
                    className="w-full transition-transform duration-500 group-hover:scale-[1.012]"
                  />
                </div>
                <figcaption className="p-4 pt-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-xl font-bold tracking-tight text-ink">{p.name}</span>
                    <span className="rounded-full bg-accent-1-soft px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-1">Concept demo</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-ink-soft"><span className="text-ink">{p.place}.</span> {p.note}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-10 md:pb-14">
        <div className="container-wide flex flex-col items-start justify-between gap-7 rounded-[30px] bg-[#0b0e14] px-7 py-12 text-white md:flex-row md:items-end md:px-12">
          <h2 className="max-w-xl text-3xl leading-tight text-white md:text-5xl">
            Want to see one built for your business?
          </h2>
          <Link to="/contact" className="inline-flex min-h-12 items-center rounded-full bg-white px-5 text-sm font-bold text-ink">
            Request a free demo
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}