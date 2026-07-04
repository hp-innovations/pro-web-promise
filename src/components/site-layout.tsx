import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useGeo } from "../hooks/use-geo";

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

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col bg-background text-ink">
      <SiteHeader open={open} setOpen={setOpen} />
      <main className="flex-1">{children}</main>
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

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
              activeProps={{ className: "text-sm text-ink" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
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
            Get free demo
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="hairline-t bg-background md:hidden">
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
              className="mt-3 inline-flex items-center justify-center rounded-full bg-ink px-4 py-3 text-sm font-medium text-white"
            >
              Get free demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2">
      <span className="grid h-8 w-8 place-items-center rounded-md bg-ink text-white">
        <span className="font-display text-lg leading-none">C</span>
      </span>
      <span className="text-[15px] font-semibold tracking-tight text-ink">
        CoreLink<span className="text-gold">Dev</span>
      </span>
    </span>
  );
}

function SiteFooter() {
  const geo = useGeo();
  const cityLine =
    geo.loaded && geo.city && geo.isLocal
      ? `Building the best websites for ${geo.city} businesses`
      : "Proudly serving small businesses across the Chicago area";

  return (
    <footer className="hairline-t bg-surface">
      <div className="container-tight grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
            Professional websites for small businesses. Custom-built, launched
            in days, one flat price. See a free demo before you pay a cent.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-hairline bg-background px-3 py-1.5 text-xs text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {cityLine}
          </p>
        </div>

        <div>
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

        <div>
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
          <p>Handcrafted in the Chicago area · corelinkdev.com</p>
        </div>
      </div>
    </footer>
  );
}

export { PHONE, PHONE_TEL };