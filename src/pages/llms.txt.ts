import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { PILLARS as PILLAR_DATA, PILLAR_ORDER } from "../data/pillars";

const PILLARS: Record<string, string> = {
  "label-sizing": "Label sizing and dimensions",
  "label-cost": "Cost and ordering",
  "marketplace-labels": "Marketplace and retail labels",
  "label-materials": "Label materials and adhesives",
  "sticker-materials": "Sticker materials and cutting",
  printing: "Printing and production",
  artwork: "Artwork preparation",
  "hang-tags": "Hang tags and printed card",
};

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.href ?? "https://customstickersprinting.com/").replace(/\/$/, "");
  const products = (await getCollection("products", (p) => p.data.status === "published")).sort((a, b) => a.data.order - b.data.order);
  const industries = (await getCollection("industries")).sort((a, b) => a.data.order - b.data.order);
  const knowledge = (await getCollection("knowledge")).sort(
    (a, b) => a.data.pillar.localeCompare(b.data.pillar) || a.data.order - b.data.order
  );

  const lines: string[] = [
    "# Custom Stickers Printing",
    "",
    "> Custom labels and stickers printed from 50 units, quoted per project, delivered worldwide. " +
      "The knowledge base explains materials, adhesives, printing methods, artwork preparation and order economics in buyer terms.",
    "",
    "Key facts: minimum order 50 units per design; production 7-12 working days after artwork approval; " +
      "no self-serve checkout, orders are quoted by email or WhatsApp.",
    "",
    "## Products",
    "",
  ];

  for (const p of products) {
    lines.push(`- [${p.data.title}](${base}/${p.id}/): ${p.data.description} (plain markdown: ${base}/${p.id}/index.md)`);
  }

  lines.push("", "## Industries", "");
  for (const i of industries) {
    lines.push(`- [${i.data.heading}](${base}/industries/${i.id}/): ${i.data.description} (plain markdown: ${base}/industries/${i.id}/index.md)`);
  }

  lines.push("", "## Knowledge base", "");
  lines.push("### Guides", "");
  for (const key of PILLAR_ORDER) {
    const p = PILLAR_DATA[key];
    lines.push(`- [${p.title}](${base}/knowledge/${key}/): ${p.description}`);
  }
  lines.push("");
  let currentPillar = "";
  for (const k of knowledge) {
    if (k.data.pillar !== currentPillar) {
      currentPillar = k.data.pillar;
      lines.push("", `### ${PILLARS[currentPillar] ?? currentPillar}`, "");
    }
    lines.push(`- [${k.data.title}](${base}/knowledge/${k.id}/): ${k.data.description} (plain markdown: ${base}/knowledge/${k.id}/index.md)`);
  }

  lines.push(
    "",
    "## Company",
    "",
    `- Legal name: Yiwu Dingwei Trading Company, an individual business registered in China.`,
    `- Registration number (USCC): 92330782MA8GW3PLXB`,
    `- D-U-N-S: 585974555`,
    `- Location: Yiwu, Zhejiang, China`,
    `- Invoices are issued by the legal entity; banking details appear only on the invoice for a confirmed order.`,
    "",
    "## Ordering",
    "",
    `- [How to order](${base}/how-to-order/): the four steps from artwork to delivery.`,
    `- [Request a quote](${base}/request-a-quote/): what to send for a same-day quotation.`,
    `- [Artwork guidelines](${base}/artwork-guidelines/): file requirements, bleed, fonts and colour.`,
    `- [Shipping and delivery](${base}/shipping-delivery/): production window, courier options, duties.`,
    `- [About](${base}/about/): who prints the work and where.`,
    `- [Contact](${base}/contact/): email and WhatsApp.`,
    `- [Declarations](${base}/declarations/): the documents we can provide and the claims we do not make.`,
    ""
  );

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
