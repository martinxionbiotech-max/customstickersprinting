---
title: "Variable-data labels: files, sequence and verification"
description: "How serials, lot codes, expiry dates, barcodes and QR codes are structured, printed and checked across a variable-data label run before delivery."
pillar: specialty-labels
order: 2
updated: "2026-11"
published: "2026-11-21"
reviewed: "2026-11-21"
relatedProducts: ["roll-labels", "custom-labels", "waterproof-labels"]
view: >-
  In our view, variable-data printing is mostly a data-control job that happens to use a
  press. The buyer should leave with a locked template, one authoritative row-per-unit file,
  and a verification record that connects the first printed code to that file. If the data
  owner cannot explain the sequence or who approves a replacement, a faster press only moves
  the mistake into more units.
faq:
  - q: "What counts as variable data on a label?"
    a: "Anything that changes between units: a serial number, batch or lot code, manufacture or expiry date, unique QR code, barcode value, price, language version or personalised name. Even a small text change makes the row different, so the label needs a defined data source and a way to verify what was printed."
  - q: "What file format should I send for variable-data labels?"
    a: "A plain delimited file such as CSV or TSV is usually easiest to inspect, with one header row and one row per printed unit. Keep the field order fixed, avoid merged cells and formulas where possible, and send a field map that explains the data type, permitted characters and checksum rule. Confirm the printer's preferred format before creating the final file."
  - q: "How do I prevent duplicated or skipped serial numbers?"
    a: "Define the start, end, increment and reset rule before the file is created, then have the printer compare the printed sequence with the source file. Check the first and last records, every boundary, the total row count and a defined sample through the run. A sequence check should be part of the approval record, not left to an operator's visual scan."
  - q: "Should every variable barcode be scanned during production?"
    a: "That depends on the risk and the process. High-value, regulated or serialised work may justify in-line verification of every code, while other jobs may use a documented sampling plan. The important point is to agree the method, the verifier and the acceptance rule before the run rather than choosing a sample after a complaint."
  - q: "When is digital printing a good fit for variable data?"
    a: "Digital printing is usually the practical route for short runs, frequent changes, many versions or unique codes without plate changes. It may not be the cheapest option at high volume or large format. Compare total cost, setup, data handling, verification and waste rather than comparing only the per-unit press rate."
sources:
  - label: "GS1 — General Specifications"
    url: "https://www.gs1.org/standards/barcodes-epcrfid-id-keys/gs1-general-specifications"
  - label: "ISO/IEC 15415:2024 — 2D barcode print quality test specification"
    url: "https://www.iso.org/standard/76876.html"
---

A variable-data label turns a static print job into a sequence of small, related products. The printed label may look almost unchanged from one unit to the next, but the data underneath is not. A serial that skips, a lot code attached to the wrong batch or an expiry date off by a month can be harder to detect than a wrong colour and more expensive to correct.

This is production guidance, not legal advice. Serials, batch records, expiry rules and traceability requirements are product- and market-specific; confirm them with the brand, importer or authority. See the [disclaimer](/disclaimer/). Part of the [specialty labels guide](/knowledge/specialty-labels/).

## Start with the data that must change

List every field that varies before choosing a press. A batch label may need only a lot code and a date. A serialised product may need a unique number in text, a barcode and a QR code that resolves to the same record. A multilingual launch may need several language versions with the same variable fields.

For each field, write four things: the data type, the permitted format, the source of truth and the person who approves a change. “Date” is not a specification. Is it a manufacture date, a best-before date or an expiry date? Which date format is printed? Is the encoded value the same as the human-readable value? Those questions should be answered before the template is built.

## The data file is part of the artwork

The label artwork and its data file should be versioned together. If the file gains a column, changes sort order or replaces a prefix, the approved print proof may no longer represent the job. Keep a field map that names every column and explains how it maps to the template.

Use one row per unit, not one row per batch, when the label is unique. Include a stable record ID that does not change when rows are sorted. For batch-level data, state whether the same value repeats for a defined quantity or changes at a boundary. The printer should not infer a sequence from adjacent rows.

Avoid formulas that depend on a local spreadsheet session. Export the final values and inspect the output. If the buyer sends a file with hidden columns, merged cells or manually coloured exceptions, the printer is being asked to interpret a document rather than print a controlled data set.

## File formats and field design

CSV and TSV are common because they are easy to inspect, compare and archive. Fixed-width text and JSON can also work when the production workflow supports them. The practical format is the one that survives the buyer-to-printer handoff without a manual retyping step.

Keep field order stable, use a header row and agree how commas, quotes, leading zeros and special characters are represented. A serial such as 00124 must not become 124. A date stored as a spreadsheet serial number must be exported as the intended printed text. If a field allows accented characters or a non-Latin script, test the font and the data encoding before the run.

| Data type | Useful file treatment | Verification focus |
|---|---|---|
| Serial number | One row per unit, fixed prefix and width | Start, end, increment, duplicates and skipped values |
| Batch or lot | Repeat value across the defined quantity | Change boundaries and match to the batch record |
| Expiry or manufacture date | Export the printed text, not a formula | Date type, format, range and match to human-readable field |
| Barcode value | One value per symbol, with check digit rule stated | Decode, compare to source and grade the printed symbol |
| QR destination | Full encoded payload or controlled resolver URL | Decode, resolve and confirm the correct landing record |
| Language version | A version field mapped to the correct template | Version count, matching text block and no mixed-language rows |

## Sequence control before the press

Define the start, end, increment and reset rule. If a serial reaches 9999, does it roll to 0001, move to a new prefix or stop? If the job is split across two rolls or two shifts, which sequence belongs to each? The answers should be written down, not inferred from what a previous order did.

Run a row-count check: the number of data rows should equal the number of labels ordered, plus an agreed allowance for setup and verification. Keep the allowance explicit. If the run includes overprint allowance or extra labels for quality checks, confirm which rows those samples use and whether they enter the finished pack.

Checksum and check-digit rules belong to the identifier standard, not to a guess in the spreadsheet. If a barcode value needs a check digit, generate it from the approved rule and verify the result. Do not ask the printer to “fix” a sequence after the file has been approved without issuing a new file version.

## Barcodes and QR codes in a variable run

A variable barcode is both data and print quality. The encoded value can be correct while the printed symbol is too small, has insufficient quiet zone or sits on a low-contrast background. Choose the symbol size from the application requirement and the print method, then test a real-size proof.

For QR codes, use the [QR code sizing guide](/knowledge/qr-codes-on-labels/) to calculate the module block and test the destination. For a linear barcode, keep the bars and quiet zones free of variable overprint. The template should reserve clean areas; placing a serial number across a barcode is not a compact layout improvement.

When a unit carries a human-readable number and a machine-readable symbol, compare both to the same source row. A matching visual number and barcode can still both be attached to the wrong batch. Verification needs to connect the data value, the physical unit and the production record.

## Printed verification, not eyeballing

Agree the verification method before production. It may be a scan of every code, a sample plan with a verifier or a visual check of human-readable data combined with a scanner check. The method should state which fields are checked, the pass rule and what happens to a failed unit.

A useful record contains the data-file version, template version, press or print method, quantity, sample or full-run verification result, date and the person who approved release. If a printed code is unreadable, quarantine the affected labels rather than returning them to the roll. A label that cannot be traced to its row is not recovered by guessing the missing number.

## Waste, overrun and reprints

Variable work creates two kinds of waste: normal setup material and units that fail data or print verification. The buyer should understand both before comparing quotes. A low unit price that ignores verification, spoilage and a realistic setup allowance is not a lower total cost.

Ask how many spare labels the printer recommends, who owns the spare units and whether spare codes are linked to real product records. If a serial is reserved in a database but the label is discarded, the record may need a status that prevents the unused code from appearing active. That is a data-owner decision; the printer can only report what was produced.

For a reprint, use a new data-file version and a new sequence range where necessary. Reusing the same unique codes may create duplicate physical labels and ambiguous records, even if the original run was destroyed. The brand or data owner should approve the reprint rule in writing.

## When digital printing makes sense

| Requirement | Digital route | Conventional route |
|---|---|---|
| Short run with many versions | Strong fit; no plate change per version | Setup can dominate at low quantity |
| Unique code on every unit | Practical when data and verification are controlled | Requires a variable imprinting step |
| Large repeat run with one static code | Possible, but compare total cost | Often efficient once setup is amortised |
| Frequent artwork changes | Strong fit | Setup and proof cycle repeat |
| Very fine variable detail | Test the actual print resolution and module size | Test plate, screen and ink behaviour |

Digital printing is not automatically “better for variable data”; it is better at certain run lengths and change patterns. Compare the whole workflow, including data preparation, proofing, verification and waste.

## What to send for a variable-data quote

Send the template artwork, a representative data file with the real field length, the quantity, the field map, the sequence rule and the verification requirement. State whether codes must be unique, whether the data contains personal information and who owns the final sequence. If the label also needs a special material or finish, include that condition so the data method is tested on the correct construction.

Before the run, approve a real-size proof that includes the longest value and a boundary record, plus a printed sample using the intended method. Keep the approved data and artwork together. The finished roll should be accompanied by a record that lets the buyer connect the printed unit to the approved row without reopening the entire spreadsheet.
