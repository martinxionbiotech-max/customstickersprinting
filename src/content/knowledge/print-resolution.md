---
title: "Print resolution: why 300 dpi is the number"
description: "What dpi actually measures, why a 72 dpi web image cannot be scaled to a label, and how to check resolution at final print size before sending files."
pillar: artwork
order: 4
updated: "2026-11"
published: "2026-11-07"
reviewed: "2026-11-21"
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

## The 300 dpi check in practice

The calculation is simple, but the units are where people trip. Take the pixel width of the image and divide by 300; the result is the maximum print width in inches. Multiply by 25.4 for millimetres.

A 1,200 px image is 4 inches (about 102 mm) at 300 dpi. On a 50 mm label it is comfortably above 300 dpi; on a 150 mm label it is about 200 dpi and will look soft. A 600 px logo is 2 inches (about 51 mm) at 300 dpi; on a 75 mm label it is about 200 dpi, which is marginal for small text.

For a barcode, do not rely on the overall image resolution. The symbol needs clean edges, the correct magnification and a quiet zone. A barcode embedded in a high-resolution image can still fail if it was scaled from a screenshot or if the bars are too thin for the printer. Test-scan a printed proof with the scanner used at receiving.

For photographs, 300 dpi at final size is the target; 250 dpi can be acceptable on a textured stock where the texture hides softness. For line art and text, vector is the answer, and resolution stops being the question.

## What this means for buyers

**Check resolution at final size, not at file size.** A 3000 px image is generous on a 30 mm label and marginal on a 200 mm one.

**Ask the designer for the vector.** Resolution problems disappear entirely with vector artwork.

**Do not upscale and hope.** It is visible on the shelf and obvious at a cut edge.

**Barcodes deserve their own check.** Test-scan a printed proof before a production run.

## The sharp-looking file that softens at final label size

A file described as 300 dpi can still be soft at final size. The number may describe an image before it was enlarged, a placed logo may come from a web download, or a crisp vector title may sit beside a raster photograph that dominates the label. On screen the preview is resampled to the window; the press sees the actual pixels and prints them at the physical dimension. The result looks acceptable in the design file and unfinished on the product.

Label content determines where softness becomes a defect. A photograph can survive on textured stock where the surface hides slight softness, while small text, fine rules and a barcode need much cleaner edges. Vector artwork removes the resolution question for logos and type, but not for linked photographs. Upscaling can make a sample look smoother without adding detail, and compression artefacts can become more visible at a die-cut edge.

Every image belongs at final size, viewed at 100% and compared with the printed dimensions. Check the smallest text and symbols on a proof rather than judging the whole layout zoomed out. Ask the printer to preflight placed images and flag effective resolution at output size. The [artwork hub](/knowledge/artwork/) explains final-size files, [custom labels](/custom-labels/) shows the production formats, and [barcode label printing](/knowledge/barcode-label-printing/) covers symbols that need their own edge check.

| Element on the label | What resolution metadata can hide | Final-size inspection |
|---|---|---|
| Hero photograph | It was enlarged after saving | View at 100% at printed width |
| Logo downloaded from a website | It is a small raster inside a vector frame | Request the original vector |
| Small serif type | It was rasterised by the export | Zoom to the printed letter height |
| Barcode placed as an image | Its bars were resampled with the picture | Measure and test-scan the symbol |
| Fine rule or icon | It carries compression artefacts | Check straight edges on the proof |
