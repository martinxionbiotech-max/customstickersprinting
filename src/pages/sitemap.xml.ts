import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { sitePages } from "../data/sitePages";

const staticPaths = sitePages.map((page) => page.path);
const toolPaths = ["/tools/", "/tools/label-size-calculator/", "/tools/label-cost-estimator/"];

export const GET: APIRoute = async ({ site }) => {
  const base = (site ?? new URL("https://customstickersprinting.com")).href.replace(/\/$/, "");
  const products = await getCollection("products", (p) => p.data.status === "published");
  const industries = await getCollection("industries");
  const knowledge = await getCollection("knowledge");

  const urls = [
    ...staticPaths,
    ...toolPaths,
    ...products.map((p) => `/${p.id}/`),
    ...industries.map((i) => `/industries/${i.id}/`),
    ...knowledge.map((k) => `/knowledge/${k.id}/`),
  ];
  const unique = [...new Set(urls)];
  const lastmod = new Map(
    knowledge
      .filter((k) => k.data.reviewed)
      .map((k) => [`/knowledge/${k.id}/`, k.data.reviewed as string])
  );
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${unique.map((u) => lastmod.has(u) ? `  <url><loc>${base}${u}</loc><lastmod>${lastmod.get(u)}</lastmod></url>` : `  <url><loc>${base}${u}</loc></url>`).join("\n")}
</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
