import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { site } from "../../data/site";

export async function getStaticPaths() {
  const products = await getCollection("products", (p) => p.data.status === "published");
  return products.map((p) => ({ params: { slug: p.id }, props: { product: p } }));
}

export const GET: APIRoute = ({ props }) => {
  const a = props.product as CollectionEntry<"products">;
  const d = a.data;
  const parts = [
    `# ${d.title}`,
    ``,
    `> ${d.seoDescription ?? d.description}`,
    ``,
    `Category: ${d.category} · Minimum order: ${d.moq} · Lead time: ${d.leadTime}`,
    ``,
    (a.body ?? "").trim(),
    ``,
    `## Ordering`,
    ``,
    `Quotations by email (${site.email}) or WhatsApp (${site.whatsappDisplay}). Send size, material, quantity and destination.`,
    ``,
  ];
  return new Response(parts.join("\n"), { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
};
