import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ANALYTICS_OPT_OUT_KEY } from "../lib/analytics";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | CoreLinkDev" },
      { name: "description", content: "How CoreLinkDev uses cookies and similar technologies on this website." },
      { property: "og:title", content: "Cookie Policy | CoreLinkDev" },
      { property: "og:description", content: "How this site uses cookies." },
      { property: "og:url", content: "https://corelinkdev.com/cookies" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://corelinkdev.com/cookies" }],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  const [optedOut, setOptedOut] = useState<boolean | null>(null);
  const [preferenceError, setPreferenceError] = useState("");
  useEffect(() => {
    try { setOptedOut(localStorage.getItem(ANALYTICS_OPT_OUT_KEY) === "1"); }
    catch { setPreferenceError("Your browser does not allow this preference to be saved. You can use your browser's privacy controls instead."); }
  }, []);
  const setPreference = (disable: boolean) => {
    try {
      if (disable) localStorage.setItem(ANALYTICS_OPT_OUT_KEY, "1");
      else localStorage.removeItem(ANALYTICS_OPT_OUT_KEY);
      window.location.reload();
    } catch { setPreferenceError("The preference could not be saved. Please use your browser's privacy controls."); }
  };
  return (
    <section>
      <div className="container-tight pt-16 pb-24 md:pt-24">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight text-ink md:text-5xl">
          Cookie Policy
        </h1>
        <p className="mt-4 text-sm text-ink-soft">Last updated: September 27, 2026</p>

        <div className="prose-legal mt-10 max-w-3xl">
          <p>
            This page explains how the CoreLinkDev website uses cookies and
            similar technologies.
          </p>

          <h2>What cookies are</h2>
          <p>
            Cookies are small text files stored on your device by the browser.
            They help websites remember information about your visit.
          </p>

          <h2>Cookies we use</h2>
          <p>
            This site uses Google Analytics 4 to measure visits and interactions.
            Google Analytics can use first-party cookies such as _ga and _ga_*
            to distinguish browsers and maintain session information. Cookie
            duration depends on the Analytics configuration and browser settings;
            Google documents a default duration of two years for these cookies.
            Our site also uses browser local storage to remember an analytics
            opt-out or an owner-testing preference.
          </p>

          <h2>Your analytics preference</h2>
          <p>Disabling analytics stops this website from loading its Google Analytics tag on subsequent page loads in this browser. It does not delete information already collected. You can delete existing cookies in your browser settings.</p>
          <div className="not-prose my-6 rounded-xl border border-hairline p-5">
            <p role="status" className="text-sm text-ink">{optedOut === null ? "Reading your preference…" : optedOut ? "Analytics is disabled by your saved preference." : "No analytics opt-out is saved in this browser."}</p>
            <div className="mt-4 flex flex-wrap gap-4">
              <button type="button" onClick={() => setPreference(true)} className="btn-primary">Disable analytics</button>
              <button type="button" onClick={() => setPreference(false)} className="btn-ghost">Allow analytics</button>
            </div>
            {preferenceError && <p role="alert" className="mt-3 text-sm text-destructive">{preferenceError}</p>}
          </div>
          <h2>Managing cookies</h2>
          <p>
            Most browsers let you control cookies through their settings. You
            can block or delete cookies at any time. Some features of the site
            may not work correctly if you block essential cookies.
          </p>

          <h2>Contact</h2>
          <p>
            Questions? Email <a href="mailto:office@corelinkdev.com">office@corelinkdev.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
