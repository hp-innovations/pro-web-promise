import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import heroDesk from "../assets/hero-desk.jpg?w=1600&format=webp&quality=72";
import heroDeskSet from "../assets/hero-desk.jpg?w=640;960;1280;1600&format=webp&quality=72&as=srcset";
import barbershop from "../assets/mockup-barbershop.jpg?w=1600&format=webp&quality=68";
import barbershopSet from "../assets/mockup-barbershop.jpg?w=640;960;1280;1600&format=webp&quality=68&as=srcset";
import contractor from "../assets/mockup-contractor.jpg?w=1200&format=webp&quality=68";
import contractorSet from "../assets/mockup-contractor.jpg?w=480;800;1200&format=webp&quality=68&as=srcset";
import restaurant from "../assets/mockup-restaurant.jpg?w=1200&format=webp&quality=68";
import restaurantSet from "../assets/mockup-restaurant.jpg?w=480;800;1200&format=webp&quality=68&as=srcset";
import landscaper from "../assets/mockup-landscaper.jpg?w=1200&format=webp&quality=68";
import landscaperSet from "../assets/mockup-landscaper.jpg?w=480;800;1200&format=webp&quality=68&as=srcset";
import { PHONE, PHONE_TEL } from "../components/site-layout";
import { StripeButton } from "../components/stripe-button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CoreLinkDev: Small Business Website Design, $499 Flat" },
      {
        name: "description",
        content:
          "An independent studio building professional websites for small businesses. One flat $499 build. Optional $39 monthly care. See a working demo before you pay.",
      },
      { property: "og:title", content: "CoreLinkDev: Small Business Website Design, $499 Flat" },
      { property: "og:description", content: "Custom small business websites for $499. See a working demo before you pay." },
      { property: "og:url", content: "https://corelinkdev.com/" },
      { property: "og:image", content: "https://corelinkdev.com/og-cover.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:title", content: "CoreLinkDev: $499 Small Business Websites" },
      { name: "twitter:description", content: "Independent studio. $499 flat website build. Demo before you pay." },
      { name: "twitter:image", content: "https://corelinkdev.com/og-cover.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://corelinkdev.com/" },
      { rel: "preload", as: "image", href: heroDesk, fetchpriority: "high" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FeaturedWork />
      <Services />
      <Process />
      <Founder />
      <Pricing />
      <HomeFaq />
      <FinalCta />
    </>
  );
}

/* -------------------- HERO -------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-wide pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6 xl:col-span-6">
            <p className="eyebrow reveal-up" style={{ animationDelay: "60ms" }}>
              An independent web design studio
            </p>
            <h1
              className="mt-5 text-[2.35rem] leading-[1.05] text-ink sm:text-[2.75rem] md:text-[3.25rem] lg:text-[4rem] xl:text-[4.5rem] reveal-up"
              style={{ animationDelay: "120ms" }}
            >
              A website that makes your small business look established.
            </h1>
            <p
              className="mt-7 max-w-lg text-[17px] leading-relaxed text-ink-soft reveal-up"
              style={{ animationDelay: "220ms" }}
            >
              Custom websites for local and independent businesses. See a working
              demo before paying. The complete website build is{" "}
              <span className="text-ink font-semibold">$499</span>.
            </p>
            <div
              className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 reveal-up"
              style={{ animationDelay: "320ms" }}
            >
              <Link to="/contact" className="btn-primary">
                Request a Free Demo
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
              </Link>
              <StripeButton />
              <a href={`tel:${PHONE_TEL}`} className="link-underline text-sm">
                or call {PHONE}
              </a>
            </div>
            <p
              className="mt-3 max-w-lg text-xs text-ink-mute reveal-up"
              style={{ animationDelay: "360ms" }}
            >
              Start with a free demo — no commitment.
              <span className="mx-1.5 text-ink-mute/50">·</span>
              $499 website build + $39/month care.
            </p>
          </div>

          <div className="relative lg:col-span-6">
            <div
              className="relative overflow-hidden rounded-sm reveal-up"
              style={{ animationDelay: "180ms" }}
            >
              <img
                src={heroDesk}
                srcSet={heroDeskSet}
                sizes="(min-width: 1024px) 620px, 100vw"
                alt="A laptop showing a small business website, sitting on a warm wooden desk in natural light."
                width={1600}
                height={1200}
                fetchPriority="high"
                decoding="async"
                className="block h-auto w-full"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-6 -left-3 hidden max-w-[220px] rounded-sm bg-background p-4 shadow-[0_2px_0_0_var(--ink)] ring-1 ring-hairline md:block">
              <p className="font-serif text-[15px] italic leading-snug text-ink">
                “Small studios build the internet's most honest websites.”
              </p>
              <p className="mt-2 label-tag text-ink-mute">Studio notebook</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- TRUST STRIP -------------------- */

function TrustStrip() {
  const items = [
    { k: "$499", v: "Fixed website build" },
    { k: "Free", v: "Working demo before you pay" },
    { k: "$39/mo", v: "Optional care plan" },
    { k: "Yours", v: "Full ownership on launch day" },
  ];
  return (
    <section className="border-y border-hairline bg-surface">
      <div className="container-wide grid grid-cols-2 gap-y-6 py-8 md:grid-cols-4 md:py-10">
        {items.map((i) => (
          <div key={i.v} className="px-2 md:px-4">
            <p className="font-serif text-2xl text-ink md:text-[28px]">{i.k}</p>
            <p className="mt-1 text-[13px] leading-snug text-ink-soft">{i.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- FEATURED WORK -------------------- */

function FeaturedWork() {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="container-wide">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
          <div className="max-w-xl">
            <p className="label-tag text-accent-1">Selected work</p>
            <h2 className="mt-3 text-4xl leading-[1.05] text-ink md:text-5xl">
              Websites built for small,{" "}
              <span className="font-serif font-normal italic">owner-run</span>{" "}
              businesses.
            </h2>
          </div>
          <Link to="/portfolio" className="link-underline text-sm">
            See all work →
          </Link>
        </div>

        {/* Featured project */}
        <article className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            <figure className="overflow-hidden">
              <img
                src={barbershop}
                srcSet={barbershopSet}
                sizes="(min-width: 1024px) 820px, 100vw"
                alt="Featured example: barbershop website design, hero, booking and gallery."
                width={1600}
                height={1104}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full transition-transform duration-700 ease-out hover:scale-[1.015]"
              />
            </figure>
          </div>
          <div className="lg:col-span-4 lg:pt-4">
            <span className="label-tag text-accent-1">Concept demo · Barbershop</span>
            <h3 className="mt-3 text-3xl leading-tight text-ink">
              Oak &amp; Blade Barbershop
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              A neighborhood barbershop losing customers to competitors with
              online booking. We built a phone-first site with one big booking
              button, a real gallery, and tap-to-call above the fold.
            </p>
            <dl className="mt-6 space-y-4 border-t border-hairline pt-6 text-sm">
              <div>
                <dt className="label-tag text-ink-mute">Goal</dt>
                <dd className="mt-1 text-ink">More weekend bookings from mobile.</dd>
              </div>
              <div>
                <dt className="label-tag text-ink-mute">Includes</dt>
                <dd className="mt-1 text-ink">
                  Online booking, gallery, hours, tap-to-call, Google Business.
                </dd>
              </div>
            </dl>
          </div>
        </article>

        {/* Secondary editorial grid */}
        <div className="mt-16 grid gap-x-10 gap-y-14 md:mt-24 md:grid-cols-12">
          <article className="md:col-span-7">
            <figure className="overflow-hidden">
              <img
                src={restaurant}
                srcSet={restaurantSet}
                sizes="(min-width: 768px) 55vw, 100vw"
                alt="Restaurant website concept, menu and reservation layout."
                width={1200}
                height={828}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full"
              />
            </figure>
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <div>
                <span className="label-tag text-accent-1">Industry example · Restaurant</span>
                <h3 className="mt-2 text-xl text-ink">Trattoria Milano</h3>
              </div>
              <span className="font-serif italic text-ink-mute">02</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Editorial menu-forward homepage with hours, reservations and
              directions within a single scroll.
            </p>
          </article>

          <article className="md:col-span-5 md:pt-16">
            <figure className="overflow-hidden">
              <img
                src={contractor}
                srcSet={contractorSet}
                sizes="(min-width: 768px) 40vw, 100vw"
                alt="General contractor project showcase website concept."
                width={1200}
                height={828}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full"
              />
            </figure>
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <div>
                <span className="label-tag text-accent-1">Concept demo · Contractor</span>
                <h3 className="mt-2 text-xl text-ink">Craftwood Builders</h3>
              </div>
              <span className="font-serif italic text-ink-mute">03</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Project-showcase layout to help close larger residential jobs
              with clear proof of work.
            </p>
          </article>

          <article className="md:col-span-5 md:pt-4">
            <figure className="overflow-hidden">
              <img
                src={landscaper}
                srcSet={landscaperSet}
                sizes="(min-width: 768px) 40vw, 100vw"
                alt="Landscaping website concept, photo-led homepage with quote request."
                width={1200}
                height={828}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full"
              />
            </figure>
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <div>
                <span className="label-tag text-accent-1">Concept demo · Landscaping</span>
                <h3 className="mt-2 text-xl text-ink">GreenScape</h3>
              </div>
              <span className="font-serif italic text-ink-mute">04</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Photo-led site built for local search and quick quote requests.
            </p>
          </article>

          <aside className="md:col-span-7 md:pt-16">
            <div className="border-l-2 border-accent-1 pl-6">
              <p className="font-serif text-2xl italic leading-snug text-ink md:text-3xl">
                Every project shown here is a concept or industry example built
                by our studio. When a live client website is added, it will be
                clearly labeled as a Client Project.
              </p>
              <p className="mt-4 label-tag text-ink-mute">A note from the studio</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* -------------------- SERVICES -------------------- */

const SERVICES = [
  {
    n: "01",
    t: "New small business websites",
    d: "A complete site from scratch: brand-fitting design, mobile-first layout, contact and hours, launched under your own domain.",
  },
  {
    n: "02",
    t: "Website redesigns",
    d: "You have a site that no longer represents you. We rework the structure, design and copy so it looks like the business you run today.",
  },
  {
    n: "03",
    t: "Local service business sites",
    d: "For plumbers, cleaners, electricians, landscapers. Emergency-ready, tap-to-call, quote forms, Google Business integration.",
  },
  {
    n: "04",
    t: "Restaurant & booking websites",
    d: "Menus, hours, reservations and integrations with the booking tool you already use. Built for phones first.",
  },
  {
    n: "05",
    t: "Website care & maintenance",
    d: "Hosting, backups, security patches, small edits and content updates on the $39 monthly plan. Cancel anytime.",
  },
];

function Services() {
  return (
    <section id="services" className="border-t border-hairline bg-surface py-20 md:py-28">
      <div className="container-wide">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label-tag text-accent-1">What we do</p>
            <h2 className="mt-3 text-4xl leading-[1.05] text-ink md:text-[42px]">
              Small studio.{" "}
              <span className="font-serif font-normal italic">Small scope.</span>{" "}
              Done well.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
              We do one thing: websites for independent businesses. Nothing else
              on the invoice, nothing bolted on to inflate the bill.
            </p>
          </div>

          <ul className="md:col-span-8">
            {SERVICES.map((s, i) => (
              <li
                key={s.n}
                className={`grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 py-6 md:grid-cols-[80px_1fr_auto] md:gap-x-10 md:py-7 ${
                  i === 0 ? "border-t border-hairline" : ""
                } border-b border-hairline`}
              >
                <span className="font-serif text-2xl italic text-ink-mute">{s.n}</span>
                <div>
                  <h3 className="text-xl text-ink md:text-2xl">{s.t}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
                    {s.d}
                  </p>
                </div>
                <div className="hidden self-center md:block">
                  <span className="rule-accent" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* -------------------- PROCESS -------------------- */

const PROCESS = [
  {
    n: "01",
    t: "Tell us about your business",
    d: "A short form or a quick call. We ask what you do, who your customers are, and what the site needs to show.",
  },
  {
    n: "02",
    t: "Receive a working demo",
    d: "A real website you can click through on your phone or laptop. Not a slide deck, not a static mockup.",
  },
  {
    n: "03",
    t: "Review and request changes",
    d: "You send notes. We adjust. Only when you're happy do we talk about payment.",
  },
  {
    n: "04",
    t: "Approve and launch",
    d: "$499, one payment. We hand over the domain, hosting access and files. The site is yours.",
  },
];

function Process() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="container-wide">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="label-tag text-accent-1">Process</p>
          <h2 className="mt-3 text-4xl leading-[1.05] text-ink md:text-5xl">
            Four steps, no{" "}
            <span className="font-serif font-normal italic">surprises</span>.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
            We keep the process short. No twenty-page brief. No sales pitch.
            You get a real demo before anything else happens.
          </p>
        </div>

        <ol className="relative grid gap-10 md:grid-cols-4 md:gap-8">
          <span
            aria-hidden
            className="absolute left-0 right-0 top-3 hidden h-px bg-hairline md:block"
          />
          {PROCESS.map((s) => (
            <li key={s.n} className="relative">
              <span className="relative z-10 block h-6 w-6 rounded-full border-2 border-ink bg-background" />
              <p className="mt-5 label-tag text-accent-1">Step {s.n}</p>
              <h3 className="mt-2 text-lg text-ink md:text-xl">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------- FOUNDER -------------------- */

function Founder() {
  return (
    <section id="founder" className="border-t border-hairline bg-surface py-20 md:py-28">
      <div className="container-wide grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-2">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <span className="label-tag text-ink-mute">Photograph placeholder</span>
              <p className="mt-3 font-serif text-xl italic text-ink">
                Founder portrait
              </p>
              <p className="mt-2 max-w-[24ch] text-xs text-ink-mute">
                Replace with a real photograph when ready.
              </p>
            </div>
            <span
              aria-hidden
              className="absolute inset-4 border border-hairline"
            />
          </div>
        </div>

        <div className="md:col-span-7 md:pt-6">
          <p className="label-tag text-accent-1">About Us</p>
          <h2 className="mt-3 text-4xl leading-[1.05] text-ink md:text-5xl">
            A small team with{" "}
            <span className="font-serif font-normal italic">real</span>{" "}
            experience.
          </h2>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink-soft">
            CoreLinkDev is run by a small team with more than 20 years of
            experience in web development, hosting, server management, website
            security, performance, and business technology.
          </p>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-soft">
            Our team has worked with small businesses across service,
            construction, hospitality, and local retail industries. Our focus is
            simple: build professional websites that are fast, reliable, easy to
            manage, and priced fairly.
          </p>

          <dl className="mt-8 grid gap-6 border-t border-hairline pt-8 sm:grid-cols-2">
            <div>
              <dt className="label-tag text-ink-mute">Founder</dt>
              <dd className="mt-1 font-serif text-xl italic text-ink">
                Harold Popescu
              </dd>
            </div>
            <div>
              <dt className="label-tag text-ink-mute">Experience</dt>
              <dd className="mt-1 text-sm text-ink-soft">
                20+ years in web development, hosting, server management, security, and performance.
              </dd>
            </div>
            <div>
              <dt className="label-tag text-ink-mute">Serving</dt>
              <dd className="mt-1 text-sm text-ink-soft">Small businesses across the United States</dd>
            </div>
            <div>
              <dt className="label-tag text-ink-mute">Direct</dt>
              <dd className="mt-1 text-sm">
                <a href="mailto:office@corelinkdev.com" className="link-underline">office@corelinkdev.com</a>
                <span className="mx-2 text-ink-mute">·</span>
                <a href={`tel:${PHONE_TEL}`} className="link-underline">{PHONE}</a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

/* -------------------- PRICING -------------------- */

const BUILD_FEATURES = [
  "Complete custom website",
  "Mobile responsive design",
  "Contact forms",
  "Google Maps integration",
  "Basic SEO optimization",
  "Fast performance",
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

function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container-wide">
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="label-tag text-accent-1">Pricing</p>
            <h2 className="mt-3 text-4xl leading-[1.05] text-ink md:text-5xl">
              One price to build.{" "}
              <span className="font-serif font-normal italic">One</span> to
              keep it looked after.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-ink-soft md:col-span-5 md:pt-2">
            The website build is a flat $499. If you want us to host and care
            for it, add the monthly plan. No contracts, no setup fees.
          </p>
        </div>

        <CombinedPlanCard />
      </div>
    </section>
  );
}

export function CombinedPlanCard() {
  return (
    <div className="grid gap-0 border border-hairline bg-background md:grid-cols-2">
      {/* Build */}
      <div className="border-b border-hairline p-8 md:border-b-0 md:border-r md:p-10">
        <div className="flex items-start justify-between gap-4">
          <p className="label-tag text-accent-1">Website build</p>
          <span className="label-tag text-ink-mute">One time</span>
        </div>
        <p className="mt-6 flex items-baseline gap-2 text-ink">
          <span className="text-6xl font-extrabold tracking-[-0.04em]">$499</span>
          <span className="text-sm text-ink-soft">flat, all in</span>
        </p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
          Custom design and full launch. You see a working demo before you pay
          a cent. On launch day the domain, hosting access and files are all
          transferred to your name.
        </p>
        <ul className="mt-8 grid gap-2.5 text-[14px] text-ink">
          {BUILD_FEATURES.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <Check className="mt-[3px] h-4 w-4 shrink-0 text-accent-1" strokeWidth={2.5} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-9 flex flex-wrap gap-3">
          <StripeButton label="Start My Website" size="lg" />
          <Link to="/contact" className="btn-ghost">See a demo first</Link>
        </div>
        <p className="mt-3 text-xs text-ink-mute">
          $499 one-time website build + $39/month care plan. Third-party costs
          (domain, email, booking, payments) are billed separately by their
          provider.
        </p>
        <p className="mt-2 max-w-md text-[11.5px] leading-relaxed text-ink-mute">
          By continuing to checkout, you agree to our{" "}
          <Link to="/terms" className="link-underline">Terms and Conditions</Link>{" "}
          and acknowledge our{" "}
          <Link to="/refunds" className="link-underline">Refund and Cancellation Policy</Link>
          {" "}and{" "}
          <Link to="/privacy" className="link-underline">Privacy Policy</Link>.
        </p>
      </div>

      {/* Care */}
      <div className="p-8 md:p-10 bg-surface">
        <div className="flex items-start justify-between gap-4">
          <p className="label-tag text-accent-1">Monthly care</p>
          <span className="label-tag text-ink-mute">Cancel anytime</span>
        </div>
        <p className="mt-6 flex items-baseline gap-2 text-ink">
          <span className="text-6xl font-extrabold tracking-[-0.04em]">$39</span>
          <span className="text-sm text-ink-soft">/ month</span>
        </p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
          If you'd rather not think about hosting, security patches, backups
          and small edits, we handle it. Cancel any time. The site remains
          yours either way.
        </p>
        <ul className="mt-8 grid gap-2.5 text-[14px] text-ink">
          {CARE_FEATURES.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <Check className="mt-[3px] h-4 w-4 shrink-0 text-accent-1" strokeWidth={2.5} />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 border-t border-hairline pt-6 text-sm">
          <p className="label-tag text-ink-mute">Included in the care plan</p>
          <p className="mt-2 text-ink-soft">
            Domain registration, business email hosting, and standard
            third-party integrations (booking, payments, stock imagery) are
            included in the $39/month care plan. No separate bills from us.
          </p>
        </div>
      </div>
    </div>
  );
}

/* -------------------- HOME FAQ -------------------- */

function HomeFaq() {
  const items = [
    { q: "Do I own my website?", a: "Yes. When we launch, we hand you the domain, hosting access and the files. You can leave any time." },
    { q: "Do I have to sign the care plan?", a: "No. It's optional. You can start without it and add it later, or handle hosting on your own." },
    { q: "How do I request changes?", a: "Email or call. On the care plan, most edits go live the same or next business day." },
    { q: "What happens after I submit the contact form?", a: "A real person replies within one business day to ask a few questions and set up your free demo." },
  ];
  return (
    <section className="border-t border-hairline py-20 md:py-24">
      <div className="container-wide grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="label-tag text-accent-1">Common questions</p>
          <h2 className="mt-3 text-4xl leading-[1.05] text-ink md:text-[42px]">
            Straight{" "}
            <span className="font-serif font-normal italic">answers</span>.
          </h2>
          <p className="mt-5 text-sm text-ink-soft">
            More on the{" "}
            <Link to="/faq" className="link-underline">FAQ page</Link>.
          </p>
        </div>
        <div className="md:col-span-8">
          {items.map((f, i) => (
            <div
              key={f.q}
              className={`py-6 ${i === 0 ? "border-t border-hairline" : ""} border-b border-hairline`}
            >
              <h3 className="text-lg text-ink">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- FINAL CTA -------------------- */

function FinalCta() {
  return (
    <section className="border-t border-hairline bg-surface text-ink">
      <div className="container-wide py-20 md:py-28">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="label-tag text-accent-1">Get started</p>
            <h2 className="mt-3 text-4xl leading-[1.05] text-ink md:text-6xl">
              Let's see what your site{" "}
              <span className="font-serif font-normal italic">could look like</span>.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              Tell us a little about your business. A real person replies within
              one business day. If the demo isn't right, you owe us nothing.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 md:col-span-4 md:justify-end">
            <Link to="/contact" className="btn-primary">
              Request a Free Demo
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <StripeButton />
            <a
              href={`tel:${PHONE_TEL}`}
              className="link-underline text-sm text-ink-soft"
            >
              or call {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
