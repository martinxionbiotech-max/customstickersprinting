---
title: "CMYK vs RGB for print: why colour shifts"
description: "How screens and ink reproduce colour differently, which brand colours shift, and when a spot colour or a physical proof is the only way to match."
pillar: artwork
order: 1
updated: "2026-11"
published: "2026-11-07"
reviewed: "2026-11-21"
relatedProducts: ["custom-labels", "cosmetic-labels", "logo-stickers"]
view: >-
  If the brand colour lives on screens and packaging, design in CMYK and proof on the real stock. We would rather tell a customer that their neon green cannot be printed than print it dull and call it a colour difference. Spot colour exists precisely for the colours CMYK cannot reach.
faq:
  - q: "Why does my label look duller than my screen?"
    a: "Because screens emit light and ink absorbs it, so CMYK covers a smaller range of colour. Bright greens, oranges and deep blues fall outside it and get approximated. A physical proof on the actual stock shows what will really print."
  - q: "Can neon or metallic colours be printed?"
    a: "Not with CMYK. Neons need fluorescent inks, metallics need foil or a metallised stock. Both are separate processes with their own setup cost, and both are worth asking about before the design is finalised rather than after."
sources:
  - label: "ISO 12647-6:2020 — Process control for flexographic printing"
    url: "https://www.iso.org/standard/75219.html"
  - label: "ISO 12647-7:2016 — Proofing processes working from digital data"
    url: "https://www.iso.org/standard/66426.html"
---

A file that looks perfect on screen can print duller, darker or simply different. That is not a printing fault; it is two colour models describing different physical realities.

## Two models, two gamuts

**RGB** is light: red, green and blue added together. A screen can produce very bright, saturated colours because it emits light.

**CMYK** is ink: cyan, magenta, yellow and black subtracted from white paper. Ink absorbs light, so the printable range is smaller — especially in bright greens, oranges and deep blues.

Every colour outside the CMYK gamut is "out of gamut" and will be approximated when converted.

## The colours that shift most

| Colour | What happens in CMYK |
|---|---|
| Bright orange | Becomes duller and redder |
| Vivid green | Loses saturation, can look olive |
| Electric blue | Darkens and desaturates |
| Neon / fluorescent | Cannot be reproduced with CMYK at all |
| Metallic gold / silver | Requires a metallic stock or foil, not ink |

If a brand colour is one of these, CMYK printing will not match it — and no amount of tweaking the file will fix that.

## What to do about it

**1. Supply CMYK files.** If you send RGB, the printer converts it, and the conversion is a judgement call you did not make.

**2. Ask for a physical proof on the real material.** A screen proof cannot show how ink sits on matte paper versus gloss film.

**3. Use a spot colour when the match matters.** Flexo can print a mixed ink to a Pantone reference — exact, but a separate plate and a separate cost.

**4. Accept small variation between runs.** Print runs vary slightly in ink density; a brand colour that is "close" on one run may be slightly different on the next.

## Black text

For small text, use 100% K rather than a rich black (CMYK mixed). Rich black on small type can look blurry from registration shift, and on uncoated stock it can look muddy.

For large solid areas, a rich black gives a deeper result — a deliberate choice, not a default.

## White ink

White is not a CMYK colour. On clear or metallic stock, white is a separate ink layer printed behind the design. Without it, colours are translucent. This is why clear labels and clear stickers need a white-ink decision in the artwork, not just in the quote.

## A conversion workflow that avoids surprises

The safest colour workflow is boring: design in CMYK from the start, or convert to CMYK before you judge the colour. Do not design in RGB, approve on a bright screen, and expect the printed label to match.

1. **Assign the correct profile** to the document; do not convert an untagged file blindly.
2. **Convert to CMYK** using the profile the printer specifies, or a standard coated/uncoated profile if none is given.
3. **Check the out-of-gamut colours.** Bright oranges, greens and blues may shift; a spot colour is the only reliable way to hold them.
4. **Soft-proof** on a calibrated monitor, then approve a physical proof for colour-critical work.
5. **Keep the CMYK values** in the final file; do not let the printer reconvert an RGB file without telling you.

A rich black is not 100% of all four inks on small text; it can look blurry from registration shift. For small type, a single black or a controlled rich black is usually cleaner. For a large solid black area, a rich black can look deeper, but it needs the printer’s recommendation.

The screen is an emissive RGB device; ink is subtractive CMYK on a substrate. They will never match exactly. The goal is a predictable, approved print, not a screen match.

## What this means for buyers

**Design in CMYK from the start** if print is the destination; converting at the end is where surprises come from.

**Check your brand colour against a CMYK swatch** before approving a design, not after the run.

**Ask for a proof on the actual stock** when colour matters. It is the only test that includes ink, material and finish.

**Spot colour is a budget decision.** Exact match is possible; it costs a plate and a separate pass, and it is usually worth it only on high-volume brand packaging.

## The approved screen colour that has no printable ink recipe

A colour can be approved on a bright monitor and still have no reliable ink recipe. An untagged RGB file leaves the conversion choice to someone else, a linked photograph may stay in RGB while the layout is CMYK, and a brand spot may be converted to process when the file is flattened. The preview looks like the intended colour because the screen is emitting light; the press has to build that appearance from inks and a substrate.

Each colour and process combination carries its own conversion risk. A deep blue or vivid green may sit outside what process inks can reach, while a neutral grey may be reproducible but sensitive to small changes. Digital and flexo build colour differently, and white ink on clear film adds another layer behind the artwork. If the brand colour is a fixed asset, ask for a spot ink and a physical reference rather than trusting a conversion from RGB.

The printer's output profile and proofing method should be captured before the working file and its linked images are converted. Preserve spot-colour names and separate white-ink areas. Approve a proof on the actual stock, not a monitor, before releasing the run. The [artwork hub](/knowledge/artwork/) covers colour setup, [cosmetic labels](/cosmetic-labels/) shows a colour-critical application, and [print colour consistency](/knowledge/print-colour-consistency/) explains repeat-run control.

| Colour object in the file | Conversion hidden by the preview | Approval route |
|---|---|---|
| Untagged RGB artwork | The output profile decides the ink build | Assign and convert deliberately |
| Linked RGB photograph | The layout looks CMYK but the image is not | Check every linked image |
| Brand green set as a spot | Conversion may replace the named ink | Confirm the spot survives output |
| Small text built as rich black | Four inks may misregister | Use a controlled black build |
| White behind artwork on clear film | Transparency shows the product through | Approve a white-ink layer proof |
