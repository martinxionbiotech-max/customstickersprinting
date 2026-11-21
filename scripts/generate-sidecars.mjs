#!/usr/bin/env node

import { existsSync } from "node:fs";
import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const GENERATED = "2026-11-21";
const VOID_TAGS = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

const entities = {
  amp: "&",
  apos: "'",
  copy: "©",
  gt: ">",
  hellip: "…",
  ldquo: "“",
  lsquo: "‘",
  lt: "<",
  mdash: "—",
  middot: "·",
  nbsp: " ",
  ndash: "–",
  quot: '"',
  rdquo: "”",
  reg: "®",
  rsquo: "’",
  times: "×",
};

function decodeEntities(value) {
  return value.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, entity) => {
    if (entity[0] === "#") {
      const hex = entity[1].toLowerCase() === "x";
      const code = Number.parseInt(entity.slice(hex ? 2 : 1), hex ? 16 : 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : match;
    }
    return entities[entity.toLowerCase()] ?? match;
  });
}

function parseAttributes(tag) {
  const name = tag.match(/^<\s*([a-zA-Z][\w:-]*)/)?.[1]?.toLowerCase() ?? "";
  const rest = tag.replace(/^<\s*[a-zA-Z][\w:-]*/, "").replace(/\/?>\s*$/, "");
  const attrs = {};
  const attributePattern = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  for (const match of rest.matchAll(attributePattern)) {
    const key = match[1].toLowerCase();
    attrs[key] = decodeEntities(match[2] ?? match[3] ?? match[4] ?? "");
  }
  return { name, attrs };
}

function parseHtml(html) {
  const root = { type: "root", children: [] };
  const stack = [root];
  const tokenPattern = /<!--[\s\S]*?-->|<\/?[a-zA-Z][^>]*>|[^<]+/g;

  for (const match of html.matchAll(tokenPattern)) {
    const token = match[0];
    if (token.startsWith("<!--")) continue;

    if (token.startsWith("</")) {
      const closing = token.match(/^<\/\s*([a-zA-Z][\w:-]*)/)?.[1]?.toLowerCase();
      if (!closing) continue;
      for (let i = stack.length - 1; i > 0; i -= 1) {
        if (stack[i].tag === closing) {
          stack.length = i;
          break;
        }
      }
      continue;
    }

    if (token.startsWith("<")) {
      const { name, attrs } = parseAttributes(token);
      if (!name) continue;
      const node = { type: "tag", tag: name, attrs, children: [] };
      stack.at(-1).children.push(node);
      if (!VOID_TAGS.has(name) && !/\/\s*>$/.test(token)) stack.push(node);
      continue;
    }

    stack.at(-1).children.push({ type: "text", value: token });
  }

  return root;
}

function walk(node, callback) {
  callback(node);
  for (const child of node.children ?? []) walk(child, callback);
}

function directChildren(node, tag) {
  return (node.children ?? []).filter((child) => child.type === "tag" && child.tag === tag);
}

function textContent(node) {
  if (node.type === "text") return node.value;
  if (node.type === "tag" && ["script", "style"].includes(node.tag)) return "";
  return (node.children ?? []).map(textContent).join("");
}

function cleanInline(value) {
  return decodeEntities(value)
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim();
}

function escapeTableCell(value) {
  return cleanInline(value).replace(/\|/g, "\\|");
}

function absoluteUrl(href, pageUrl) {
  const trimmed = href.trim();
  if (!trimmed) return "";
  if (/^(mailto:|tel:|data:|javascript:)/i.test(trimmed)) return trimmed;
  try {
    return new URL(trimmed, pageUrl).href;
  } catch {
    return trimmed;
  }
}

function renderInline(nodes, context) {
  const pieces = [];
  for (const node of nodes) {
    if (node.type === "text") {
      pieces.push(node.value);
      continue;
    }
    if (node.type !== "tag") continue;

    const inner = () => renderInline(node.children ?? [], context);
    switch (node.tag) {
      case "a": {
        const href = absoluteUrl(node.attrs.href ?? "", context.pageUrl);
        const label = cleanInline(inner());
        if (!label) continue;
        pieces.push(href ? `[${label}](${href})` : label);
        break;
      }
      case "strong":
      case "b":
        pieces.push(`**${cleanInline(inner())}**`);
        break;
      case "em":
      case "i":
        pieces.push(`*${cleanInline(inner())}*`);
        break;
      case "del":
      case "s":
        pieces.push(`~~${cleanInline(inner())}~~`);
        break;
      case "code":
        pieces.push(`\`${cleanInline(inner()).replace(/`/g, "\\`")}\``);
        break;
      case "br":
        pieces.push(" ");
        break;
      case "img": {
        const src = absoluteUrl(node.attrs.src ?? "", context.pageUrl);
        const alt = cleanInline(node.attrs.alt ?? "");
        if (src) pieces.push(`![${alt}](${src})`);
        break;
      }
      case "script":
      case "style":
      case "svg":
        break;
      default:
        pieces.push(inner());
    }
  }
  return cleanInline(pieces.join(""));
}

function renderList(node, context, depth = 0) {
  const ordered = node.tag === "ol";
  const lines = [];
  let index = 1;
  for (const child of node.children ?? []) {
    if (child.type !== "tag" || child.tag !== "li") continue;
    const nested = [];
    const inlineNodes = [];
    for (const item of child.children ?? []) {
      if (item.type === "tag" && (item.tag === "ul" || item.tag === "ol")) {
        nested.push(renderList(item, context, depth + 1));
      } else {
        inlineNodes.push(item);
      }
    }
    const marker = ordered ? `${index}.` : "-";
    const indent = "  ".repeat(depth);
    lines.push(`${indent}${marker} ${cleanInline(renderInline(inlineNodes, context))}`.trimEnd());
    for (const block of nested) {
      if (block) lines.push(block);
    }
    index += 1;
  }
  return lines.join("\n");
}

function tableRows(node) {
  const rows = [];
  walk(node, (child) => {
    if (child.type === "tag" && child.tag === "tr") rows.push(child);
  });
  return rows;
}

function renderTable(node, context) {
  const rows = tableRows(node);
  if (!rows.length) return "";

  const parsedRows = rows.map((row) =>
    (row.children ?? [])
      .filter((child) => child.type === "tag" && (child.tag === "th" || child.tag === "td"))
      .map((cell) => ({ header: cell.tag === "th", text: escapeTableCell(renderInline(cell.children ?? [], context)) }))
  );
  const columnCount = Math.max(...parsedRows.map((row) => row.length));
  if (!columnCount) return "";

  const thead = (node.children ?? []).find((child) => child.type === "tag" && child.tag === "thead");
  const headerRow = thead ? parsedRows[0] : null;
  const dataRows = headerRow ? parsedRows.slice(1) : parsedRows;
  let header;

  if (headerRow) {
    header = headerRow.map((cell) => cell.text);
  } else if (parsedRows[0]?.every((cell) => !cell.header)) {
    header = parsedRows.shift().map((cell) => cell.text);
  } else {
    header = Array.from({ length: columnCount }, (_, index) => (index === 0 ? "Item" : index === 1 ? "Detail" : `Field ${index + 1}`));
  }

  while (header.length < columnCount) header.push("");
  const lines = [
    `| ${header.map((cell) => cell || " ").join(" | ")} |`,
    `| ${header.map(() => "---").join(" | ")} |`,
  ];
  for (const row of dataRows) {
    const cells = row.map((cell) => cell.text);
    while (cells.length < columnCount) cells.push("");
    lines.push(`| ${cells.join(" | ")} |`);
  }
  return lines.join("\n");
}

function renderBlocks(nodes, context, depth = 0) {
  const blocks = [];
  for (const node of nodes) {
    if (node.type === "text") {
      const text = cleanInline(node.value);
      if (text) blocks.push(text);
      continue;
    }
    if (node.type !== "tag") continue;

    const className = node.attrs.class ?? "";
    if (
      node.tag === "nav" ||
      node.tag === "footer" ||
      node.tag === "script" ||
      node.tag === "style" ||
      /\bcta-band\b/.test(className) ||
      /\bcrumbs\b/.test(className)
    ) {
      continue;
    }

    if (/^h[1-6]$/.test(node.tag)) {
      const level = Number(node.tag[1]);
      blocks.push(`${"#".repeat(level)} ${cleanInline(renderInline(node.children ?? [], context))}`);
      continue;
    }

    switch (node.tag) {
      case "p": {
        const text = cleanInline(renderInline(node.children ?? [], context));
        if (text) blocks.push(text);
        break;
      }
      case "ul":
      case "ol": {
        const list = renderList(node, context, depth);
        if (list) blocks.push(list);
        break;
      }
      case "table": {
        const table = renderTable(node, context);
        if (table) blocks.push(table);
        break;
      }
      case "pre": {
        const code = decodeEntities(textContent(node)).replace(/\n+$/, "");
        if (code) blocks.push(`\`\`\`\n${code}\n\`\`\``);
        break;
      }
      case "blockquote": {
        const quote = renderBlocks(node.children ?? [], context, depth);
        if (quote) blocks.push(quote.split("\n").map((line) => `> ${line}`).join("\n"));
        break;
      }
      case "figure": {
        const rendered = renderBlocks(node.children ?? [], context, depth);
        if (rendered) blocks.push(rendered);
        break;
      }
      case "figcaption": {
        const text = cleanInline(renderInline(node.children ?? [], context));
        if (text) blocks.push(`*${text}*`);
        break;
      }
      case "img": {
        const alt = cleanInline(node.attrs.alt ?? "");
        const src = absoluteUrl(node.attrs.src ?? "", context.pageUrl);
        if (src) blocks.push(`![${alt}](${src})`);
        break;
      }
      case "hr":
        blocks.push("---");
        break;
      case "br":
        break;
      default: {
        const rendered = renderBlocks(node.children ?? [], context, depth);
        if (rendered) blocks.push(rendered);
      }
    }
  }
  return blocks.join("\n\n");
}

function removeStructuralBlocks(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/gi, "")
    .replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/gi, "")
    .replace(/<section\b[^>]*class="[^"]*\bcta-band\b[^"]*"[^>]*>[\s\S]*?<\/section>/gi, "");
}

async function findHtmlPages(directory) {
  const found = [];
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      found.push(...(await findHtmlPages(fullPath)));
    } else if (entry.isFile() && entry.name === "index.html") {
      found.push(fullPath);
    }
  }
  return found;
}

function extractMeta(html, pattern) {
  return html.match(pattern)?.[1] ?? "";
}

function frontMatter(value) {
  return JSON.stringify(value);
}

async function main() {
  if (!existsSync(DIST)) {
    console.error("dist/ does not exist. Run astro build first.");
    process.exitCode = 1;
    return;
  }

  const htmlPages = (await findHtmlPages(DIST)).sort();
  let written = 0;

  for (const htmlPath of htmlPages) {
    const markdownPath = path.join(path.dirname(htmlPath), "index.md");
    if (existsSync(markdownPath)) continue;

    const html = await readFile(htmlPath, "utf8");
    const title = decodeEntities(extractMeta(html, /<title>([\s\S]*?)<\/title>/i));
    const description = decodeEntities(
      extractMeta(html, /<meta\s+name="description"\s+content="([^"]*)"/i)
    );
    const pageUrl = decodeEntities(
      extractMeta(html, /<link\s+rel="canonical"\s+href="([^"]*)"/i)
    );
    const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1];
    if (!main || !pageUrl) {
      console.warn(`skipped (no main or canonical): ${path.relative(DIST, htmlPath)}`);
      continue;
    }

    const document = parseHtml(removeStructuralBlocks(main));
    const markdown = renderBlocks(document.children, { pageUrl }).replace(/\n{3,}/g, "\n\n").trim();
    const output = [
      "---",
      `title: ${frontMatter(title)}`,
      `description: ${frontMatter(description)}`,
      `url: ${frontMatter(pageUrl)}`,
      `generated: ${GENERATED}`,
      "---",
      "",
      markdown,
      "",
    ].join("\n");

    await writeFile(markdownPath, output, "utf8");
    written += 1;
  }

  const covered = htmlPages.filter((htmlPath) =>
    existsSync(path.join(path.dirname(htmlPath), "index.md"))
  ).length;

  console.log(`sidecars written: ${written}`);
  console.log(`html pages: ${htmlPages.length}`);
  console.log(`coverage: ${covered}/${htmlPages.length}`);
}

await main();
