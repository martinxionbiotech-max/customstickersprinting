---
title: "Bleed and safe area for label artwork"
description: "Why labels need 3 mm bleed, why text needs a safe margin, and what happens to a design on a curved bottle where the geometry is less forgiving."
pillar: artwork
order: 2
updated: "2026-11"
relatedProducts: ["custom-labels", "bottle-labels", "die-cut-stickers"]
view: >-
  Bleed is the cheapest insurance in printing and the most commonly skipped. We would rather receive a file with 3 mm of extra background than a beautiful layout that trims with a white sliver on one edge. On small labels the safe area eats a larger share of the design, so the answer is simplification, not shrinkage.
faq:
  - q: "How much bleed do labels need?"
    a: "3 mm on every side is the working standard. The background must extend into the bleed rather than stopping at the trim line, so that any drift in the cut lands on printed area. Text and logos stay at least 3 mm inside the trim."
  - q: "What happens if I forget the safe area?"
    a: "Text placed near the edge looks like a mistake even when the print is perfect, because hand application and die cutting both drift. On a curved bottle the drift is exaggerated, so a design that looks centred on screen can sit visibly off on the product."
sources:
  - label: "ISO 15930-7:2010 — PDF/X-4 for prepress digital data exchange"
    url: "https://www.iso.org/standard/55843.html"
---

Most artwork problems that reach a printer are not design problems. They are two measurements: bleed and safe area.

## Bleed

Cutting is not perfect. A guillotine or a die can drift by a millimetre across a run, and if the artwork stops exactly at the trim line, that drift shows as a white sliver along one edge.

**Bleed** is extra artwork beyond the trim: typically 3 mm on every side. The background extends into it, the blade cuts inside it, and the drift lands on printed area rather than on white.

Rules:
- 3 mm bleed on all sides for labels and stickers.
- Backgrounds and images must extend into the bleed, not stop at the trim.
- Do not put text in the bleed area; it will be cut off.

## Safe area

**Safe area** is the margin inside the trim where text and logos can live without risk. Typically 3 mm, and more on curved surfaces.

Why it matters: a label applied by hand on a curved bottle can sit a millimetre off-centre, and a die cut can drift. Text at the very edge looks like a mistake even when the print is perfect.

On small stickers (under 30 mm), a 3 mm safe area is a large share of the design — which is why small labels have less room for text than designers expect.

## Curved surfaces change the geometry

A flat carton and a cylindrical bottle are not the same canvas. On a bottle:

- A rectangular label wraps around a curve, so the design's edges are foreshortened visually.
- A label applied slightly rotated looks worse than on a flat surface, because the curve exaggerates it.
- On tapered containers, a straight label wrinkles at the top edge; a curved dieline is needed.

For a full wrap, the design must meet itself at the seam. A 2–3 mm gap is normal, and the artwork should account for it rather than leaving a random slice of the design on the back.

## Dielines

For die-cut shapes, the cut path is a separate layer. Two common errors:

1. **The dieline is a picture, not a vector path** — the cutter cannot follow it.
2. **The path is open or has stray points** — the plotter follows them literally and cuts a line across the design.

Supply the path as a single closed vector shape on its own named layer.

## A checklist before sending artwork

- [ ] 3 mm bleed, with background extending into it
- [ ] Text at least 3 mm inside the trim (more on curves)
- [ ] Cut path on a separate, closed vector layer
- [ ] 300 dpi for raster elements at final size
- [ ] CMYK, not RGB
- [ ] Fonts outlined or embedded
- [ ] Barcode quiet zone intact

## What this means for buyers

**Bleed is not optional on a full-bleed design.** Without it, every copy carries a visible white edge somewhere on the run.

**Small labels need more discipline, not less.** The safe area eats a larger proportion of a 30 mm label, so simplify rather than shrink.

**Curved containers deserve a dieline and a sample.** A flat proof cannot show how a wrap sits on a tapered jar.

**Ask for the artwork check before paying.** A printer who reviews your file before the order is cheaper than one who reprints after it.
