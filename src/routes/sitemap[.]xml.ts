import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://corelinkdev.com";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        // Per-page lastmod: update the date only when that page's content
        // actually changes. Do not replace with `new Date()`.
        const entries: (SitemapEntry & { lastmod: string })[] = [
          { path: "/", changefreq: "weekly", priority: "1.0", lastmod: "2026-09-15" },
          { path: "/small-business-website-design", changefreq: "monthly", priority: "0.9", lastmod: "2026-09-15" },
          { path: "/website-redesign", changefreq: "monthly", priority: "0.9", lastmod: "2026-09-15" },
          { path: "/website-care", changefreq: "monthly", priority: "0.8", lastmod: "2026-09-15" },
          { path: "/portfolio", changefreq: "monthly", priority: "0.8", lastmod: "2026-09-15" },
          { path: "/pricing", changefreq: "monthly", priority: "0.9", lastmod: "2026-09-15" },
          { path: "/process", changefreq: "monthly", priority: "0.8", lastmod: "2026-09-15" },
          { path: "/about", changefreq: "yearly", priority: "0.6", lastmod: "2026-09-15" },
          { path: "/faq", changefreq: "monthly", priority: "0.7", lastmod: "2026-09-15" },
          { path: "/contact", changefreq: "yearly", priority: "0.7", lastmod: "2026-09-15" },
          { path: "/privacy", changefreq: "yearly", priority: "0.3", lastmod: "2026-09-15" },
          { path: "/terms", changefreq: "yearly", priority: "0.3", lastmod: "2026-09-15" },
          { path: "/refunds", changefreq: "yearly", priority: "0.3", lastmod: "2026-09-15" },
          { path: "/cookies", changefreq: "yearly", priority: "0.3", lastmod: "2026-09-15" },
          { path: "/accessibility", changefreq: "yearly", priority: "0.3", lastmod: "2026-09-15" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            `    <lastmod>${e.lastmod}</lastmod>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
