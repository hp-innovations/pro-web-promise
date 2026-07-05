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
import heroMockup from "../assets/mockup-barbershop.jpg";
import contractorMockup from "../assets/mockup-contractor.jpg";
import restaurantMockup from "../assets/mockup-restaurant.jpg";
import landscaperMockup from "../assets/mockup-landscaper.jpg";
import { PHONE, PHONE_TEL } from "../components/site-layout";
import { useGeo } from "../hooks/use-geo";
import {
  STRIPE_CHECKOUT_URL,
  STRIPE_CTA_LABEL,
  STRIPE_CTA_SUBLINE,
} from "../lib/stripe";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Affordable Small Business Websites | $499 Custom Design — CoreLinkDev" },
      {
        name: "description",
        content:
          "Custom professional websites for small businesses. See your free demo before you pay. One-time $499, you own it. Serving Chicago-area businesses across the USA.",
      },
      { property: "og:title", content: "Affordable Small Business Websites | $499 Custom Design" },
      { property: "og:description", content: "Custom professional websites, one-time $499. See your free demo before you pay. Serving Chicago-area businesses across the USA." },
      { property: "og:url", content: "https://corelinkdev.com/" },
      { property: "og:image", content: "https://corelinkdev.com/og-cover.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:title", content: "Affordable Small Business Websites | $499 Custom Design" },
      { name: "twitter:description", content: "Custom professional websites, one-time $499. Free demo first." },
      { name: "twitter:image", content: "https://corelinkdev.com/og-cover.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://corelinkdev.com/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const geo = useGeo();
  const localMicroLine =
    geo.loaded && geo.city && geo.isLocal
      ? `Now taking new projects in ${geo.city}.`
      : null;

  return (
    <>
      <Hero localLine={localMicroLine} />
      <DemoPromise />
      <WhyChoose />
      <Pricing />
      <PortfolioStrip />
      <Testimonials />
      <FinalCta />
    </>
  );
}

function Hero({ localLine }: { localLine: string | null }) {
  return (
    <section className="relative overflow-hidden">
      <div className="container-tight pt-14 pb-10 md:pt-20 md:pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6 fade-in">
            <p className="eyebrow">CoreLinkDev</p>
            <h1 className="mt-4 font-display text-[2.6rem] leading-[1.05] tracking-tight text-ink md:text-6xl">
              Your next customer is already searching online.{" "}
              <span className="italic text-ink-soft">Make sure they find you.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
              Starting a business is hard enough. Getting a professional
              website shouldn't be. We design and build custom websites for
              businesses that earn trust from the first click —
              for a one-time <span className="text-ink">$499</span> +{" "}
              <span className="text-ink">$39</span> monthly care plan.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={STRIPE_CHECKOUT_URL} className="btn-gold">
                {STRIPE_CTA_LABEL}
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/portfolio" className="btn-ghost">
                View our work
              </Link>
            </div>
            <p className="mt-3 text-xs text-ink-soft">{STRIPE_CTA_SUBLINE}</p>
            <p className="mt-3 text-sm text-ink-soft">
              Prefer to see a demo first?{" "}
              <Link to="/contact" className="text-ink underline-offset-4 hover:underline">
                Request a free demo
              </Link>{" "}
              ·{" "}
              Or call us directly:{" "}
              <a href={`tel:${PHONE_TEL}`} className="text-ink underline-offset-4 hover:underline">
                {PHONE}
              </a>
            </p>
            {localLine && (
              <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1.5 text-xs text-ink-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {localLine}
              </p>
            )}
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-2xl bg-surface" aria-hidden />
              <img
                src={heroMockup}
                alt="A finished barbershop website designed by CoreLinkDev shown in a browser."
                width={1600}
                height={1104}
                className="w-full rounded-xl border border-hairline shadow-[0_30px_60px_-30px_rgba(15,23,32,0.25)]"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 hairline-t hairline-b">
          <ul className="flex flex-wrap items-center justify-between gap-y-3 py-4 text-[13px] text-ink-soft">
            {[
              "Custom design",
              "Mobile friendly",
              "SEO ready",
              "Delivered in days",
              "You own your website",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-gold" strokeWidth={2.5} />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function DemoPromise() {
  return (
    <section className="bg-surface">
      <div className="container-tight py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">The demo-first promise</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            See your website before you pay a cent.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            We build your demo first. You look at it, click through it, show it
            to your family. If you love it, we launch it and you pay $499. If
            you don't, you walk away and owe us nothing. That's the whole deal —
            no deposit, no contract, no risk.
          </p>
        </div>

        <ol className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-3">
          {[
            { n: "01", t: "Tell us about your business", d: "A short call or form. Ten minutes, no jargon." },
            { n: "02", t: "We build your free demo", d: "A real, working website you can click through — not a mockup." },
            { n: "03", t: "Love it? Launch it for $499", d: "One flat payment. You own it. You're online." },
          ].map((s) => (
            <li key={s.n} className="rounded-xl border border-hairline bg-background p-6">
              <p className="font-display text-2xl text-gold">{s.n}</p>
              <p className="mt-3 text-base font-medium text-ink">{s.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function WhyChoose() {
  const items = [
    { icon: ShieldCheck, t: "Affordable, no surprises", d: "The price you see is the price you pay. Ever." },
    { icon: Sparkles, t: "Custom-built, not templated", d: "Designed for your business — never a recycled theme." },
    { icon: Zap, t: "Ready in days, not months", d: "Most sites launch within one to two weeks." },
    { icon: Key, t: "You own your website", d: "Fully transferred to you on launch day." },
    { icon: Users, t: "Real people answer", d: "Talk to the person who actually built your site." },
    { icon: HeartHandshake, t: "We stay with you", d: "Ongoing care from $39/month. Nothing hidden." },
  ];
  return (
    <section>
      <div className="container-tight py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Why CoreLinkDev</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            A serious website, without the agency price tag.
          </h2>
        </div>
        <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.t} className="flex gap-4">
              <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-surface text-ink">
                <it.icon className="h-4 w-4" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-ink">{it.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="bg-surface" id="pricing">
      <div className="container-tight py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            One offer. Everything included.
          </h2>
        </div>

        <div className="mt-14">
          <CombinedPlanCard />
        </div>

        <p className="mt-10 rounded-full border border-hairline bg-background px-5 py-3 text-center text-sm text-ink-soft">
          100% transparent pricing. No setup fees. No long-term contracts. No expensive surprises.
        </p>
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
    <div className="mx-auto max-w-3xl">
      <div className="relative rounded-2xl border border-ink bg-background p-8 md:p-12">
        <span className="absolute -top-3 left-8 rounded-full bg-ink px-3 py-1 text-[11px] font-medium tracking-wide text-white">
          Everything included
        </span>

        <p className="eyebrow">The complete offer</p>
        <h3 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
          Professional Website + Website Care
        </h3>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-8">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-5xl text-ink md:text-6xl">$499</span>
              <span className="text-sm text-ink-soft">one-time</span>
            </div>
            <p className="mt-1 text-xs uppercase tracking-wide text-ink-soft">
              Professional build
            </p>
          </div>
          <span className="hidden text-3xl font-display text-ink-soft sm:inline">+</span>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-5xl text-ink md:text-6xl">$39</span>
              <span className="text-sm text-ink-soft">/month</span>
            </div>
            <p className="mt-1 text-xs uppercase tracking-wide text-ink-soft">
              Monthly care plan
            </p>
          </div>
        </div>

        <p className="mt-8 text-[15px] font-medium text-ink">
          Everything you need to launch — and stay online.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          One flat $499 to design, build and launch a custom website that
          looks professional, works on every device and is optimized for
          Google. Then $39/month keeps it fast, secure and updated — hosting,
          security, backups and support all handled by us. Cancel the care
          plan anytime.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <p className="eyebrow">The build · $499</p>
            <ul className="mt-4 grid gap-2.5 text-sm text-ink">
              {BUILD_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">The care plan · $39/mo</p>
            <ul className="mt-4 grid gap-2.5 text-sm text-ink">
              {CARE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 hairline-t pt-8">
          <a href={STRIPE_CHECKOUT_URL} className="btn-gold w-full justify-center">
            {STRIPE_CTA_LABEL}
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-3 text-center text-xs text-ink-soft">
            {STRIPE_CTA_SUBLINE}
          </p>
        </div>
      </div>
    </div>
  );
}

function PortfolioStrip() {
  const items = [
    { src: heroMockup, name: "Oak & Blade Barbershop", place: "Barbershop" },
    { src: contractorMockup, name: "Craftwood Builders", place: "General contractor" },
    { src: restaurantMockup, name: "Trattoria Milano", place: "Restaurant" },
    { src: landscaperMockup, name: "GreenScape Landscaping", place: "Landscaping" },
  ];
  return (
    <section>
      <div className="container-tight py-20 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Built to attract customers, not just look good.
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="hidden shrink-0 text-sm text-ink underline-offset-4 hover:underline md:inline-flex"
          >
            See all work →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((p) => (
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
              <figcaption className="mt-4 flex items-baseline justify-between gap-4">
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

function Testimonials() {
  const items = [
    {
      quote:
        "We started getting calls the first week the site went live. It looks like something a huge company would have — and it cost less than a set of new tires for my truck.",
      name: "Marcus D.",
      role: "Owner, Northside Plumbing",
    },
    {
      quote:
        "I was nervous about spending money on a website. Seeing the demo first made all the difference. When I said yes, it was live in three days.",
      name: "Alicia R.",
      role: "Owner, Sage House Cleaning",
    },
    {
      quote:
        "They answer the phone. That sounds small until you've dealt with an agency that ghosts you. My site works, my customers can book online, and I know who to call.",
      name: "James P.",
      role: "Owner, Oak & Blade Barbershop",
    },
  ];
  return (
    <section className="bg-surface">
      <div className="container-tight py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">In their words</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            Small businesses. Real results.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <blockquote
              key={t.name}
              className="flex h-full flex-col rounded-2xl border border-hairline bg-background p-7"
            >
              <p className="font-display text-xl leading-snug text-ink">
                “{t.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-surface text-[12px] font-semibold text-ink">
                  {t.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">{t.name}</p>
                  <p className="text-xs text-ink-soft">{t.role}</p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section>
      <div className="container-tight py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
            Look like a business people can trust —{" "}
            <span className="italic text-ink-soft">even if you're just getting started.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-soft">
            First impressions happen online. Make yours count.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={STRIPE_CHECKOUT_URL} className="btn-gold">
              {STRIPE_CTA_LABEL}
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/contact" className="btn-ghost">
              Request a free demo
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
