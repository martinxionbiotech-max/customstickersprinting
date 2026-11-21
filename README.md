# Custom Stickers Printing

B2B inquiry site for custom labels and stickers. Astro static site, deployed on Cloudflare Pages.

- **Domain:** https://customstickersprinting.com
- **Minimum order:** 50 units (stated consistently across every page)
- **Contact:** martin@customstickersprinting.com · WhatsApp +86 133 2323 7275
- **Legal entity:** Yiwu Dingwei Trading Company · USCC 92330782MA8GW3PLXB · D-U-N-S 585974555

## Stack

- Astro 5, static output, `trailingSlash: 'always'`
- Content collections: `src/content/products` (15), `src/content/industries` (5), `src/content/knowledge` (45)
- 8 knowledge guides: label sizing, cost, marketplace, label materials, sticker materials, printing, artwork, hang tags
- No database, no cart, no payment. Inquiries go to email and WhatsApp via `mailto:` and `wa.me` links.
- No JavaScript framework, no client-side hydration on content pages.

## Structure

```
src/
  data/site.ts          brand, contact, MOQ, lead time (single source of truth)
  data/pillars.ts       8 knowledge guide definitions
  content.config.ts     product, industry and knowledge schemas
  content/products/     15 product pages
  content/industries/    5 application pages
  content/knowledge/    45 technical articles
  layouts/BaseLayout    head, SEO, Organization + WebSite schema
  components/           Header, Footer, Breadcrumbs, CtaBand, ProductMedia, PillarHub
  pages/
    [slug].astro        product template (flat URLs: /vinyl-stickers/)
    knowledge/          article template, guide hubs, knowledge index
    products/, industries/, about, contact, how-to-order, request-a-quote,
    faq, artwork-guidelines, shipping-delivery, declarations, privacy,
    cookies, terms, refund-policy, editorial-standards, 404
    sitemap.xml.ts      generated from static list + collections
    llms.txt.ts         generated AI-readable index
```

Product pages render from frontmatter (materials, finishes, applications, MOQ) plus a Markdown body —
the body carries the argument, the frontmatter carries the facts. Editing a product means editing one file.

## Build

```bash
npm install
npm run build     # -> dist/
npm run dev
```

## Cloudflare Pages

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 22 |

`public/_headers` adds CSP, HSTS, frame protection and immutable caching for `_astro` and images.

## Content rules

- MOQ is 50 units everywhere. Do not introduce a different minimum without updating `src/data/site.ts`
  and every page that states it.
- Do not invent certifications, test results, factory size, client names or delivery guarantees.
- Prices are quoted per project; no price is published on the site.
- Every product page states materials, finishes and MOQ, and ends with the same inquiry path.
- English-facing pages must not contain Chinese text; the legal name is `Yiwu Dingwei Trading Company`.
- Article dates come from real `published` / `reviewed` frontmatter. Do not backdate content.

## Images

Product photos live in `public/images/products/<slug>.webp` (1200 × 900, under 200 KB). The build checks for
the file and renders it on the product page and in the Open Graph tags. When a photo is missing, the page
renders an honest "Photograph pending" panel — no AI mock-up and no broken image.

Current photo coverage: 3/15 (custom-stickers, logo-stickers, hang-tags). The remaining 12 need real
sample photography; the brief is in `docs/photo-shot-list.md`.

## Status

- 92 indexable pages, 65 markdown sidecars, 0 broken internal links, 0 orphan pages.
- 15 products, 45 articles, 8 guides, 5 industries.
- Live on Cloudflare Pages (apex 200). `www` is not yet resolving; add the DNS record/redirect.
- Email alias `hello@` / `sales@` is still pending. Do not change `site.email` until the alias is created and
  tested; changing it without a mailbox would silently lose inquiries.
- Deep audit: `docs/site-content-audit-2026-11-deep.md`; page data: `docs/audit-pages-2026-11.csv`.
