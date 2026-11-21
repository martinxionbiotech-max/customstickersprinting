export type PillarKey =
  | 'label-sizing'
  | 'label-cost'
  | 'marketplace-labels'
  | 'label-materials'
  | 'sticker-materials'
  | 'printing'
  | 'artwork'
  | 'hang-tags';

export interface Pillar {
  key: PillarKey;
  title: string;
  heading: string;
  description: string;
  intro: string;
  covers: string[];
  tableTitle: string;
  tableRows: Array<[string, string]>;
  decisionTitle: string;
  decisionRows: Array<[string, string, string]>;
  workedTitle: string;
  worked: string[];
  mistakes: Array<{ title: string; body: string }>;
  limits: string[];
  checks: string[];
  glossary: Array<{ term: string; definition: string }>;
  deepLinks: Array<{ lead: string; label: string; href: string }>;
  tool?: { title: string; label: string; href: string; description: string };
  view: string;
  faqs: Array<{ q: string; a: string }>;
  products: string[];
}

export const PILLARS: Record<PillarKey, Pillar> = {
  'label-sizing': {
    key: 'label-sizing',
    title: 'Label sizing: measure, wrap and specify (with formulas)',
    heading: 'Label sizing: measure the container, not the artwork',
    description:
      'How to measure a bottle, jar, tin or tube, calculate a wrap, and choose a label size that fits the surface without lifting at the edge or crossing a rim.',
    intro:
      'Most label-size mistakes start before the design. A buyer measures the total height of a bottle, adds a margin, and orders a label that runs into the shoulder or crosses a rim. The label then lifts at one edge, and the printer is blamed for an adhesion problem that was a geometry problem. This guide works in the opposite order: establish the printable surface, decide how much of it the label should cover, then calculate the flat size. The arithmetic is simple. The judgement is in which measurements matter.',
    covers: [
      'How to measure the straight, printable part of a container rather than its overall height.',
      'When to use a front panel, a two-thirds wrap or a full wrap, and how overlap changes the flat size.',
      'How to size the most common bottles, jars, tins, tubes and pouches without a custom dieline.',
    ],
    tableTitle: 'The four measurements that decide a label',
    tableRows: [
      ['Printable height', 'From the top of the straight wall to the start of the base radius; exclude rims, shoulders and crimps.'],
      ['Circumference', 'Measure at the point where the label sits. On a tapered container, measure the top and bottom of the label band.'],
      ['Coverage', 'A front panel leaves glass visible; a full wrap needs a seam gap or overlap. The same container can need two different sizes.'],
      ['Application method', 'Hand application drifts more than a machine. Add clearance at both ends if the label is applied by hand.'],
    ],
    decisionTitle: 'Decision table: choose the coverage and the flat size',
    decisionRows: [
      ['The label must stop before a shoulder or base radius', 'Use the straight-wall height and keep a small visual clearance from the curve', 'A label that crosses a radius has to conform in two directions and is more likely to lift.'],
      ['The container tapers along the label band', 'Measure the circumference at the top and bottom; ask for a curved dieline', 'One mid-point diameter describes only one line around a taper, not the full label height.'],
      ['The label wraps the full circumference', 'Use π × diameter + 3–5 mm of overlap as a working rule', 'The overlap closes the seam; 3–5 mm is a production practice, not a universal standard.'],
      ['The label is a front panel only', 'Use the panel width and height, not the circumference', 'A front panel does not need a seam allowance unless it also wraps around the sides.'],
      ['The container is a rectangular box', 'For a full wrap, calculate 2 × (width + depth) + overlap, then check the corners', 'The corner radius changes the flat path and may need a dieline rather than a simple perimeter.'],
      ['The label will be applied by hand', 'Keep the overlap and add room for alignment drift; approve a label on the actual container', 'A hand-applied label can sit slightly high, low or rotated even when the flat size is correct.'],
    ],
    workedTitle: 'Illustrative worked example: a 65 mm bottle',
    worked: [
      'Take a straight-sided container with a 65 mm diameter, an 80 mm printable height and a 4 mm overlap. Use π = 3.1416. Wrap = 3.1416 × 65 + 4 = 204.204 + 4 = 208.2 mm. Flat area = 208.2 × 80 = 16,656 mm²; divide by 100 to get 166.56 cm², rounded to 166.6 cm².',
      'Add bleed in the artwork rather than in the structural size if the printer asks for it: a 3 mm bleed on each edge turns the supplied artwork canvas into 214.2 × 86 mm. That extra area is trimmed away; it is not a larger label. The calculator reports the cut size.',
      'Now change the diameter to 70 mm with the same height and overlap: 3.1416 × 70 + 4 = 223.9 mm, and 223.9 × 80 = 17,912 mm² = 179.1 cm². A 5 mm diameter change adds 15.7 mm to the wrap, which is why a similar bottle is not a substitute for measuring the actual one.',
    ],
    mistakes: [
      {
        title: 'Using the container height as the label height',
        body: 'A bottle listed as 120 mm tall may have only 70 mm of straight wall. The shoulder and base radius are not printable, and a label that crosses them will lift or wrinkle.',
      },
      {
        title: 'Adding overlap without checking the design',
        body: 'Four millimetres of overlap is normal on an opaque wrap. On a clear bottle it shows as a darker band, and on a patterned design it breaks the repeat. Decide the seam before ordering.',
      },
      {
        title: 'Sizing from a similar product',
        body: 'Two 250 ml bottles can differ by 10 mm in diameter. That changes the circumference by more than 30 mm. Measure the actual container, or send it to the printer.',
      },
    ],
    limits: [
      'The simple calculation assumes a circular, straight cross-section. Oval, square and rectangular containers need a dieline based on the full perimeter and the corner geometry.',
      'A tapered jar or bottle changes circumference over the label height. A single flat wrap is not enough; measure both ends and ask for a curved dieline or a sample.',
      'Handles, pumps, sprayers, deep recesses and compound curves are outside the formula. Test the label on the filled container in its real orientation.',
      'The calculation does not include bleed, eye marks, matrix gaps, unwind direction, roll spacing or a printer-specific repeat length. Those belong in the print specification.',
      'A mathematically correct label can still fail on a wet, oily or low-energy surface. Face stock and adhesive selection need a separate material test.',
    ],
    checks: [
      'Confirm the quote states cut width × cut height in millimetres, not the artwork canvas or bleed size.',
      'Ask whether the quoted width includes overlap and which end of the label sits on top of the seam.',
      'Compare the dimensions used by the printer with your own measurements at the top and bottom of the label band.',
      'On the proof, check that text stays inside the safe area and that the background extends into the bleed.',
      'Ask whether the label is specified for hand or machine application; a machine also needs the correct roll direction and spacing.',
    ],
    glossary: [
      { term: 'Circumference', definition: 'The distance around a container at the height where the label will sit.' },
      { term: 'Bleed', definition: 'Extra artwork beyond the cut line that is trimmed away, so small cutting drift does not leave a white edge.' },
      { term: 'Dieline', definition: 'The vector path that defines the finished cut shape of a label.' },
      { term: 'Safe area', definition: 'The zone inside the cut line where text and critical marks are kept clear of trimming and application drift.' },
      { term: 'Overlap', definition: 'The part of a wrap label that lies over its starting end to close the seam.' },
    ],
    deepLinks: [
      { lead: 'The full measuring sequence is set out in', label: 'the label size guide', href: '/knowledge/label-size-guide/' },
      { lead: 'For the wrap arithmetic with more than one overlap value, read', label: 'how to calculate a wrap label size', href: '/knowledge/label-wrap-calculation/' },
      { lead: 'For container-specific working sizes, see', label: 'label sizes for bottles, by volume', href: '/knowledge/label-size-for-bottles/' },
      { lead: 'If you already work in inches, use', label: 'standard label sizes in inches', href: '/knowledge/standard-label-sizes/' },
    ],
    tool: {
      title: 'Tools for this guide',
      label: 'Open the label size calculator',
      href: '/tools/label-size-calculator/',
      description: 'Turn a diameter or rectangular panel size, a label height and an overlap into a flat label size and area. The tool states its assumptions and warns you when a taper makes the result only a starting point.',
    },
    view:
      'In our view, the container should arrive at the printer before the label size is finalised. A photo with a ruler is enough for a first quote, but a physical sample is the only way to catch a shoulder radius or a base curve that the drawing does not show. The cost of one empty bottle is trivial against a reprint.',
    faqs: [
      {
        q: 'How do I measure a bottle for a wrap label?',
        a: 'Measure the circumference at the point where the label will sit, add 3–4 mm of overlap if the design allows it, and measure the straight wall height separately. For a tapered bottle, measure the top and bottom of the label band and use a curved dieline.',
      },
      {
        q: 'What size label fits a 250 ml bottle?',
        a: 'A typical 250 ml bottle is 50–55 mm in diameter, with a circumference of 157–173 mm. A front panel is often 50–60 mm wide; a full wrap is about 161–177 mm including overlap. The exact size depends on the straight wall, not the volume alone.',
      },
      {
        q: 'Can I use the same label on a jar and a bottle?',
        a: 'Only if the printable surface and the curve are the same. A jar usually has a shorter straight wall and a tighter shoulder; a label sized for a bottle may run into the jar shoulder and lift. Size each container separately.',
      },
      {
        q: 'Should I add bleed to the wrap calculation?',
        a: 'No. Calculate the finished cut size first, then add the printer’s bleed in the artwork file. A 3 mm bleed on each edge increases the artwork canvas by 6 mm in both directions, but the label that is cut and applied stays at the calculated width and height.',
      },
      {
        q: 'How much overlap should a wrap label have?',
        a: 'Three to five millimetres is a working range for a straight-sided container, not a standard. Four millimetres is a useful starting point for hand application, while a machine may need a different seam allowance. Check the seam on a printed sample.',
      },
      {
        q: 'What if my container is oval or rectangular?',
        a: 'Measure the full perimeter, allow for the corner radius and ask for a dieline. A circular wrap formula will understate or overstate the flat width. For a rectangular full wrap, 2 × (width + depth) + overlap is a starting check, but the corners still need a proof.',
      },
    ],
    products: ['custom-labels', 'bottle-labels', 'jar-labels', 'roll-labels'],
  },

  'label-cost': {
    key: 'label-cost',
    title: 'Label printing cost: setup, unit price and quantity breaks',
    heading: 'What a label costs, and how to order the right quantity',
    description:
      'The fixed and variable blocks behind a label quote, why setup dominates at 50 units, how quantity breaks work, and how to compare two quotes properly.',
    intro:
      'A label quote is not a single price. It is a fixed block — artwork preparation, die, proof and make-ready — plus a variable block for material, ink, finishing and packing. At 50 units the fixed block is most of the order; at 50,000 it is almost noise. That shape explains why the same label can be quoted at $3.84 or $0.04 per piece without either supplier lying. This guide shows the arithmetic, the questions to ask, and the point where ordering more stops being a saving and becomes dead stock.',
    covers: [
      'How setup, material, finishing and freight behave at different quantities.',
      'Why price per 1,000 misleads below a few thousand units, and how to compare quotes at equal quantity.',
      'How to set an order quantity using production runs, spoilage and a reorder point.',
    ],
    tableTitle: 'What moves the price, and when',
    tableRows: [
      ['Setup', 'Fixed per design and specification. Dominates at 50 units; small at 50,000.'],
      ['Material and print', 'Per unit and per area. The floor below which a quote cannot go.'],
      ['Finishing', 'Laminate, foil, spot UV or embossing; some are per unit, some add a pass or die.'],
      ['Freight and duties', 'Per shipment and per destination; can exceed production on a small order.'],
      ['Quantity break', 'A step change in unit price, not a smooth curve. Round up only when the next break is close.'],
    ],
    decisionTitle: 'Decision table: choose how to compare the quote',
    decisionRows: [
      ['The two quotes are for different quantities', 'Normalise both to the quantity you will actually order and show setup separately', 'A 500-unit quote and a 5,000-unit quote describe different jobs, even when the label design is identical.'],
      ['Setup is a large share of the total', 'Ask what it includes and whether an existing size, die or shared design can reuse it', 'The fixed block is the first place to look for a real saving; a discount on a small order has little room to move.'],
      ['A lower price starts at the next quantity break', 'Compare extra total spend with storage, obsolescence and cash tied up', 'The unit price can fall while the invoice and the risk rise.'],
      ['Variable costs look similar but totals differ', 'Compare freight, packing, proofs, payment terms and what is excluded', 'The difference is often in the fixed or delivered portion, not the material rate.'],
      ['One quote covers several designs', 'Ask for quantity, material, print setup and finishing per design', 'Designs can share a press run only when their material, size and finish are compatible.'],
      ['One quote is much lower than the others', 'Verify stock, adhesive, laminate, cut, quantity and whether waste is included', 'A lower figure may describe a different construction or a press quantity that differs from the sellable quantity.'],
    ],
    workedTitle: 'Illustrative worked example: spreading a fixed setup',
    worked: [
      'Take an illustrative quote with a $180 setup, $0.12 combined material, print and finishing cost per unit, and $60 fixed freight. All amounts use $ as an illustrative currency. At 500 units: variable cost = $0.12 × 500 = $60; total = $180 + $60 + $60 = $300; cost per unit = $300 ÷ 500 = $0.60; setup share = $180 ÷ $300 = 60.0%.',
      'At 2,500 units, with the same rates: variable cost = $0.12 × 2,500 = $300; total = $180 + $300 + $60 = $540; cost per unit = $540 ÷ 2,500 = $0.216; setup share = $180 ÷ $540 = 33.3%. The setup did not shrink; it was spread over five times as many labels.',
      'A real quantity break may change the material or print rate, so do not extend these figures indefinitely. If a supplier offers a different rate at 5,000 units, enter that rate and recalculate rather than dividing the 500-unit total.',
    ],
    mistakes: [
      {
        title: 'Comparing unit price at different quantities',
        body: 'A 500-unit quote and a 5,000-unit quote are different products commercially. Compare at the same quantity, with setup shown separately, or the cheaper number is meaningless.',
      },
      {
        title: 'Ordering a year of stock for a price break',
        body: 'The saving on the next break is usually smaller than the cost of carrying stock for a design that may change. Order one production cycle plus spoilage unless the design is proven.',
      },
      {
        title: 'Asking for a discount before the specification is fixed',
        body: 'At 50 units there is little margin to give. Changing the material, size or finishing usually moves the price more than negotiating the same specification.',
      },
    ],
    limits: [
      'The arithmetic here does not include tax, duty, currency movement, payment fees or financing costs.',
      'Waste and spoilage cannot be reduced to one universal rate. Ask whether the quotation quantity is sellable labels or press output.',
      'Quantity breaks are commercial offers, not a linear formula; a lower unit rate may need a different press, plate set, run length or material purchase.',
      'It does not predict reprint cost, storage, obsolescence or the cash tied up in a larger order.',
      'Freight changes with route, weight, fuel surcharge and Incoterm. The delivered total may differ from the production total.',
    ],
    checks: [
      'Check that quantity, size, material, adhesive, laminate, cut and finishing are identical before comparing two unit prices.',
      'Check whether setup, plates, die, proof, packing and freight are separate line items or included.',
      'Confirm whether the unit price is per label or per 1,000, and whether the minimum order or overrun changes the quantity supplied.',
      'Ask which Incoterm applies and whether tax, duty and destination charges are included.',
      'Ask for the quote’s validity period and the reprint price at the same quantity, not only the first-order price.',
    ],
    glossary: [
      { term: 'Setup', definition: 'The one-off work and materials needed before a run, such as file preparation, plates, a die, proofing and make-ready.' },
      { term: 'Unit price', definition: 'The amount charged for one label or sticker, usually before freight and taxes.' },
      { term: 'Quantity break', definition: 'A quoted change in unit price when the order moves to a different quantity tier.' },
      { term: 'Freight', definition: 'The charge for moving the finished order from its shipping point to the agreed destination.' },
      { term: 'Spoilage', definition: 'Labels lost during printing, finishing, packing or application that cannot be sold or used.' },
    ],
    deepLinks: [
      { lead: 'The five variables that move a price are explained in', label: 'what actually affects custom label pricing', href: '/knowledge/what-affects-label-pricing/' },
      { lead: 'For a line-by-line account of fixed charges, read', label: 'what a label setup charge covers', href: '/knowledge/label-setup-costs/' },
      { lead: 'The falling unit-cost curve is worked through in', label: 'label cost per unit, and why it falls with quantity', href: '/knowledge/label-cost-per-unit/' },
      { lead: 'To size the run rather than the price, read', label: 'how many labels should I order?', href: '/knowledge/how-many-labels-to-order/' },
    ],
    tool: {
      title: 'Tools for this guide',
      label: 'Open the label cost estimator',
      href: '/tools/label-cost-estimator/',
      description: 'Enter two sets of quote figures to compare total cost, cost per unit and the share taken by setup. It uses only your inputs, includes no default prices and does not model tax or quantity breaks.',
    },
    view:
      'We would rather quote a unit price with the setup shown separately than hide the fixed block inside a headline figure. A buyer who can see the setup can decide whether to combine designs, drop a custom die or order more. A buyer who sees one number can only compare it with another number that may not be the same job.',
    faqs: [
      {
        q: 'Why is a 50-unit label order so expensive per piece?',
        a: 'Because the setup is fixed. At 50 units a $190 setup adds $3.80 per label before material; at 5,000 units it adds about four cents. The label itself did not become cheaper; the fixed block was spread over more pieces.',
      },
      {
        q: 'How many labels should I order for a first run?',
        a: 'One production cycle plus 3–5% spoilage, plus a sample allowance. If the run is 500 units and the design is unproven, 550–600 is usually better than 5,000; a design change makes the larger stock worthless.',
      },
      {
        q: 'What should a label quote show?',
        a: 'Quantity per design, size in millimetres, material and adhesive grade, laminate, cut method, setup, unit price, freight and lead time. If setup and unit price are combined into one figure, treat the unit price as unverified.',
      },
      {
        q: 'Should I compare a delivered price or an ex-works price?',
        a: 'Compare like with like. A delivered price includes freight and may include duties, while an ex-works price stops before export. Ask each supplier to state the Incoterm, the included charges and the destination before comparing totals.',
      },
      {
        q: 'Why is a price per 1,000 misleading at low volume?',
        a: 'It hides the fixed setup inside a quantity that you may not be buying. At 500 units the setup is spread across 500 labels; quoting per 1,000 can make the job look cheaper than the invoice. Compare the total for the quantity you will actually order.',
      },
      {
        q: 'Can I lower the unit price without ordering more?',
        a: 'Sometimes. You can share a die or size with another design, simplify the shape, remove a finish the product does not need, or combine designs that use the same material and print setup. Ask which fixed charges are avoidable rather than asking for an unsupported discount.',
      },
    ],
    products: ['custom-labels', 'custom-stickers', 'roll-labels', 'sticker-sheets'],
  },

  'marketplace-labels': {
    key: 'marketplace-labels',
    title: 'Amazon FBA and retail label requirements',
    heading: 'Marketplace labels: FNSKU, barcodes and retail requirements',
    description:
      'The labels an Amazon FBA shipment needs, how barcodes fail at receiving, and what retail packaging requires before a buyer sees the product.',
    intro:
      'A marketplace shipment carries more than a product label. It carries a unit identifier, a prep label and a carton label, and each is checked by a different process. A barcode that scans on a phone can fail at a fulfilment centre because the quiet zone was trimmed or the print contrast is too low. A retail label can be legally complete and still be rejected because the barcode is below the minimum magnification. This guide separates the three checks and shows where each one fails.',
    covers: [
      'What an FNSKU is, how it differs from a UPC, and where it belongs on a unit.',
      'The quiet zone, magnification and print-quality rules behind a scannable barcode.',
      'The mandatory text on a retail label, and why it changes the label size before the design does.',
    ],
    tableTitle: 'Three labels, three checks',
    tableRows: [
      ['Unit label', 'Identifies the sellable unit at receiving. FNSKU for Amazon; UPC/EAN for retail.'],
      ['Prep label', 'Suffocation warning, expiration date or other handling text required by the channel.'],
      ['Carton label', 'Identifies the shipment and box; checked at the dock, not at the till.'],
      ['Barcode quality', 'Quiet zones, magnification and ISO/IEC 15416 grade; a phone scan is not a receiving test.'],
      ['Retail text', 'Identity, net quantity, address, origin and allergens; the label must have room for all of it.'],
    ],
    decisionTitle: 'Decision table: which identifier and check applies',
    decisionRows: [
      ['The unit will be sold through Amazon FBA', 'Use the FNSKU assigned to your inventory in the format and placement the channel currently requires', 'A UPC identifies the product, while the FNSKU identifies your seller inventory; covering one with the other can break receiving.'],
      ['The unit will sell through retail distribution', 'Use the GTIN assigned to the product and retain the symbol’s quiet zones and magnification', 'A retailer scans the product identity, not your marketplace inventory identity.'],
      ['A poly bag meets the channel’s warning threshold', 'Add the currently required suffocation warning in the specified position and size', 'Warning wording and placement are channel and market requirements, not a printer preference.'],
      ['The label has room for either the barcode or the text, not both', 'Enlarge the label or move the barcode to a separate area before approving artwork', 'Shrinking the symbol or setting type too small trades a visible design problem for a receiving or compliance failure.'],
      ['The barcode looks readable on screen', 'Verify a printed proof with the current application standard and a verifier', 'A phone scan does not measure quiet zones, contrast, bar-width deviation or the print gain that a warehouse scanner sees.'],
      ['Regulatory text or a product claim is unclear', 'Obtain market-specific approval before printing', 'Label content responsibility sits with the seller or importer, and requirements differ by product and destination.'],
    ],
    workedTitle: 'Illustrative worked example: a 50 × 30 mm retail label',
    worked: [
      'Start with 50 × 30 mm = 1,500 mm². At nominal size, a retail EAN-13 symbol is about 37 × 26 mm including quiet zones under the GS1 General Specifications, so its block occupies roughly 37 × 26 = 962 mm². That leaves 1,500 − 962 = 538 mm² for the product name, net quantity, ingredients or warnings, address, origin and space between elements.',
      'This is a layout budget, not a claim that every EAN-13 is exactly 37 × 26 mm; the symbol, magnification and bearer vary. If the required text does not fit in 538 mm² at a legible size, the label is too small or the barcode needs a separate area.',
      'For an FNSKU-only unit label, 50 × 30 mm may look generous, but the symbol still needs quiet zones, print contrast and clear space. Do not place an FNSKU over the UPC unless the channel’s current rule for your programme allows it.',
    ],
    mistakes: [
      {
        title: 'Putting an FNSKU over the UPC',
        body: 'If the FNSKU covers the manufacturer barcode, the unit cannot be received against the right inventory. Place it where both can be read, or follow the channel’s current placement rule.',
      },
      {
        title: 'Shrinking a barcode to fit the design',
        body: 'A barcode below the minimum magnification may still scan on a phone and fail at a warehouse scanner. Change the label size or the layout, not the symbol.',
      },
      {
        title: 'Designing the retail label before the mandatory text',
        body: 'Ingredients, allergens, net quantity and the address can consume most of a small label. Start with the text block, then design around it; the reverse leads to unreadable type or a bigger label.',
      },
    ],
    limits: [
      'This guide does not reproduce every Amazon, retailer or marketplace requirement. Those rules change and vary by category, market, product and account.',
      'It does not give legal or regulatory advice or approve label text, claims, allergens, units, symbols or language for a destination.',
      'It does not verify GTIN ownership, barcode licensing or whether a product should carry a particular identifier.',
      'It cannot measure print contrast or grade a symbol. A printed proof should be checked with a verifier against the current application standard.',
      'Country-of-origin rules, customs marking, product safety standards and retailer-specific pack requirements are outside this guide.',
    ],
    checks: [
      'Check that the barcode carries the correct GTIN or FNSKU and that the SKU list matches the artwork.',
      'Check quiet zones, magnification and bar width on a real-size printed proof, not only on a monitor.',
      'Check that the FNSKU and UPC do not cover each other unless the current channel rule permits it.',
      'Check mandatory text, warnings, net quantity, address, origin and language for the destination.',
      'Ask for a real-size PDF proof and, where required, an ISO/IEC 15416 grade from a barcode verifier.',
    ],
    glossary: [
      { term: 'FNSKU', definition: 'The identifier Amazon uses to associate a physical unit with a seller’s inventory.' },
      { term: 'GTIN', definition: 'A globally unique product identifier, commonly expressed as a UPC or EAN barcode.' },
      { term: 'Quiet zone', definition: 'The clear margin either side of a barcode that lets a scanner find where the symbol begins and ends.' },
      { term: 'Magnification', definition: 'The size of a barcode relative to its nominal specification.' },
      { term: 'ISO/IEC 15416', definition: 'The international standard for measuring and grading the print quality of linear barcodes.' },
    ],
    deepLinks: [
      { lead: 'The wider channel picture is set out in', label: 'marketplace label requirements: FBA, retail and DTC', href: '/knowledge/marketplace-label-requirements/' },
      { lead: 'For unit-label construction and scan failures, read', label: 'FNSKU labels: specification and scan failures', href: '/knowledge/fnsku-labels/' },
      { lead: 'The rules behind a scannable symbol are explained in', label: 'barcode label printing: quiet zones, grades and failures', href: '/knowledge/barcode-label-printing/' },
      { lead: 'For retail content rather than marketplace prep, read', label: 'retail packaging labels: what has to be on them', href: '/knowledge/retail-packaging-labels/' },
    ],
    view:
      'In our view, the marketplace label should be treated as an operational document, not a brand asset. The brand can live on the front panel; the barcode and the FNSKU need clean space, contrast and a quiet zone. A beautiful label that fails receiving is an expensive label.',
    faqs: [
      {
        q: 'What is the difference between an FNSKU and a UPC?',
        a: 'A UPC identifies the product; an FNSKU identifies the seller’s inventory at Amazon. If inventory is commingled, Amazon cannot tell whose unit is whose without an FNSKU. The two codes serve different systems and should not cover each other.',
      },
      {
        q: 'How large should a barcode be on a label?',
        a: 'It depends on the symbology and the scanner, but a retail EAN-13 at 100% magnification is about 37 × 26 mm including quiet zones. Shrinking below 80% raises the risk of a scan failure. Test a printed proof with the actual scanner.',
      },
      {
        q: 'Do poly bags need a suffocation warning?',
        a: 'Many marketplaces require a suffocation warning on poly bags with an opening of 5 inches or more. The exact wording and placement depend on the channel; check the current requirement before printing, and leave space for the warning in the artwork.',
      },
      {
        q: 'Can I print my own FNSKU labels?',
        a: 'You can print labels yourself when the channel permits it and your printer produces the required symbol quality, size and placement. Keep the barcode data tied to the correct SKU, use a real-size proof and verify the printed symbol before applying labels to inventory.',
      },
      {
        q: 'Where should a suffocation warning go?',
        a: 'Follow the marketplace or retailer’s current wording and placement rule. The warning usually belongs on the bag itself, must be legible against the bag and must not be hidden by a folded edge, label or product insert. Confirm the rule for your channel before printing.',
      },
      {
        q: 'Does a phone scan prove a barcode will work?',
        a: 'No. A phone can read a poor symbol because its camera and software differ from a warehouse scanner. It does not measure quiet zones, contrast, bar-width deviation or the effect of print gain. Use a verifier and grade the printed symbol against the standard your channel requires.',
      },
    ],
    products: ['custom-labels', 'roll-labels', 'logo-stickers', 'sticker-sheets'],
  },

  'label-materials': {
    key: 'label-materials',
    title: 'Label materials and adhesives by surface and condition',
    heading: 'Label materials: choose the surface and the condition first',
    description:
      'Paper, PP, PET and clear film compared by the condition they must survive, plus how adhesive choice decides whether a label stays flat on glass or plastic.',
    intro:
      'A label is a sandwich: face stock, ink, laminate and adhesive. Buyers tend to choose the face stock first because it is visible, but the adhesive and the surface usually decide whether the label survives. A stiff PET label on a 30 mm dropper will lift at the edge; a paper label on a chilled bottle will cockle; a standard adhesive on a recycled HDPE bottle may slide. This guide starts with the condition, then narrows the material.',
    covers: [
      'Paper, PP, PET and clear film: what each survives and where each fails.',
      'How surface energy, condensation, oil and temperature change adhesive performance.',
      'When a laminate is doing the work, and when it is only changing the finish.',
    ],
    tableTitle: 'Condition first, material second',
    tableRows: [
      ['Dry, indoor, short life', 'Coated paper with a permanent acrylic; cheapest adequate option.'],
      ['Chilled or condensation', 'PP with a chill-grade acrylic; paper cockles and stains.'],
      ['Frozen', 'PP or PET with a freezer-grade adhesive; standard adhesive turns brittle.'],
      ['Oil, alcohol or chemical', 'PET or a resistant film with the appropriate adhesive; test on the actual surface.'],
      ['Small diameter or squeeze', 'Thinner PP film with a conformable adhesive; a stiff film lifts at the edge.'],
    ],
    decisionTitle: 'Decision table: choose the label construction',
    decisionRows: [
      ['The product stays dry and indoors for a short life', 'Coated paper with a permanent acrylic is the simplest adequate construction', 'Paper may be the lowest-demand option when moisture, oil and repeated handling are not part of the use.'],
      ['The product is chilled or sees condensation', 'Use a PP film with a chill-grade adhesive and consider a laminate', 'Water and cold reduce tack; paper can cockle and a standard adhesive can lift at the edge.'],
      ['The product is frozen', 'Use PP or PET with a freezer-grade adhesive', 'A standard adhesive may become brittle or lose tack as the temperature falls.'],
      ['The surface sees oil, alcohol or a cleaning chemical', 'Use PET or another resistant film with a verified adhesive, then test the exact combination', 'Resistance is a property of the whole construction, not the face stock alone.'],
      ['The container has a small diameter or squeezes', 'Choose a thinner, more conformable PP and a suitable adhesive', 'A stiff film has less ability to follow a tight curve and may spring away from the container.'],
      ['The label must disappear into a clear container', 'Use clear film and design the white ink layer as part of the artwork', 'Without white ink, CMYK print remains translucent and the container contents change the appearance.'],
    ],
    workedTitle: 'Illustrative worked example: planning an adhesion trial',
    worked: [
      'Suppose you have three container surfaces (glass, HDPE and recycled PET), two conditions (room temperature and chilled condensation) and two candidate constructions. A full cross-over trial is 3 × 2 × 2 = 12 combinations. If you test three specimens per combination, you need 3 × 12 = 36 labels before controls.',
      'For a smaller first pass, hold the construction constant and test one candidate on the three surfaces under the dominant condition: 3 combinations × 5 specimens = 15 labels. Add five labels kept dry as a control, giving 20 labels in total.',
      'These counts are illustrative planning arithmetic, not a required sample size. The value is in writing the matrix down before ordering, so a result can be attributed to the surface, condition or construction rather than to memory.',
    ],
    mistakes: [
      {
        title: 'Choosing “waterproof” without a condition',
        body: 'Water-resistant, waterproof and immersion-grade are different requirements. A label that survives a fridge door may fail in an ice bucket. State the condition and the duration.',
      },
      {
        title: 'Ignoring the surface energy',
        body: 'The same adhesive behaves differently on glass, PET, HDPE and painted metal. Recycled plastics can have a lower surface energy and need a different adhesive or a surface test.',
      },
      {
        title: 'Adding laminate to fix an adhesion problem',
        body: 'Laminate protects the print; it does not make a poor adhesive stick. If the edge is lifting, the face stock or adhesive is wrong, not the finish.',
      },
    ],
    limits: [
      'This guide cannot identify a suitable material from a photograph or guarantee adhesion without testing the actual surface.',
      'It does not cover food-contact compliance, migration limits or regulatory suitability. Those require the exact construction, supporting test data and rules for the market.',
      'It does not cover every adhesive chemistry, surface treatment or print-and-laminate combination.',
      'Containers vary between batches and suppliers. Recycled content, mould-release agents, dust and contamination can change the result.',
      'A short trial does not reproduce years of shelf life. If long-term durability matters, ask for relevant data or plan a longer test.',
    ],
    checks: [
      'Check that the quote names the face stock, adhesive type and grade, laminate and liner, not only “waterproof” or “premium”.',
      'Ask whether the proposed construction is intended for the exact container material and storage condition.',
      'Confirm whether the proof is printed on the proposed stock rather than a generic paper proof.',
      'Ask for sample labels applied to your container and stored in the intended condition.',
      'Confirm that ink, white ink, laminate and adhesive are compatible as one construction, not separately specified parts.',
    ],
    glossary: [
      { term: 'Face stock', definition: 'The material that carries the printed image, such as paper, PP film or PET film.' },
      { term: 'Adhesive', definition: 'The layer that bonds the face stock to the container surface.' },
      { term: 'Laminate', definition: 'A protective film applied over the printed face, chosen for handling, moisture or chemical resistance.' },
      { term: 'Surface energy', definition: 'A property of a surface that affects how well an adhesive can wet and bond to it.' },
      { term: 'Liner', definition: 'The release-coated backing that carries the label before it is applied.' },
    ],
    deepLinks: [
      { lead: 'The surface-by-surface choice is set out in', label: 'label adhesive by surface: glass, plastic and metal', href: '/knowledge/label-adhesive-by-surface/' },
      { lead: 'For face-stock differences, read', label: 'paper vs PP vs PET labels: which material for which product', href: '/knowledge/paper-vs-pp-vs-pet-labels/' },
      { lead: 'The distinction between water-resistant and immersion-grade is explained in', label: 'waterproof label materials: what survives water', href: '/knowledge/waterproof-label-materials/' },
      { lead: 'For environment-led lifetime questions, read', label: 'how long do labels last? Material by environment', href: '/knowledge/label-durability-by-material/' },
    ],
    view:
      'We would not sell a “waterproof label” as a single product. The honest specification is a material, an adhesive and a laminate matched to a condition. If a buyer cannot name the condition, the first sample should be a test on the actual container, not a colour proof.',
    faqs: [
      {
        q: 'What label material is best for bottles?',
        a: 'For a chilled glass bottle, PP or PET with a chill-grade adhesive; for a dry decorative bottle, coated paper can be adequate; for a clear no-label look, clear film with white ink behind the design. The bottle diameter and surface also matter.',
      },
      {
        q: 'Will a paper label survive a fridge?',
        a: 'Usually not. Paper absorbs moisture and cockles, and condensation at the edge lifts the label. A PP film with a chill-grade adhesive is the usual choice for chilled or condensation-prone containers.',
      },
      {
        q: 'Do I need a laminate on a label?',
        a: 'A laminate protects the print from scuffing, moisture and some chemicals, and it changes the finish. It is not a substitute for the right adhesive. For a label handled wet or packed in quantity, a laminate is usually worth specifying.',
      },
      {
        q: 'What does surface energy mean in practice?',
        a: 'It describes how readily a liquid, including an adhesive, wets a solid. A low-energy surface such as some untreated plastics can resist a standard adhesive, while glass and many metals bond more readily. The practical answer is to test the exact container rather than rely on the material name.',
      },
      {
        q: 'Can one adhesive work on glass and recycled plastic?',
        a: 'Sometimes, but not automatically. Glass and recycled HDPE or PET can differ in surface energy and contamination, and recycled batches can vary. Ask for an adhesive that is intended for both surfaces, then test the exact containers under the intended storage condition.',
      },
      {
        q: 'Does a laminate make a label food-safe?',
        a: 'No. A laminate protects print and can change the surface properties, but food-contact suitability depends on the complete construction, the intended contact type, migration testing and the rules of the destination market. Ask for the relevant documents for the exact face stock, ink, adhesive and laminate.',
      },
    ],
    products: ['bottle-labels', 'jar-labels', 'food-labels', 'waterproof-labels', 'clear-labels'],
  },

  'sticker-materials': {
    key: 'sticker-materials',
    title: 'Sticker materials, adhesives and cutting methods',
    heading: 'Sticker materials: vinyl, paper, die cut and kiss cut',
    description:
      'How to choose between vinyl and paper, die cut and kiss cut, and which thickness or finish actually changes durability rather than just feel.',
    intro:
      'A sticker is not a label with a different name. It is handled, peeled, stuck, re-stuck and sometimes left outdoors. The face stock decides how it feels and how it weathers; the cut decides how it is supplied; the laminate decides how it survives handling. Most buyers choose by the look of the artwork, then discover that a paper sticker on a water bottle or a thick vinyl sticker on a tight curve behaves badly. This guide separates those decisions.',
    covers: [
      'Vinyl versus paper: where each belongs, and why “waterproof” depends on the laminate and adhesive too.',
      'Die cut versus kiss cut: what the buyer receives, and when a custom die is worth paying for.',
      'Thickness, finish and application: what changes durability and what only changes the feel.',
    ],
    tableTitle: 'Sticker decisions in order',
    tableRows: [
      ['Where it goes', 'Indoor paper, outdoor vinyl, glass, laptop, packaging or a curved surface.'],
      ['How long it must last', 'A short promo, a product label or a permanent outdoor mark.'],
      ['Cut', 'Die cut separates each sticker; kiss cut keeps it on a sheet for hand-out or resale.'],
      ['Finish', 'Gloss, matte or soft-touch; laminate is the durability layer, not just a look.'],
      ['Thickness', 'Thicker is not automatically better; conformability matters on curves and small parts.'],
    ],
    decisionTitle: 'Decision table: choose the sticker build',
    decisionRows: [
      ['The sticker stays indoors on paper or board', 'Paper face stock with an adhesive suited to the surface; laminate only if handling demands it', 'Paper can print cleanly and lies flat on dry, stable packaging without the outdoor demands of vinyl.'],
      ['The sticker will be handled, washed or used outdoors', 'Vinyl with a protective laminate and an adhesive matched to the surface', 'Vinyl resists water, but the print, adhesive and edges still need protection and a compatible surface.'],
      ['The surface is a tight curve or a small part', 'Choose a thinner, more conformable film and test the edge', 'A stiff film can spring away from a small radius even when the adhesive is strong.'],
      ['Each sticker must be handed out separately', 'Use die cut with a cut that separates the sticker and liner', 'A kiss-cut sheet is convenient only if the sticker is meant to stay on its sheet.'],
      ['A sheet is the product or hand-out', 'Use kiss cut and design the sheet layout, spacing and lift edge', 'The sheet becomes part of the item, so cutting, borders and user peeling matter to the result.'],
      ['The contour is custom at a low quantity', 'Compare a standard shape with the custom die setup before ordering', 'A new die is a fixed cost, and a complex contour can add material waste and stripping work.'],
    ],
    workedTitle: 'Illustrative worked example: sticker area and sheet yield',
    worked: [
      'Take a 60 × 60 mm square sticker. Its area is 60 × 60 = 3,600 mm², or 36 cm². A sheet 200 × 300 mm has an area of 60,000 mm², or 600 cm². With no gaps or margins, 600 ÷ 36 = 16.67, so a perfect grid can fit at most 16 complete stickers; real spacing, bleed and gripper margins reduce that number.',
      'If the sticker is a 60 mm diameter circle, its area is π × 30² = 3.1416 × 900 = 2,827.4 mm², about 28.3 cm². A simple grid still reserves a 60 × 60 mm cell, so the material consumed is closer to 36 cm² even though the printed area is smaller.',
      'These are illustrative layout calculations. They show why a custom contour does not automatically reduce material use: the cut shape can leave unused matrix, and the sheet layout still needs spacing and handling space.',
    ],
    mistakes: [
      {
        title: 'Using paper for a water bottle',
        body: 'Paper stickers can print beautifully, but water and handling destroy them quickly. Vinyl plus a laminate is the usual choice for anything that gets wet or handled repeatedly.',
      },
      {
        title: 'Paying for a custom die at 50 units',
        body: 'A custom die is a one-off cost. At 50 units it can dominate the price; a standard shape or a kiss-cut sheet is often the better first order. Order the die when the shape is part of the brand and the quantity supports it.',
      },
      {
        title: 'Assuming thicker vinyl is stronger',
        body: 'A thicker film can be more durable in some conditions, but it conforms less well to tight curves and small diameters. The application surface decides whether thickness helps or hurts.',
      },
    ],
    limits: [
      'This guide does not choose vinyl or paper from a photograph. The surface, handling, light exposure and expected life decide the construction.',
      'It does not cover adhesive chemistry, food-contact compliance or every surface treatment; ask for the exact grade and relevant documents.',
      'It does not account for printer-specific sheet layouts, gaps, bleed, matrix stripping or cutting waste.',
      'Outdoor life depends on sunlight, temperature, cleaning, abrasion and application quality as well as the material label.',
      'A small sample cannot predict years of use. If durability is critical, ask for material data and test the actual surface.',
    ],
    checks: [
      'Confirm whether the quote is for die cut or kiss cut and whether the price is per sticker or per sheet.',
      'Check the finished size, corner radius and cut path, and whether a new die is a separate charge.',
      'Confirm face stock, adhesive and laminate rather than accepting “vinyl” as a complete specification.',
      'Ask whether the proof shows the cut line and the sheet layout, including spacing and lift edges.',
      'Test peeling, repositioning and adhesion on the intended surface before a large run.',
    ],
    glossary: [
      { term: 'Die cut', definition: 'A cutting process that cuts through the sticker and its liner so each sticker is separated.' },
      { term: 'Kiss cut', definition: 'A cut through the sticker layer that leaves the liner intact, so the stickers remain on a sheet.' },
      { term: 'Face stock', definition: 'The printable material of the sticker, such as paper, vinyl or clear film.' },
      { term: 'Liner', definition: 'The release backing that carries the sticker until it is peeled off.' },
      { term: 'Conformability', definition: 'A film’s ability to bend and stay flat over a curve, corner or uneven surface.' },
    ],
    deepLinks: [
      { lead: 'The practical difference between the two face stocks is in', label: 'vinyl vs paper stickers: which one to use', href: '/knowledge/vinyl-vs-paper-stickers/' },
      { lead: 'For supply format and cost effects, read', label: 'die cut vs kiss cut: what changes, and the cost', href: '/knowledge/die-cut-vs-kiss-cut/' },
      { lead: 'The adhesive side of the choice is covered in', label: 'sticker adhesive guide: permanent, removable and outdoor', href: '/knowledge/sticker-adhesive-guide/' },
      { lead: 'For film thickness and edge behaviour, read', label: 'sticker thickness and durability: what 0.1 mm changes', href: '/knowledge/sticker-thickness-durability/' },
    ],
    view:
      'At 50 units we usually steer buyers towards a kiss-cut sheet or a standard die, because a custom contour can double the unit price before the design has been tested in the market. If the shape is the brand, pay for the die; if it is a first sample, keep the cut simple and spend the money on the material.',
    faqs: [
      {
        q: 'Are vinyl stickers waterproof?',
        a: 'Vinyl itself repels water, but the adhesive and the print matter. An unlaminated vinyl print can scuff or fade, and a standard adhesive can lift from a wet or oily surface. Vinyl plus a laminate is what most buyers mean by waterproof.',
      },
      {
        q: 'What is the difference between die cut and kiss cut?',
        a: 'Die cutting cuts through the liner and separates each sticker. Kiss cutting cuts the sticker shape but leaves it on the backing sheet, so the sheet can be handed out or sold as a set. The artwork and the intended use decide which one fits.',
      },
      {
        q: 'What thickness should a custom sticker be?',
        a: 'It depends on the surface and the handling. A thinner film conforms better to curves; a thicker film can feel more premium and resist tearing. Ask for a sample on the actual surface rather than choosing by micron alone.',
      },
      {
        q: 'Can I write on a vinyl sticker?',
        a: 'It depends on the laminate and the pen. A gloss laminate can resist water-based inks, while a matte or uncoated surface may accept some permanent markers. Test the intended pen on a sample and remember that writing can scuff a print without a suitable protective layer.',
      },
      {
        q: 'Should I choose die cut or kiss cut for packaging?',
        a: 'Use die cut when the packer needs a single peel-off sticker, and kiss cut when the sticker is sold or handed out on a printed sheet. The cut changes packing time, storage and the artwork layout, not only the shape of the sticker.',
      },
      {
        q: 'Why does a custom shape cost more at low quantity?',
        a: 'A custom contour needs a die and make-ready, and the fixed setup is spread over the order. Complex shapes can also use more sheet area and leave more matrix to strip. At low quantity, a standard shape or a kiss-cut sheet is often the better first order.',
      },
    ],
    products: ['custom-stickers', 'vinyl-stickers', 'logo-stickers', 'die-cut-stickers', 'sticker-sheets', 'clear-stickers'],
  },

  printing: {
    key: 'printing',
    title: 'Label printing methods: digital, flexo and finishing',
    heading: 'Printing and production: digital, flexo and the roll',
    description:
      'How digital and flexographic label printing differ in setup, run length and colour, how a roll is specified, and where foil, spot UV and colour fit.',
    intro:
      'Printing method is usually decided by quantity, but not only by quantity. Digital printing removed the plate cost that made short runs expensive; flexo still wins at volume and on some spot-colour work. A roll label adds another layer: winding direction, spacing, core and max roll diameter all affect whether the label runs on an applicator. This guide explains the production choices in buyer terms, without pretending that every finish is available at every quantity.',
    covers: [
      'Why a 50-unit order is possible on digital, and where flexo becomes cheaper.',
      'The five roll parameters an applicator needs, beyond the label size.',
      'How foil, embossing, spot UV and colour variation change the specification.',
    ],
    tableTitle: 'Production choices and their trade-offs',
    tableRows: [
      ['Digital', 'Low setup, short runs, variable data; higher unit cost at volume.'],
      ['Flexo', 'Plate and make-ready cost; lower unit cost at volume and good for long runs.'],
      ['Roll', 'For applicators and high-volume packing; winding, spacing and core matter.'],
      ['Sheet', 'For hand application, small runs and sticker sheets; simpler to handle.'],
      ['Special finish', 'Foil, emboss or spot UV add a die or pass; usually needs volume to pay off.'],
    ],
    decisionTitle: 'Decision table: choose a production route',
    decisionRows: [
      ['The run is short, contains several designs or needs variable data', 'Digital is the usual starting point', 'There is no plate for each colour, so the fixed print setup is smaller and short runs remain viable.'],
      ['The artwork is stable and the run is long', 'Compare flexo, including plates and make-ready', 'The higher fixed cost can be repaid by a lower running cost across a large quantity, but the crossover depends on the job.'],
      ['The labels feed an applicator', 'Specify a roll with the correct winding direction, core, gap and maximum diameter', 'A correctly printed roll can still stop a line if its physical format does not match the applicator.'],
      ['The labels will be applied by hand', 'Consider a sheet or a simple roll and a standard shape', 'Hand application does not need every applicator specification, and a simpler format can reduce handling before the label reaches the product.'],
      ['A special finish is wanted on a short run', 'Compare the die or screen setup with a printed effect or no finish', 'The fixed finishing charge can dominate a small order even when the finish itself is inexpensive per unit.'],
      ['Colour must repeat across orders', 'Agree a proof type and retain a reference sample', 'A screen is not a colour reference, and a second run on another press or stock can shift without a physical standard.'],
    ],
    workedTitle: 'Illustrative worked example: when the print routes cross',
    worked: [
      'Use an illustrative setup and per-unit comparison, not our prices. Route A has a $90 setup and $0.12 per label; Route B has a $350 setup and $0.05 per label. Set the totals equal: 90 + 0.12q = 350 + 0.05q. Subtract: 0.07q = 260, so q = 3,714.3. Round up to 3,715 labels for the crossover point.',
      'At 3,000 labels, A costs 90 + 360 = $450; B costs 350 + 150 = $500, so A is $50 lower. At 4,000, A costs 90 + 480 = $570; B costs 350 + 200 = $550, so B is $20 lower. The crossover falls between those quantities, as the equation predicts.',
      'At 10,000, A is 90 + 1,200 = $1,290 and B is 350 + 500 = $850. These figures are illustrative and ignore plate revisions, waste, freight and finishing. They show the shape of the decision, not a real quotation.',
    ],
    mistakes: [
      {
        title: 'Specifying a roll without the applicator details',
        body: 'A roll that is the right size but winds the wrong way, or has the wrong core, can stop a production line. Ask for winding direction, spacing, core and maximum diameter before the run.',
      },
      {
        title: 'Choosing foil for a 50-unit order',
        body: 'Foil and emboss need a die and a make-ready. At 50 units the setup can dominate; a printed metallic effect or a simpler finish may be the better first order.',
      },
      {
        title: 'Expecting two runs to match exactly',
        body: 'Colour varies between presses, substrates and runs. A physical proof or a retained reference sample is the only reliable match; a screen is not.',
      },
    ],
    limits: [
      'This guide does not quote a press, plate or finishing price; availability depends on equipment, substrate, label size and run length.',
      'It does not cover every printing technology, such as screen, gravure or specialised digital presses.',
      'It cannot predict an exact colour match between presses or runs. A proof type and a retained reference must be agreed.',
      'Roll specifications depend on the applicator. This guide does not validate winding, core, web tension or sensor placement on your line.',
      'Special finishes may need a die, screen, plate or minimum run. Ask for the setup and minimum separately from the per-unit charge.',
    ],
    checks: [
      'Check that the quote names the printing method, colour process, stock and whether plates or screens are a separate charge.',
      'For rolls, confirm unwind direction, core diameter, label gap, maximum roll diameter and roll length.',
      'Confirm every finishing step, including laminate, varnish, die cutting and any special finish setup.',
      'Ask what type of proof you will receive and what it is expected to prove: copy, barcode, cut or colour.',
      'Ask whether waste, overrun or underrun and reprints are included in the quoted quantity or price.',
    ],
    glossary: [
      { term: 'Digital printing', definition: 'A press process that prints from a digital file without a separate plate for each colour.' },
      { term: 'Flexo', definition: 'A printing process that uses flexible relief plates and is often economical for long label runs.' },
      { term: 'Plate', definition: 'The image carrier used on a flexographic press, made separately for each colour and job.' },
      { term: 'Make-ready', definition: 'The setup work, material and waste used to get a press ready before saleable production begins.' },
      { term: 'Unwind direction', definition: 'The direction in which a roll of labels is wound and therefore the direction an applicator must feed it.' },
    ],
    deepLinks: [
      { lead: 'The crossover between the two common methods is explained in', label: 'digital vs flexo: why a 50-unit label order is possible', href: '/knowledge/digital-vs-flexographic-printing/' },
      { lead: 'The five physical roll details are set out in', label: 'how roll labels are made: the five spec details', href: '/knowledge/how-roll-labels-are-made/' },
      { lead: 'For fixed finishing costs, read', label: 'foil stamping and embossing on labels and stickers', href: '/knowledge/foil-stamping-and-embossing/' },
      { lead: 'The limits of matching one run to another are covered in', label: 'print colour consistency: why run two never matches run one', href: '/knowledge/print-colour-consistency/' },
    ],
    view:
      'We would rather produce a simple, well-specified job on digital than sell a complex finish that the quantity cannot support. The right question is not “which printing method is best” but “which method makes this specification economic at this quantity, without hiding a setup the buyer does not need”.',
    faqs: [
      {
        q: 'Why can a 50-unit label order be printed digitally?',
        a: 'Digital printing does not need a plate for each colour, so the setup is mostly file preparation, proofing and make-ready. That makes short runs viable. Flexo needs plates and a longer make-ready, which is why it becomes economic at higher quantities.',
      },
      {
        q: 'What details do I need for a roll label?',
        a: 'Label size, gap, winding direction, core diameter, maximum roll diameter and the applicator’s requirements. Without those, a correctly printed roll can still fail on the line.',
      },
      {
        q: 'Can foil or embossing be done on a small order?',
        a: 'It can be quoted, but the die and make-ready are fixed costs. At 50 units they can dominate the price. Ask for the setup separately and compare it with a printed metallic effect or a simpler finish.',
      },
      {
        q: 'Why is flexo not automatically cheaper at high volume?',
        a: 'Flexo carries plates, make-ready, colour setup and waste before saleable labels are produced. A long run usually spreads those costs, but a job with frequent artwork changes, many colours or a difficult stock may still be better on digital. Compare the total at your actual quantity.',
      },
      {
        q: 'Can digital and flexo print the same spot colour?',
        a: 'Not necessarily. Digital process printing builds colour from CMYK, while flexo can use a dedicated spot ink when the press has the station and the ink is available. Ask which method and colour system the quote uses, and approve a physical reference if a close match matters.',
      },
      {
        q: 'What are overrun and underrun?',
        a: 'They are differences between the ordered quantity and the quantity actually delivered, often caused by press setup, spoilage or finishing yield. Ask the supplier to state the permitted range in writing and confirm whether the invoice is based on the ordered or delivered quantity.',
      },
    ],
    products: ['roll-labels', 'custom-labels', 'hang-tags', 'custom-stickers'],
  },

  artwork: {
    key: 'artwork',
    title: 'Label artwork: files, bleed, dielines and proofs',
    heading: 'Artwork preparation: files, colour, bleed and dielines',
    description:
      'The artwork checks that prevent a reprint: file format, resolution at final size, CMYK conversion, bleed, safe area, fonts and a usable cut path.',
    intro:
      'Most reprints are not printing failures. They are artwork decisions that looked fine on a screen: a logo that was 72 dpi at final size, a colour that shifted when converted to CMYK, text inside the safe area, or a cut path that was not a closed vector shape. This guide is the pre-flight sequence we would run before sending any label or sticker to production. It is written for buyers and designers, not for prepress specialists, and it explains why each check matters rather than listing rules without a reason.',
    covers: [
      'Which file formats preserve vectors and which flatten or lose fonts.',
      'How to check resolution at final print size, not at the size on screen.',
      'Bleed, safe area, dielines and the difference between a cut path and a decorative outline.',
    ],
    tableTitle: 'The pre-flight sequence',
    tableRows: [
      ['Format', 'PDF/X-4, AI, EPS or SVG for vectors; PNG/JPG only when that is all you have.'],
      ['Resolution', '300 dpi at final size for images; vector text and logos avoid the question.'],
      ['Colour', 'CMYK for process print; spot colours only when the printer confirms they are available.'],
      ['Bleed', 'Usually 3 mm beyond the cut line; check the printer’s requirement for the substrate.'],
      ['Cut path', 'A separate, closed vector line on its own layer; not a stroke around the artwork.'],
    ],
    decisionTitle: 'Decision table: choose the artwork route',
    decisionRows: [
      ['The logo exists only as a PNG or JPG', 'Check its resolution at final print size; redraw it as vector if type or edges will be visible', 'Raster detail cannot be recovered by enlargement, and interpolation invents pixels rather than restoring them.'],
      ['The design must stay sharp at any size', 'Send a vector PDF, AI, EPS or SVG with fonts outlined or embedded', 'Vector outlines scale without resolution loss and remove a font-substitution risk.'],
      ['The background reaches the cut edge', 'Extend the artwork 3 mm beyond the cut line on every side', 'Bleed is trimmed away; without it, a small cutting or application drift can leave a white sliver.'],
      ['The label has a custom shape', 'Supply a closed vector dieline on a separate layer or spot colour', 'The cutter needs geometry, not a picture of an outline, and prepress must distinguish the cut from the print.'],
      ['A barcode is part of the design', 'Place it at the specified size and keep the quiet zones clear; verify a printed proof', 'A barcode scaled to fill a space can fall outside its readable magnification even if it looks tidy.'],
      ['Colour matching is critical', 'Define whether the job needs process colour, a spot colour or an approved physical reference', 'Screens and office printers are not colour contracts, and CMYK cannot reproduce every spot colour exactly.'],
    ],
    workedTitle: 'Illustrative worked example: resolution, bleed and trim',
    worked: [
      'An image is 1,200 pixels wide. At 300 dpi, its maximum print width is 1,200 ÷ 300 = 4 in, or 4 × 25.4 = 101.6 mm. If it is stretched to 150 mm, effective resolution is 1,200 ÷ (150 ÷ 25.4) = 1,200 ÷ 5.9055 = 203.2 dpi, below the 300 dpi working target.',
      'For an 80 mm wide image at 300 dpi: 80 ÷ 25.4 = 3.1496 in; 3.1496 × 300 = 944.9 px, so supply at least 945 pixels across. For a 60 × 90 mm label with 3 mm bleed on every side, the artwork canvas is 60 + 6 = 66 mm by 90 + 6 = 96 mm. The trim size remains 60 × 90 mm.',
      'These calculations use arithmetic; 300 dpi and 3 mm are working targets, not universal requirements. Check the printer’s artwork specification for the exact job and substrate.',
    ],
    mistakes: [
      {
        title: 'Upscaling a low-resolution logo',
        body: 'Interpolation invents pixels; it does not restore detail. A 72 dpi logo enlarged to a 50 mm label becomes visibly soft at the cut edge. Redraw it as vector or choose a smaller size.',
      },
      {
        title: 'Putting text in the bleed',
        body: 'Bleed is trimmed away. Text or a barcode inside the bleed can be cut off even when the proof looks complete. Keep critical content inside the safe area.',
      },
      {
        title: 'Sending a dieline as a picture',
        body: 'A PNG of a cut path is not a cut path. The printer needs closed vector geometry on a separate layer, with the artwork and the cut line clearly separated.',
      },
    ],
    limits: [
      'This guide does not replace the printer’s template, dieline or preflight report for a specific job.',
      'It does not guarantee colour matching. Screen, proof and press differ, and some colours need a spot ink or physical approval.',
      'It does not approve label text for legibility, accessibility or regulatory content.',
      'It does not validate a barcode. Use the current barcode specification and a verifier on a printed symbol.',
      'It does not cover every file format, font licence, transparency, overprint or spot-white workflow used by every press.',
    ],
    checks: [
      'Check that the page size equals the trim size plus the required bleed, and that the dieline is separate and vector.',
      'Check that raster images are at least 300 dpi at final size and that fonts are embedded or outlined.',
      'Check that all text and critical elements sit inside the safe area, away from trim and folds.',
      'Check that the proof shows trim, bleed, cut or fold lines and the intended colour treatment.',
      'Ask what the proof is intended to confirm; a PDF may not be a colour contract, and a digital proof may not predict a flexo run.',
    ],
    glossary: [
      { term: 'Bleed', definition: 'Artwork that extends beyond the trim line so the background still reaches the edge after cutting.' },
      { term: 'Trim', definition: 'The final cut size of the printed label or sticker.' },
      { term: 'Safe area', definition: 'The margin inside the trim line in which text and critical elements are kept clear of cutting and application drift.' },
      { term: 'Dieline', definition: 'A vector path that describes the required cut or fold in the finished piece.' },
      { term: 'Dpi', definition: 'Dots per inch, a measure of raster resolution relative to a physical print size.' },
    ],
    deepLinks: [
      { lead: 'The mechanics of a safe margin are explained in', label: 'bleed and safe area for label artwork', href: '/knowledge/bleed-and-safe-area/' },
      { lead: 'For a cut path that survives prepress, read', label: 'dielines: how to prepare a cut path that works', href: '/knowledge/dieline-preparation/' },
      { lead: 'The arithmetic behind raster images is in', label: 'print resolution: why 300 dpi is the number', href: '/knowledge/print-resolution/' },
      { lead: 'For the file-format decision, read', label: 'artwork file formats: what printers can actually use', href: '/knowledge/artwork-file-formats/' },
    ],
    view:
      'In our view, the cheapest artwork check is a printed proof at final size, not another screen review. A proof shows the type size in the hand, the colour on the stock and the cut line against the artwork. It costs a little and catches the mistakes that a PDF preview cannot.',
    faqs: [
      {
        q: 'What file format should I send for label printing?',
        a: 'A vector PDF, AI, EPS or SVG at final size, with fonts outlined or embedded. A high-resolution PNG or JPG can work for a simple image, but text and fine detail will not be as sharp. Send the native file if you have it.',
      },
      {
        q: 'What resolution do I need for a label?',
        a: '300 dpi at final print size for raster images. A 50 mm label at 300 dpi is about 600 pixels across; a 100 mm label is about 1,200. A file that is 300 dpi at a smaller size becomes lower resolution when enlarged.',
      },
      {
        q: 'What is bleed on a label?',
        a: 'Bleed is extra artwork beyond the cut line, usually 3 mm, so a small cutting tolerance does not leave a white edge. Keep text and barcodes inside the safe area, away from the trim.',
      },
      {
        q: 'Can you fix my file if I only have a JPG?',
        a: 'A JPG can be used when it has enough pixels at final size and the job does not need a custom cut path. Text, fine detail and a cut line must usually be redrawn, which is artwork work rather than a press setting. Send the largest original you have and state its source size.',
      },
      {
        q: 'What is the difference between trim size and artwork size?',
        a: 'Trim size is the finished label measured at the cut line. Artwork size includes the bleed beyond that line, so a 60 × 90 mm label with 3 mm bleed is supplied on a 66 × 96 mm canvas while the finished label remains 60 × 90 mm.',
      },
      {
        q: 'Do I need a physical proof?',
        a: 'A physical proof is the better check when colour, small type, barcode quality, stock or finish matters. A digital proof can confirm copy, layout and dimensions, but it cannot show how ink behaves on the actual material or how the label looks on the container.',
      },
    ],
    products: ['custom-labels', 'custom-stickers', 'roll-labels', 'hang-tags'],
  },
  'hang-tags': {
    key: 'hang-tags',
    title: 'Hang tags: card stock, size, eyelets and string',
    heading: 'Hang tags: card weight, size, hole and finish',
    description:
      'How to choose 350 or 400 gsm card, size a hang tag, place the hole, and specify eyelets, string, foil or emboss for your first custom order.',
    intro:
      'A hang tag is judged in the hand before it is read. It has to feel substantial, survive being handled, and hang straight from the product. That makes the specification more physical than a label: card weight, grain direction, hole position, eyelet and string all affect whether the tag works. A 300 gsm tag feels thin at retail; a 400 gsm tag holds emboss better but needs more clearance around the hole. This guide covers the decisions in the order they affect the result, before the artwork is finalised.',
    covers: [
      'How to choose between 300, 350 and 400 gsm card, and when kraft or recycled board is the right look.',
      'How to size a tag, place the hole and choose an eyelet or string that survives handling.',
      'Where foil, emboss and spot UV pay off, and where a printed effect is the better first order.',
    ],
    tableTitle: 'Hang tag decisions in order',
    tableRows: [
      ['Card weight', '300 gsm for a soft craft tag; 350 gsm as the retail standard; 400 gsm for a heavier feel and emboss.'],
      ['Size', '50 × 90 mm for small accessories; 55 × 90 mm for apparel; 60 × 100 mm and above for candles and gift sets.'],
      ['Hole', '8–10 mm from the top edge, centred, with 3 mm of clear space around it; an eyelet protects the card.'],
      ['Attachment', 'Cotton string, waxed cord, elastic or a safety pin; the knot adds 10–15 mm above the tag.'],
      ['Finish', 'Matte laminate for handling; foil and emboss for a premium tier; spot UV needs a screen and volume.'],
    ],
    decisionTitle: 'Decision table: choose the tag construction',
    decisionRows: [
      ['The tag is small and handled at retail', 'Start with 350 gsm and a reinforced hole', '350 gsm gives useful stiffness on a small tag without making the hole clearance or folded edge harder to control.'],
      ['The brand needs a soft, uncoated craft feel', 'Use a 300–350 gsm uncoated or kraft board and allow for ink behaviour', 'Uncoated board can feel warmer and less glossy, but print contrast and scuff resistance differ from coated stock.'],
      ['Emboss, deboss or heavy foil is part of the design', 'Compare 400 gsm with the die and make-ready before committing', 'A heavier board can hold a deeper impression, while a small tag may become harder to eyelet or fold cleanly.'],
      ['The tag will be handled repeatedly', 'Add a matte laminate or a suitable coating and specify an eyelet', 'The finish protects the printed surface, and the eyelet spreads the load of the string through the card.'],
      ['The attachment must not mark the product', 'Choose the string, elastic or pin after testing it on the product surface', 'The tag hardware can affect the product even when the card itself is correct.'],
      ['The tag needs variable data', 'Confirm the field order and a sample before the full data run', 'A shifted CSV column can print the wrong code on every tag while the layout still looks correct.'],
    ],
    workedTitle: 'Illustrative worked example: card mass from gsm',
    worked: [
      'A 55 × 90 mm tag has an area of 55 × 90 = 4,950 mm². One square metre is 1,000,000 mm², so the tag is 4,950 ÷ 1,000,000 = 0.00495 m². At 350 gsm, or 350 g/m², one tag weighs 0.00495 × 350 = 1.7325 g. Ignoring waste and ink, 1,000 tags weigh 1,732.5 g, or about 1.73 kg.',
      'At 400 gsm, the same area weighs 0.00495 × 400 = 1.98 g, and 1,000 tags weigh 1,980 g, or 1.98 kg. The difference is 1,980 − 1,732.5 = 247.5 g per 1,000 tags. The practical difference is also stiffness, hole behaviour and how the card takes a finish.',
      'This is illustrative arithmetic from the sheet area. It excludes cutting waste, ink, coating and packing, and it does not predict the finished caliper of a particular board. Use it to sanity-check a weight estimate, not to book freight.',
    ],
    mistakes: [
      {
        title: 'Choosing 400 gsm for a small tag',
        body: 'A heavy card feels premium, but it also needs a larger hole clearance and can crack at a tight fold. On a 50 × 90 mm tag, 350 gsm is often the better balance; 400 gsm belongs on a larger tag or a finish that needs the stiffness.',
      },
      {
        title: 'Putting the hole too close to the edge',
        body: 'A hole 3–4 mm from the top edge can tear out in handling, especially without an eyelet. Keep 8–10 mm from the edge and 3 mm of clear space around the hole; the string needs room to move without cutting the card.',
      },
      {
        title: 'Paying for foil on a 50-unit order',
        body: 'Foil and emboss need a die and a make-ready. At 50 units the setup can dominate the price. If the quantity is a test, use a printed metallic effect or a simpler finish and save the die for a proven design.',
      },
    ],
    limits: [
      'This guide does not cover every board, recycled-fibre batch or coating. Ask for the actual stock and its technical information.',
      'It does not guarantee that a specific printer can foil, emboss, laminate or eyelet at your size and quantity.',
      'It does not approve product or retail label content, regulatory text or market-specific requirements for the tag.',
      'It does not test hole tear-out, string colour transfer or abrasion under your handling and storage conditions.',
      'A flat proof does not show stiffness, edge quality or hardware fit. Ask for a physical blank or an assembled sample when those matter.',
    ],
    checks: [
      'Confirm the card stock in gsm and finish rather than accepting “thick card” or “premium stock”.',
      'Check the finished size, hole diameter and hole-centre position on the dieline, not only in a visual proof.',
      'Confirm the eyelet colour, inner diameter, string type, finished string length and attachment method.',
      'Ask whether foil, emboss or another finish has a separate die charge and whether the quote covers one or both sides.',
      'For variable data, confirm the field order, a data sample and the number of unique tags in writing.',
    ],
    glossary: [
      { term: 'Gsm', definition: 'Grams per square metre, a measure of paper or card mass per unit area.' },
      { term: 'Eyelet', definition: 'A metal or plastic ring set into the tag’s hole to protect the card from the string or clip.' },
      { term: 'Dieline', definition: 'A vector path that describes the tag’s cut, score, fold or hole positions.' },
      { term: 'Make-ready', definition: 'The setup work and waste needed before a press or finishing machine can produce saleable pieces.' },
      { term: 'Variable data', definition: 'Text, numbers, barcodes or images that change from one printed piece to the next.' },
    ],
    deepLinks: [
      { lead: 'The stock comparison is worked through in', label: 'hang tag card stocks: 300, 350 or 400 gsm', href: '/knowledge/hang-tag-card-stocks/' },
      { lead: 'For dimensions and hardware placement, read', label: 'hang tag sizes and hole placement', href: '/knowledge/hang-tag-sizes-and-hole-placement/' },
      { lead: 'The attachment and finish options are covered in', label: 'hang tag finishes, eyelets and string', href: '/knowledge/hang-tag-finishes-and-hardware/' },
      { lead: 'For the production file, read', label: 'hang tag artwork and dielines', href: '/knowledge/hang-tag-artwork-and-dielines/' },
    ],
    view:
      'In our view, the tag should be specified with the attachment, not after it. The hole position, eyelet and knot determine how the tag hangs; a beautiful 400 gsm tag that hangs crooked because the hole is off-centre looks worse than a plain 350 gsm tag that sits straight. Decide the hardware before the artwork.',
    faqs: [
      {
        q: 'What card weight is standard for hang tags?',
        a: '350 gsm is the working standard for retail tags. 300 gsm feels softer and suits kraft or craft positioning; 400 gsm feels heavier and holds emboss better but costs more and needs a larger hole clearance. Below 300 gsm the tag flexes and the eyelet can tear out.',
      },
      {
        q: 'Where should the hole go on a hang tag?',
        a: 'Usually 8–10 mm from the top edge, centred, with about 3 mm of clear space around the hole. If the tag will be handled heavily, add an eyelet. The string knot adds 10–15 mm above the tag, so leave room for it in the finished length.',
      },
      {
        q: 'Can I print variable data on hang tags?',
        a: 'Yes, batch codes, serial numbers, QR codes or price data can be printed as variable data. Send a CSV with one row per tag and confirm the field order in writing; a shifted column produces a whole run with the wrong codes.',
      },
      {
        q: 'What is the difference between 350 gsm and 400 gsm card?',
        a: 'Both can make a retail tag, but 400 gsm is heavier and stiffer. It can hold an emboss or a firm hand feel, while 350 gsm is often easier to eyelet and fold on a small tag. Compare a blank in the intended size rather than choosing by weight alone.',
      },
      {
        q: 'Should a hang tag be laminated?',
        a: 'A laminate helps when the tag is handled repeatedly, may get damp or needs a more scuff-resistant surface. It is not required for every uncoated or kraft tag, where a natural feel may be the point. Ask for a sample of the proposed stock and finish in the hand.',
      },
      {
        q: 'Can I use a safety pin instead of string?',
        a: 'A safety pin can work for some garments and accessories, but it may leave a hole, scratch a surface or be unsuitable for a child’s product. Test the attachment on the actual item and check any retail safety or packaging requirement before choosing hardware.',
      },
    ],
    products: ['hang-tags', 'logo-stickers', 'custom-stickers'],
  },
};

export const PILLAR_ORDER: PillarKey[] = [
  'label-sizing',
  'label-cost',
  'marketplace-labels',
  'label-materials',
  'sticker-materials',
  'printing',
  'artwork',
  'hang-tags',
];
