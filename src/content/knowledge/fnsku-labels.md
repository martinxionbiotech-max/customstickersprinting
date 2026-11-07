---
title: "FNSKU labels: specification and scan failures"
description: "What an FNSKU is, how it differs from a UPC, where to place the label on a unit, and the six reasons an FNSKU fails to scan at the fulfilment centre."
pillar: marketplace-labels
order: 1
updated: "2026-11"
relatedProducts: ["custom-labels", "roll-labels", "logo-stickers"]
view: >-
  An FNSKU is not a product code, it is an ownership tag, and that is why it has to cover the UPC rather than sit
  beside it. Two visible barcodes is the single most common reason a unit is scanned into the wrong seller's
  inventory or rejected outright.
faq:
  - q: "What size should an FNSKU label be?"
    a: "There is no single mandated size; the requirement is that it scans reliably. Most sellers use 1 by 1 inch (25 by 25 mm) or 2 by 1 inch (51 by 25 mm). Smaller than 25 mm square starts to fail on curved units and at low print quality."
  - q: "Do I have to cover the original UPC with an FNSKU?"
    a: "Yes, if you are using the Amazon barcode. A scanner that finds two barcodes cannot tell which one to use, and the unit may be rejected or mis-received. The FNSKU goes over the UPC, not next to it."
sources:
  - label: "Amazon Seller Central — FBA product packaging requirements (seller login required)"
    url: "https://sellercentral.amazon.com/help/hub/reference/external/200141500"
  - label: "ISO/IEC 15416:2016 — Bar code print quality test specification"
    url: "https://www.iso.org/standard/65577.html"
---

An FNSKU is a barcode Amazon assigns to your specific listing, for your specific seller account. A UPC says "this is a 250 ml amber bottle of lavender oil". An FNSKU says "this is your 250 ml amber bottle of lavender oil, in this fulfilment centre".

That difference is why the label has to cover the original barcode rather than sit beside it.

Part of the [marketplace label requirements guide](/knowledge/marketplace-label-requirements/).

## FNSKU versus UPC, in practice

| | UPC | FNSKU |
|---|---|---|
| Issued by | GS1 through a company prefix | Amazon, per seller per product |
| Digits | 12 (UPC-A) or 13 (EAN-13) | Alphanumeric, encoded as Code 128 |
| Tells the warehouse | What the product is | Whose stock it is |
| Reusable | Yes, across sellers | Only for the same seller and product |
| Where it goes | Retail packaging | Over the retail barcode, on the unit |

Two consequences follow. First, an FNSKU cannot be printed before the listing exists. Second, if the product already carries a UPC, the FNSKU has to obscure it — a sticker applied next to the UPC creates two scannable symbols and an ambiguous unit.

## What the label needs

- **A white background.** Transparent labels on a dark carton reduce contrast and fail the scanner.
- **High contrast bars.** Black on white. Not grey, not a brand colour, not a metallic stock.
- **A scannable size.** Most sellers use 1 × 1 in (25 × 25 mm) or 2 × 1 in (51 × 25 mm). Below about 25 mm square, print quality and curvature start to matter more than the symbology allows.
- **A flat, low-curvature placement.** On a bottle, that is the panel, not the shoulder. On a pouch, that is the flat face, not the gusset.
- **No gloss over the bars.** A glossy laminate reflects the scanner beam. Matte is safer on a curved surface.

## The six scan failures

1. **Two barcodes visible.** The FNSKU sits beside the UPC instead of over it.
2. **Printed too small.** Shrunk to fit a design, below the magnification the symbology tolerates.
3. **Curved placement.** The label follows the bottle and the bars distort at the edges.
4. **Ink spread.** A thermal printer running too hot fattens the bars until they merge.
5. **Glare.** Gloss laminate or a shrink-wrap over the label reflects the beam.
6. **Wrong symbology.** A Code 128 generated at the wrong ratio, or a UPC rendered as a graphic rather than a barcode.

All six produce the same outcome: the unit is set aside, and the shipment stops.

## Printing method

| Method | Good for | Risk |
|---|---|---|
| Thermal transfer (ribbon) | High volume, durable | Ribbon cost; print head wear |
| Direct thermal | Short-life labels | Fades with heat and light — poor for stock stored months |
| Laser (sheet) | Small batches | Toner flaking on film stock |
| Digital press | Labels ordered with the packaging | Cost at low volume |

For inventory that will sit in a fulfilment centre for months, direct thermal is the wrong choice: the print fades and the barcode stops scanning. Thermal transfer with a resin ribbon is the durable option.

## How many to order

Unit labels are consumed faster than the unit count suggests:

- One per unit, plus one for every re-label after a return.
- 2–5% waste at hand application.
- A spare roll, because running out mid-shipment means an emergency order at express rates.

A practical rule is **105% of planned units, plus one roll**.

## What this means for buyers

**Order FNSKUs after the listing exists**, not before — the code is generated per seller and per product.

**Place it over the UPC, centred**, and check that no second barcode is visible.

**Choose matte over gloss** on any curved unit, and avoid clear film over the bars.

**Test one unit with a real scanner** before labelling a whole carton. A phone camera is more forgiving than a receiving station.

**Keep the label flat.** A curved or wrinkled FNSKU is a rejected unit.
