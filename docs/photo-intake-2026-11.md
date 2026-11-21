# Photo intake — 2026-11-21

Source: 7 images supplied in chat. Checked with a perceptual dHash (9×8) against each other and against the
three existing product photos.

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

## Used asset

- `public/images/production/partner-press.webp` — 1200 × 900, WebP, 86.9 KB, EXIF stripped by re-encode.
- Used on `/about/` only, with caption: “A partner press in China during a production check. This is not our
  own factory.”
- This is a process photograph, **not** a product hero and not evidence that the pictured labels are our work.

## Still needed: 12 product photos

Place in `public/images/products/` as 1200 × 900 WebP under 200 KB:

```
custom-labels.webp
roll-labels.webp
bottle-labels.webp
cosmetic-labels.webp
food-labels.webp
jar-labels.webp
waterproof-labels.webp
clear-labels.webp
vinyl-stickers.webp
die-cut-stickers.webp
sticker-sheets.webp
clear-stickers.webp
```

Rules: real sample, no AI, no third-party brand, no watermark, no text overlay. If a photo shows a client’s
brand, use it only with written permission; otherwise crop to an unbranded area or reshoot.
