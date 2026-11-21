export interface SitePage {
  path: string;
  title: string;
  description: string;
  group: "company" | "buying" | "policies" | "knowledge" | "catalogue";
}

export const REVIEWED_DATE = "21 November 2026";
export const REVIEWED_ISO = "2026-11-21";

export const sitePages: SitePage[] = [
  {
    path: "/",
    title: "Labels and stickers from 50 units",
    description:
      "Custom labels and stickers for growing brands: flexible sizes, materials and finishes, from 50 units, with worldwide delivery and a personal quotation.",
    group: "company",
  },
  {
    path: "/about/",
    title: "About Custom Stickers Printing",
    description:
      "Label and sticker brand of Yiwu Dingwei Trading Company, Yiwu, China. Registration number, D-U-N-S and how to verify us before paying a deposit.",
    group: "company",
  },
  {
    path: "/contact/",
    title: "Contact and quotation enquiries",
    description:
      "Contact our quotation and quality-control team by email or WhatsApp. What we can answer, what we cannot, response times and sample requests.",
    group: "company",
  },
  {
    path: "/how-to-order/",
    title: "How to order custom labels and stickers",
    description:
      "The ordering process from specification to delivery: what to send, how proofs and samples work, payment terms, production time and shipping.",
    group: "buying",
  },
  {
    path: "/request-a-quote/",
    title: "Request a label quote",
    description:
      "Send five key inputs for a custom label or sticker quotation, see what changes the price, and learn how artwork, NDAs and samples are handled.",
    group: "buying",
  },
  {
    path: "/faq/",
    title: "Custom label and sticker FAQ",
    description:
      "Answers on minimum order, materials, waterproof options, artwork files, samples, lead times, shipping and payment for custom labels and stickers.",
    group: "buying",
  },
  {
    path: "/artwork-guidelines/",
    title: "Artwork guidelines for label and sticker printing",
    description:
      "What to send for print: file formats, 3 mm bleed, CMYK colour, 300 dpi resolution, outlined fonts and dielines, plus what gets a file rejected.",
    group: "buying",
  },
  {
    path: "/shipping-delivery/",
    title: "Shipping and delivery",
    description:
      "How production and transit differ, what EXW, FOB, DAP and DDP mean in a quotation, and how duties, packaging, tracking and damage claims work.",
    group: "buying",
  },
  {
    path: "/products/",
    title: "Products: custom labels and stickers",
    description:
      "Every product line: roll, bottle, jar, cosmetic and food labels, plus vinyl, clear, die cut and logo stickers, all from 50 units and quoted per project.",
    group: "catalogue",
  },
  {
    path: "/industries/",
    title: "Industries: labels and stickers by application",
    description:
      "How label and sticker requirements change by industry: beauty and skincare, candles and fragrance, food and beverage, ecommerce and small business.",
    group: "catalogue",
  },
  {
    path: "/low-moq-label-printing/",
    title: "Low MOQ label printing from 50 units",
    description:
      "Low minimum label printing from 50 units per design: what the minimum covers, why converters quote in thousands, and how to keep a first run affordable.",
    group: "catalogue",
  },
  {
    path: "/small-batch-sticker-printing/",
    title: "Small batch sticker printing from 50 units",
    description:
      "Small batch custom stickers from 50 units: die cut or sheets, white or clear vinyl, priced for a first run rather than for a container load.",
    group: "catalogue",
  },
  {
    path: "/privacy/",
    title: "Privacy policy",
    description:
      "How this static site handles enquiry, artwork and order data, the processors involved, international transfers, retention periods and your privacy rights.",
    group: "policies",
  },
  {
    path: "/cookies/",
    title: "Cookies and local storage",
    description:
      "The two Cloudflare security cookies this site may set, why there is no consent banner, and how to block or delete these cookies in your browser.",
    group: "policies",
  },
  {
    path: "/terms/",
    title: "Terms of sale and website use",
    description:
      "The rules for quotations, orders, artwork, payment, delivery, claims and liability when you buy custom-printed labels or stickers from our company.",
    group: "policies",
  },
  {
    path: "/refund-policy/",
    title: "Returns, reprints and refunds policy",
    description:
      "How we handle a printing fault, wrong quantity, transit damage and cancellations on custom labels and stickers, including what is covered and how to claim.",
    group: "policies",
  },
  {
    path: "/declarations/",
    title: "Documents and declarations",
    description:
      "The documents, samples and written claims we can request or provide, what each document proves, and the certifications we do not claim to hold.",
    group: "policies",
  },
  {
    path: "/editorial-standards/",
    title: "Editorial standards",
    description:
      "Who writes this site, how evidence and numbers are graded, how AI is used, when pages are reviewed, and how factual errors are openly corrected.",
    group: "policies",
  },
  {
    path: "/methodology/",
    title: "Methodology and evidence",
    description:
      "How we grade evidence, label numbers, produce articles, make calculations and use AI, with six questions about our publishing and review method.",
    group: "policies",
  },
  {
    path: "/corrections/",
    title: "Corrections and updates",
    description:
      "How to report a factual error, the correction and clarification types we record, response times, our corrections log and how to appeal a decision.",
    group: "policies",
  },
  {
    path: "/disclaimer/",
    title: "Printing information disclaimer",
    description:
      "How to use our printing information responsibly, what we cannot guarantee, and the five checks to make before relying on any page or example.",
    group: "policies",
  },
  {
    path: "/accessibility/",
    title: "Accessibility statement",
    description:
      "Our target of WCAG 2.2 AA, what has been implemented, known limitations, how to report an accessibility barrier and when this page is reviewed.",
    group: "policies",
  },
  {
    path: "/knowledge/",
    title: "Knowledge base: labels and print production",
    description:
      "Technical background on label materials, sticker formats, printing methods, artwork preparation and MOQ, written for buyers rather than printers.",
    group: "knowledge",
  },
  {
    path: "/knowledge/label-sizing/",
    title: "Label sizing and dimensions",
    description:
      "How to measure a bottle, jar, tin or tube, calculate a wrap, and choose a label size that fits without lifting at the edge or crossing a rim.",
    group: "knowledge",
  },
  {
    path: "/knowledge/label-cost/",
    title: "Label cost and ordering",
    description:
      "The inputs behind label pricing, setup costs and per-unit cost, and how quantity, size, material and finishing change a quotation.",
    group: "knowledge",
  },
  {
    path: "/knowledge/marketplace-labels/",
    title: "Marketplace and retail labels",
    description:
      "How marketplace, retail and shipping label requirements differ, what information usually belongs on a label, and what the seller must verify.",
    group: "knowledge",
  },
  {
    path: "/knowledge/label-materials/",
    title: "Label materials and adhesives",
    description:
      "Paper, PP, PET and vinyl face stocks, permanent and removable adhesives, and how container material and conditions affect label choice.",
    group: "knowledge",
  },
  {
    path: "/knowledge/sticker-materials/",
    title: "Sticker materials and cutting",
    description:
      "Vinyl and paper sticker stock, white and clear options, laminate, die cutting and kiss cutting, and how the intended use changes construction.",
    group: "knowledge",
  },
  {
    path: "/knowledge/printing/",
    title: "Printing and production",
    description:
      "Digital and flexographic label printing, colour control, material preparation, finishing and the production steps behind an approved proof.",
    group: "knowledge",
  },
  {
    path: "/knowledge/artwork/",
    title: "Artwork preparation",
    description:
      "The artwork checks that prevent a reprint: file format, resolution at final size, CMYK conversion, bleed, safe area, fonts and a usable cut path.",
    group: "knowledge",
  },
  {
    path: "/knowledge/hang-tags/",
    title: "Hang tags and printed card",
    description:
      "Hang tag card stocks, sizes, hole placement, finishes, hardware and artwork requirements for apparel and retail packaging.",
    group: "knowledge",
  },
  {
    path: "/knowledge/label-compliance/",
    title: "Label compliance by market and product",
    description:
      "How food, cosmetic, supplement, chemical, alcohol and Proposition 65 labels differ by market, what the printer can verify, and what the brand or importer must decide.",
    group: "knowledge",
  },
];

const pageIndex = new Map(sitePages.map((page) => [page.path, page]));

export function getSitePage(path: string): SitePage {
  const page = pageIndex.get(path);
  if (!page) throw new Error(`Unknown static page metadata: ${path}`);
  return page;
}
