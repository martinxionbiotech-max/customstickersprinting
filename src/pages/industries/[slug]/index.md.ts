import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";

export async function getStaticPaths() {
  const industries = await getCollection("industries");
  return industries.map((i) => ({ params: { slug: i.id }, props: { industry: i } }));
}

export const GET: APIRoute = ({ props }) => {
  const a = props.industry as CollectionEntry<"industries">;
  const d = a.data;
  const parts = [`# ${d.heading}`, ``, `> ${d.description}`, ``, (a.body ?? "").trim(), ``];
  return new Response(parts.join("\n"), { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
};
