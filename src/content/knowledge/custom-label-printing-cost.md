---
title: "Custom label printing cost: how the price is built"
description: "The four cost blocks behind a label quote, why setup dominates at 50 units, a worked example, and how to compare two quotes that look different."
pillar: label-cost
order: 0
updated: "2026-11"
relatedProducts: ["custom-labels", "roll-labels", "custom-stickers", "waterproof-labels"]
view: >-
  Almost every "why is this so expensive" question is really a question about quantity. At 50 units the price is
  mostly setup; at 5,000 it is mostly material. We would rather show a buyer that curve than defend a number, because
  once they see the fixed block, the quote stops looking arbitrary.
faq:
  - q: "How much do custom labels cost?"
    a: "There is no single figure: price depends on area, material, finishing, quantity and cutting. At 50 units the fixed setup is most of the cost; at 5,000 units the material dominates. Any quote that skips those five variables is a guess."
  - q: "Why is a 50-unit order so much more per label?"
    a: "Because the setup — file preparation, die, proof and make-ready — is the same whether you print 50 or 5,000. Divided by 50 it is visible in every unit; divided by 5,000 it almost disappears. The material cost per label barely changes."
---

Two printers quote the same label at $0.41 and $0.19 per piece. Neither is lying: one is quoting 500 units with a laminate, the other 5,000 without it. Label pricing looks opaque because five variables move at once, and quotes rarely state which ones they used.

This page breaks the price into its blocks, shows the arithmetic, and explains why the unit price falls so fast with quantity — and where it stops falling.

## The short answer

A label price is four blocks added together:

| Block | Behaviour | Share at 50 units | Share at 5,000 |
|---|---|---:|---:|
| Setup — file, die, proof, make-ready | Fixed | 70–90% | 2–5% |
| Material and print | Per unit × area | 8–20% | 55–70% |
| Finishing — laminate, foil, spot UV | Per unit, sometimes a pass charge | 2–8% | 10–20% |
| Freight and duties | Per shipment | 5–15% | 5–15% |

The percentages are the pattern, not a rule. What matters is the shape: **one block does not move with quantity, and it is the block that decides whether a small order is viable.**

## Setup: the block that does not scale

Setup covers everything that has to happen once, before the press runs:

- **File preparation** — checking bleed, resolution, fonts, cut path, spot white. An hour if the file is clean, several if it is not.
- **Die** — a steel rule die for a custom shape, or nothing for a standard size or a plotter cut.
- **Proof** — a digital proof, a contract proof, or a physical sample on the real stock.
- **Make-ready** — mounting, registration, colour adjustment, and the substrate wasted getting there.

At 50 units, this block is real money per label. At 5,000 it is a rounding error. That is the whole explanation for why a low minimum exists and why it is not cheap per piece.

You cannot negotiate setup away, but you can avoid paying it twice: reorder the same specification, combine designs that share a material and size, and choose a standard shape where one fits. See [what a setup charge actually covers](/knowledge/label-setup-costs/).

## Material and print

Material scales with printed area, not with quantity:

```
material cost per label ≈ area (m²) × price per m²
```

A 60 × 90 mm label is 0.0054 m². Five thousand of them use 27 m² before waste; waste in label printing typically runs 3–8% depending on the shape and the gap between labels.

Area is where buyers overspend without noticing. A label 20% larger than it needs to be costs 20% more in material on every unit, for the life of the product — and it is invisible on a proof because both versions look "normal" on screen.

## Finishing

Lamination, foil, spot UV and special dies are additional passes, and each has its own setup and per-unit cost:

| Finish | Setup | Per unit | When it earns its cost |
|---|---|---|---|
| Gloss or matte laminate | Low | Low | Almost always on a handled product |
| Soft-touch laminate | Low | Medium | Boxed, premium, not handled wet |
| Foil | Die | Medium | The metallic colour is the brand |
| Spot UV | Screen | Low | Above a few thousand units |
| Emboss | Matched die pair | Medium | Tactile premium on heavy stock |

Lamination is the one finish where skipping it is usually a false economy: it protects the print, and its absence shows within weeks on anything handled.

## Freight and duties

Freight is quoted per shipment, so it behaves like setup: painful at 50 units, negligible at 50,000. Two things are routinely left out of a quoted unit price:

- **Duties and import VAT** — charged at the border, based on the declared value and the product code, not on the printer's price.
- **The last mile** — a courier surcharge for a residential address or a remote postcode can exceed the production cost of a small order.

Ask for the Incoterm. A price quoted EXW and a price quoted DDP are not comparable, and the gap can be 20–30% on a small shipment.

## Reading a quote line by line

A transparent quote separates the fixed block from the variable block. If yours is one number, ask for it split.

| Line | What it covers | What to check |
|---|---|---|
| Artwork or file preparation | Fixing bleed, fonts, resolution, cut path | Ask what was changed; a clean file should not need it |
| Die | One-off steel rule die for a custom shape | Whether the die is kept for reorders, and for how long |
| Print | Ink, press time, make-ready | Whether waste is included or charged separately |
| Material | Face stock, adhesive, liner | Brand and grade, not just "PP" |
| Lamination | Film plus a pass | Gloss, matte or soft-touch; per unit or per pass |
| Proof | Digital, contract or physical | Which one you are approving |
| Cutting | Die cutting, kiss cutting or plotter | Whether the cut path was supplied |
| Packing | Sheets, rolls, cores, cartons | Roll direction and core size if it goes on a machine |
| Freight | Carrier, service, Incoterm | Who clears customs and pays duties |

A quote missing the die line, the laminate line or the freight line is not necessarily cheaper — it is simply incomplete, and the missing items appear later.

## A worked example

The figures below are **invented to show the arithmetic**. They are not our prices, not a market benchmark, and not a quotation. Substitute your own numbers.

A 60 × 90 mm PP label, white, gloss laminate, one design:

| Item | Amount |
|---|---:|
| Setup: file check, standard die, proof | $190 |
| Material and print | $0.028 per label |
| Laminate | $0.007 per label |
| Cutting and packing | $0.006 per label |
| Variable total | $0.041 per label |

| Quantity | Setup per unit | Variable | Unit price | Order total |
|---:|---:|---:|---:|---:|
| 50 | $3.80 | $0.041 | $3.84 | $192 |
| 500 | $0.38 | $0.041 | $0.42 | $210 |
| 5,000 | $0.038 | $0.041 | $0.079 | $395 |
| 50,000 | $0.004 | $0.035 | $0.039 | $1,950 |

Read the last column, not the unit price. Going from 500 to 5,000 multiplies the order by 1.9× and the quantity by 10×. That is the curve, and it is the only argument for ordering more than you can use.

## Why two quotes differ

When two quotes for "the same label" are far apart, the difference is almost always in this list. Ask for each line explicitly:

| Variable | What to ask |
|---|---|
| Size | Exact mm, bleed included or not |
| Material | Brand and grade, not just "PP" |
| Adhesive | Standard, LSE, freezer, removable |
| Laminate | None, gloss, matte, soft-touch |
| Quantity | Per design or total |
| Cutting | Standard die, custom die, plotter |
| Proof | Digital, contract, physical sample |
| Freight | Incoterm and destination |
| Payment | Terms and currency |

A quote that cannot answer these nine is not a quote, it is an estimate with a number attached.

## Quantity breaks are lumpy, not linear

A price list usually shows breaks at 250, 500, 1,000, 2,500 and 5,000. Those numbers are not marketing: they come from the material and the press.

- **Material comes in rolls and sheets.** A roll is a fixed width; labels are imposed across it. If your label is 62 mm wide and the roll imprints five across, the sixth label would need a wider roll — so 5,000 labels may consume the same material as 4,800.
- **The press runs in passes.** A short run still needs the same make-ready and the same number of passes; the only thing that changes is how long the press runs.
- **Finishing has a minimum.** Laminating and die cutting have a minimum web length before the job is worth setting up.

The practical consequence: **an order of 700 often costs the same as 1,000**, because both fall inside the same break. If you are near a break, rounding up to it is usually free. Ask where the breaks are before choosing a quantity, and see [how many labels to order](/knowledge/how-many-labels-to-order/) for the planning side.

## The costs buyers create themselves

Some of the most expensive lines on a label invoice are not printing at all:

| Buyer action | What it adds |
|---|---|
| Artwork sent as a PNG or a screenshot | File preparation, sometimes a redraw |
| Revisions after proof approval | New proof, new make-ready, sometimes a new die |
| Three designs in one small order | Three setups, one shipment |
| "Can you match this Pantone exactly" on a digital run | A spot colour pass, or a rejected proof |
| Delivery to a residential address in a remote postcode | A courier surcharge larger than the label cost |
| Payment by a method with a 3% fee | 3% on the whole order |

None of these are unreasonable requests. They are simply work, and work has a price. A buyer who sends a print-ready vector file, approves one proof, and accepts a standard size is paying for labels rather than for administration.

## Currency, payment terms and the landed cost

The number on the quote is not the number that leaves your account.

- **Currency.** A quote in USD paid from a EUR account carries an FX spread, typically 0.5–2% depending on the bank.
- **Transfer fees.** Intermediary banks deduct a fixed fee, often $15–40, which is a large share of a $200 order.
- **Payment terms.** A 30% deposit and 70% before shipment is normal in this trade; terms of 30 days would be priced in, because the supplier carries the risk.
- **Duties and import VAT.** Calculated on the declared value plus freight, at the destination rate. A label classified under a paper or plastics code may attract a different rate than you expect.
- **Storage.** If the goods sit in a warehouse because your launch slipped, that is a cost too, and it is not on the invoice.

For a small order, these items can add 15–30% to the landed cost. They are also the reason a domestic printer who looks 40% more expensive per label sometimes wins on total cost.

## What the label costs after it is printed

The cheapest label is not the one with the lowest unit price. It is the one that does not create work downstream.

| Failure | Cost beyond the label |
|---|---|
| Label lifts in a fridge | Relabelling labour, or a retailer rejection |
| Colour does not match the carton | A reprint, or a discount to the buyer |
| Barcode will not scan | A chargeback from the retailer, or a manual keying process |
| Label too small for mandatory text | A redesign and a second print run |
| Adhesive fails on recycled plastic | An entire batch relabelled by hand |

A label represents a small fraction of the packed product's cost, which is exactly why a failure is expensive: the label is cheap, the recovery is not. When two quotes differ by 20% on the label and one of them has a lower risk of any row in that table, the 20% is not the deciding number.

## What "cheap" looks like over a year

Three buyers, same product, 12 months:

| | Buyer A | Buyer B | Buyer C |
|---|---|---|---|
| Order size | 5,000 once | 500 × 10 | 50 × 10 |
| Unit price | Lowest | Middle | Highest |
| Reprints | 1 (design change) | 0 | 0 |
| Stock left at year end | 2,100 | 300 | 0 |
| Relabelling labour | 0 | 0 | 0 |

Buyer A paid the least per label and the most in total, because 2,100 labels are dead stock of a design that changed. Buyer C paid the most per label and had no waste. The right quantity sits between them and depends on how fast the design is likely to change, which is a marketing question rather than a printing one.

## Where buyers overspend

1. **Laminate on an indoor label** that never leaves a shelf — sometimes fine, often unnecessary.
2. **A custom die at 50 units**, when a standard size or a kiss-cut sheet would do.
3. **A label larger than the design needs**, paying for area on every unit.
4. **5,000 units of an unproven design**, to "get the better price", then reprinting.
5. **Foil at low volume**, where the die is a large share of the order and a printed metallic effect would look nearly identical.

## What this means for buyers

**Compare total order value, not unit price.** At low quantity, unit price comparisons reward the supplier who quotes a smaller setup, not the cheaper label.

**Ask which block dominates your quote.** If it is setup, the answer is fewer designs, standard shapes, or more quantity. If it is material, the answer is a smaller label or a cheaper stock.

**Order a sample at the quantity you can actually sell**, then reorder at the price break. The setup is already paid.

**Do not treat a low unit price as a win** if it came from dropping the laminate, the proof, or a material you needed. That cost reappears as a reprint.

## Chapters in this guide

- [What actually affects label pricing](/knowledge/what-affects-label-pricing/)
- [What MOQ means](/knowledge/what-is-moq/)
- [Samples and proofs](/knowledge/samples-and-proofs/)
- [Production lead time](/knowledge/production-lead-time/)
- [Cost per unit and per 1,000](/knowledge/label-cost-per-unit/)
- [Setup charges explained](/knowledge/label-setup-costs/)
- [How many labels to order](/knowledge/how-many-labels-to-order/)
