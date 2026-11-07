# Custom Stickers Printing

B2B inquiry site for custom labels and stickers. Astro static site, deployed on Cloudflare Pages.

- **Domain:** https://customstickersprinting.com
- **Minimum order:** 50 units (stated consistently across every page)
- **Contact:** martin@customstickersprinting.com · WhatsApp +86 133 2323 7275

## Stack

- Astro 5, static output, `trailingSlash: 'always'`
- Content collections: `src/content/products` (14 products), `src/content/industries` (4)
- No database, no cart, no payment. Inquiries go to email and WhatsApp via `mailto:` and `wa.me` links.
- No JavaScript framework, no client-side hydration on content pages.

## Structure

```
src/
  data/site.ts          brand, contact, MOQ, lead time (single source of truth)
  content.config.ts     product and industry schemas
  content/products/     14 product pages
  content/industries/   4 application pages
  layouts/BaseLayout    head, SEO, Organization + WebSite schema
  components/           Header, Footer, Breadcrumbs, CtaBand
  pages/
    [slug].astro        product template (flat URLs: /vinyl-stickers/)
    products/, industries/, about, contact, how-to-order, request-a-quote,
    faq, artwork-guidelines, shipping-delivery, privacy, terms, 404
    sitemap.xml.ts      generated from static list + collections
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

## Content rules

- MOQ is 50 units everywhere. Do not introduce a different minimum without updating `src/data/site.ts`
  and every page that states it.
- Do not invent certifications, test results, factory size, client names or delivery guarantees.
- Prices are quoted per project; no price is published on the site.
- Every product page states materials, finishes and MOQ, and ends with the same inquiry path.

## Status

Phase 1 complete: 33 pages, 14 products, 4 industries, 0 broken internal links.
Next: MkDocs knowledge base (materials, artwork, processes) and real product photography.
