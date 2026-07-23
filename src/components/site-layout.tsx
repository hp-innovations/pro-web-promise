import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { STRIPE_CHECKOUT_URL } from "../lib/stripe";

const PHONE = "312-296-6033";
const PHONE_TEL = "+13122966033";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Work" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

const LEGAL_NAV = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/refunds", label: "Refund & Cancellation" },
  { to: "/cookies", label: "Cookie Policy" },
  { to: "/accessibility", label: "Accessibility" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col bg-background text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to main content
      </a>
      <SiteHeader open={open} setOpen={setOpen} />
      <main id="main" className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-40 hairline-b bg-background/85 backdrop-blur">
      <div className="container-tight flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative text-sm font-bold tracking-tight text-ink transition-colors"
              activeProps={{ className: "is-active" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              <span className="relative inline-block">
                {item.label}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100 group-[.is-active]:scale-x-100"
                />
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden items-center gap-2 rounded-full border border-hairline px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface md:inline-flex"
          >
            <Phone className="h-4 w-4" strokeWidth={2} />
            {PHONE}
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            aria-label={`Call ${PHONE}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white md:hidden"
          >
            <Phone className="h-4 w-4" strokeWidth={2} />
          </a>
          <Link
            to="/contact"
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90 md:inline-flex"
          >
            Get Free Demo
          </Link>
          <a
            href={STRIPE_CHECKOUT_URL}
            className="hidden rounded-full bg-gold px-4 py-2 text-sm font-medium text-ink transition-opacity hover:opacity-90 md:inline-flex"
          >
            Get started
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-ink md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" strokeWidth={3.5} /> : <Menu className="h-5 w-5" strokeWidth={3.5} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="hairline-t bg-background md:hidden">
          <nav className="container-tight flex flex-col py-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="py-2.5 text-base text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-gold mt-3"
            >
              Get Free Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={STRIPE_CHECKOUT_URL}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gold px-4 py-3 text-sm font-medium text-ink"
            >
              Get started — $499 + $39/mo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Logo() {
  return (
    <span className="inline-flex items-center rounded-full bg-ink px-4 py-2 text-[13px] font-medium tracking-tight text-white">
      CoreLink<span className="text-gold">Dev</span>
    </span>
  );
}

function SiteFooter() {
  return (
    <footer className="hairline-t bg-surface">
      <div className="container-tight grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
            We build professional websites for small businesses. One flat
            $499 to design and launch, $39 a month if you want us to keep
            it hosted, updated, and secure. You see a demo before you pay.
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-ink-soft hover:text-ink">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow">Legal</p>
          <ul className="mt-4 space-y-2 text-sm">
            {LEGAL_NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-ink-soft hover:text-ink">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li>
              <a href={`tel:${PHONE_TEL}`} className="hover:text-ink">
                {PHONE}
              </a>
            </li>
            <li>
              <a href="mailto:office@corelinkdev.com" className="hover:text-ink">
                office@corelinkdev.com
              </a>
            </li>
            <li className="pt-3 text-ink">CoreLink LLC</li>
            <li>1209 Mountain Road Place NE</li>
            <li>Albuquerque, NM 87110</li>
          </ul>
        </div>
      </div>
      <div className="hairline-t">
        <div className="container-tight flex flex-col items-start justify-between gap-2 py-5 text-xs text-ink-soft md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} CoreLink LLC. All rights reserved.</p>
          <p>corelinkdev.com</p>
        </div>
      </div>
    </footer>
  );
}

export { PHONE, PHONE_TEL };