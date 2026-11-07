import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";

export async function getStaticPaths() {
  const articles = await getCollection("knowledge");
  return articles.map((a) => ({ params: { slug: a.id }, props: { article: a } }));
}

export const GET: APIRoute = ({ props }) => {
  const a = props.article as CollectionEntry<"knowledge">;
  const d = a.data;

  const parts: string[] = [
    `# ${d.title}`,
    ``,
    `> ${d.description}`,
    ``,
    `Pillar: ${d.pillar} · Updated: ${d.updated}`,
    ``,
  ];

  if (d.view) parts.push(`**Our view.** ${d.view}`, ``);

  parts.push((a.body ?? "").trim(), ``);

  if (d.faq.length > 0) {
    parts.push(`## Quick answers`, ``);
    for (const f of d.faq) parts.push(`**${f.q}**`, ``, f.a, ``);
  }

  if (d.sources.length > 0) {
    parts.push(`## Sources`, ``);
    for (const s of d.sources) parts.push(`- ${s.label} — ${s.url}`);
    parts.push(``);
  }

  return new Response(parts.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
