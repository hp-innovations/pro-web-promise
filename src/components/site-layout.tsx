import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { StripeButton } from "./stripe-button";

const PHONE = "312-296-6033";
const PHONE_TEL = "+13122966033";

type NavEntry = { to: string; label: string };

const NAV: readonly NavEntry[] = [
  { to: "/portfolio", label: "Work" },
  { to: "/pricing", label: "Pricing" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
];

const FOOTER_NAV: readonly NavEntry[] = [
  { to: "/portfolio", label: "Work" },
  { to: "/pricing", label: "Pricing" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

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
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to main content
      </a>
      <SiteHeader open={open} setOpen={setOpen} />
      <main id="main" className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

function NavItem({ item, onClick }: { item: NavEntry; onClick?: () => void }) {
  const cls =
    "text-[13.5px] font-medium tracking-tight text-ink-soft transition-colors hover:text-ink";
  return (
    <Link
      to={item.to as never}
      onClick={onClick}
      className={cls}
      activeProps={{ className: "text-ink" }}
    >
      {item.label}
    </Link>
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
    <header className="sticky top-0 z-40 border-b border-hairline bg-background/90 backdrop-blur">
      <div className="container-wide flex h-16 items-center justify-between md:h-20">
        <Link
          to="/"
          className="group inline-flex items-center rounded-[3px] border-[3px] border-ink px-4 py-2.5 transition-colors hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          onClick={() => setOpen(false)}
        >
          <Wordmark variant="boxed" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <NavItem key={item.to} item={item} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden text-[13.5px] font-medium text-ink-soft transition-colors hover:text-ink lg:inline-block"
          >
            {PHONE}
          </a>
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-[3px] border border-ink px-4 py-2.5 text-[13.5px] font-semibold text-ink transition-colors hover:bg-ink hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-background md:inline-flex"
          >
            Request a Free Demo
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
          </Link>
          <div className="hidden md:inline-flex">
            <StripeButton size="sm" />
          </div>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex h-11 w-11 items-center justify-center rounded border border-ink text-ink md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" strokeWidth={2.5} /> : <Menu className="h-5 w-5" strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-hairline bg-background md:hidden">
          <nav className="container-wide flex flex-col py-4">
            {NAV.map((item) => (
              <div key={item.to} className="border-b border-hairline last:border-b-0">
                <NavItem item={item} onClick={() => setOpen(false)} />
                <span className="block h-10" />
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[3px] border border-ink px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-background"
            >
              Request a Free Demo
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <div className="mt-3 w-full [&>a]:w-full">
              <StripeButton />
            </div>
            <p className="mt-2 text-center text-xs text-ink-mute">
              $499 website build + $39/month care
            </p>
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => setOpen(false)}
              className="mt-3 text-center text-sm text-ink-soft"
            >
              or call {PHONE}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Wordmark({
  tone = "ink",
  variant = "plain",
}: {
  tone?: "ink" | "light";
  variant?: "plain" | "boxed";
}) {
  const isBoxed = variant === "boxed";
  const color =
    tone === "light"
      ? "text-background"
      : isBoxed
        ? "text-ink group-hover:text-background"
        : "text-ink";
  const accent =
    tone === "light"
      ? "text-accent-1-soft"
      : isBoxed
        ? "text-accent-1 group-hover:text-accent-1-soft"
        : "text-accent-1";
  return (
    <span
      className={`inline-flex items-center font-sans text-[17px] font-extrabold tracking-[-0.02em] ${color}`}
    >
      CORELINK<span className={`${accent} font-bold`}>·</span>DEV
    </span>
  );
}

// Kept for backwards compatibility with any legacy imports.
export const Logo = Wordmark;

function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-background text-ink">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Wordmark />
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-soft">
            A small independent studio building professional websites for small
            businesses. One flat $499 to design and launch. $39 a month if you
            want us to keep it hosted and cared for. You see a demo before you
            pay.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              Request a Free Demo
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="label-tag text-ink-mute">Studio</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {FOOTER_NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to as never} className="text-ink-soft hover:text-ink">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="label-tag text-ink-mute">Legal</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {LEGAL_NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to as never} className="text-ink-soft hover:text-ink">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="label-tag text-ink-mute">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
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
            <li className="pt-4 text-ink">CoreLink LLC</li>
            <li>Serving small businesses across the United States</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="container-wide flex flex-col items-start justify-between gap-2 py-6 text-xs text-ink-mute md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} CoreLink LLC. All rights reserved.</p>
          <p>corelinkdev.com</p>
        </div>
      </div>
    </footer>
  );
}

export { PHONE, PHONE_TEL };
