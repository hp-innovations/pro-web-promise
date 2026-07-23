import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility Statement | CoreLinkDev" },
      { name: "description", content: "Our commitment to making the CoreLinkDev website usable by everyone." },
      { property: "og:title", content: "Accessibility Statement | CoreLinkDev" },
      { property: "og:description", content: "How we work to keep this website accessible." },
      { property: "og:url", content: "https://corelinkdev.com/accessibility" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://corelinkdev.com/accessibility" }],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <section>
      <div className="container-tight pt-16 pb-24 md:pt-24">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight text-ink md:text-5xl">
          Accessibility Statement
        </h1>
        <p className="mt-4 text-sm text-ink-soft">Last updated: [BUSINESS OWNER MUST COMPLETE: date]</p>

        <div className="prose-legal mt-10 max-w-3xl">
          <p>
            CoreLinkDev is committed to making this website usable by as many
            people as possible, including those who rely on assistive
            technologies.
          </p>

          <h2>What we do</h2>
          <ul>
            <li>Use semantic HTML so screen readers can navigate the site.</li>
            <li>Provide text alternatives for meaningful images.</li>
            <li>Maintain color contrast that meets WCAG AA guidelines.</li>
            <li>Support keyboard navigation and visible focus indicators.</li>
            <li>Respect user preferences for reduced motion.</li>
          </ul>

          <h2>Standards we aim for</h2>
          <p>
            We aim to conform to the Web Content Accessibility Guidelines
            (WCAG) 2.1 Level AA.
          </p>

          <h2>Feedback</h2>
          <p>
            If you run into an accessibility barrier on this site, please
            let us know at{" "}
            <a href="mailto:office@corelinkdev.com">office@corelinkdev.com</a> or by
            phone at 312-296-6033. We&rsquo;ll do our best to fix it.
          </p>
        </div>
      </div>
    </section>
  );
}