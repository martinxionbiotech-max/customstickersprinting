---
title: "Label cost per unit and per 1,000"
description: "How to work out a true per-unit label cost, why price per 1,000 misleads below 5,000 units, and the two levers that cut unit price without ordering more."
pillar: label-cost
order: 5
updated: "2026-11"
relatedProducts: ["custom-labels", "custom-stickers", "roll-labels"]
view: >-
  Price per 1,000 is a useful number at volume and a misleading one at 50 units, where it turns a $190 setup into
  $3,800 per thousand and makes a normal order look absurd. We would always rather quote a unit price with the setup
  shown separately than hide it inside a headline figure.
faq:
  - q: "How do I calculate the cost per label?"
    a: "Divide the setup by the quantity, then add the variable cost: unit price equals setup divided by quantity, plus material, plus finishing. At 50 units a 190 dollar setup adds 3.80 per label; at 5,000 it adds four cents."
  - q: "Why is the price per 1,000 lower at higher quantities?"
    a: "Because the setup is fixed. The material cost per label barely moves with quantity, but the setup is divided across more pieces, so the per-unit figure falls steeply and then flattens. Below about 500 units the curve is dominated by setup."
---

"Your price per 1,000 is $3,840" is technically true for a 50-unit order and completely useless. The metric only behaves like a price when the fixed block has been spread thin enough to ignore — which happens somewhere above a few thousand units.

This page shows how to calculate a real per-unit cost, where the metric misleads, and what actually moves the number.

Part of the [cost and ordering guide](/knowledge/custom-label-printing-cost/).

## The formula

```
unit cost = (setup ÷ quantity) + variable cost per label

variable cost = material + print + finishing + packing
```

Everything that follows is that formula with different numbers.

## The same job at four quantities

Using the illustrative figures from the cost guide (a 60 × 90 mm PP label, $190 setup, $0.041 variable):

| Quantity | Setup per unit | Variable | Unit cost | Per 1,000 |
|---:|---:|---:|---:|---:|
| 50 | $3.800 | $0.041 | $3.841 | $3,841 |
| 250 | $0.760 | $0.041 | $0.801 | $801 |
| 1,000 | $0.190 | $0.041 | $0.231 | $231 |
| 5,000 | $0.038 | $0.041 | $0.079 | $79 |
| 20,000 | $0.010 | $0.036 | $0.046 | $46 |

Two things to read from this table:

1. **The per-1,000 figure falls by 98%** between 50 and 20,000, while the actual material cost per label falls by about 12%. Almost all of the apparent saving is setup being divided differently.
2. **The variable cost is the floor.** No quantity makes a label cheaper than its material, ink and finishing. Below that floor, something has been removed.

## Why per-1,000 misleads at low volume

The metric assumes a large denominator. At 50 units it multiplies the setup by 20 to produce a number that no buyer would ever pay per thousand, because they are not buying a thousand.

It is useful in three situations:

- Comparing **suppliers at the same quantity**, where setup is comparable.
- Tracking **your own reorder price** over time, at a stable quantity.
- Budgeting at **volume**, where the difference between $79 and $74 per thousand is a real line item.

It is misleading when comparing **different quantities**, which is exactly how it is usually used.

## The two levers that cut unit price without ordering more

If quantity is fixed, two changes reduce the fixed block per unit:

**1. Combine designs into one order.** Three 50-unit designs that share a material and size carry one setup, not three. The unit price falls toward the 150-unit level while the total quantity stays at 150.

| Approach | Setups | Effective setup per unit |
|---|---:|---:|
| Three orders of 50 | 3 | $3.80 |
| One order of 150, three designs | 1 | $1.27 |

**2. Remove the custom die.** A standard size or a kiss-cut sheet uses an existing die or a plotter path. On a 50-unit order that can remove 20–40% of the unit price without touching the material — see [standard label sizes](/knowledge/standard-label-sizes/).

Both levers act on setup, which is why they work at low volume and stop mattering at high volume.

## What does not lower unit price

- **Asking for a discount on a 50-unit order.** There is no margin to give; the quote is mostly someone else's cost.
- **Reducing the number of colours** in digital printing. Unlike flexo, there is no plate per colour, so fewer colours does not remove a setup.
- **Supplying the artwork "print-ready"** when it is not. A file that still needs bleed and cut paths adds work rather than removing it.

## How to compare two quotes properly

Ask for the same six fields from each supplier, then compare like with like:

| Field | Why it matters |
|---|---|
| Quantity per design | 500 total and 500 per design are different jobs |
| Size in mm | Area drives material |
| Material and adhesive grade | "PP" covers several films |
| Laminate | Present or absent changes both price and life |
| Cut method | Standard die, custom die or plotter |
| Setup shown separately | Without it, the unit price hides the fixed block |

If one quote will not separate setup from unit price, treat its unit price as unverified rather than cheap.

## What this means for buyers

**Calculate the unit cost yourself** with the formula, using the vendor's numbers. It takes a minute and it reveals what the quote is actually made of.

**Compare at equal quantity.** A per-1,000 comparison across different quantities is not a comparison.

**Use the two low-volume levers before adding quantity.** Combining designs and dropping a custom die usually beats ordering stock you cannot sell.

**Treat the variable cost as the floor.** If a quote is below it, something has been removed — laminate, proof, or grade.
