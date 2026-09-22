import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Code2, Gauge, LockKeyhole, Smartphone } from "lucide-react";
import barbershop from "../assets/portfolio-barbershop-clean.jpg?w=1600&format=webp&quality=76";
import barbershopSet from "../assets/portfolio-barbershop-clean.jpg?w=640;960;1280;1600&format=webp&quality=76&as=srcset";
import contractor from "../assets/portfolio-contractor-clean.jpg?w=1200&format=webp&quality=76";
import contractorSet from "../assets/portfolio-contractor-clean.jpg?w=480;800;1200&format=webp&quality=76&as=srcset";
import restaurant from "../assets/portfolio-restaurant-clean.jpg?w=1200&format=webp&quality=76";
import restaurantSet from "../assets/portfolio-restaurant-clean.jpg?w=480;800;1200&format=webp&quality=76&as=srcset";
import { PHONE, PHONE_TEL } from "../components/site-layout";
import { StripeButton } from "../components/stripe-button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CoreLinkDev: Premium Small Business Websites, $499 Flat" },
      { name: "description", content: "Premium small business websites built for speed, trust, and conversion. See a working demo before you pay. $499 flat build, optional $39 monthly care." },
      { property: "og:title", content: "CoreLinkDev: Premium Small Business Websites" },
      { property: "og:description", content: "Premium small business websites. Working demo before payment. $499 flat build." },
      { property: "og:url", content: "https://corelinkdev.com/" },
      { property: "og:image", content: "https://corelinkdev.com/og-cover.jpg" },
      { name: "twitter:title", content: "CoreLinkDev: Premium Small Business Websites" },
      { name: "twitter:description", content: "Working demo before payment. $499 flat build." },
      { name: "twitter:image", content: "https://corelinkdev.com/og-cover.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://corelinkdev.com/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Capabilities />
      <Process />
      <Pricing />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-wide relative py-10 md:py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-12">
            <div className="eyebrow reveal-up"><span className="h-2 w-2 rounded-full bg-ink" /> Independent web engineering studio</div>
            <h1 className="mt-4 max-w-[15ch] text-[3rem] font-medium leading-[.94] tracking-[-.055em] text-ink sm:text-[4.4rem] md:text-[6.4rem] lg:text-[8rem] xl:text-[9.4rem]">
              Websites for small businesses, built with the same care as the businesses themselves.
            </h1>
            <p className="mt-8 max-w-3xl text-[18px] leading-8 text-ink-soft md:text-xl">
              Strategy, design, development, launch. Built to feel premium on every screen, load fast, and make the next step obvious.
              You see a working demo before you pay.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link to="/contact" className="border-b border-ink pb-1 text-sm font-semibold text-ink">Request a free demo <ArrowUpRight className="h-4 w-4" /></Link>
              <Link to="/portfolio" className="border-b border-hairline pb-1 text-sm font-semibold text-ink">See the work</Link>
              <a href={`tel:${PHONE_TEL}`} className="px-2 text-sm font-semibold text-ink-soft hover:text-accent-1">{PHONE}</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-ink-soft">
              <span><strong className="text-ink">$499</strong> website build</span>
              <span><strong className="text-ink">$39/mo</strong> optional care</span>
              <span><strong className="text-ink">100%</strong> ownership</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-panel relative overflow-hidden rounded-none p-3 md:p-4">
              <div className="bg-transparent p-0">
                <div className="hidden">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <div className="ml-3 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] text-ink/50">corelinkdev.com / build</div>
                </div>
                <div className="overflow-hidden bg-surface">
                  <img src={barbershop} srcSet={barbershopSet} sizes="(min-width: 1024px) 620px, 100vw" alt="Premium barbershop website concept by CoreLinkDev." width={1600} height={1000} className="block w-full" fetchPriority="high" />
                </div>
              </div>
              <div className="hidden">
                {[
                  ["Mobile first", Smartphone],
                  ["Fast by default", Gauge],
                  ["Secure launch", LockKeyhole],
                  ["Custom code", Code2],
                ].map(([label, Icon]) => (
                  <div key={label as string} className="rounded-2xl border border-hairline bg-white/80 p-3">
                    <Icon className="h-4 w-4 text-accent-1" />
                    <p className="mt-2 text-xs font-semibold text-ink">{label as string}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  const items = [
    ["Demo first", "See the real site before committing."],
    ["Flat price", "$499 to design, build and launch."],
    ["Direct access", "Talk to the people doing the work."],
    ["Full ownership", "Your domain, files and access stay yours."],
  ];
  return (
    <section className="border-y border-hairline bg-white/55">
      <div className="container-wide grid gap-8 py-8 md:grid-cols-4 md:py-10">
        {items.map(([title, text]) => (
          <div key={title}>
            <p className="text-sm font-extrabold tracking-[-.01em] text-ink">{title}</p>
            <p className="mt-1 max-w-[24ch] text-sm leading-6 text-ink-soft">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedWork() {
  const secondary = [
    { name: "Trattoria Milano", type: "Restaurant", src: restaurant, srcSet: restaurantSet },
    { name: "Craftwood Builders", type: "Contractor", src: contractor, srcSet: contractorSet },
  ];
  return (
    <section id="work" className="py-14 md:py-20 lg:py-24">
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-3 max-w-5xl text-4xl font-medium leading-[1] tracking-[-.045em] text-ink md:text-6xl lg:text-7xl">The work should sell the studio before the sales call starts.</h2>
          </div>
          <Link to="/portfolio" className="btn-ghost shrink-0">View all concepts <ArrowUpRight className="h-4 w-4" /></Link>
        </div>

        <article className="mt-12 overflow-hidden rounded-none border border-hairline bg-white shadow-none">
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-8">
              <img src={barbershop} srcSet={barbershopSet} sizes="(min-width:1024px) 66vw,100vw" alt="Barbershop website concept by CoreLinkDev." width={1600} height={1000} loading="lazy" className="h-full w-full object-cover object-top" />
            </div>
            <div className="flex flex-col justify-between p-7 md:p-10 lg:col-span-4">
              <div>
                <p className="eyebrow">Barbershop concept</p>
                <h3 className="mt-4 text-3xl leading-tight text-ink">Oak & Blade</h3>
                <p className="mt-4 text-sm leading-7 text-ink-soft">A phone-first booking experience with immediate calls to action, visual proof, hours, location and a cleaner path to appointments.</p>
              </div>
              <div className="mt-10 border-t border-hairline pt-6">
                <p className="text-xs font-bold uppercase tracking-[.1em] text-ink-mute">Designed around</p>
                <p className="mt-2 text-sm text-ink">Mobile booking · Local trust · Fast decisions</p>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {secondary.map((p) => (
            <article key={p.name} className="group overflow-hidden rounded-none border border-hairline bg-white">
              <div className="aspect-[16/10] overflow-hidden bg-surface">
                <img src={p.src} srcSet={p.srcSet} sizes="(min-width:768px) 50vw,100vw" alt={`${p.type} website concept by CoreLinkDev.`} width={1200} height={750} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.018]" />
              </div>
              <div className="flex items-center justify-between p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.1em] text-ink-mute">{p.type}</p>
                  <h3 className="mt-1 text-xl text-ink">{p.name}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-ink-mute transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const items = [
    ["Positioning", "Clear hierarchy and messaging so visitors know exactly why they should choose you."],
    ["Design", "A custom visual system that looks deliberate, not like a theme with your logo added."],
    ["Development", "Responsive, accessible builds with performance and maintainability handled from the start."],
    ["Launch & care", "Domain, analytics, forms, integrations, hosting, backups and ongoing edits when you want them."],
  ];
  return (
    <section id="services" className="border-y border-hairline bg-background py-16 text-ink md:py-20">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow !text-ink/55">What we do</p>
            <h2 className="mt-5 max-w-[10ch] text-5xl leading-[.98] text-ink md:text-6xl lg:text-7xl">One studio. The whole website.</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-ink/60">We keep the team small and the work connected. Strategy, design and development are handled as one system instead of being passed between departments.</p>
          </div>
          <div className="lg:col-span-7">
            {items.map(([title, text]) => (
              <div key={title} className="grid gap-3 border-b border-hairline py-7 first:border-t md:grid-cols-[220px_1fr] md:gap-10">
                <h3 className="text-xl text-ink">{title}</h3>
                <p className="max-w-xl text-sm leading-7 text-ink/55">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const PROCESS = [
  ["01", "Tell us what needs to change", "A short form or call gives us the business, audience and priority."],
  ["02", "See the working direction", "We build an actual demo you can use on your phone and laptop."],
  ["03", "Refine it together", "You send notes. We tighten copy, layout, content and details."],
  ["04", "Approve and launch", "You pay the agreed build price and receive the site, domain and access."],
];

function Process() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="container-wide">
        <p className="eyebrow">Process</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-12">
          <h2 className="max-w-3xl text-4xl leading-[1] text-ink md:text-6xl lg:col-span-6">A premium process without agency theater.</h2>
          <p className="max-w-xl text-base leading-7 text-ink-soft lg:col-span-5 lg:col-start-8">No pitch deck marathon. No mystery handoffs. You see real work early, give direct feedback, and know what happens next.</p>
        </div>
        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map(([n,t,d]) => (
            <li key={n} className="rounded-none border border-hairline bg-white p-6">
              <span className="text-sm font-bold text-accent-1">{n}</span>
              <h3 className="mt-10 text-xl text-ink">{t}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const BUILD_FEATURES = ["Custom design","Responsive build","Contact forms","Basic SEO setup","Performance tuning","SSL setup","Social integration","Full ownership","Launch assistance"];
const CARE_FEATURES = ["Hosting","Security monitoring","Backups","Software updates","Bug fixes","Content edits","Performance checks","Priority support"];

function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container-wide">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">Pricing</p>
            <h2 className="mt-4 max-w-4xl text-4xl leading-[1] text-ink md:text-6xl">Premium presentation. Small-business pricing.</h2>
          </div>
          <p className="max-w-lg self-end text-base leading-7 text-ink-soft md:col-span-5">The website build is $499. Ongoing care is optional at $39/month. Clear scope, no long contract, and the site remains yours.</p>
        </div>
        <div className="mt-10"><CombinedPlanCard /></div>
      </div>
    </section>
  );
}

export function CombinedPlanCard() {
  return (
    <div className="grid overflow-hidden rounded-none border border-hairline bg-white shadow-none md:grid-cols-2">
      <div className="p-8 md:p-10 lg:p-12">
        <p className="eyebrow">Website build</p>
        <p className="mt-7 flex items-end gap-3 text-ink"><span className="text-6xl font-extrabold tracking-[-.06em] md:text-7xl">$499</span><span className="pb-2 text-sm text-ink-soft">one time</span></p>
        <p className="mt-5 max-w-md text-sm leading-7 text-ink-soft">Custom design, development and launch. You see the working demo before payment.</p>
        <ul className="mt-8 grid gap-3 text-sm text-ink">
          {BUILD_FEATURES.map((f)=><li key={f} className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-1"/>{f}</li>)}
        </ul>
        <div className="mt-9 flex flex-wrap gap-3"><Link to="/contact" className="btn-accent">Request a free demo</Link><StripeButton label="Start my website" size="lg" /></div>
      </div>
      <div className="bg-[#111111] p-8 text-white md:p-10 lg:p-12">
        <p className="eyebrow !text-white/55">Optional website care</p>
        <p className="mt-7 flex items-end gap-3"><span className="text-6xl font-extrabold tracking-[-.06em] md:text-7xl">$39</span><span className="pb-2 text-sm text-white/55">/ month</span></p>
        <p className="mt-5 max-w-md text-sm leading-7 text-white/60">Hosting, security, backups, maintenance and small content updates. Cancel anytime.</p>
        <ul className="mt-8 grid gap-3 text-sm text-white/85">
          {CARE_FEATURES.map((f)=><li key={f} className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-white/70"/>{f}</li>)}
        </ul>
        <p className="mt-8 border-t border-white/15 pt-6 text-xs leading-6 text-white/45">Third-party services such as domain registration, email, booking tools or payment providers may have their own fees depending on what your project uses.</p>
      </div>
    </div>
  );
}

function HomeFaq() {
  const items = [
    ["Do I own my website?","Yes. Your domain, files and access remain yours."],
    ["Do I have to use the care plan?","No. It is optional and can be added later."],
    ["How soon do I see something?","We start with a working demo rather than making you approve static mockups."],
    ["How do changes work?","Send your notes directly. We revise the demo before launch."],
  ];
  return (
    <section className="py-20 md:py-24">
      <div className="container-wide grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4"><p className="eyebrow">FAQ</p><h2 className="mt-4 text-4xl leading-tight text-ink md:text-5xl">Simple answers before we start.</h2></div>
        <div className="lg:col-span-8">
          {items.map(([q,a])=><div key={q} className="grid gap-2 border-b border-hairline py-6 first:border-t md:grid-cols-[1fr_1.2fr] md:gap-10"><h3 className="text-lg text-ink">{q}</h3><p className="text-sm leading-7 text-ink-soft">{a}</p></div>)}
          <Link to="/faq" className="mt-6 inline-flex text-sm font-bold text-accent-1">Read the full FAQ <ArrowUpRight className="ml-2 h-4 w-4"/></Link>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="pb-8 md:pb-12">
      <div className="container-wide">
        <div className="overflow-hidden rounded-none bg-[#111111] px-7 py-12 text-white md:px-12 md:py-16 lg:px-16">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="eyebrow !text-white/65">Start with the work</p>
              <h2 className="mt-5 max-w-4xl text-4xl leading-[.98] text-white md:text-6xl">See what your business could look like before you pay for it.</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/75">Tell us what you do. We’ll turn it into a working direction you can actually click through.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
              <Link to="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5">Request a free demo <ArrowUpRight className="ml-2 h-4 w-4"/></Link>
              <a href={`tel:${PHONE_TEL}`} className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-5 text-sm font-bold text-ink">Call {PHONE}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
