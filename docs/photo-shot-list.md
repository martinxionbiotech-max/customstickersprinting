# Photo shot list

The site currently ships without photography. Every product page has an image slot that stays empty until a file is dropped in — it never renders a broken image. This document is the brief for filling those slots.

## Why this is the bottleneck

A printing site is judged on the print. Text can explain adhesion and material choice; it cannot show colour, edge quality or how a label sits on a curved bottle. Without photos, the product pages read as a specification sheet and convert at a fraction of what they could.

Two rules carried over from the content plan:

- **No AI-generated product mockups presented as real work.** A rendered bottle that never existed is a trust problem, not a design choice.
- **No client logos** unless written permission exists. Use your own brand marks on samples.

## Technical specification

| Item | Requirement |
|---|---|
| Aspect ratio | 4:3 (landscape) for hero images |
| Pixel size | 1200 × 900 minimum, 2400 × 1800 preferred |
| Format | `.webp` (the build also accepts `.avif`, `.jpg`, `.png`) |
| File size | under 200 KB after compression |
| Naming | `<product-slug>.webp` — e.g. `bottle-labels.webp` |
| Location | `public/images/products/` |
| Background | Neutral: white, warm grey, or the actual product context |
| Lighting | Soft, diffused; avoid direct flash and hard shadows |
| Text overlay | None. Crop and caption in the page, not in the file |

The build checks for `public/images/products/<slug>.webp` and uses it automatically. No code change is needed.

## Shot list by product

Each product needs **one hero image** and, where useful, **one detail image** (the second can be added later as `<slug>-detail.webp`; the page currently uses one image per product).

### Labels

| Product | Hero shot | Detail shot |
|---|---|---|
| `custom-labels` | A spread of 5–6 printed labels on a neutral surface, different sizes and shapes | Macro of a die-cut edge and laminate surface |
| `roll-labels` | A roll on a table beside an applicator or a labelled bottle | The roll unwinding, showing spacing and liner |
| `bottle-labels` | A labelled glass bottle on a plain background, label facing camera | Label wrapping the curve, shot at a low angle |
| `jar-labels` | A labelled jar (preserve or candle) with the lid on | Label edge on curved glass, showing no lifting |
| `cosmetic-labels` | A serum bottle and a cream jar side by side | Small-diameter label on a dropper bottle |
| `food-labels` | A labelled sauce bottle in a fridge context | Condensation on the label, edges intact |
| `waterproof-labels` | A labelled bottle with water droplets | Label after immersion, held in hand |
| `clear-labels` | Clear label on a glass bottle against a light background | Close-up showing white ink areas versus transparent areas |

### Stickers

| Product | Hero shot | Detail shot |
|---|---|---|
| `custom-stickers` | A handful of die-cut stickers on a desk | Peeling one sticker from its backing |
| `vinyl-stickers` | Sticker on a laptop lid or a water bottle | Outdoor sticker on glass, daylight |
| `logo-stickers` | Logo stickers scattered on a kraft mailer | Contour cut edge, macro |
| `die-cut-stickers` | Three shapes side by side (circle, rounded rectangle, custom contour) | A complex contour being peeled |
| `sticker-sheets` | A5 sheet with 8–12 stickers, flat lay | Half-peeled sheet showing kiss cut |
| `clear-stickers` | Clear sticker on a dark surface, design "floating" | Edge catch-light on glass |

## Props to collect before the shoot

- Clear and amber glass bottles (beverage, serum, sauce)
- Jam jars and a candle jar
- Kraft mailers and a small carton
- A laptop lid, a water bottle, a shop-window pane of glass
- A neutral cloth or paper backdrop, a spray bottle of water (for condensation shots)

## Composition notes

- Shoot the label **on a product**, not floating on white, for at least half the shots — buyers are judging fit more than print.
- Keep the camera at label height; shooting down flattens the curve and hides edge lift.
- Include one shot per material where the **surface texture** is visible (matte versus gloss, paper versus film).
- Leave breathing room around the product; the page crops to 4:3 and can lose edges.

## After the shoot

1. Export to `.webp`, 1200 × 900, quality ~82.
2. Name by product slug, drop into `public/images/products/`.
3. Run `npm run build` — the image appears on the product page and in the Open Graph tags automatically.
4. Check the rendered page at 375 px width: the image should not push the quote buttons below the fold.

## Interim options

Until photography exists, the pages work without images. If a visual is needed sooner:

- A **plain typographic panel** (product name, materials, MOQ) is honest and looks intentional.
- A **photograph of a real sample on a desk** — even a phone photo in daylight — is better than a render.
- Never a stock image of someone else's labels.
