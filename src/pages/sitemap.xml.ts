import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const staticPaths = [
  "/", "/about/", "/contact/", "/how-to-order/", "/request-a-quote/", "/faq/",
  "/artwork-guidelines/", "/shipping-delivery/", "/products/", "/industries/",
  "/custom-labels/", "/custom-stickers/", "/roll-labels/", "/bottle-labels/",
  "/jar-labels/", "/cosmetic-labels/", "/food-labels/", "/waterproof-labels/",
  "/clear-labels/", "/vinyl-stickers/", "/logo-stickers/", "/die-cut-stickers/",
  "/sticker-sheets/", "/clear-stickers/", "/low-moq-label-printing/",
  "/small-batch-sticker-printing/", "/privacy/", "/terms/",
];

export const GET: APIRoute = async ({ site }) => {
  const base = (site ?? new URL("https://customstickersprinting.com")).href.replace(/\/$/, "");
  const products = await getCollection("products", (p) => p.data.status === "published");
  const industries = await getCollection("industries");

  const urls = [
    ...staticPaths,
    ...products.map((p) => `/${p.id}/`),
    ...industries.map((i) => `/industries/${i.id}/`),
  ];
  const unique = [...new Set(urls)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${unique.map((u) => `  <url><loc>${base}${u}</loc></url>`).join("\n")}
</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
