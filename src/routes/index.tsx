import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Phone,
  ShieldCheck,
  Smartphone,
  Search,
  Zap,
  Key,
  Users,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import heroMockup from "../assets/mockup-barbershop.jpg?w=1200&format=webp&quality=60";
import heroMockupSrcset from "../assets/mockup-barbershop.jpg?w=480;800;1200&format=webp&quality=60&as=srcset";
import contractorMockup from "../assets/mockup-contractor.jpg?w=1200&format=webp&quality=60";
import contractorMockupSrcset from "../assets/mockup-contractor.jpg?w=480;800;1200&format=webp&quality=60&as=srcset";
import restaurantMockup from "../assets/mockup-restaurant.jpg?w=1200&format=webp&quality=60";
import restaurantMockupSrcset from "../assets/mockup-restaurant.jpg?w=480;800;1200&format=webp&quality=60&as=srcset";
import landscaperMockup from "../assets/mockup-landscaper.jpg?w=1200&format=webp&quality=60";
import landscaperMockupSrcset from "../assets/mockup-landscaper.jpg?w=480;800;1200&format=webp&quality=60&as=srcset";
import { PHONE, PHONE_TEL } from "../components/site-layout";
import {
  STRIPE_CHECKOUT_URL,
  STRIPE_CTA_LABEL,
  STRIPE_CTA_SUBLINE,
} from "../lib/stripe";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Affordable $499 Small Business Websites | CoreLinkDev" },
      {
        name: "description",
        content:
          "Affordable website design for small businesses nationwide. Custom design, one flat $499, plus a $39 per month care plan. See a free demo before you pay.",
      },
      { property: "og:title", content: "Affordable $499 Small Business Websites | CoreLinkDev" },
      { property: "og:description", content: "Custom small business website design for one flat $499 plus a $39 monthly care plan. See a free demo before you pay." },
      { property: "og:url", content: "https://corelinkdev.com/" },
      { property: "og:image", content: "https://corelinkdev.com/og-cover.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:title", content: "Affordable Small Business Websites | $499 Custom Design" },
      { name: "twitter:description", content: "Custom small business websites for one flat $499. See a demo before you pay." },
      { name: "twitter:image", content: "https://corelinkdev.com/og-cover.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://corelinkdev.com/" },
      {
        rel: "preload",
        as: "image",
        href: heroMockup,
        fetchpriority: "high",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <WhoItsFor />
      <DemoPromise />
      <Pricing />
      <NotIncluded />
      <PortfolioStrip />
      <CareBlock />
      <HomeFaq />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-tight pt-14 pb-12 md:pt-24 md:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="font-display text-[2.4rem] leading-[1.08] tracking-tight text-ink md:text-[3.6rem]">
              A professional website for your small business, built for $499.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
              We design and build custom websites for small business owners
              who need to look professional without spending five figures.
              One flat $499 to build and launch the site. An optional $39
              a month if you want us to keep it hosted, updated, and secure.
              You see a demo before you decide.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={STRIPE_CHECKOUT_URL} className="btn-gold">
                {STRIPE_CTA_LABEL}
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/contact" className="btn-ghost">
                See a free demo first
              </Link>
            </div>
            <p className="mt-3 text-xs text-ink-soft">{STRIPE_CTA_SUBLINE}</p>
            <p className="mt-6 text-sm text-ink-soft">
              Prefer to talk?{" "}
              <a href={`tel:${PHONE_TEL}`} className="text-ink underline underline-offset-4">
                {PHONE}
              </a>
            </p>
          </div>

          <div className="lg:col-span-5">
            <img
              src={heroMockup}
              srcSet={heroMockupSrcset}
              sizes="(min-width: 1024px) 500px, 100vw"
              alt="Example small business website designed by CoreLinkDev, shown on a laptop screen."
              width={1600}
              height={1104}
              fetchPriority="high"
              decoding="async"
              className="w-full rounded-lg border border-hairline"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoItsFor() {
  return (
    <section className="hairline-t">
      <div className="container-tight py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Who this is for</p>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg leading-relaxed text-ink">
              Small business owners who need a professional website and
              don't want to think about hosting, updates, or agency
              contracts.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Barbers, contractors, restaurants, cleaners, landscapers,
              plumbers, and any owner-operated business that relies on
              local customers finding them online. If a well-built website
              would help you look serious and get calls, you're in the
              right place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoPromise() {
  return (
    <section className="bg-surface">
      <div className="container-tight py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
              You see the website before you pay.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              No deposit. No contract. If the demo isn't right, you owe
              nothing.
            </p>
          </div>
          <ol className="md:col-span-7 space-y-6">
            {[
              { n: "1", t: "Tell us about your business", d: "A short form or a quick call. We ask what you do, who your customers are, and what the site needs to show." },
              { n: "2", t: "We build a real demo", d: "A working website you can click through on your phone or laptop. Not a static mockup." },
              { n: "3", t: "If you like it, we launch", d: "$499, one payment. We hand you the domain, hosting access, and the files. You own it." },
            ].map((s) => (
              <li key={s.n} className="grid grid-cols-[auto_1fr] items-start gap-5 hairline-b pb-6 last:border-b-0 last:pb-0">
                <span className="font-display text-3xl text-ink-soft leading-none">{s.n}</span>
                <div>
                  <p className="text-base font-semibold text-ink">{s.t}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing">
      <div className="container-tight py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
            $499 to build. $39 a month if you want us to look after it.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            One price for the website, one price for ongoing care. Nothing
            hidden underneath.
          </p>
        </div>

        <div className="mt-10">
          <CombinedPlanCard />
        </div>
      </div>
    </section>
  );
}

const BUILD_FEATURES = [
  "Complete custom website",
  "Mobile responsive design",
  "Contact forms",
  "Google Maps integration",
  "Basic SEO optimization",
  "Fast performance",
  "Business email setup guidance",
  "SSL security",
  "Social media integration",
  "Full website ownership transferred to you",
  "Launch assistance",
];

const CARE_FEATURES = [
  "Hosting",
  "Security monitoring",
  "Software updates",
  "Backups",
  "Bug fixes",
  "Content updates",
  "Performance optimization",
  "Priority support",
  "Monthly health checks",
];

export function CombinedPlanCard() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="rounded-lg border border-ink bg-background p-8 md:p-12">
        <h3 className="font-display text-2xl leading-tight text-ink md:text-3xl">
          Professional Website + Website Care
        </h3>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-10">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl text-ink md:text-5xl">$499</span>
              <span className="text-sm text-ink-soft">one-time</span>
            </div>
            <p className="mt-1 text-xs uppercase tracking-wide text-ink-soft">Website build</p>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl text-ink md:text-5xl">$39</span>
              <span className="text-sm text-ink-soft">/month</span>
            </div>
            <p className="mt-1 text-xs uppercase tracking-wide text-ink-soft">Monthly care</p>
          </div>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">What the $499 build includes</p>
            <ul className="mt-4 grid gap-2 text-sm text-ink">
              {BUILD_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-ink" strokeWidth={2.5} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">What the $39 monthly plan covers</p>
            <ul className="mt-4 grid gap-2 text-sm text-ink">
              {CARE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-ink" strokeWidth={2.5} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 hairline-t pt-8 flex flex-wrap items-center gap-4">
          <a href={STRIPE_CHECKOUT_URL} className="btn-gold">
            {STRIPE_CTA_LABEL}
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link to="/contact" className="btn-ghost">See a demo first</Link>
          <p className="text-xs text-ink-soft">{STRIPE_CTA_SUBLINE}</p>
        </div>
      </div>
    </div>
  );
}

function NotIncluded() {
  return (
    <section className="bg-surface">
      <div className="container-tight py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">What's not included</p>
            <h2 className="mt-3 font-display text-2xl leading-tight text-ink md:text-3xl">
              We tell you what costs money before it costs you money.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-4 text-sm leading-relaxed text-ink-soft">
            <p>
              The $499 covers design, build, and launch. Third-party
              services you might need for your business are separate and
              billed directly to you by the provider.
            </p>
            <p>
              <span className="text-ink">Domain name</span> (typically
              around $15 a year), <span className="text-ink">email
              hosting</span> if you want a name@yourbusiness.com address,
              and any <span className="text-ink">paid third-party
              tools</span> such as an online booking system, payment
              processor, or premium stock photography.
            </p>
            <p>
              If you already have a domain or an email account, we use
              yours. If you don't, we help you register one in your own
              name so you keep control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CareBlock() {
  return (
    <section className="bg-surface">
      <div className="container-tight py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">After launch</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
              How we handle changes and support.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-4 text-base leading-relaxed text-ink-soft">
            <p>
              On the $39 monthly care plan, you email or call us with a
              change and we take care of it. Content edits, new photos,
              small layout tweaks, and technical maintenance are all
              covered.
            </p>
            <p>
              We also handle hosting, security patches, and backups so you
              don't have to think about them. If something breaks, we fix
              it. You can cancel the care plan whenever you want and take
              your site with you.
            </p>
            <p>
              Not on the care plan? We can still quote one-off changes when
              you need them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeFaq() {
  const items = [
    { q: "Do I own my website?", a: "Yes. When we launch, we hand you the domain, hosting access, and the files. You can leave any time." },
    { q: "Do I have to sign the care plan?", a: "No. It's optional. You can start without it and add it later, or handle hosting on your own." },
    { q: "How do I request changes?", a: "Email or call us. On the care plan, most edits go live the same or next business day." },
    { q: "What happens after I submit the contact form?", a: "A real person replies within one business day to ask a few questions and set up your free demo." },
  ];
  return (
    <section>
      <div className="container-tight py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Common questions</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
              Answered.
            </h2>
            <p className="mt-4 text-sm text-ink-soft">
              More on the{" "}
              <Link to="/faq" className="text-ink underline underline-offset-4">FAQ page</Link>.
            </p>
          </div>
          <div className="md:col-span-8 divide-y divide-hairline hairline-t hairline-b">
            {items.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="text-base font-semibold text-ink">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioStrip() {
  const items = [
    { src: heroMockup, srcSet: heroMockupSrcset, name: "Oak & Blade Barbershop", place: "Barbershop" },
    { src: contractorMockup, srcSet: contractorMockupSrcset, name: "Craftwood Builders", place: "General contractor" },
    { src: restaurantMockup, srcSet: restaurantMockupSrcset, name: "Trattoria Milano", place: "Restaurant" },
    { src: landscaperMockup, srcSet: landscaperMockupSrcset, name: "GreenScape Landscaping", place: "Landscaping" },
  ];
  return (
    <section>
      <div className="container-tight py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight text-ink md:text-4xl">
              Example websites we've designed.
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="text-sm text-ink underline-offset-4 hover:underline"
          >
            See all work
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {items.map((p) => (
            <figure key={p.name} className="group">
              <div className="overflow-hidden rounded-md border border-hairline bg-surface">
                <img
                  src={p.src}
                  srcSet={p.srcSet}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  alt={`Example ${p.place.toLowerCase()} website design by CoreLinkDev, ${p.name}.`}
                  width={1600}
                  height={1104}
                  loading="lazy"
                  decoding="async"
                  className="w-full"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                <span className="text-sm font-medium text-ink">{p.name}</span>
                <span className="text-xs text-ink-soft">{p.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="hairline-t">
      <div className="container-tight py-20 md:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">
            Ready to see what your website could look like?
          </h2>
          <p className="mt-4 text-base text-ink-soft">
            Send us a short note about your business. A real person replies
            within one business day.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="btn-gold">
              Request a free demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${PHONE_TEL}`} className="btn-ghost">
              <Phone className="h-4 w-4" />
              {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
