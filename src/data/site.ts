/* Single source of truth for brand, contact and policy values.
   Nothing here should be duplicated inside components. */

export const site = {
  brand: 'Custom Stickers Printing',
  brandShort: 'CSP',
  domain: 'customstickersprinting.com',
  url: 'https://customstickersprinting.com',
  tagline: 'Custom Labels & Stickers for Growing Brands',
  subline: 'Small batch production · Flexible customization · Worldwide delivery',
  description:
    'Custom labels and stickers for growing brands: flexible sizes, materials and finishes, from 50 units, with worldwide delivery and a personal quotation.',
  email: 'martin@customstickersprinting.com',
  whatsapp: '8613323237275', // digits only, international format, no +
  whatsappDisplay: '+86 133 2323 7275',
  moq: 50,
  moqLabel: 'From 50 units',
  leadTime: 'Typically 7–12 working days after artwork approval',
  markets: ['United States', 'United Kingdom', 'European Union', 'Worldwide'],
  company: {
    legalNameEn: 'Yiwu Dingwei Trading Company',
    legalNameZh: '义乌市丁威贸易商行',
    uscc: '92330782MA8GW3PLXB',
    duns: '585974555',
    city: 'Yiwu',
    region: 'Zhejiang',
    country: 'China',
    countryCode: 'CN',
    founder: 'Wang Wei',
    businessType: 'individual business (个体工商户)',
  },
};

export const waLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const mailLink = (subject: string, body?: string) => {
  const params = new URLSearchParams({ subject });
  if (body) params.set('body', body);
  return `mailto:${site.email}?${params.toString()}`;
};

export const quoteMessage = `Hello, I would like a quotation for custom labels or stickers.

Product:
Size:
Material:
Quantity:
Destination country:

Please let me know the options and price.`;
