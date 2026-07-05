import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Mail, Phone } from "lucide-react";
import { PHONE, PHONE_TEL } from "../components/site-layout";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank you — Your order is confirmed · CoreLinkDev" },
      {
        name: "description",
        content:
          "Your payment was received. A receipt has been emailed to you and our team will be in touch within one business day.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Thank you — CoreLinkDev" },
    ],
    links: [{ rel: "canonical", href: "/thank-you" }],
  }),
  component: ThankYouPage,
  validateSearch: (search: Record<string, unknown>) => ({
    session_id:
      typeof search.session_id === "string" ? search.session_id : undefined,
  }),
});

function ThankYouPage() {
  const { session_id } = Route.useSearch();
  const orderRef = session_id ? session_id.slice(-10).toUpperCase() : null;

  return (
    <>
      <section>
        <div className="container-tight pt-20 pb-10 md:pt-28 md:pb-14 text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold-soft text-ink">
            <Check className="h-6 w-6" strokeWidth={2.5} />
          </span>
          <p className="eyebrow mt-6">Payment received</p>
          <h1 className="mt-4 mx-auto max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-6xl">
            Thank you. Your project is officially on our desks.
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-ink-soft">
            We've received your payment for the $499 build plus your $39/month
            care plan. A receipt from Stripe is on its way to your inbox — keep
            it for your records.
          </p>
          {orderRef && (
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-4 py-2 text-sm text-ink">
              <span className="text-ink-soft">Order reference</span>
              <span className="font-mono text-ink">#{orderRef}</span>
            </p>
          )}
        </div>
      </section>

      <section>
        <div className="container-tight pb-20">
          <div className="mx-auto max-w-3xl rounded-2xl border border-hairline bg-background p-6 md:p-10">
            <p className="eyebrow">What happens next</p>
            <ol className="mt-6 grid gap-6">
              {NEXT_STEPS.map((s) => (
                <li key={s.n} className="flex gap-5">
                  <span className="font-display text-2xl text-gold leading-none pt-1">
                    {s.n}
                  </span>
                  <div>
                    <p className="text-base font-medium text-ink">{s.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 hairline-t pt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center justify-center gap-2 rounded-full border border-hairline bg-background px-5 py-3 text-sm font-medium text-ink hover:bg-surface"
              >
                <Phone className="h-4 w-4" /> Call {PHONE}
              </a>
              <a
                href="mailto:office@corelinkdev.com"
                className="flex items-center justify-center gap-2 rounded-full border border-hairline bg-background px-5 py-3 text-sm font-medium text-ink hover:bg-surface"
              >
                <Mail className="h-4 w-4" /> office@corelinkdev.com
              </a>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link to="/" className="btn-ghost">
              Back to home <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const NEXT_STEPS = [
  {
    n: "01",
    title: "Kickoff email within one business day",
    body: "A real person from our team will reach out to schedule a short intake call and gather what we need to start your demo.",
  },
  {
    n: "02",
    title: "We build your demo",
    body: "You'll get a real, working website to click through — usually within a few days. Revisions are included.",
  },
  {
    n: "03",
    title: "Launch day",
    body: "Once you're happy, we launch your site and hand over full ownership. Your $39/month care plan starts protecting it from day one.",
  },
];