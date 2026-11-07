---
title: "How roll labels are made: the five spec details"
description: "From printed web to wound roll: die cutting, waste stripping and rewinding, plus the five roll parameters an applicator needs to run the job."
pillar: printing
order: 2
updated: "2026-11"
relatedProducts: ["roll-labels", "bottle-labels", "custom-labels"]
view: >-
  Most roll-label problems we are asked to fix are specification errors, not printing errors: wrong winding, wrong core, wrong gap for the sensor. Send a photo of the spindle and the roll currently in the machine before ordering, and half the risk disappears before a quote is written.
faq:
  - q: "What is the difference between roll labels and sheet labels?"
    a: "Rolls are wound for an applicator or a hand dispenser, with a defined core, winding direction and gap between labels. Sheets are flat and cut for hand application. Rolls add handling cost, which is why sheets suit a first sample run and rolls suit production."
  - q: "Does the roll direction matter?"
    a: "Yes. If the label leads rather than trails as the web unwinds, it feeds upside down or backwards into the applicator. Direction, winding side and core diameter all have to match the machine, and none of them can be corrected by the printer after the fact."
sources:
  - label: "ISO 12647-6:2020 — Process control for flexographic printing"
    url: "https://www.iso.org/standard/75219.html"
---

A roll label is not a sheet label wound up. The roll format adds a set of mechanical parameters that decide whether the labels feed through an applicator or jam it.

## The production sequence

1. **Print** — digital or flexo, on a web of material.
2. **Laminate** — optional protective film applied over the print.
3. **Die cut** — the shape is cut through the face and adhesive, leaving the liner intact.
4. **Strip** — the waste matrix around the labels is peeled away.
5. **Slit and rewind** — the web is cut to width and wound onto cores.

Each step can introduce a variable that matters at application: registration, die depth, matrix removal, tension and winding direction.

## The five parameters that decide fit

| Parameter | What it controls | Common values |
|---|---|---|
| Roll direction | Whether the label leads or trails as it unwinds | Depends on applicator |
| Core diameter | Whether the roll fits the spindle | 38 mm, 76 mm |
| Labels per roll | Changeover frequency and roll size | 500–5,000 |
| Gap between labels | Sensor detection | 3 mm typical |
| Winding | Inside or outside | Must match the machine |

Get one wrong and the roll runs backwards, the sensor misses, or the roll will not mount.

## Die cutting on a roll

The die cuts through the face material and adhesive but not the liner — a "kiss cut" at web speed. Die depth is critical: too shallow and labels do not detach; too deep and the liner is scored and breaks on the applicator.

This is a machine setting, not an artwork setting, but it is why a change of material can require a new die.

## Waste stripping

After cutting, the material around the labels (the matrix) is peeled away and wound off. On small labels with tight spacing, the matrix can tear during stripping, which leaves a label hanging or a gap in the roll. Wider gaps reduce the risk and increase material use — a trade-off quoted into the price.

## Why roll labels cost more than sheets at low volume

Winding, cores and packing add handling that flat sheets do not need. At 5,000 labels the difference is small; at 50 it can be most of the price. That is why sheets are the sensible format for a first sample run and rolls are for production.

## What this means for buyers

**Send the applicator specification, not just the label size.** Core, direction and winding are not optional details.

**A photo of the spindle and the current roll is usually enough** to work out the specification if you do not have the machine manual.

**Ask for the same roll parameters on reorder.** A supplier change with different winding will stop your line.

**Sheets for validation, rolls for production.** Test the design on a sheet, then move to rolls when volume justifies it.
