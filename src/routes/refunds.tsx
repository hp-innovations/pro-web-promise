import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/refunds")({
  head: () => ({
    meta: [
      { title: "Refund Policy | CoreLinkDev" },
      { name: "description", content: "Refund policy for the CoreLinkDev website build fee and monthly care plan." },
      { property: "og:title", content: "Refund Policy | CoreLinkDev" },
      { property: "og:description", content: "How refunds work for CoreLinkDev services." },
      { property: "og:url", content: "https://corelinkdev.com/refunds" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://corelinkdev.com/refunds" }],
  }),
  component: RefundsPage,
});

function RefundsPage() {
  return (
    <section>
      <div className="container-tight pt-16 pb-24 md:pt-24">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight text-ink md:text-5xl">
          Refund Policy
        </h1>
        <p className="mt-4 text-sm text-ink-soft">Last updated: [BUSINESS OWNER MUST COMPLETE: date]</p>

        <div className="prose-legal mt-10 max-w-3xl">
          <p>
            We want clients to feel good about working with us. This page
            explains how refunds work for the build fee and the monthly care
            plan.
          </p>

          <h2>Free demo first</h2>
          <p>
            You see a real demo of your website before you pay anything. If
            you don&rsquo;t want to move forward after the demo, you owe us nothing.
          </p>

          <h2>$499 build fee</h2>
          <p>
            [BUSINESS OWNER MUST COMPLETE: refund terms for the build fee,
            e.g., &ldquo;Refundable within X days of launch if...&rdquo; or &ldquo;Non-refundable
            once launched because...&rdquo;]
          </p>

          <h2>$39 monthly care plan</h2>
          <p>
            [BUSINESS OWNER MUST COMPLETE: refund and cancellation terms for
            the monthly plan, e.g., &ldquo;Cancel any time; billing stops at the
            end of the current month; no partial-month refunds.&rdquo;]
          </p>

          <h2>How to request a refund</h2>
          <p>
            Email <a href="mailto:office@corelinkdev.com">office@corelinkdev.com</a> with
            your business name and a short note. We reply within one business day.
          </p>
        </div>
      </div>
    </section>
  );
}