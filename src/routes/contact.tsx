import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageSquare, Phone } from "lucide-react";
import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { trackEvent } from "../lib/analytics";
import { PHONE, PHONE_TEL } from "../components/site-layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact CoreLinkDev | Request a Free Website Demo" },
      {
        name: "description",
        content:
          "Contact CoreLinkDev to request a free small business website demo. Call 312-296-6033 or send a short message. A real person replies within one business day.",
      },
      { property: "og:title", content: "Contact CoreLinkDev | Request a Free Demo" },
      { property: "og:description", content: "Send a message or call. A real person replies within one business day." },
      { property: "og:url", content: "https://corelinkdev.com/contact" },
      { property: "og:image", content: "https://corelinkdev.com/og-cover.jpg" },
      { name: "twitter:title", content: "Contact CoreLinkDev | Request a Free Demo" },
      { name: "twitter:image", content: "https://corelinkdev.com/og-cover.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://corelinkdev.com/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://corelinkdev.com/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: "https://corelinkdev.com/contact" },
          ],
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const inFlight = useRef(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inFlight.current || sent) return;
    setError(null);

    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const fd = new FormData(form);

    if ((fd.get("botcheck") as string)?.length) return; // honeypot

    const business = (fd.get("business") as string)?.trim() ?? "";
    const name = (fd.get("name") as string)?.trim() ?? "";
    const phoneRaw = (fd.get("phone") as string)?.trim() ?? "";
    const email = (fd.get("email") as string)?.trim() ?? "";
    const existing = (fd.get("existing") as string)?.trim() ?? "";
    const service = (fd.get("service") as string)?.trim() ?? "";
    const message = (fd.get("message") as string)?.trim() ?? "";
    const consent = fd.get("consent") as string | null;

    if (!business) {
      setError("Please enter your business name.");
      return;
    }
    if (!name) {
      setError("Please enter your name.");
      return;
    }
    if (!consent) {
      setError("Please confirm you agree to the Privacy Policy.");
      return;
    }
    const digits = phoneRaw.replace(/\D/g, "");
    const validUS =
      (digits.length === 10) || (digits.length === 11 && digits.startsWith("1"));
    if (!phoneRaw && !email) {
      setError("Please provide a phone number or email so we can reply.");
      return;
    }
    if (phoneRaw && !validUS) {
      setError("Please enter a valid US phone number.");
      return;
    }

    inFlight.current = true;
    setSending(true);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        signal: controller.signal,
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "6740aefc-1578-4983-9d4c-6e0de353ee17",
          subject: "New demo request from corelinkdev.com",
          from_name: "CoreLinkDev Website",
          business,
          name,
          phone: phoneRaw,
          email,
          existing_website: existing,
          requested_service: service,
          message,
          botcheck: "",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.success === true) {
        setSent(true);
        trackEvent("generate_lead", { form_id: "demo_request", lead_source: "website", method: "contact_form" });
      } else {
        setError(
          `Something went wrong. Please call us at ${PHONE}.`,
        );
      }
    } catch {
      setError(`We could not confirm whether your request was received. Please call ${PHONE} before sending again.`);
    } finally {
      window.clearTimeout(timeout);
      inFlight.current = false;
      setSending(false);
    }
  };

  return (
    <>
      <section>
        <div className="container-wide pt-16 pb-10 md:pt-24 md:pb-14">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-5 max-w-4xl text-5xl leading-[.98] text-ink md:text-7xl">
            Show us the business. We’ll show you the website.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            Fill in a short form and we'll set up your free demo. A real
            person replies within one business day. Prefer to talk? Use
            the phone number on the right.
          </p>
        </div>
      </section>

      <section>
        <div className="container-wide pb-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <form
                id="demo-request-form"
                onSubmit={onSubmit}
                noValidate
                aria-label="Request a free demo"
                className="rounded-[28px] border border-hairline bg-white p-6 shadow-[0_24px_80px_rgba(25,36,56,.07)] md:p-9"
              >
                {sent ? (
                  <div role="status" aria-live="polite" className="py-8 text-center">
                    <h2 className="font-display text-2xl text-ink">Thanks!</h2>
                    <p className="mt-3 text-sm text-ink-soft">
                      We'll get back to you within one business day. Or call us now:{" "}
                      <a href={`tel:${PHONE_TEL}`} className="text-ink underline underline-offset-4">
                        {PHONE}
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-5">
                    <input
                      type="checkbox"
                      name="botcheck"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />
                    <Field label="Business name (required)">
                      <input
                        required
                        name="business"
                        autoComplete="organization"
                        maxLength={150}
                        className="w-full rounded-xl border border-hairline bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-accent-1 focus:ring-4 focus:ring-accent-1-soft"
                      />
                    </Field>
                    <Field label="Your name (required)">
                      <input
                        required
                        name="name"
                        autoComplete="name"
                        maxLength={100}
                        className="w-full rounded-xl border border-hairline bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-accent-1 focus:ring-4 focus:ring-accent-1-soft"
                      />
                    </Field>
                    <p className="text-sm text-ink-soft">Add a phone number or email address — whichever you prefer.</p>
                    <div className="grid gap-5 md:grid-cols-2">
                      <Field label="Phone">
                        <input
                          autoComplete="tel"
                          type="tel"
                          name="phone"
                          maxLength={25}
                          className="w-full rounded-xl border border-hairline bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-accent-1 focus:ring-4 focus:ring-accent-1-soft"
                        />
                      </Field>
                      <Field label="Email">
                        <input
                          autoComplete="email"
                          type="email"
                          name="email"
                          maxLength={254}
                          className="w-full rounded-xl border border-hairline bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-accent-1 focus:ring-4 focus:ring-accent-1-soft"
                        />
                      </Field>
                    </div>
                    <details className="rounded-xl border border-hairline p-4">
                      <summary className="cursor-pointer text-sm font-semibold text-ink">Add project details (optional)</summary>
                      <div className="mt-5 grid gap-5">
                    <Field label="Tell us a little about your business">
                      <textarea
                        name="message"
                        maxLength={4000}
                        rows={5}
                        className="w-full rounded-xl border border-hairline bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-accent-1 focus:ring-4 focus:ring-accent-1-soft"
                      />
                    </Field>
                    <Field label="Existing website (if any)">
                      <input
                        name="existing"
                        maxLength={500}
                        placeholder="https://"
                        className="w-full rounded-xl border border-hairline bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-accent-1 focus:ring-4 focus:ring-accent-1-soft"
                      />
                    </Field>
                    <Field label="What do you need?">
                      <select
                        name="service"
                        defaultValue=""
                        className="w-full rounded-xl border border-hairline bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-accent-1 focus:ring-4 focus:ring-accent-1-soft"
                      >
                        <option value="">Select one</option>
                        <option value="new-website">A new website</option>
                        <option value="redesign">Redesign an existing website</option>
                        <option value="care-plan-only">Care plan for an existing site</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </Field>
                      </div>
                    </details>
                    <label className="flex items-start gap-3 text-sm text-ink-soft">
                      <input
                        type="checkbox"
                        name="consent"
                        value="yes"
                        required
                        className="mt-1 h-4 w-4 rounded border-hairline text-ink focus:ring-2 focus:ring-gold"
                      />
                      <span>
                        I agree that CoreLinkDev may contact me about my
                        request. I've read the{" "}
                        <Link to="/privacy" className="text-ink underline underline-offset-4">
                          Privacy Policy
                        </Link>
                        .
                      </span>
                    </label>
                    <div aria-live="polite" aria-atomic="true">
                    {error && (
                      <p role="alert" className="text-sm text-destructive">
                        {error}{" "}
                        <a
                          href={`tel:${PHONE_TEL}`}
                          className="text-ink underline underline-offset-4"
                        >
                          {PHONE}
                        </a>
                      </p>
                    )}
                    </div>
                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-accent mt-2 w-full justify-center disabled:opacity-60"
                    >
                      {sending ? "Sending…" : "Request my free demo"}
                    </button>
                    <p className="text-xs text-ink-soft">
                      No deposit to request a demo. A real person replies within
                      one business day.
                    </p>
                  </div>
                )}
              </form>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-[28px] bg-[#0b0e14] p-7 text-white md:p-9">
                <p className="eyebrow !text-white/50">Prefer to talk?</p>
                <p className="mt-5 text-3xl leading-tight text-white md:text-4xl">
                  {PHONE}
                </p>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="mt-6 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-ink"
                >
                  <Phone className="h-4 w-4" /> Call now
                </a>
                <a
                  href={`sms:${PHONE_TEL}`}
                  className="mt-3 flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3.5 text-sm font-bold text-white"
                >
                  <MessageSquare className="h-4 w-4" /> Text us
                </a>
                <p className="mt-6 text-xs text-white/55">
                  A real person replies within one business day.
                </p>

                <div className="mt-8 border-t border-white/15 pt-6 text-sm text-white/55">
                  <p className="text-white">CoreLink LLC</p>
                  <p className="mt-3">
                    Proudly serving small businesses nationwide across the USA.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium tracking-wide text-ink-soft uppercase">
        {label}
      </span>
      {children}
    </label>
  );
}
