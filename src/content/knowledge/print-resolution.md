---
title: "Print resolution: why 300 dpi is the number"
description: "What dpi actually measures, why a 72 dpi web image cannot be scaled to a label, and how to check resolution at final print size before sending files."
pillar: artwork
order: 4
updated: "2026-11"
relatedProducts: ["custom-labels", "custom-stickers", "logo-stickers"]
view: >-
  Upscaling is the most common false fix we see. If the pixel count is short at final size, we would redraw the logo rather than enlarge the file: interpolation adds no detail, and a die-cut edge shows exactly how little was added. Vector artwork removes the problem entirely.
faq:
  - q: "What resolution do I need for a label?"
    a: "300 dpi at the final print size. For a 50 mm label that is about 600 pixels across; for 100 mm, about 1,200. A file that is 300 dpi at a smaller size becomes 150 dpi when enlarged to fit, because the same pixels spread further."
  - q: "Can a low-resolution logo be fixed by upscaling?"
    a: "No. Interpolation invents pixels by averaging neighbours, which smooths the blur without restoring detail. AI upscalers produce plausible sharpening that still fails at a cut edge or under a loupe. Only re-drawing the logo as vector actually fixes it."
sources:
  - label: "ISO/IEC 15416:2016 — Bar code print quality test specification"
    url: "https://www.iso.org/standard/65577.html"
---

Resolution questions cause more reprints than any other artwork issue, and they are entirely preventable with one calculation.

## What dpi means

Dots per inch: how many printed dots fit in one inch of the final product. 300 dpi means 300 dots across every inch of label.

The number only means something **at a print size**. An image that is 300 dpi at 20 mm can be 150 dpi at 40 mm, because the same pixels are spread over twice the distance.

## The arithmetic

```
required pixels = print size (inches) × 300
```

A 50 mm label is about 2 inches, so it needs roughly 600 px across. A 100 mm label needs about 1200 px.

| Label width | Pixels needed at 300 dpi |
|---|---|
| 30 mm (1.2 in) | ~360 px |
| 50 mm (2 in) | ~600 px |
| 75 mm (3 in) | ~900 px |
| 100 mm (4 in) | ~1200 px |

## Why web images fail

A logo saved for a website is often 200–400 px wide and 72 dpi. Stretched to a 75 mm label, it lands around 90–130 dpi — visibly soft, with jagged edges on any diagonal.

Upscaling does not fix this. Interpolation invents pixels by averaging neighbours; it smooths the blur but adds no detail. Modern AI upscalers produce plausible sharpening that still fails at a die-cut edge.

## What resolution do you actually need

- **Photographs**: 300 dpi at final size. 250 dpi is acceptable on textured stock.
- **Line art and text**: vector, so resolution is irrelevant.
- **Barcodes**: at least 300 dpi, and never scaled from a screenshot — a barcode that scans on screen can fail a scanner.

## Checking before you send

In any image editor, open the file and look at pixel dimensions. Divide by 300 to get the maximum print width in inches; multiply by 25.4 for millimetres. If that number is smaller than your label, the file is short.

## What this means for buyers

**Check resolution at final size, not at file size.** A 3000 px image is generous on a 30 mm label and marginal on a 200 mm one.

**Ask the designer for the vector.** Resolution problems disappear entirely with vector artwork.

**Do not upscale and hope.** It is visible on the shelf and obvious at a cut edge.

**Barcodes deserve their own check.** Test-scan a printed proof before a production run.
