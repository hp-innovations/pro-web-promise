import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | CoreLinkDev" },
      { name: "description", content: "Terms governing the use of the CoreLinkDev website and the services CoreLink LLC provides to clients." },
      { property: "og:title", content: "Terms of Service | CoreLinkDev" },
      { property: "og:description", content: "Terms for using CoreLinkDev services." },
      { property: "og:url", content: "https://corelinkdev.com/terms" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://corelinkdev.com/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <section>
      <div className="container-tight pt-16 pb-24 md:pt-24">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight text-ink md:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-ink-soft">Last updated: July 23, 2026</p>

        <div className="prose-legal mt-10 max-w-3xl">
          <p>
            These terms govern the use of the CoreLinkDev website and the
            services provided by CoreLink LLC (&ldquo;CoreLinkDev,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). By
            using the site or engaging us, you agree to these terms.
          </p>

          <h2>Our services</h2>
          <p>
            We design and build websites for a one-time fee of $499 and offer
            an optional monthly care plan for $39 per month covering hosting,
            security, updates, backups, and small content changes.
          </p>

          <h2>Payment</h2>
          <p>
            The one-time build fee is due after you approve your free demo,
            before launch. The monthly care plan is billed on a recurring
            basis. [BUSINESS OWNER MUST COMPLETE: billing cycle, accepted
            payment methods, late payment terms.]
          </p>

          <h2>Ownership</h2>
          <p>
            On launch day we transfer ownership of the domain, hosting
            account access, and website files to you. You own the final
            website. We retain the right to display anonymized or public
            examples of our work.
          </p>

          <h2>Client responsibilities</h2>
          <ul>
            <li>Provide content, images, and information needed to build the site in a reasonable time.</li>
            <li>Ensure you have the rights to any materials you provide.</li>
            <li>Pay invoices when due.</li>
          </ul>

          <h2>Cancellation</h2>
          <p>[BUSINESS OWNER MUST COMPLETE: cancellation terms for both the build fee and the monthly plan.]</p>

          <h2>Warranty and liability</h2>
          <p>
            We deliver the services with reasonable skill and care. To the
            fullest extent permitted by law, our total liability for any
            claim related to the services is limited to the amount you paid
            us in the twelve months before the claim.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of the State of New Mexico,
            USA. Any dispute arising from these terms or our services will be
            resolved in the state or federal courts located in New Mexico.
          </p>

          <h2>Contact</h2>
          <p>
            CoreLink LLC<br />
            1209 Mountain Road Place NE, Albuquerque, NM 87110<br />
            <a href="mailto:office@corelinkdev.com">office@corelinkdev.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}