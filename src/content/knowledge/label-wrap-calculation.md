---
title: "How to calculate a wrap label size"
description: "The arithmetic behind a wrap label: circumference, overlap versus seam gap, tapered containers, pattern repeats and the errors that cause misfits."
pillar: label-sizing
order: 4
updated: "2026-11"
relatedProducts: ["bottle-labels", "jar-labels", "roll-labels"]
view: >-
  Two formulas cover almost every wrap, and they are not interchangeable: an overlap wrap is circumference plus a few
  millimetres, a gap wrap is circumference minus a few. Choose the wrong one and the label either buckles over itself
  or leaves a strip of container showing at the back of every unit.
faq:
  - q: "How do I calculate the width of a wrap label?"
    a: "Measure the circumference with a soft tape, or multiply the diameter by 3.1416. For an overlap wrap add 3 to 5 mm; for a gap wrap subtract 2 to 3 mm. The two methods give different widths for the same container."
  - q: "What is the circumference of a 75 mm bottle?"
    a: "235.6 mm. Multiply the diameter by pi: 75 times 3.1416 equals 235.6. Add 4 mm of overlap for a wrap of about 240 mm, or subtract 3 mm for a gap wrap of about 233 mm."
---

A wrap label is a rectangle bent around a cylinder, so one dimension is not a length at all — it is a circumference. That single fact explains most badly sized wraps.

This page covers the arithmetic, the two wrap styles, and the shapes where the formula stops working.

## The two formulas

```
Overlap wrap:  width = (π × diameter) + overlap
Gap wrap:      width = (π × diameter) − gap
```

| Wrap style | Formula | Result on a 73 mm jar |
|---|---|---|
| Overlap, 4 mm | 229.3 + 4 | 233 mm |
| Butt join, 1 mm gap | 229.3 − 1 | 228 mm |
| Visible gap, 3 mm | 229.3 − 3 | 226 mm |

Which one you need depends on the artwork and the application:

- **Overlap** suits a continuous colour or a pattern that can afford to repeat over itself at the back. It is the safer choice for hand application, because a small drift still leaves no gap.
- **Gap** suits a design with a defined start and end, or a container where a visible seam line is part of the look. It requires more accurate application.
- **Butt join** is a gap wrap with almost no gap; it looks best and tolerates the least drift.

## Measuring the circumference

Three methods, in order of accuracy:

1. **Soft tape around the body.** Read the number where the tape overlaps itself. Do it twice, at 90° to each other, and use the larger figure.
2. **Calipers plus π.** Measure the diameter at the label position, multiply by 3.1416. Accurate on a true cylinder, wrong on anything oval or tapered.
3. **Paper strip and a ruler.** Wrap a strip, mark the overlap point, lay it flat and measure. Useful when you have no soft tape.

A tape stretched tight reads short; one held loose reads long. On a 230 mm circumference, a 2 mm measurement error is under 1% — but it is the same order as the overlap, which is why the overlap exists.

## Tapered containers

On a cone or a tapered bottle, the top and bottom circumferences differ, so the label is a trapezoid rather than a rectangle.

```
top width    = (π × top diameter)    + overlap
bottom width = (π × bottom diameter) + overlap
height       = slant height of the label area, not vertical height
```

Worked example — a tapered jar, 70 mm at the top, 78 mm at the bottom, label area 55 mm tall on the slant:

| Measurement | Value |
|---|---:|
| Top circumference | 219.9 mm |
| Bottom circumference | 245.0 mm |
| Label width, top (4 mm overlap) | 224 mm |
| Label width, bottom | 249 mm |
| Height | 55 mm |

That is a 25 mm difference across the height. A rectangular 235 × 55 mm label would wrinkle at the bottom or lift at the top on every unit — this is the case where a custom dieline pays for itself.

## Oval and square containers

For an oval bottle, π × diameter is meaningless: the diameter varies with the angle. Wrap a tape around the widest point and read the circumference directly.

For a square or hexagonal container, the perimeter is the sum of the sides, plus the corner radius correction:

```
perimeter ≈ 4 × side − (8 − 2π) × radius
```

In practice, wrap a tape. The formula is included only to explain why a 60 mm square bottle does not take a 240 mm label — the rounded corners remove material from the path.

## Pattern repeats and seams

If the artwork repeats, the repeat has to fit the label width exactly, or the pattern will break at the seam.

```
repeat count = round(label width ÷ repeat size)
adjusted width = repeat count × repeat size
```

Example: a 226 mm gap wrap with a 40 mm repeat. 226 ÷ 40 = 5.65, so five repeats need 200 mm and six need 240 mm. Neither is 226. The options are to adjust the repeat to 37.7 mm (five repeats), accept a deliberate mismatch hidden at the back, or design the seam as a feature — a vertical rule or a colour block that reads as intentional.

This is the single most common reason a wrap design comes back from proofing.

## Tolerance stacking

Three tolerances add up on a wrap:

| Source | Typical |
|---|---|
| Container diameter variation | ±0.5 mm → ±1.6 mm circumference |
| Cutting tolerance | ±0.5 mm |
| Application drift | 1–3 mm hand, ±0.5 mm machine |

Worst case on a hand-applied wrap: about 5 mm. That is why an overlap of 3–5 mm is standard — it absorbs the stack without showing a gap. A gap wrap on the same container needs the drift to be smaller than the gap, which is why it is usually machine-applied.

## What this means for buyers

**Say whether you want an overlap or a gap.** They produce different widths from the same measurement, and the printer cannot guess which look you approved.

**Measure at the label position, not the widest point.** A bottle that bulges in the middle takes a different wrap at the shoulder.

**Round numbers are suspicious.** A 240 mm wrap on a 75 mm bottle is a deliberate overlap, not a measurement.

**For anything tapered or oval, send a photo with a tape around it.** It removes an entire round of proofing.
