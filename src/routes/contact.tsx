import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare, Phone } from "lucide-react";
import { FormEvent, ReactNode, useState } from "react";
import { PHONE, PHONE_TEL } from "../components/site-layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get a Website for My Business — Contact CoreLinkDev" },
      {
        name: "description",
        content:
          "Get a website for your business — free demo first, flat $499 if you love it. Call 312-296-6033 or message us; reply within one business day.",
      },
      { property: "og:title", content: "Get a Website for My Business — CoreLinkDev" },
      { property: "og:description", content: "Free demo first, $499 flat if you love it. Real person, one business day." },
      { property: "og:url", content: "https://corelinkdev.com/contact" },
      { property: "og:image", content: "https://corelinkdev.com/og-cover.jpg" },
      { name: "twitter:title", content: "Get a Website for My Business — CoreLinkDev" },
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
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    if ((fd.get("botcheck") as string)?.length) return; // honeypot

    const business = (fd.get("business") as string)?.trim() ?? "";
    const name = (fd.get("name") as string)?.trim() ?? "";
    const phoneRaw = (fd.get("phone") as string)?.trim() ?? "";
    const email = (fd.get("email") as string)?.trim() ?? "";
    const message = (fd.get("message") as string)?.trim() ?? "";

    if (!business) {
      setError("Please enter your business name.");
      return;
    }
    const digits = phoneRaw.replace(/\D/g, "");
    const validUS =
      (digits.length === 10) || (digits.length === 11 && digits.startsWith("1"));
    if (!validUS) {
      setError("Please enter a valid US phone number.");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "6740aefc-1578-4983-9d4c-6e0de353ee17",
          subject: "New demo request from corelinkdev.com",
          from_name: "CoreLinkDev Website",
          business,
          name,
          phone: phoneRaw,
          email,
          message,
          botcheck: "",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.success) {
        setSent(true);
      } else {
        setError(
          `Something went wrong. Please call us at ${PHONE}.`,
        );
      }
    } catch {
      setError(`Something went wrong. Please call us at ${PHONE}.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section>
        <div className="container-tight pt-16 pb-8 md:pt-24 md:pb-12">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-6xl">
            Get a website for your business — free demo first.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Tell us about your business and we'll get back to you within one
            business day. Prefer to talk? Call the number on the right — a
            real person answers.
          </p>
        </div>
      </section>

      <section>
        <div className="container-tight pb-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <form
                onSubmit={onSubmit}
                className="rounded-2xl border border-hairline bg-background p-6 md:p-8"
              >
                {sent ? (
                  <div className="py-8 text-center">
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
                    <Field label="Business name">
                      <input
                        required
                        name="business"
                        placeholder="e.g. Northside Plumbing"
                        className="w-full rounded-md border border-hairline bg-background px-3.5 py-2.5 text-sm text-ink outline-none focus:border-ink"
                      />
                    </Field>
                    <Field label="Your name">
                      <input
                        required
                        name="name"
                        className="w-full rounded-md border border-hairline bg-background px-3.5 py-2.5 text-sm text-ink outline-none focus:border-ink"
                      />
                    </Field>
                    <div className="grid gap-5 md:grid-cols-2">
                      <Field label="Phone">
                        <input
                          required
                          type="tel"
                          name="phone"
                          placeholder="(___) ___-____"
                          className="w-full rounded-md border border-hairline bg-background px-3.5 py-2.5 text-sm text-ink outline-none focus:border-ink"
                        />
                      </Field>
                      <Field label="Email">
                        <input
                          type="email"
                          name="email"
                          className="w-full rounded-md border border-hairline bg-background px-3.5 py-2.5 text-sm text-ink outline-none focus:border-ink"
                        />
                      </Field>
                    </div>
                    <Field label="Tell us a little about your business">
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="What do you do? Who are your customers? Do you have a website today?"
                        className="w-full rounded-md border border-hairline bg-background px-3.5 py-2.5 text-sm text-ink outline-none focus:border-ink"
                      />
                    </Field>
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
                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-gold mt-2 justify-center disabled:opacity-60"
                    >
                      {sending ? "Sending…" : "Request my free demo"}
                    </button>
                    <p className="text-xs text-ink-soft">
                      No deposit. No contract. A real person replies within
                      one business day.
                    </p>
                  </div>
                )}
              </form>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-2xl border border-hairline bg-surface p-6 md:p-8">
                <p className="eyebrow">Prefer to talk?</p>
                <p className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
                  {PHONE}
                </p>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="mt-5 flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-medium text-white"
                >
                  <Phone className="h-4 w-4" /> Call now
                </a>
                <a
                  href={`sms:${PHONE_TEL}`}
                  className="mt-3 flex items-center justify-center gap-2 rounded-full border border-hairline bg-background px-5 py-3.5 text-sm font-medium text-ink"
                >
                  <MessageSquare className="h-4 w-4" /> Text us
                </a>
                <p className="mt-6 text-xs text-ink-soft">
                  A real person replies within one business day.
                </p>

                <div className="mt-8 hairline-t pt-6 text-sm text-ink-soft">
                  <p className="text-ink">CoreLink LLC</p>
                  <p>1209 Mountain Road Place NE</p>
                  <p>Albuquerque, NM 87110</p>
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