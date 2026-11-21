---
title: "Artwork file formats: what printers can actually use"
description: "AI, EPS, PDF, SVG, PNG and JPG compared for label printing — which preserve vectors, which flatten, and what to send when you only have a logo image."
pillar: artwork
order: 3
updated: "2026-11"
published: "2026-11-07"
reviewed: "2026-11-21"
relatedProducts: ["custom-labels", "logo-stickers", "die-cut-stickers"]
view: >-
  The single most useful thing a customer can do is ask their designer for the vector original. Everything else — resolution, cut paths, spot white — becomes easier once the file is vector. A flattened PNG is not a design file, and the setup charge for redrawing it lands on the order.
faq:
  - q: "What file format should I send for label printing?"
    a: "A vector PDF or AI file at final size with 3 mm bleed, fonts outlined and the cut path on a separate layer. EPS and SVG also work. PNG or JPG is acceptable only at 300 dpi at final size, and never for a cut path."
  - q: "Can you print from a JPG?"
    a: "Yes, if it is at least 300 dpi at the final print size and does not need a custom cut shape. Above that size it softens visibly, text loses its edge, and any die-cut outline has to be redrawn as a vector, which is a setup charge."
sources:
  - label: "ISO 15930-7:2010 — PDF/X-4 for prepress digital data exchange"
    url: "https://www.iso.org/standard/55843.html"
---

The file you send determines how much of the design survives. A vector file scales and cuts cleanly; a screenshot does neither.

## The formats

| Format | Type | Use for print | Notes |
|---|---|---|---|
| AI (Illustrator) | Vector | Best | Keep layers and text editable or outlined |
| EPS | Vector | Good | Older but reliable; check fonts are outlined |
| PDF | Vector or raster | Best | Export at final size with bleed |
| SVG | Vector | Good for cut paths | Check stroke settings before sending |
| PNG | Raster | Acceptable at 300 dpi | Transparency supported |
| JPG | Raster | Acceptable at 300 dpi | No transparency; compression artefacts |
| Word / PPT / screenshot | Neither | Not usable | Resolution and fonts will fail |

## What "vector" buys you

A vector describes shapes mathematically, so it can be scaled to any size without losing sharpness, and its paths can drive a die cutter.

A raster image is a grid of pixels: at 300 dpi it prints acceptably at the size it was designed for, and badly if enlarged.

For a logo sticker, the difference is visible at the edge: a vector cut is clean, a raster-derived cut is jagged.

## When you only have a PNG

Common with small brands whose logo was designed for a website.

- Send the largest version that exists — 2000 px wide or more.
- Expect it to work at small sizes (up to about 50 mm) and to soften above that.
- Text inside the logo will look soft; consider having the logo redrawn as vector.
- Never upscale and call it fixed: interpolation adds pixels, not detail.

## Layers and cut paths

For die-cut work, the cut path must be a separate vector layer, not part of the artwork. For spot white or foil, the areas need their own layers too.

A flattened JPEG has no layers, which means every special process must be redrawn — a cost that appears on the quote as artwork preparation.

## A pre-flight checklist before you send

A file can look correct on screen and still be unusable for print. Run this list before sending:

- **Vector original:** PDF, AI, EPS or SVG; fonts outlined or embedded.
- **Final size:** artboard equals the trimmed label size, not a scaled-up mock-up.
- **Bleed:** usually 3 mm beyond the trim; background extends into it.
- **Safe area:** text, barcode and logo inside the margin.
- **Cut path:** a separate closed vector layer, named and clearly distinguished from the artwork.
- **White ink:** a separate layer for clear film, with the areas that need opacity marked.
- **Colour:** CMYK for process; spot colours named and confirmed with the printer.
- **Images:** 300 dpi at final size, embedded or supplied with links.
- **Proof:** a PDF at final size with the cut line visible.

If you cannot tick every line, send the file anyway and say what is missing. A printer can fix a missing bleed or outline a font; it cannot reconstruct a vector logo from a screenshot without a redraw charge. The earlier the gap is known, the cheaper the fix.

## What this means for buyers

**Always ask for the vector original** from whoever designed the logo. It is the difference between a cheap reprint and a redesign.

**Export PDFs at final size with bleed.** A PDF exported at business-card size cannot be enlarged.

**Keep cut paths and white-ink areas on separate layers.** It removes an entire class of setup charges.

**Screenshots are not artwork.** A 72 dpi image from a website will not print at 60 mm.
