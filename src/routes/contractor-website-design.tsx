import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import concept from "../assets/portfolio-contractor-clean.jpg?w=1400&format=webp&quality=76";
import conceptSet from "../assets/portfolio-contractor-clean.jpg?w=640;960;1200;1400&format=webp&quality=76&as=srcset";

const URL = "https://corelinkdev.com/contractor-website-design";
const DESCRIPTION = "Website design for contractors and home-service businesses. $499, one time, with a demo before payment. Show your projects and make quote requests easier.";
export const Route = createFileRoute("/contractor-website-design")({
  head: () => ({
    meta: [
      { title: "Contractor Website Design — $499 | CoreLinkDev" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Contractor Website Design | CoreLinkDev" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:image", content: "https://corelinkdev.com/og-cover.jpg" },
      { name: "twitter:title", content: "Contractor Website Design | CoreLinkDev" },
      { name: "twitter:image", content: "https://corelinkdev.com/og-cover.jpg" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@type": "Service", name: "Contractor Website Design",
      serviceType: "Website design for contractors and home-service businesses", url: URL,
      description: DESCRIPTION, provider: { "@id": "https://corelinkdev.com/#organization" },
      areaServed: { "@type": "Country", name: "United States" },
      offers: { "@type": "Offer", price: "499", priceCurrency: "USD", url: "https://corelinkdev.com/pricing" },
    }) }, { type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://corelinkdev.com/" },
        { "@type": "ListItem", position: 2, name: "Website Design", item: "https://corelinkdev.com/small-business-website-design" },
        { "@type": "ListItem", position: 3, name: "Contractor Website Design", item: URL },
      ],
    }) }],
  }),
  component: ContractorPage,
});

const FEATURES = [
  ["Make your services clear", "Separate the jobs you want: remodeling, new construction, repairs or specialty work. A visitor should not have to guess whether you take their project."],
  ["Show the work, not just a promise", "Use your project photographs with short descriptions of the work completed. Before-and-after images are useful when you have permission to publish them."],
  ["Make it easy to call from a phone", "Put a visible tap-to-call link and a short inquiry form where someone can find them. Ask for enough detail to begin a conversation, not a full project specification."],
  ["Explain where you actually work", "Describe the real areas you serve and any project requirements. We do not invent offices, licenses, reviews or service locations to fill a page."],
];

function ContractorPage() {
  return <>
    <section className="container-wide pt-12 pb-14 md:pt-20 md:pb-20">
      <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-2 text-xs text-ink-mute"><Link to="/">Home</Link><span>/</span><Link to="/small-business-website-design">Website design</Link><span>/</span><span>Contractors</span></nav>
      <p className="eyebrow">Contractors & home services</p>
      <h1 className="mt-5 max-w-4xl text-5xl font-medium leading-[.98] tracking-[-.05em] text-ink md:text-7xl">Website design that puts your work first.</h1>
      <p className="mt-6 text-2xl font-semibold text-ink">$499, one time. See a demo before you pay.</p>
      <p className="mt-5 max-w-2xl text-base leading-7 text-ink-soft md:text-lg">A practical website for general contractors, remodelers and home-service businesses. Show your services and projects, explain where you work, and give homeowners a clear way to request a conversation.</p>
      <div className="mt-8 flex flex-wrap gap-5"><Link to="/contact" className="btn-primary">Request my free demo <ArrowUpRight className="h-4 w-4" /></Link><a href="#contractor-concept" className="inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4">Explore the concept below</a></div>
      <p className="mt-4 text-sm text-ink-mute">Full ownership. Optional hosting and care for $39/month.</p>
    </section>
    <section id="contractor-concept" className="scroll-mt-24 border-y border-hairline py-14 md:py-20"><div className="container-wide">
      <div className="grid gap-8 lg:grid-cols-12"><div className="lg:col-span-4"><p className="eyebrow">Design walkthrough</p><h2 className="mt-4 text-3xl font-medium tracking-tight text-ink md:text-4xl">Craftwood Builders</h2><p className="mt-4 text-sm leading-7 text-ink-soft">This is a design concept created by CoreLinkDev, not a live client website or a customer case study. It shows a direction we can adapt to a real contractor's content, photographs and services.</p><p className="mt-4 text-sm leading-7 text-ink-soft">The large project image introduces the type of work. Clear service sections explain the offer, while a project-led layout leaves room for the details a homeowner needs before contacting you.</p><p className="mt-4 text-sm leading-7 text-ink-soft">Your demo would use your business name and agreed content. Booking tools, custom applications and e-commerce are not included in the standard website package.</p></div>
      <figure className="lg:col-span-8"><img src={concept} srcSet={conceptSet} sizes="(min-width:1024px) 65vw, 100vw" width={1400} height={875} loading="lazy" decoding="async" alt="Craftwood Builders contractor website concept by CoreLinkDev; a design example, not a client project." className="h-auto w-full border border-hairline bg-surface"/><figcaption className="mt-3 text-xs text-ink-mute">Concept design only. No client results or performance claims.</figcaption></figure></div>
    </div></section>
    <section className="container-wide py-14 md:py-20"><h2 className="text-3xl font-medium tracking-tight text-ink md:text-5xl">What your customers need to find.</h2><div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">{FEATURES.map(([title,copy])=><article key={title} className="border-t border-hairline pt-5"><h3 className="text-xl font-semibold text-ink">{title}</h3><p className="mt-3 text-sm leading-7 text-ink-soft">{copy}</p></article>)}</div></section>
    <section className="border-y border-hairline py-14 md:py-20"><div className="container-wide grid gap-10 md:grid-cols-2"><div><h2 className="text-3xl font-medium tracking-tight text-ink">What the $499 website includes.</h2><ul className="mt-6 grid gap-3 text-sm text-ink">{["Up to five pages with a scope agreed before work starts", "Responsive layouts for phones, tablets and computers", "A contact form and tap-to-call links", "Page titles, descriptions and other on-page SEO basics", "Launch assistance and full ownership of your site"].map(item=><li key={item} className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0"/><span>{item}</span></li>)}</ul><Link to="/pricing" className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4">Read full pricing and inclusions ↗</Link></div><div><h2 className="text-3xl font-medium tracking-tight text-ink">What we need from you.</h2><p className="mt-6 text-sm leading-7 text-ink-soft">Your business name, contact details, services, actual service area and project photos you are allowed to use. Send an existing logo or website if you have one. We agree the pages, content and any extra requirements before launch.</p><p className="mt-4 text-sm leading-7 text-ink-soft">Ongoing SEO campaigns and paid advertising are separate from basic website setup. A new website is not a guarantee of Google rankings or new jobs.</p><p className="mt-4 text-sm leading-7 text-ink-soft">The optional $39/month care plan includes hosting, one standard domain registration or renewal, business email, security, backups and small content updates.</p><Link to="/website-care" className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4">See the optional care plan ↗</Link></div></div></section>
    <section className="container-wide py-14 md:py-20"><h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-tight text-ink md:text-6xl">Show us your business. See a direction for your website.</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-ink-soft">Request a free demo with a short brief. Review the direction before deciding to pay. Already have a website? We can discuss a redesign instead.</p><div className="mt-7 flex flex-wrap gap-5"><Link to="/contact" className="btn-primary">Request a free demo <ArrowUpRight className="h-4 w-4"/></Link><Link to="/website-redesign" className="inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4">Website redesign</Link></div></section>
  </>;
}
