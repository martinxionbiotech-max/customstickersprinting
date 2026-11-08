---
title: "Marketplace label requirements: FBA, retail and DTC"
description: "The three labels in a marketplace shipment, what Amazon actually requires, where retail rules differ, and the rejections that happen at the dock."
pillar: marketplace-labels
order: 0
updated: "2026-11"
relatedProducts: ["custom-labels", "roll-labels", "logo-stickers"]
view: >-
  Most dock rejections are not printing failures, they are specification failures: the wrong barcode, a bag without a
  warning, a carton label on the wrong face. We would rather spend ten minutes checking a shipment against the
  receiving requirements than a week recovering stock that Amazon has quarantined in another country.
faq:
  - q: "What labels does an Amazon FBA shipment need?"
    a: "Three: an FNSKU on every unit so Amazon can identify your stock, a suffocation warning on any poly bag with an opening of 5 inches or more, and carton labels on the boxes. Expiration-dated products also need a date label on the unit and the carton."
  - q: "Can I use my own UPC instead of an FNSKU?"
    a: "Only if you use the manufacturer barcode option and your product is not commingled with other sellers' stock. With commingled inventory Amazon cannot tell whose unit is whose, so an FNSKU is required. Check the setting before you print anything."
sources:
  - label: "Amazon Seller Central — FBA product packaging requirements (seller login required)"
    url: "https://sellercentral.amazon.com/help/hub/reference/external/200141500"
  - label: "NIST — Packaging and Labeling Requirements FAQs (Fair Packaging and Labeling Act)"
    url: "https://www.nist.gov/pml/owm/faqs/packaging-and-labeling-requirements-faqs"
  - label: "Regulation (EU) No 1169/2011 — food information to consumers"
    url: "https://eur-lex.europa.eu/eli/reg/2011/1169/oj/eng"
---

A marketplace shipment carries three different labels, and they are checked by three different processes: the unit label at receiving, the prep label at inspection, and the carton label at the dock. Failing any one of them stops the shipment.

This guide covers what each label has to do, where marketplaces and retail differ, and the mistakes that cause rejections. Details are current as of November 2026 and policies change — confirm against the marketplace's own help pages before a large run.

## The three labels

| Label | Goes on | Job | Failure mode |
|---|---|---|---|
| Product identifier | Each sellable unit | Lets the warehouse know what the item is and whose it is | Unscannable, wrong barcode, covered by a sticker |
| Prep or warning label | Poly bag, bundle, box | Meets packaging and safety rules | Missing suffocation warning, bag not sealed |
| Carton label | Each shipping carton | Routes the box to the right fulfilment centre | Wrong size, wrong face, unreadable |

They are printed at different times, often by different suppliers, and each has its own specification. Treating them as one "label order" is how a shipment ends up with beautiful product labels and no carton labels.

## Product identification: FNSKU versus UPC

A UPC identifies a product. An FNSKU identifies **your** inventory of that product. That difference decides which one goes on the unit.

| | UPC / EAN | FNSKU |
|---|---|---|
| Who issues it | GS1, via a company prefix | The marketplace, per seller per product |
| Identifies | The product | The seller's stock of the product |
| Used for | Retail scanning, listings | Fulfilment centre receiving |
| Barcode type | UPC-A or EAN-13 | Code 128, usually |
| Can be reused | Yes, same product | Only for the same seller and product |

If your stock is commingled with other sellers', the warehouse cannot use a shared UPC to tell whose unit is whose, so an FNSKU label is applied over it. If you use the manufacturer barcode option and your inventory is not commingled, the UPC stays visible and no sticker is needed.

Either way, the barcode that ends up on the unit must scan first time, on the first attempt, at the receiving station. See [FNSKU labels](/knowledge/fnsku-labels/) for the specification and the scan failures that cause most rejections.

## Prep labels: poly bags and warnings

A poly bag is not just packaging in a marketplace shipment; it is a regulated surface. The requirement that catches most sellers is the suffocation warning.

The common threshold: **any poly bag with an opening of 5 inches (12.7 cm) or more needs a suffocation warning**, printed on the bag or on a label affixed to it, in a legible size. The standard wording warns that the bag is not a toy and should be kept away from babies and children.

Details — exact wording, placement, whether it can be a sticker — vary by marketplace and by destination. See [suffocation warning labels](/knowledge/suffocation-warning-labels/) for the wording and the placement rules that pass inspection.

Other prep labels that appear in the same shipment:

- **Bundle or set labels** — "sold as a set, do not separate".
- **Expiration date labels** — required on expiration-dated products, on the unit and often on the carton.
- **Lot or batch codes** — not always required by the marketplace, but needed for traceability and recalls.
- **Made in / country of origin** — a customs requirement in most markets, not a marketplace one.

## Carton labels

Carton labels are the least glamorous and the most common cause of a refused delivery. What they need to carry:

| Field | Why |
|---|---|
| Shipment ID and carton number | Routes the box and proves the count |
| Fulfilment centre code | Sends it to the right building |
| Barcode, scannable | The dock scanner is the first check |
| Weight and dimensions | Matches the carrier record |
| "Made in" country | Customs, and increasingly receiving |

Two practical rules:

1. **Print them on the face the scanner sees.** A carton label wrapped around a corner reads as damaged and gets set aside.
2. **Do not cover the box seams.** A label across the seam tears when the box is opened and can hide tampering.

## Expiration dates and lot codes

Expiration-dated products — food, supplements, cosmetics, some consumables — carry an extra requirement: the date must be printed on the unit and on the outer carton, in a format the receiving system recognises.

| Requirement | Typical form |
|---|---|
| Unit label | Expiry date in the marketplace's required format |
| Carton label | Same date, plus quantity per carton |
| Format | Usually MM/DD/YYYY or YYYY-MM-DD; check the current rule |
| Placement | On the unit itself, not only on the bag |

A date that is only on the outer carton is treated as missing. A date in an unrecognised format is treated as missing. Both result in the same outcome: the shipment is set aside.

## Retail versus marketplace versus DTC

The same product needs different labels depending on where it sells:

| Channel | Identification | Mandatory text | Barcode |
|---|---|---|---|
| Marketplace (FBA) | FNSKU over the UPC | Suffocation warning, expiry if dated | Code 128, high contrast |
| Retail shelf | UPC/EAN visible | Net contents, identity, business name and address, country of origin | UPC-A or EAN-13, graded |
| Direct-to-consumer | Brand label | Varies by product and market | Optional |

For retail in the United States, the Fair Packaging and Labeling Act requires the identity of the product, the net quantity, and the name and place of business of the manufacturer, packer or distributor on the consumer package. For food in the EU, Regulation 1169/2011 sets a longer list, including ingredients, allergens, net quantity, date marking and a nutrition declaration.

A label designed for DTC usually lacks all of it. That is fine until the same product goes into a retail channel, at which point the label is the blocking item — see [retail packaging labels](/knowledge/retail-packaging-labels/).

## Barcodes: the part that fails silently

A printed barcode either scans or it does not, and the difference is often invisible to the eye. Three variables decide it:

- **Contrast.** Dark bars on a light background. Red bars on white can fail on red-light laser scanners, which see red as white.
- **Quiet zones.** The blank margin either side of the symbol. EAN-13 needs about 11 modules on the left and 7 on the right; UPC-A needs 9 on each side. A design that crops into the quiet zone produces a barcode that looks perfect and will not scan.
- **Print quality.** Ink spread, voids and edge roughness are graded under ISO/IEC 15416, on a scale from A to F. Most retailers want a C or better.

A phone camera is not a verifier. It decodes more forgivingly than a supermarket scanner, so a barcode that works on your phone can still fail at the till. See [barcode label printing](/knowledge/barcode-label-printing/) for the measurements.

## What receiving actually checks

It helps to know the sequence, because each step has its own failure.

1. **Scan.** The carton label is scanned against the shipment record. If it does not scan, the box is set aside before it is opened.
2. **Count and weigh.** The carton's weight is compared with the declared weight. A mismatch — extra units, missing units, the wrong product — triggers an inspection.
3. **Open and inspect.** A sample or every unit is checked for the unit barcode, poly bag rules, and any required warning or date.
4. **Stow.** Only now does the unit get scanned into inventory. An unscannable FNSKU stops the whole lot at this point, after the freight has already been paid.

The commercial sting is the order: by the time a unit barcode fails, the shipment has crossed an ocean. Fixing it means removal, relabelling and resending — or disposal.

## Designing one label for several channels

Some brands want a single label that works for DTC, retail and a marketplace. That is possible, with compromises:

| Requirement | DTC | Retail | Marketplace |
|---|---|---|---|
| Barcode visible | Optional | Required | Required (or covered by FNSKU) |
| Net quantity | Optional | Required | Optional |
| Business name and address | Optional | Required | Optional |
| Suffocation warning | No | Depends on packaging | Required on poly bags |
| Space used | Minimal | Most | Medium |

The practical compromise: design the retail-compliant label as the base, because it carries the most text, then apply an FNSKU sticker for marketplace units. One artwork, two configurations — and the retail version is ready when a buyer asks for it.

The alternative — a minimal DTC label plus a separate retail label later — means a second artwork, a second proof and a second print run at the moment a retail order arrives. That is the expensive path, and it is usually taken under time pressure.

## Quantities and spoilage

Marketplace labels are consumed faster than product labels, for three reasons:

- **One per unit, plus one per re-label.** Units returned and re-labelled need a fresh sticker.
- **Carton labels** are consumed per carton, not per unit — a 50-unit carton takes one, but small cartons take many.
- **Waste at application.** Hand-applied FNSKUs waste 2–5%; a misaligned sticker has to be removed and replaced.

A working rule: order **unit labels at 105% of planned units**, carton labels at 110% of planned cartons, and keep a spare roll of each. A reprint of 200 FNSKU stickers costs more in freight and delay than the stickers themselves.

## The cost of a rejection

| Consequence | What it costs |
|---|---|
| Quarantine at the fulfilment centre | Storage fees while you decide |
| Removal order | Per-unit removal fee plus freight back |
| Relabelling | Labour, new labels, sometimes a new carton |
| Reshipment | Freight paid twice, on the same goods |
| Lost sales | The listing is out of stock for the duration |

Against that, a roll of correctly specified labels costs a fraction. The asymmetry is the whole argument for checking a sample unit before the shipment leaves.

## Timing: order labels before you need them

Marketplace labels are usually needed at a fixed point: the day the goods are packed for the fulfilment centre. Work backwards:

```
packing date − label lead time − shipping time = order date
```

With a 7–12 working day production window and 3–5 days of shipping, the label order has to be placed three weeks before packing. If the artwork needs a proof and a revision, add a week.

Brands that order labels "when the stock is ready" routinely miss the shipment booking, then pay air freight on the labels to catch up — which can cost more than the labels.

## Five reasons a shipment is rejected

1. **Two barcodes visible.** An FNSKU sticker applied beside the UPC instead of over it — the scanner reads the wrong one.
2. **A poly bag with no warning.** The bag was bought ready-made and nobody checked the print.
3. **Carton label on the wrong face**, or duplicated on two faces with different numbers.
4. **Barcode printed too small.** Shrunk to fit a design, below the magnification the symbology allows.
5. **Expiry date only on the carton**, or in a format the receiving system does not parse.

Every one of these is a specification error, not a printing error. All five are preventable with a checklist and a sample unit.

## What this means for buyers

**Separate the three label jobs.** Unit labels, prep labels and carton labels have different specs, different quantities and often different suppliers.

**Check the barcode with a verifier, not a phone.** A grade C or better is the practical target; a phone camera proves nothing about a supermarket scanner.

**Print the warning, do not assume the bag has it.** Stock poly bags frequently arrive without the wording.

**Match the channel to the label.** A DTC label will not pass retail, and a retail label may be too large for an FNSKU sticker.

**Re-check the rules before a large run.** Marketplace requirements change, and a policy update can strand thousands of labels printed to the old specification.

## Chapters in this guide

- [FNSKU labels](/knowledge/fnsku-labels/)
- [Suffocation warning labels](/knowledge/suffocation-warning-labels/)
- [Barcode label printing](/knowledge/barcode-label-printing/)
- [Retail packaging labels](/knowledge/retail-packaging-labels/)
