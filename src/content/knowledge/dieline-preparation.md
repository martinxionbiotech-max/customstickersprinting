---
title: "Dielines: how to prepare a cut path that works"
description: "What a dieline is, why the cut path must be separate closed vector geometry, and the four mistakes that make a die unusable at the printer."
pillar: artwork
order: 5
updated: "2026-11"
relatedProducts: ["die-cut-stickers", "custom-labels", "sticker-sheets"]
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

## What this means for buyers

**Supply the cut path as a separate vector layer.** It is the single most common missing element in customer files.

**Simplify before you beautify.** Fewer nodes cut cleaner and cost less.

**Consider a standard shape at low volume.** A die is a one-off cost that never goes away.

**Ask for a cut proof on the real material.** Paper and vinyl behave differently at the same path.
