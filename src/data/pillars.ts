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
  mistakes: Array<{ title: string; body: string }>;
  view: string;
  faqs: Array<{ q: string; a: string }>;
  products: string[];
}

export const PILLARS: Record<PillarKey, Pillar> = {
  'label-sizing': {
    key: 'label-sizing',
    title: 'Label sizing and dimensions',
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
    ],
    products: ['custom-labels', 'bottle-labels', 'jar-labels', 'roll-labels'],
  },

  'label-cost': {
    key: 'label-cost',
    title: 'Cost and ordering',
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
    ],
    products: ['custom-labels', 'custom-stickers', 'roll-labels', 'sticker-sheets'],
  },

  'marketplace-labels': {
    key: 'marketplace-labels',
    title: 'Marketplace and retail labels',
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
    ],
    products: ['custom-labels', 'roll-labels', 'logo-stickers', 'sticker-sheets'],
  },

  'label-materials': {
    key: 'label-materials',
    title: 'Label materials and adhesives',
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
    ],
    products: ['bottle-labels', 'jar-labels', 'food-labels', 'waterproof-labels', 'clear-labels'],
  },

  'sticker-materials': {
    key: 'sticker-materials',
    title: 'Sticker materials and cutting',
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
    ],
    products: ['custom-stickers', 'vinyl-stickers', 'logo-stickers', 'die-cut-stickers', 'sticker-sheets', 'clear-stickers'],
  },

  printing: {
    key: 'printing',
    title: 'Printing and production',
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
    ],
    products: ['roll-labels', 'custom-labels', 'hang-tags', 'custom-stickers'],
  },

  artwork: {
    key: 'artwork',
    title: 'Artwork preparation',
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
    ],
    products: ['custom-labels', 'custom-stickers', 'roll-labels', 'hang-tags'],
  },
  'hang-tags': {
    key: 'hang-tags',
    title: 'Hang tags and printed card',
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
