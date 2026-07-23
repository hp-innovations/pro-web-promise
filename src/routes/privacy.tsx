import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | CoreLinkDev" },
      { name: "description", content: "How CoreLinkDev collects, uses, and protects information from visitors and clients." },
      { property: "og:title", content: "Privacy Policy | CoreLinkDev" },
      { property: "og:description", content: "How CoreLinkDev handles your information." },
      { property: "og:url", content: "https://corelinkdev.com/privacy" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://corelinkdev.com/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <section>
      <div className="container-tight pt-16 pb-24 md:pt-24">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight text-ink md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-ink-soft">Last updated: [BUSINESS OWNER MUST COMPLETE: date]</p>

        <div className="prose-legal mt-10 max-w-3xl">
          <p>
            This page is maintained by CoreLink LLC (&ldquo;CoreLinkDev&rdquo;) to
            explain what information we collect from visitors and clients,
            how we use it, and the choices you have. It is not legal advice.
          </p>

          <h2>Information we collect</h2>
          <p>When you contact us through the website, we collect the information you provide, which may include:</p>
          <ul>
            <li>Business name</li>
            <li>Your name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Existing website URL (if provided)</li>
            <li>Details you write in the message field</li>
          </ul>
          <p>Our website may also collect basic technical information such as browser type, device type, and pages visited, used to keep the site working correctly.</p>

          <h2>How we use it</h2>
          <ul>
            <li>To respond to your request and prepare a free demo.</li>
            <li>To communicate about your project and, if you become a client, your website.</li>
            <li>To improve the website and our services.</li>
          </ul>

          <h2>Who we share it with</h2>
          <p>
            We do not sell your information. We share it only with the service providers
            we use to run the business, such as our form processor and hosting provider.
            [BUSINESS OWNER MUST COMPLETE: list any additional third parties, e.g., email
            provider, analytics, payment processor.]
          </p>

          <h2>How long we keep it</h2>
          <p>[BUSINESS OWNER MUST COMPLETE: retention period, e.g., &ldquo;We keep contact records for X years and delete them on request.&rdquo;]</p>

          <h2>Your rights</h2>
          <p>
            You may request a copy of your information, ask us to correct it, or ask us
            to delete it. Email <a href="mailto:office@corelinkdev.com">office@corelinkdev.com</a> and we&rsquo;ll respond within a
            reasonable time.
          </p>

          <h2>Contact</h2>
          <p>
            CoreLink LLC<br />
            1209 Mountain Road Place NE, Albuquerque, NM 87110<br />
            <a href="mailto:office@corelinkdev.com">office@corelinkdev.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}