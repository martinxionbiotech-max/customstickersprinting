---
title: "Dielines: how to prepare a cut path that works"
description: "What a dieline is, why the cut path must be separate closed vector geometry, and the four mistakes that make a die unusable before it is cut."
pillar: artwork
order: 5
updated: "2026-11"
published: "2026-11-07"
reviewed: "2026-11-21"
relatedProducts: ["die-cut-stickers", "custom-labels", "sticker-sheets"]
view: >-
  A custom contour is often the most expensive way to look different. At low volume we would choose a rounded rectangle and put the difference into the artwork: no die cost, no tearing on peel, and a shape that still reads as deliberate. Fiddly outlines are a volume decision, not a branding one.
faq:
  - q: "What is a dieline in label printing?"
    a: "The vector path the blade follows. It is separate from the artwork, must be a closed shape, and must sit inside the bleed so the cut lands on printed material. A dieline supplied as a picture rather than a path cannot be used to cut."
  - q: "Why does my die-cut sticker tear when peeled?"
    a: "Usually because the shape has features thinner than the material can hold — spikes under about 1.5 mm, letter-shaped cut-outs, or tight internal corners. Paper tears first; vinyl tolerates more. Simplifying the outline fixes it more reliably than changing material."
---

A dieline is the shape a label or sticker is cut to. It is not decoration — it is machine instruction, and a dieline that is visually right can still be technically unusable.

## The three layers of a print-ready file

1. **Artwork** — what prints.
2. **Cut path (dieline)** — where the blade goes.
3. **Special layers** — white ink, foil, spot UV, if used.

Each must be separate and clearly named. A single flattened layer cannot be cut.

## Rules for the cut path

- **Closed**: the path must return to its start point. An open path cuts a line across the design.
- **Vector**: shapes, not pixels. A traced bitmap produces hundreds of nodes and an uneven edge.
- **Single stroke**: one path, not a doubled outline.
- **No stray points**: a point left off-canvas becomes a cut line.
- **Inside the bleed**: the artwork extends 3 mm beyond the cut, so the blade lands on printed area.

## The four common mistakes

**1. The dieline is a picture.** A PNG of a shape cannot drive a plotter. It must be a path.

**2. The path is open.** Usually from drawing with a pen tool and not closing it. The cutter follows literally.

**3. Nodes are excessive.** An auto-traced logo can carry 2,000 nodes, which slows the cut and produces a rough edge. Simplify to the shape, not the pixels.

**4. The shape has features smaller than the material can hold.** Spikes under ~1.5 mm, or letter-shaped cut-outs, tear when peeled — particularly on paper.

## Simple shapes cost less

A circle, rounded rectangle or standard oval uses an existing die or a plotter path with no die cost. A custom contour needs a die above a few hundred units.

If the design works with a rounded rectangle, that choice can halve a small order's price without changing the visual much.

## Multi-piece sheets

For a kiss-cut sheet, each sticker needs its own closed path, with at least 3 mm between paths so the blade does not tear the liner. Sheets also need a registration mark if the cut must align with print.

## A dieline checklist

A dieline is a map for the cutter, not a decorative outline. Before sending it, check:

- **Closed paths:** every cut line is a closed vector shape; no open ends.
- **Separate layer:** the cut line sits on its own layer, not merged with the artwork.
- **Final size:** the dieline is at 1:1, not scaled to fit a page.
- **Bleed:** the artwork extends beyond the cut line, usually 3 mm.
- **Safe area:** text and barcodes are inside the margin.
- **Hole and fold:** holes, eyelets, scores and folds are on their own layers and labelled.
- **No effects:** no drop shadows, strokes or transparency on the cut path.
- **Named spot colour:** the cut line uses a clearly named spot colour or the printer’s convention.

A dieline that looks right on screen can fail because the path is open, the scale is wrong or the cut line is a 0.5 pt stroke instead of a closed shape. The printer can usually fix a small issue, but a redraw is a setup charge and a delay.

If you do not have a dieline, send the artwork and a dimensioned sketch. The printer can build the path, but the shape should be agreed before the quote, not after the proof.

## What this means for buyers

**Supply the cut path as a separate vector layer.** It is the single most common missing element in customer files.

**Simplify before you beautify.** Fewer nodes cut cleaner and cost less.

**Consider a standard shape at low volume.** A die is a one-off cost that never goes away.

**Ask for a cut proof on the real material.** Paper and vinyl behave differently at the same path.
