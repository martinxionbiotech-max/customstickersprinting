---
title: "QR codes on labels: size, contrast and destination control"
description: "How to size a QR code from its module count, protect the quiet zone, choose error correction, test the printed symbol and keep the destination stable."
pillar: specialty-labels
order: 1
updated: "2026-11"
published: "2026-11-21"
reviewed: "2026-11-21"
relatedProducts: ["custom-labels", "roll-labels", "bottle-labels"]
view: >-
  In our view, a QR code is an interface with a printing tolerance, not a graphic that
  happens to be square. Fix the destination and encoded data first, then let the generated
  symbol set its version and module count. Size the label around that result, verify a
  real-size print at the intended distance and keep the resolver under the brand's control.
  Most QR failures are specification failures long before they are printing failures.
faq:
  - q: "What is the smallest practical size for a QR code on a product label?"
    a: "There is no universal minimum because the encoded data, module count, print method, contrast and scan distance all change the answer. A working method is to choose a module size of at least roughly 0.4–0.5 mm, add the four-module quiet zone, calculate the block, then test a real-size print at 30–40 cm. The test matters more than a single catalogue number."
  - q: "Why does my QR code need a four-module quiet zone?"
    a: "The quiet zone is the clear margin that lets a camera distinguish the symbol from surrounding print and packaging. Four modules on every side is the conventional minimum for a basic QR symbol. A visually tidy border is not automatically a quiet zone if another element, varnish edge or dark background intrudes on it."
  - q: "Does a higher error-correction level make a QR code safer?"
    a: "Higher error correction can help a reader recover from some damage, but it also increases the symbol version and module count for the same data. That can make the printed code denser and harder to scan at a small size. It cannot compensate for poor contrast, a missing quiet zone or an unstable destination URL."
  - q: "Is a QR code the same as a GS1 Digital Link?"
    a: "No. QR is a symbol format that can carry many kinds of data. GS1 Digital Link is a standard for encoding GS1 identifiers in a web address so a resolver can connect the scan to product information. A QR code can carry a GS1 Digital Link, but not every QR code is one, and the two terms are not interchangeable."
  - q: "What should I test before printing QR labels?"
    a: "Print the final artwork at final size with the final data length and scan it at the intended distance under realistic lighting. Test more than one phone or reader where practical, check the quiet zone and contrast, and confirm that every code resolves to the intended page. Approve a physical proof before the production run."
sources:
  - label: "Denso Wave — QR Code essentials"
    url: "https://www.qrcode.com/en/about/"
  - label: "Denso Wave — QR Code error correction"
    url: "https://www.qrcode.com/en/about/error_correction.html"
  - label: "GS1 — GS1 Digital Link"
    url: "https://www.gs1.org/standards/gs1-digital-link"
---

A QR code on a label has to do two jobs at once. It has to be a robust printed object, and it has to send the scanner somewhere useful. Treating it as a decorative square usually breaks the first job; treating the destination as permanent usually breaks the second. The reliable approach is to define the data and resolver, generate the symbol, size the printed block from its module count, then test the result on the actual label.

This is production guidance, not legal advice. A QR code does not replace a required label statement, an approved barcode or a product-authorisation record; confirm the product and market rules with the brand, importer or authority. See the [disclaimer](/disclaimer/). Part of the [specialty labels guide](/knowledge/specialty-labels/).

## Start with the destination, not the square

Write down what the scan should do before anyone opens a QR generator. A product page, a batch record, a warranty form and a GS1 Digital Link imply different data and governance. Decide whether the code is the same on every unit or unique, whether it can be edited after print, and who owns the domain or resolver.

A short URL keeps the encoded payload small, but shortening adds a service between the scanner and the brand. If that service stops resolving, every printed label becomes a dead end. A branded domain with a documented redirect gives the buyer more control than an anonymous short link.

The destination should be fixed before the artwork is approved. “We will update the link later” is only safe when the printed URL points to a stable resolver that the brand controls, not when the final destination is encoded directly.

## Module size is the real control

A QR symbol is a grid of modules. Its physical width is the number of modules across multiplied by the printed module size. A longer payload can increase the symbol version and add modules, so a finished width from a template is not a reliable specification.

The module size must survive the print process. Digital toner, inkjet and flexographic printing each reproduce an edge differently, and the substrate can spread or absorb ink. A nominal 0.3 mm module is not automatically a 0.3 mm dark square after printing. For phone-scanned labels, a module size of at least roughly 0.4–0.5 mm is a practical starting range, but the correct value depends on contrast, print method, surface and scan distance. Test the actual combination.

Do not start with “the QR must be 12 mm”. For a dense symbol, 12 mm may leave modules too small; for a short payload, a larger square may be mostly quiet zone. State the data, module size and quiet zone first.

## Quiet zone and contrast

The quiet zone is part of the symbol, not blank space. Four modules of clear margin on every side is the conventional minimum. Adjacent text, a border, a dark panel, a varnish edge or a busy photograph can remove the separation a reader needs.

Contrast matters in both directions. A black symbol on white is the usual baseline. Dark ink on a clear film can become unreadable when the container behind it is dark, so the construction may need a white flood layer. A light symbol on a dark background can work, but it adds risk on a retail label.

Keep the quiet zone free of both print and strong reflections. Gloss laminate can put a highlight across a small code under shelf lighting. Matte lamination is not automatically better for every application, but it is worth testing when the code will be scanned under directional light.

## Error correction: useful, not a repair kit

QR error correction allows a reader to recover from some missing or damaged modules. The familiar levels are commonly described as recovering approximately 7%, 15%, 25% and 30% of the symbol, but those figures are design capacity, not a guarantee for a dirty, low-contrast or badly printed label.

Increasing the error-correction level also increases the encoded symbol size for the same payload. On a small label, that can force a smaller module or a larger code. Choose the level for the environment, then verify the printed result. A higher level cannot restore a broken URL or rescue a label printed with insufficient contrast.

## Print method and variable data

The code should be produced from the same data that the rest of the label uses. If the label carries a batch code, serial or expiry date, those values may also need to appear in the QR destination. A separate spreadsheet that nobody reconciles with the printed text is a quality problem waiting to happen.

Digital printing suits short runs and unique codes but still has limits. Fine detail, toner scatter and substrate texture can affect module edges. Flexographic printing can be stable at volume but needs the plate and screen ruling to resolve the smallest module. Ask for a real-size proof from the intended method, not only an office-printer check.

Variable codes should be verified against the data file, not sampled by eye. Confirm the first and last row, every row boundary where the sequence changes, and a defined sample across the run. Keep the source data, the press file and the verification record together.

## A table for common QR uses

The sizes below assume a moderately short URL, four-module quiet zones and a printed module that remains legible after the chosen process. They are planning points, not universal pass marks.

| Use case | Practical starting block | Main risk |
|---|---|---|
| Small jar or cosmetic carton scanned close-up | 18–22 mm | Dense payload or small module size after print |
| Retail label scanned from a shelf at 30–40 cm | 22–30 mm | Gloss reflection, busy background or excessive data |
| Wine or spirits back label | 20–28 mm | Curved surface, condensation and small type nearby |
| Direct mail or flyer | 25–35 mm | Low print contrast and broad scan distance |
| GS1 Digital Link on a pack | Size from the full encoded address | Resolver governance and symbol density |

Use these numbers to start a conversation, not close one. A short numeric payload may fit in a smaller block; a long tracking URL may need a larger one. Measure the final symbol.

## Size a QR code from its module count

Take a version 3 symbol with 29 modules across. Add four modules of quiet zone on both the left and right: 29 + 4 + 4 = 37 modules. At a 0.5 mm module, the printed block is 37 × 0.5 = 18.5 mm. At a 0.4 mm module, it is 14.8 mm. Add any outer border, caption and die-cut clearance separately.

The same arithmetic applies vertically. A square symbol with equal quiet zones is square overall. If the label is curved, the apparent module width changes across the wrap, especially near a shoulder. Keep the code on the flattest part of the label and avoid a seam through the symbol. The [label size calculator](/tools/label-size-calculator/) helps with the surface area, but the QR block still needs its own calculation.

## Test at the distance people actually scan

A code that scans close-up is not automatically a shelf code. Test at the distance the buyer will use: commonly around 30–40 cm for retail packaging, and closer for a small jar. Test under shop lighting, including a reflective highlight if the label is gloss.

Use more than one reader where practical. A native camera app, a dedicated scanner and a warehouse device do not process the image in the same way. Check that the decoded text is exactly the approved destination, including case and parameters. A code that opens a close-but-wrong page is a data failure even when the scan is successful.

| Attribute | QR code | GS1 Digital Link |
|---|---|---|
| What it defines | A printable two-dimensional symbol and its encoded data | A standards-based web address containing GS1 identifiers |
| What the scanner sees | Any data the generator encoded | A URL structure that can resolve through a brand or service |
| Main governance task | Keep the encoded destination and artwork stable | Manage identifiers, resolver rules and product data |
| Common mistake | Treating every square as equivalent | Assuming any QR code is a GS1 Digital Link |

## Destination stability and governance

Put the destination, owner, resolver, renewal date and change process in the label specification. A marketing team may want to change the landing page; a quality team may need the code to identify a batch for years. Those requirements should not be resolved by an untracked redirect.

For a long-lived product, prefer a stable first-party domain and document what happens if the campaign page moves. Keep the encoded payload and resolver configuration with the artwork. If the code is unique per unit, apply the same discipline to the serial data and the verification record.

## What the printer can decide, and what the brand must own

The printer can reproduce a supplied symbol, preserve its quiet zone, recommend a print method and flag a module that is likely to close up. It can test a proof on the intended stock and report what it sees. It cannot decide that a destination will remain live, that a resolver meets a privacy policy or that a QR code satisfies a marketplace or regulatory requirement.

The brand owns the destination and the claim behind it. The importer or responsible party should confirm any product, market or language requirement. If the code is part of a regulated identifier system, check the current rule with the authority or a qualified adviser. For serials and batch values, continue with [variable-data labels](/knowledge/variable-data-labels/) and keep the QR decision tied to the data file.
