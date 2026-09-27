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
        <p className="mt-4 text-sm text-ink-soft">Last updated: September 27, 2026</p>

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
          <p>Our server keeps access logs that can include an IP address, browser information, requested pages and timestamps. We use these records to operate the site and investigate errors, abuse and automated traffic.</p>
          <h2>Website analytics</h2>
          <p>We use Google Analytics 4 to measure page visits, device categories, traffic sources and interactions such as clicks on contact links and accepted demo-request submissions. Our custom analytics events do not include the name, email address, phone number, business name or message you enter in the form. An analytics event is not proof that a visitor is a person or that an inquiry becomes a customer.</p>
          <p>You can disable analytics in this browser using the controls on our <a href="/cookies">Cookie Policy</a> page. Browser privacy settings and blocking tools may also prevent analytics collection.</p>

          <h2>How we use it</h2>
          <ul>
            <li>To respond to your request and prepare a free demo.</li>
            <li>To communicate about your project and, if you become a client, your website.</li>
            <li>To improve the website and our services.</li>
          </ul>

          <h2>Who we share it with</h2>
          <p>
            We do not sell your information. We share it only with the service providers
            we use to run the business, including our hosting provider, Web3Forms for processing contact requests, and Google Analytics for website analytics. Contact-form information is sent to Web3Forms so the request can be processed and forwarded to us.
          </p>

          <h2>How long we keep it</h2>
          <p>Contact records are used to respond to inquiries and manage projects. To ask about records we hold or request deletion, email <a href="mailto:office@corelinkdev.com">office@corelinkdev.com</a>. We do not promise an automatic deletion schedule on this page.</p>

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
