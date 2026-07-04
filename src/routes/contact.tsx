import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare, Phone } from "lucide-react";
import { FormEvent, ReactNode, useState } from "react";
import { PHONE, PHONE_TEL } from "../components/site-layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CoreLinkDev" },
      {
        name: "description",
        content:
          "Tell us about your business and get a free website demo. Or call 312-296-6033 — a real person answers.",
      },
      { property: "og:title", content: "Contact — CoreLinkDev" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section>
        <div className="container-tight pt-16 pb-8 md:pt-24 md:pb-12">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-6xl">
            Let's build your free demo.
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
                    <h2 className="font-display text-2xl text-ink">Thanks — we've got it.</h2>
                    <p className="mt-3 text-sm text-ink-soft">
                      A real person from our team will reply within one
                      business day. If it's urgent, call {PHONE}.
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-5">
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
                    <button type="submit" className="btn-gold mt-2 justify-center">
                      Request my free demo
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
                    Proudly serving Chicago-area small businesses.
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