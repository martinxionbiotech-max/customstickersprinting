---
title: "Hang tag artwork and dielines"
description: "How to set up hang tag artwork: trim size, 3 mm bleed, safe area, the hole and eyelet layer, variable data, barcode placement and the proof to approve."
pillar: hang-tags
order: 4
updated: "2026-11"
published: "2026-11-21"
reviewed: "2026-11-21"
relatedProducts: ["hang-tags"]
view: >-
  A hang tag dieline is not a rectangle with a circle on top. The hole, the eyelet clearance, the fold or
  reinforced header and the trim all need to be on separate layers. If the printer has to guess where the
  cut is, the artwork is not finished.
faq:
  - q: "What bleed do hang tags need?"
    a: "Usually 3 mm beyond the trim line, but confirm with the printer because a thick card and a tight die can need more. Bleed is trimmed away; keep text, the hole and the barcode inside the safe area."
  - q: "How do I send a hang tag dieline?"
    a: "Send it as a closed vector path on a separate layer, at final size, with the artwork on its own layer. Do not send a picture of the shape. Label the cut line, the hole and any fold or score line clearly."
  - q: "Can the hole be printed rather than drilled?"
    a: "The hole is a physical cut, not a printed circle. It needs to be in the dieline and, if an eyelet is used, sized for the eyelet barrel. A printed circle where the hole should be will not hang."
---

A hang tag has more geometry than a label: trim, hole, eyelet, fold, score and sometimes a die-cut window. The artwork has to describe all of them without ambiguity. A printer can work with a simple file; a printer cannot work with a JPEG of a shape and a note that says “about this big”.

## The layers

A production-ready hang tag file usually has four layers:

1. **Artwork** — the printed design, including any background that runs to the trim.
2. **Cut line** — a closed vector path at the trim size, in a spot colour named “Cut” or as agreed.
3. **Hole and eyelet** — a circle at the finished hole size, with the eyelet clearance if one is used.
4. **Fold or score** — a dashed line where the card folds or scores, if the tag has a header or a tent shape.

Keep the layers separate and label them. If the cut line is merged into the artwork, the printer has to reconstruct it, which introduces a chance of error and may add a prepress charge.

## Bleed and safe area

Bleed is the extra artwork beyond the cut line. Three millimetres is common, but thick card and a tight die can need more; ask the printer for the requirement. A background that stops at the trim line can leave a white edge after cutting.

Safe area is the opposite: keep text, the logo, the barcode and the hole clearance inside a margin from the trim. Three millimetres is a working minimum; a hole that sits on the trim can tear out. If the design has a border, make it thick enough that a small cutting shift does not make it look uneven.

## The hole is not a printed dot

The hole is a physical cut. It needs to be in the dieline at the finished size, not drawn as a black circle on the artwork. If an eyelet is used, the hole is sized for the eyelet barrel, not for the string. A 4 mm hole with a 6 mm eyelet will not fit; a 6 mm hole with a 4 mm eyelet leaves a gap.

Place the hole 8–10 mm from the top edge, centred left to right, with about 3 mm of clear space around it. If the tag has a folded header, the hole goes through both layers; the fold line and the hole need to be aligned.

## Barcodes and variable data

A retail barcode needs a quiet zone and enough magnification. Place it on a flat area, away from the hole and the trim, and keep the bars perpendicular to the scan direction. A barcode that wraps around a curve or sits on a fold may not scan.

Variable data — batch codes, serial numbers, QR codes or price — needs a defined field and a data file. Send a CSV with one row per tag and confirm the field order in writing. If the data is printed on the back, leave a clear area and check the proof against the first and last row, not just the middle.

## The proof to approve

A digital proof shows the layout, but it does not show the card, the foil, the eyelet or the way the tag hangs. For a first order, ask for a physical proof or a sample on the actual stock. Check:

- the trim and the hole position against a ruler;
- the smallest text at final size;
- the barcode with a scanner, not a phone camera;
- the eyelet fit and the string knot;
- the colour of foil or the depth of emboss on the actual card.

A physical proof costs a little and catches the mistakes that a screen cannot: a hole that is 2 mm off, a barcode that is too close to the trim, a foil that fills in on uncoated card.

## Common mistakes

**Drawing the hole as artwork.** The printer needs a cut path, not a printed circle. If the hole is only in the artwork, it will not be cut.

**Putting text in the bleed.** Bleed is trimmed away. Critical text and the barcode belong inside the safe area.

**Sending a dieline as a PNG.** A picture of a shape is not a cut path. Send a vector file with closed paths.

**Forgetting the eyelet clearance.** An eyelet needs a larger hole than a bare string. If the dieline is drawn for a 4 mm hole and the order specifies a 6 mm eyelet, the tag will not assemble.

**Approving only the front.** The back often carries the barcode, care text or batch code. Check both sides at final size.

## What this means for buyers

**Ask for the dieline before the design is final.** The hole, eyelet and fold are part of the layout; adding them later can push the logo or the barcode out of place.

**Keep the cut line separate.** A clean vector path is cheaper than a prepress reconstruction.

**Check the physical sample.** A digital proof cannot show whether the tag hangs straight or the eyelet fits.

**Send the variable data with the artwork.** A last-minute CSV is a common cause of a delayed or wrong run.

## The dieline layer that survives design and fails production

Layers can be correctly separated in the design file and lost during export. A print dialog scales the page to fit, a PDF flattens the hole layer, the cut line leaves as a hairline stroke, or the fold line disappears. The layout looks unchanged while production receives different geometry. Hang tags are vulnerable because trim, hole, eyelet, fold and variable data all share one small page.

Tag construction determines which layers must survive export. A folded header adds a score that must align with the hole and back artwork; an eyelet needs a finished cut diameter rather than a printed circle; a multi-up sheet needs each cut separated. Variable data and the barcode require their own safe zones. A one-sided flat tag is simpler, but it still depends on a 1:1 artboard and a closed outline. Export settings must preserve every production layer, not only the visible design.

The handoff package needs the layered source and a flattened proof, both opened at 100% and measured against the trim, hole and fold dimensions. Print the proof and place a physical cut sample over it. If variable data is used, send the CSV with the artwork and test the first and last records. The [hang-tags hub](/knowledge/hang-tags/) covers the category, [hang tags](/hang-tags/) shows the product, and [dieline preparation](/knowledge/dieline-preparation/) explains the vector requirements.

| Export or setup slip | What changes on the card | Prepress artifact |
|---|---|---|
| Page scaled to fit the printer | Every dimension shrinks together | A measured 1:1 PDF |
| Hole drawn as a hairline circle | The cut size follows the stroke | Circle at the finished diameter |
| Cut layer flattened into the art | The blade path is no longer separate | Named vector cut layer |
| Fold or score omitted | The header cannot be formed | A distinct dashed score line |
| Variable field shifts during layout | Codes move after the first record | Position map for every field |
