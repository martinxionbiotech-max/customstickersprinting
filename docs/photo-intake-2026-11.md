# Photo intake — 2026-11-21 (archived)

> **Superseded:** the site now uses industrial SVG schematics for every product and the press process.
> No photograph of customer print work is published without written permission. This file records why the
> supplied photos were not used; it is not a photo request anymore.

Source: 7 images supplied in chat. Checked with a perceptual dHash (9×8) against each other and against the
three product photos that were then in `public/`.

## Deduplication

- No two supplied images are near-duplicates (minimum Hamming distance > 8).
- None is a near-duplicate of `custom-stickers.webp`, `logo-stickers.webp` or `hang-tags.webp`
  (minimum distance 25).
- No file was discarded as a duplicate; the rejection reasons below are rights/provenance, not duplication.

## Verdicts

| Source image | Real? | Verdict | Reason |
|---|---|---|---|
| label rolls on cherry-blossom set | AI | **Do not use** | AI-generated rolls; pseudo-text; KOMATSU/Spring Leaf/other marks |
| factory wide shot | AI | **Do not use** | AI-generated; machine/web geometry implausible |
| CoCo cup-seal rolls | Real | **Do not use on site** | Prominent CoCo trademark and Chinese text; needs written brand permission |
| worker at roll-fed press | Real | **Used on /about/** | No prominent third-party brand; captioned as a partner press, not our factory |
| amber glass bottle | AI | **Do not use** | AI pseudo-text; glass/base artifacts |
| CAMATEL / Pink rose label rolls | Real | **Reference only** | `ppzhan.com` watermark and third-party marks; crops still contain brands/Chinese or production marks |
| DIYTrade label/sticker sheets | Real | **Reference only** | `Powered by DIYTrade.com` watermark; remaining crops contain third-party product art/text or are too low-resolution |

## Previously used asset (now retired)

- `public/images/production/partner-press.webp` was briefly used on `/about/`, then removed when the site
  moved to vector schematics. It is no longer in `public/`.
- Its replacement is `public/images/production/roll-press-schematic.svg`, an industrial SVG drawing.
- The current caption is: “Roll-fed press — industrial schematic, not a photograph. Customer print work is not
  shown without written permission.”

## Current visual policy

- Every product visual is an SVG schematic in `public/images/products/`.
- No customer print photography is published without written permission.
- The policy is stated on every product page, in the footer, and on `/declarations/#photography`.
- The generator is `scripts/generate-schematics.py`.
