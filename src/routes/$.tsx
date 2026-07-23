import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "Page Not Found | CoreLinkDev" },
      {
        name: "description",
        content:
          "The page you're looking for doesn't exist or has been moved. Head back home to keep browsing CoreLinkDev.",
      },
      { name: "robots", content: "noindex, follow" },
      { name: "googlebot", content: "noindex, follow" },
      { property: "og:title", content: "Page Not Found | CoreLinkDev" },
      {
        property: "og:description",
        content: "The page you're looking for doesn't exist or has been moved.",
      },
    ],
  }),
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-ink">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-ink">Page not found</h2>
        <p className="mt-2 text-sm text-ink-soft">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Home
          </Link>
          <Link
            to="/pricing"
            className="inline-flex items-center justify-center rounded-md border border-input px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Pricing
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-md border border-input px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Work
          </Link>
          <Link
            to="/faq"
            className="inline-flex items-center justify-center rounded-md border border-input px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md border border-input px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}