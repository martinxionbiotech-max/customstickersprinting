# Pillar + cluster content plan

Status: proposed. Based on the audit in `docs/audit-2026-11.md` (score 88.3, 62 pages, 25 knowledge articles).

## 1. Why the current 25 articles do not capture commercial long-tail

The knowledge base is organised by **material and process**: materials, stickers, printing, artwork, procurement. That is a good reference library and a poor sales funnel, for three reasons:

1. **No pillar pages.** The five "pillars" are groups in an index, not pages. `/knowledge/` is a table of contents; there is no 2,000-word page that owns a topic and passes authority down.
2. **No task-level content.** Every article answers "how does X work". None answers "what size do I need", "what will it cost", "what does Amazon require". Those are the queries people type when they are about to buy.
3. **Nothing links up.** Articles link sideways (prev/next, related reading) and to products, but there is no parent page for a cluster to point at, so link equity pools in the index instead of in a ranking page.

The fix is three content groups, each a pillar page plus clusters, built inside the existing `knowledge` collection so they inherit the template, schema, markdown twins and llms.txt entry.

## 2. Architecture

```
/knowledge/                       hub — groups by pillar, unchanged
│
├── label-sizing            (new)  1 pillar + 5 clusters
│   ├── label-size-guide                 pillar, order 0
│   ├── label-size-for-bottles           order 1
│   ├── label-size-for-jars              order 2
│   ├── label-size-for-tins-tubes-pouches order 3
│   ├── label-wrap-calculation           order 4
│   └── standard-label-sizes             order 5
│
├── label-cost              (new)  1 pillar + 7 chapters
│   ├── custom-label-printing-cost       pillar, order 0 (new)
│   ├── what-affects-label-pricing       existing, moved
│   ├── what-is-moq                      existing, moved
│   ├── samples-and-proofs               existing, moved
│   ├── production-lead-time             existing, moved
│   ├── label-cost-per-unit              new, order 5
│   ├── label-setup-costs                new, order 6
│   └── how-many-labels-to-order         new, order 7
│
└── marketplace-labels      (new)  1 pillar + 4 clusters
    ├── marketplace-label-requirements   pillar, order 0
    ├── fnsku-labels                     order 1
    ├── suffocation-warning-labels       order 2
    ├── barcode-label-printing           order 3
    └── retail-packaging-labels          order 4
```

Result: 7 pillar groups, 40 articles, ~15 new pages, ~18,000 new words.

The existing four "procurement" articles are **reassigned, not duplicated**: they already answer cost, quantity, proofing and timing, and they become chapters under the cost pillar. No page is deleted and no URL changes.

## 3. Group A — Label sizing (highest long-tail volume)

**Pillar:** `/knowledge/label-size-guide/` · 2,600 words
**Head terms:** label size guide · what size label do i need · custom label sizes

| # | Cluster | URL | Primary query | Words |
|---|---|---|---|---:|
| 1 | Bottle labels by volume | `label-size-for-bottles` | what size label for a 500 ml bottle | 900 |
| 2 | Jar labels by fill | `label-size-for-jars` | 8 oz jar label size | 900 |
| 3 | Tins, tubes, pouches | `label-size-for-tins-tubes-pouches` | tin label size · tube label size | 850 |
| 4 | Wrap measurement | `label-wrap-calculation` | how to measure a bottle for a label | 800 |
| 5 | Standard sizes in inches | `standard-label-sizes` | standard label sizes · 2.5 x 3 label | 900 |

Why this group first: it is the only cluster set where the searcher is holding a physical object and needs a number. Conversion intent is high, competition is low (most competitors publish size charts as PDFs behind a form), and the answer is a table, which is what AI Overviews quote.

Pillar contents:

- How to measure a container in three measurements (width, height, circumference)
- A master table: container type × typical volume × label size in mm and inches
- Wrap math: circumference = π × diameter, plus 3–6 mm overlap, plus the seam gap
- Where a label must sit relative to fill lines, caps and bases
- When a size is not on the chart: how to pick between two
- Tolerance: why a 50 mm label works on a 48–52 mm panel
- Links to every cluster and to the product pages that print those sizes

## 4. Group B — Cost and ordering (closest to purchase)

**Pillar:** `/knowledge/custom-label-printing-cost/` · 2,400 words
**Head terms:** custom label printing cost · how much do custom labels cost · label printing price

| # | Chapter | URL | Primary query | Words |
|---|---|---|---|---:|
| 1 | What drives the price | `what-affects-label-pricing` (existing) | what affects label pricing | 710 |
| 2 | What MOQ means | `what-is-moq` (existing) | minimum order quantity labels | 645 |
| 3 | Samples and proofs | `samples-and-proofs` (existing) | label proof before printing | 615 |
| 4 | Lead time | `production-lead-time` (existing) | how long does label printing take | 532 |
| 5 | Unit economics | `label-cost-per-unit` | label cost per 1000 | 850 |
| 6 | Setup costs | `label-setup-costs` | label printing setup fee · plate charge | 800 |
| 7 | Quantity planning | `how-many-labels-to-order` | how many labels should i order | 800 |

The pillar must not become a price list. It teaches the arithmetic:

- The four cost blocks: setup, material, finishing, freight
- A worked example using **explicitly labelled illustrative numbers**, so a reader can substitute their own
- The unit-cost curve: why 50 and 5,000 differ by a factor of several
- What to ask a printer to make two quotes comparable
- Where buyers overspend (laminate on an indoor label, custom die at 50 units)
- Links to every chapter

## 5. Group C — Marketplace and retail labelling

**Pillar:** `/knowledge/marketplace-label-requirements/` · 2,200 words
**Head terms:** amazon fba labeling requirements · product label requirements · fnsku label

| # | Cluster | URL | Primary query | Words |
|---|---|---|---|---:|
| 1 | FNSKU labels | `fnsku-labels` | fnsku label size · fnsku vs upc | 850 |
| 2 | Suffocation warnings | `suffocation-warning-labels` | suffocation warning label requirements | 800 |
| 3 | Barcodes | `barcode-label-printing` | barcode label requirements · quiet zone | 900 |
| 4 | Retail packaging | `retail-packaging-labels` | retail packaging label requirements | 800 |

This group is where a label printer meets a seller's actual deadline: a shipment held at the FBA receiving dock because the FNSKU would not scan. It is also the group where external citations matter most — Amazon's own seller help pages, ISO/IEC 15416 for barcode grading, and GS1 for GTIN structure. Every claim gets a link, and every link gets checked before publication.

## 6. Internal linking rules (non-negotiable)

Applied at build time and verified by script, not by eye:

1. **Cluster → pillar, in the first 120 words**, with a query-shaped anchor (`label size guide`), not "click here".
2. **Pillar → every cluster**, twice: once in an "In this guide" list near the top, once contextually in the body.
3. **Pillar → products**: 3–5 links from each pillar to the product pages it serves (size guide → bottle, jar, tins; cost → custom labels, roll labels).
4. **Product → pillar**: the 14 product pages gain a third `knowledgeLinks` entry pointing at the relevant pillar. Currently each has two links, both to articles.
5. **Cross-group links**: sizing ↔ cost (size drives material use and price), marketplace → sizing (FNSKU label dimensions), marketplace → materials (waterproof stock for poly mailers).
6. **Sibling links** stay automatic via `order` (prev/next inside a pillar).
7. **Anchor text is varied but descriptive.** No two links to the same page use the same phrase sitewide; the automated "Related reading" block is the only generic one.
8. **Breadcrumbs** show the pillar name, not just "Knowledge".

Measured after each phase: every new page has ≥ 3 inbound internal links, click depth ≤ 2 from home, 0 orphans, 0 broken links.

## 7. Long-tail mechanics inside each page

| Mechanic | Implementation |
|---|---|
| Query-shaped H2s | The H2 text is the question a buyer types (`What size label fits a 250 ml bottle?`) |
| Answer in the first 80 words | A two-sentence answer before the table, so it is extractable |
| Table above the fold | Sizes, costs or requirements as a table, not prose |
| Dual units | mm and inches side by side — the audience is US, UK and EU |
| FAQ with schema | 2–3 questions per cluster, answers ≥ 110 characters |
| One citation minimum | Standard, regulation or platform policy, checked to resolve |
| No thin pages | Nothing under 700 words; pillars 2,200–2,800 |

## 8. Cannibalisation control

Each query has exactly one owner. The mapping is written before drafting and checked after:

| Query | Owner | Explicitly not |
|---|---|---|
| label size guide | sizing pillar | any cluster |
| what size label for a bottle | bottle cluster | sizing pillar |
| standard label sizes | inches cluster | sizing pillar |
| how much do custom labels cost | cost pillar | unit-cost cluster |
| label cost per 1000 | unit-cost cluster | cost pillar |
| what affects label pricing | existing article | cost pillar |
| amazon fba labeling requirements | marketplace pillar | FNSKU cluster |
| fnsku label size | FNSKU cluster | marketplace pillar |

If two pages start ranking for the same query after launch, merge rather than expand.

## 9. Phasing

| Phase | Pages | Words | Also included |
|---|---|---:|---|
| 1 | Sizing pillar + 5 clusters | ~7,000 | Pillar page template (`order: 0` + "In this guide"), product `knowledgeLinks` update |
| 2 | Cost pillar + 3 new clusters, 4 existing reassigned | ~5,000 | Reassign 4 article pillar/order fields, rebuild `/knowledge/` grouping |
| 3 | Marketplace pillar + 4 clusters | ~6,000 | External citation check (Amazon, GS1, ISO/IEC 15416) |

Each phase: build, run the audit script, check titles/descriptions/links, commit and push. Score is reported before → after.

## 10. Acceptance criteria

Per page:

- Title ≤ 60 characters, unique; description 140–155; one H1
- ≥ 1 table, ≥ 2 FAQ entries with valid schema, ≥ 1 verified citation (cluster level: the pillar carries 3+)
- ≥ 3 inbound internal links, one from the pillar and one from a product page
- Markdown twin and llms.txt entry generated automatically

Per phase:

- 0 broken links, 0 orphans, click depth ≤ 2
- No query owned by two pages
- Knowledge median word count rises, similarity above 12% stays at 0

Business:

- 6–8 weeks after launch: impressions on the target queries in Search Console, and the sizing group producing the first quote requests from organic.
