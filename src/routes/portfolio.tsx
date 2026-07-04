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
      { title: "Our Work — CoreLinkDev" },
      {
        name: "description",
        content:
          "A selection of small-business websites we've designed and built — barbershops, plumbers, restaurants, contractors and more.",
      },
      { property: "og:title", content: "Our Work — CoreLinkDev" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const PROJECTS = [
  { src: barbershop, name: "Oak & Blade Barbershop", place: "Bartlett, IL", note: "Booking-first site with drive-through-fast load times." },
  { src: plumber, name: "RapidFlow Plumbing", place: "Chicago, IL", note: "Emergency-focused layout with tap-to-call above the fold." },
  { src: restaurant, name: "Trattoria Milano", place: "Naperville, IL", note: "Editorial homepage with online reservations and menu." },
  { src: landscaper, name: "GreenScape Landscaping", place: "Elgin, IL", note: "Portfolio-led site optimized for local search." },
  { src: cleaning, name: "Sparkle Clean", place: "Schaumburg, IL", note: "Instant-quote form built for weekend bookings." },
  { src: contractor, name: "Craftwood Builders", place: "General contractor", note: "Case-study driven site to close bigger jobs." },
];

function PortfolioPage() {
  return (
    <>
      <section>
        <div className="container-tight pt-16 pb-8 md:pt-24 md:pb-14">
          <p className="eyebrow">Selected work</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-6xl">
            Websites built to earn trust and win jobs.
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
                    alt={`${p.name} website`}
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