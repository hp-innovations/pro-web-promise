import { createFileRoute } from "@tanstack/react-router";

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
  return (
    <section>
      <div className="container-tight pt-16 pb-24 md:pt-24">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight text-ink md:text-5xl">
          Cookie Policy
        </h1>
        <p className="mt-4 text-sm text-ink-soft">Last updated: July 23, 2026</p>

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
            This site uses only the cookies needed to make it work properly. We
            do not use analytics, marketing, or third-party advertising cookies.
            If this changes in the future, we will update this page and list each
            cookie with its purpose and retention period.
          </p>

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