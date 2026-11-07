import fs from 'node:fs';
import path from 'node:path';

const DIR = path.join(process.cwd(), 'public', 'images', 'products');
const EXTS = ['webp', 'avif', 'jpg', 'jpeg', 'png'];

/** Returns the public path of a product photo, or null when none has been supplied. */
export function productImage(slug: string): string | null {
  const found = EXTS.map((e) => `${slug}.${e}`).find((f) => fs.existsSync(path.join(DIR, f)));
  return found ? `/images/products/${found}` : null;
}
