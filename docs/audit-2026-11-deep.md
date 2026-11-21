# Deep audit — customstickersprinting.com — 2026-11-21

**Audit object:** live build `56f71d1` (CSS hash `artwork.fZYXjtDe.css` matches `dist`), 92 indexable HTML pages,
92 sitemap URLs, 0 broken internal links, 0 orphan pages, click depth ≤2.

Run with `python3 ~/.hermes/skills/devops/static-site-content-audit/scripts/site-audit.py dist`.
Every number below comes from that run plus the section-level scripts in this round.

---

## 1. Score (site lens, before)

| Dimension | Weight | Score | Weighted | Evidence |
|---|---:|---:|---:|---|
| Completeness | 15% | 72 | 10.8 | 4 trust pages absent (`/disclaimer/`, `/accessibility/`, `/corrections/`, `/methodology/`); quote page 317 words, contact 379, shipping 391 |
| SEO | 20% | 86 | 17.2 | 92/92 titles ≤60, descriptions 140–155, 1 H1, canonical OK; 8 hub titles are generic (`Artwork preparation \| brand`); 18 pages have zero tables |
| AIO | 15% | 68 | 10.2 | `llms.txt` covers 80/92 URLs; 65/92 markdown sidecars; no `TechArticle`, `CollectionPage` or `QAPage`; 9 external domains site-wide |
| Data consistency | 15% | 94 | 14.1 | single `site.ts`; entity, USCC, D-U-N-S consistent in footer/schema/about/declarations; no dataset mirror |
| Originality | 15% | 90 | 13.5 | 5 near-duplicate pairs, max Jaccard 0.132 (`/custom-stickers/` vs `/die-cut-stickers/`); body-only lower |
| Editorial stance | 10% | 100 | 10.0 | `In our view` on 53/54 knowledge pages — denominator is editorial pages, not all 92 |
| Content depth | 10% | 58 | 5.8 | knowledge median 1,006 words; only 5 pages >1,800; 8 pillar hubs ~950–1,050; policy pages 467–713 |
| **Total** | 100% | | **81.6** | |

E-E-A-T lens (separate, not additive): Experience 45 · Expertise 62 · Authoritativeness 48 · Trust 68 → **57/100**.
The gap is not writing volume: it is the absence of a methodology page, a disclaimer with real boundaries,
an accessibility statement, a corrections policy, and shallow legal pages.

---

## 2. What is already strong

- 92 sitemap URLs all 200 live; 0 broken internal links; 0 orphans; depth ≤2.
- Every page has unique title/description in range, one H1, canonical, OG/Twitter tags.
- 15 product pages have `Service` schema; 76 pages carry `FAQPage`; 91 carry `BreadcrumbList`; Organization
  with legal name, USCC and D-U-N-S on every page.
- `robots.txt` explicitly allows GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended.
- Knowledge base: 45 articles across 8 pillars, median 1,006 words, `In our view` on 53/54 editorial pages.
- Photography policy is now honest and site-wide (schematics, not photographs).

## 3. Blocking gaps

### 3.1 Compliance pages (P0)

| Page | Now | Target | Missing |
|---|---:|---:|---|
| `/privacy/` | 685 w / 12 h2 | 1,100–1,300 / 14+ | retention table, processor list, transfer mechanism, rights response times, explicit "what we do not collect" |
| `/terms/` | 710 w / 12 h2 | 1,000–1,150 | quote validity (30 days), Incoterms® 2020, order formation, bank-account fraud warning, 30-day claim window + batch traceability, export controls, liability cap, China law + CISG |
| `/cookies/` | 467 w / 6 h2 | 550–700 | actual cookie table (`__cf_bm`), why no consent banner, local/session storage statement |
| `/editorial-standards/` | 662 w / 7 h2 | 850–1,000 | AI-use policy, review cadence, correction timelines, "never publish" list, how to cite us |
| `/declarations/` | 835 w / 7 h2 | 900–1,100 | test-method vs certification distinction, document request SLA, batch traceability fields |
| `/disclaimer/` | — | 900–1,100 / 10+ h2 | does not exist; 11-section skeleton required |
| `/accessibility/` | — | 600–800 | does not exist; WCAG 2.2 AA target, known limits, feedback route |
| `/corrections/` | — | 700–900 | does not exist; correction types, response-time table, log |
| `/methodology/` | — | 1,000–1,200 | does not exist; this is the single highest-value E-E-A-T asset |

Footer links only 7 legal pages; new pages must be reachable from the footer and from each other.

### 3.2 AIO / machine-readable (P1)

- `llms.txt`: 80 absolute URLs vs 92 pages. Missing static pages (policies, quote, artwork, shipping, FAQ,
  indexes). No "Answers" section, no machine-readable page note.
- Markdown sidecars: 65/92. All 27 static pages lack `index.md` (products, industries, knowledge have them).
- Schema: no `TechArticle` (no methodology), no `CollectionPage`/`ItemList` on hubs and indexes, policy pages
  carry only Organization/WebSite/Breadcrumb. Organization lacks `knowsAbout`.

### 3.3 Depth and breadth (P1/P2)

- 8 pillar hubs are overview pages of ~950–1,050 words, not the 1,800–2,200-word pillars their titles imply.
- 45 knowledge articles cluster at 900–1,100 words; only 5 exceed 1,800. Missing form: calculators (0),
  market-compliance pages (0 dedicated), lifecycle/environment (1), sustainability (0), QR/variable data (0),
  security/tamper-evident (0), wine/spirits (0), supplements (0), chemical/GHS (0).
- Funnel pages are the thinnest on the site: `/request-a-quote/` 317, `/contact/` 379, `/shipping-delivery/` 391,
  `/products/` 468, `/industries/` 496, `/how-to-order/` 489.
- Industry set: 5 pages, median 911 words, one at 498. No household-chemical or wine/spirits page.

---

## 4. Numbered fix list (priority = weight × gain)

| # | Action | Pages | Est. gain |
|---|---|---:|---:|
| 1 | Create `/disclaimer/`, `/accessibility/`, `/corrections/`, `/methodology/`; deepen privacy, terms, cookies, editorial standards, declarations; footer + cross-links | 9 | +4.2 |
| 2 | `llms.txt` full coverage (all 92+new URLs) + Answers section; sidecars for all static pages | 27 | +2.4 |
| 3 | Schema: `TechArticle` on methodology, `CollectionPage` + `ItemList` on indexes/hubs, `WebPage` dates on policies, `knowsAbout` on Organization | all | +1.6 |
| 4 | Deepen 8 pillar hubs to 1,800–2,200 words with decision tables, formulas, unique FAQs | 8 | +2.2 |
| 5 | Deepen 45 knowledge articles by 300–600 unique words each (tables, worked examples, limits) | 45 | +2.8 |
| 6 | Add 10 long-tail articles: FDA/EU food labelling, cosmetics, Prop 65, GHS, freezer/microwave, sustainability, QR codes, variable data, tamper-evident, wine/spirits | 10 | +3.6 |
| 7 | Add two calculator pages: label wrap/size calculator, cost estimator — with formula, assumptions, limitations, disclaimer | 2 | +2.0 |
| 8 | Rewrite 8 generic hub titles/H1s to keyword-bearing titles ≤60 | 8 | +0.7 |
| 9 | Deepen funnel pages (quote, contact, shipping, products index, industries index, how-to-order, FAQ) | 7 | +1.2 |
| 10 | Add 2 industry pages (household/chemical, wine/spirits) at 1,100+ words | 2 | +0.9 |
| 11 | Internal links: policy ↔ relevant articles, products ↔ new compliance guides, related-reading blocks | all | +0.6 |

Projected total after all items: **93–95 / 100**; E-E-A-T 57 → 78–82.

## 5. Owner inputs (cannot be invented)

- Registered address level (city only is published today), governing law confirmation (China + CISG assumed),
  privacy request mailbox and response SLA, real correction/review cadence, any certificate numbers or test
  reports that may be cited, a named technical reviewer if one is to appear in schema.

## 6. Round log

- **Round 1 (this round):** items 1–4, 7–9 partially; build + live verification; see `## Round 1 results` appended
  after deployment.
