---
title: "Barcode label printing: quiet zones, grades and failures"
description: "How UPC, EAN and Code 128 symbols fail: quiet zones, magnification, ISO/IEC 15416 grading, and why a barcode that scans on a phone can fail at the till."
pillar: marketplace-labels
order: 3
updated: "2026-11"
relatedProducts: ["custom-labels", "roll-labels", "logo-stickers"]
view: >-
  A barcode is a measurement, not a graphic. The moment it is scaled to fit a design without checking the quiet zone and
  the magnification, it stops being a barcode and becomes a picture of one — which is exactly what a supermarket
  scanner refuses.
faq:
  - q: "What is a quiet zone on a barcode?"
    a: "The blank margin either side of the symbol. UPC-A needs about 9 modules on each side; EAN-13 needs about 11 on the left and 7 on the right. Without it the scanner cannot find where the barcode starts and stops."
  - q: "Why does my barcode scan on my phone but not at the shop?"
    a: "Phone cameras decode far more forgivingly than laser scanners at a till. A symbol with a narrow quiet zone, low contrast or a print-quality grade below C can pass a phone app and still fail retail scanning."
sources:
  - label: "ISO/IEC 15416:2016 — Bar code print quality test specification"
    url: "https://www.iso.org/standard/65577.html"
  - label: "Amazon Seller Central — FBA product packaging requirements (seller login required)"
    url: "https://sellercentral.amazon.com/help/hub/reference/external/200141500"
---

A barcode is read by measuring the width of bars and spaces in thousandths of an inch. Anything that changes those widths — scaling, ink spread, a low-resolution printer — changes whether it scans. This is why barcode printing is a specification exercise rather than a design one.

Part of the [marketplace label requirements guide](/knowledge/marketplace-label-requirements/).

## The three symbols you will meet

| Symbol | Used on | Data | Notes |
|---|---|---|---|
| UPC-A | US retail units | 12 digits | 95 modules wide, 9-module quiet zones |
| EAN-13 | EU and global retail units | 13 digits | 11-module quiet zone left, 7 right |
| Code 128 | FNSKU, carton and internal labels | Alphanumeric | Compact, needs a defined ratio |
| ITF-14 | Shipping cartons | 14 digits | Printed on corrugate, wider tolerances |

The symbol is chosen by the channel, not by preference. A retail unit needs UPC-A or EAN-13; a marketplace unit needs Code 128 for the FNSKU; a carton needs ITF-14 or a Code 128 with the shipment data.

## Quiet zones

The quiet zone is the blank space either side of the bars, and it is the most commonly cropped element in label design.

| Symbol | Left quiet zone | Right quiet zone |
|---|---|---|
| UPC-A | 9 modules | 9 modules |
| EAN-13 | 11 modules | 7 modules |
| Code 128 | 10 modules | 10 modules |

At 100% magnification a UPC module is 0.33 mm, so a 9-module quiet zone is about 3 mm. That is small enough to disappear when a designer "tightens" a layout, and large enough that its absence stops a scanner.

**Never place text, a border or a background pattern inside the quiet zone.** A coloured band behind the barcode can also reduce contrast below the threshold.

## Magnification

Barcodes are specified as a percentage of nominal size, usually 80% to 200%.

- **Below 80%** the bars approach the resolution of the printing process, and print defects dominate.
- **Above 100%** is safe on a large label but takes space.
- **Shrinking a symbol to fit a design** is the single most common cause of a barcode that will not scan.

If the design does not fit a 100% symbol, change the label size rather than the barcode.

## Print quality: ISO/IEC 15416

Print quality is graded by scanning the symbol ten times and scoring the result. The scale runs from A (4.0) to F (0.0):

| Grade | Score | Meaning |
|---|---|---|
| A | 3.5–4.0 | Excellent |
| B | 2.5–3.4 | Good |
| C | 1.5–2.4 | Acceptable — the usual retail minimum |
| D | 0.5–1.4 | Poor, likely to fail in the field |
| F | 0.0–0.4 | Fails |

A phone app is not a verifier. It decodes; it does not grade. If a retailer requires a grade, the symbol has to be measured with a verifier and the report kept.

## The print defects that cause failures

| Defect | Cause | Effect |
|---|---|---|
| Ink spread | Too much ink, absorbent stock, hot thermal head | Bars too wide, ratio distorted |
| Voids | Poor ink transfer, dusty stock | Gaps inside bars, decode errors |
| Edge roughness | Low-resolution printing, textured stock | Unstable measurements |
| Wrong ratio | Symbol regenerated at a non-standard size | Scanner reads the wrong characters |
| Truncated height | Symbol cropped to save space | Scanner cannot find a scan line |
| Low contrast | Coloured background, red bars | No signal |

Red bars on white are a special case: red-light laser scanners see red as white, so the symbol disappears. Dark bars on a light background, always.

## Printing methods compared

| Method | Resolution | Best for | Risk |
|---|---|---|---|
| Thermal transfer | 203–300 dpi | High volume, durable | Ribbon and head wear |
| Laser (sheet) | 600 dpi | Short runs on paper | Toner flaking on film |
| Digital press | 600–1200 dpi | Labels printed with packaging | Cost at low volume |
| Office inkjet | 300–600 dpi | Never for retail barcodes | Ink spread, poor edges |

For anything that will be scanned at a till, thermal transfer or a professional digital press. Office inkjet on glossy stock produces bars with soft edges, and the grade reflects it.

## Testing before the run

1. Print the symbol at final size on the final stock.
2. Scan it with the device that will read it — a handheld laser scanner, not a phone.
3. If a grade is required, measure it with a verifier and record the result.
4. Check the quiet zones with a ruler: 3 mm each side at 100% is the working minimum.
5. Repeat after lamination, because a gloss film changes the reflection.

## What this means for buyers

**Treat the barcode as a measurement, not artwork.** It has a size, a quiet zone and a grade.

**Never scale a symbol to fit a layout.** Change the label, not the barcode.

**Ask for 100% magnification** unless there is a reason not to, and check the quiet zone in the file.

**Verify on the real stock.** The same file prints differently on paper, PP and metallised film.

**Keep the verification report.** Retailers increasingly ask for it, and it is the only defence if a scanner disputes the symbol.
