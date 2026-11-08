#!/usr/bin/env python3
"""Crop generated images to 4:3, resize to 1200x900 and write webp under 200 KB.

Usage:
    python3 scripts/prepare-product-images.py <source-dir> [--out public/images/products]

Source files may be named <slug>.png or <slug>-1200x900.png (the -N suffix from
repeat generations is stripped). Existing files are overwritten.
"""
import argparse, pathlib, re, sys
from PIL import Image

TARGET = (1200, 900)
MAX_BYTES = 200 * 1024

def crop_to_ratio(im, ratio):
    w, h = im.size
    target = ratio
    if w / h > target:          # too wide -> trim sides
        new_w = int(h * target)
        left = (w - new_w) // 2
        return im.crop((left, 0, left + new_w, h))
    new_h = int(w / ratio)      # too tall -> trim top/bottom
    top = (h - new_h) // 2
    return im.crop((0, top, w, top + new_h))

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("source")
    ap.add_argument("--out", default="public/images/products")
    a = ap.parse_args()
    src, out = pathlib.Path(a.source), pathlib.Path(a.out)
    out.mkdir(parents=True, exist_ok=True)
    files = [p for p in src.iterdir() if p.suffix.lower() in (".png", ".jpg", ".jpeg", ".webp")]
    if not files:
        sys.exit(f"no images in {src}")
    written = 0
    for f in sorted(files):
        slug = re.sub(r"-\d+x\d+(-\d+)?$", "", f.stem)
        slug = re.sub(r"-\d+$", "", slug)
        im = Image.open(f).convert("RGB")
        im = crop_to_ratio(im, TARGET[0] / TARGET[1]).resize(TARGET, Image.LANCZOS)
        dest = out / f"{slug}.webp"
        q = 84
        while True:
            im.save(dest, "WEBP", quality=q, method=6)
            if dest.stat().st_size <= MAX_BYTES or q <= 60:
                break
            q -= 4
        print(f"{f.name:32s} -> {dest.name:28s} {dest.stat().st_size//1024:3d} KB (q{q})")
        written += 1
    print(f"\n{written} files written to {out}")

if __name__ == "__main__":
    main()
