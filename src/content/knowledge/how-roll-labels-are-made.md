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


<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-labelledby="fig-roll">
  <title id="fig-roll">Anatomy of a roll label: core, wound web, labels and gaps</title>
  <rect x="0" y="0" width="720" height="320" fill="#ffffff"/>
  <circle cx="170" cy="160" r="96" fill="#dfe7ee"/>
  <circle cx="170" cy="160" r="86" fill="none" stroke="#c7d2dd" stroke-width="1"/>
  <circle cx="170" cy="160" r="74" fill="none" stroke="#c7d2dd" stroke-width="1"/>
  <circle cx="170" cy="160" r="62" fill="none" stroke="#c7d2dd" stroke-width="1"/>
  <circle cx="170" cy="160" r="50" fill="#ffffff" stroke="#0f3d5c" stroke-width="2"/>
  <circle cx="170" cy="160" r="30" fill="#f7f8fa" stroke="#6b7280" stroke-width="1.5"/>
  <text x="170" y="164" font-family="Arial, sans-serif" font-size="11" fill="#6b7280" text-anchor="middle">core</text>
  <path d="M266 160 C 320 160, 330 120, 390 120" fill="none" stroke="#0f3d5c" stroke-width="2"/>
  <rect x="390" y="104" width="58" height="32" fill="#0f3d5c"/>
  <rect x="456" y="104" width="58" height="32" fill="#0f3d5c"/>
  <rect x="522" y="104" width="58" height="32" fill="#0f3d5c"/>
  <line x1="390" y1="152" x2="580" y2="152" stroke="#0f3d5c" stroke-width="2"/>
  <line x1="448" y1="104" x2="448" y2="152" stroke="#c2410c" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="456" y1="104" x2="456" y2="152" stroke="#c2410c" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="452" y="172" font-family="Arial, sans-serif" font-size="11" fill="#c2410c" text-anchor="middle">gap</text>
  <text x="60" y="40" font-family="Arial, sans-serif" font-size="12" fill="#6b7280">side view</text>
  <text x="60" y="262" font-family="Arial, sans-serif" font-size="13" fill="#14161a">Printed web &#8594; die cut &#8594; waste stripped &#8594; rewound on a core</text>
  <text x="60" y="284" font-family="Arial, sans-serif" font-size="12" fill="#6b7280">Labels stay on an intact liner; the matrix between them is removed.</text>
</svg>
<figcaption>A roll is a printed web, die cut, stripped and rewound on a core.</figcaption>
</figure>

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
