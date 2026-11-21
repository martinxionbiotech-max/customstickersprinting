#!/usr/bin/env python3
"""Generate the site's industrial schematic SVG set.

The drawings are deterministic vector geometry, not AI images and not photographs.
Run from the project root: python3 scripts/generate-schematics.py
"""
from __future__ import annotations

import html
import math
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "images" / "products"
PROD = ROOT / "src" / "content" / "products"

INK = "#14263D"
INK_2 = "#5B6B7F"
PAPER = "#F7F4EC"
GRID = "#E7E0D2"
LINE = "#CFC7B6"
ACCENT = "#B45309"
WHITE = "#FFFFFF"
FONT = "DejaVu Sans, Arial, sans-serif"
MONO = "DejaVu Sans Mono, monospace"


def esc(s: str) -> str:
    return html.escape(str(s), quote=True)


def text(x, y, s, size=16, fill=INK, weight="normal", anchor="start", family=FONT, spacing=None, opacity=1):
    ls = f' letter-spacing="{spacing}"' if spacing is not None else ""
    return (
        f'<text x="{x:.1f}" y="{y:.1f}" font-family="{family}" font-size="{size}" '
        f'fill="{fill}" font-weight="{weight}" text-anchor="{anchor}"{ls} opacity="{opacity}">{esc(s)}</text>'
    )


def line(x1, y1, x2, y2, stroke=INK, w=2, dash=None, cap="round"):
    d = f' stroke-dasharray="{dash}"' if dash else ""
    return f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{stroke}" stroke-width="{w}" stroke-linecap="{cap}"{d}/>'


def rect(x, y, w, h, stroke=INK, sw=2, fill="none", rx=0, dash=None):
    d = f' stroke-dasharray="{dash}"' if dash else ""
    return f'<rect x="{x:.1f}" y="{y:.1f}" width="{w:.1f}" height="{h:.1f}" rx="{rx}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"{d}/>'


def circle(cx, cy, r, stroke=INK, sw=2, fill="none", dash=None):
    d = f' stroke-dasharray="{dash}"' if dash else ""
    return f'<circle cx="{cx:.1f}" cy="{cy:.1f}" r="{r:.1f}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"{d}/>'


def path(d, stroke=INK, sw=2, fill="none", dash=None, cap="round", join="round"):
    da = f' stroke-dasharray="{dash}"' if dash else ""
    return f'<path d="{d}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}" stroke-linecap="{cap}" stroke-linejoin="{join}"{da}/>'


def arrow(x1, y1, x2, y2, stroke=INK, w=1.5):
    """Small open arrowhead at the end of a line."""
    ang = math.atan2(y2 - y1, x2 - x1)
    a = 9
    p1 = (x2 - a * math.cos(ang - 0.45), y2 - a * math.sin(ang - 0.45))
    p2 = (x2 - a * math.cos(ang + 0.45), y2 - a * math.sin(ang + 0.45))
    return path(f"M{x2:.1f},{y2:.1f} L{p1[0]:.1f},{p1[1]:.1f} M{x2:.1f},{y2:.1f} L{p2[0]:.1f},{p2[1]:.1f}", stroke=stroke, sw=w)


def dim_h(x1, x2, y, label, color=INK_2):
    return "".join([
        line(x1, y, x2, y, color, 1.2), line(x1, y - 7, x1, y + 7, color, 1.2),
        line(x2, y - 7, x2, y + 7, color, 1.2), arrow(x1, y, x2, y, color), arrow(x2, y, x1, y, color),
        text((x1 + x2) / 2, y - 9, label, 13, color, anchor="middle", family=MONO, spacing=1),
    ])


def dim_v(x, y1, y2, label, color=INK_2):
    return "".join([
        line(x, y1, x, y2, color, 1.2), line(x - 7, y1, x + 7, y1, color, 1.2),
        line(x - 7, y2, x + 7, y2, color, 1.2), arrow(x, y1, x, y2, color), arrow(x, y2, x, y1, color),
        text(x - 9, (y1 + y2) / 2, label, 13, color, anchor="middle", family=MONO, spacing=1,
             ),
    ])


def callout(x, y, tx, label, color=INK_2, anchor="start"):
    return "".join([
        line(x, y, tx, y, color, 1, "5 5"), circle(x, y, 3, color, 1.5, PAPER),
        text(tx + (8 if anchor == "start" else -8), y - 7, label, 13, color, anchor=anchor, family=MONO, spacing=0.6),
    ])


def label_panel(x, y, w, h, color=ACCENT):
    """A label rectangle with a dashed cut line and corner registration ticks."""
    return "".join([
        rect(x, y, w, h, color, 2.4, "none"),
        rect(x - 8, y - 8, w + 16, h + 16, LINE, 1, "none", dash="4 5"),
        line(x - 12, y - 12, x - 4, y - 4, color, 1.2),
        line(x + w + 12, y - 12, x + w + 4, y - 4, color, 1.2),
        line(x - 12, y + h + 12, x - 4, y + h + 4, color, 1.2),
        line(x + w + 12, y + h + 12, x + w + 4, y + h + 4, color, 1.2),
    ])


def bottle(x, y, w, h, neck=0.24):
    """Simple industrial bottle outline, top at y, body bottom at y+h."""
    nw = w * neck
    nx = x + (w - nw) / 2
    shoulder = y + h * 0.22
    base = y + h
    return path(
        f"M{nx:.1f},{y:.1f} L{nx:.1f},{y + h * 0.10:.1f} "
        f"C{nx:.1f},{y + h * 0.16:.1f} {x:.1f},{y + h * 0.18:.1f} {x:.1f},{shoulder:.1f} "
        f"L{x:.1f},{base - 22:.1f} Q{x:.1f},{base:.1f} {x + 22:.1f},{base:.1f} "
        f"L{x + w - 22:.1f},{base:.1f} Q{x + w:.1f},{base:.1f} {x + w:.1f},{base - 22:.1f} "
        f"L{x + w:.1f},{shoulder:.1f} C{x + w:.1f},{y + h * 0.18:.1f} {nx + nw:.1f},{y + h * 0.16:.1f} {nx + nw:.1f},{y + h * 0.10:.1f} "
        f"L{nx + nw:.1f},{y:.1f}", sw=3
    )


def jar(x, y, w, h):
    return "".join([
        rect(x + 10, y, w - 20, 28, INK, 2.5),
        rect(x, y + 28, w, h - 28, INK, 3, rx=18),
        line(x + 12, y + 62, x + w - 12, y + 62, INK_2, 1, "5 5"),
    ])


def roll(cx, cy, r, core=0.25, accent=False):
    return "".join([
        circle(cx, cy, r, INK, 3),
        circle(cx, cy, r * core, INK, 2.5),
        circle(cx, cy, r * 0.92, LINE, 1, dash="4 5"),
        line(cx - r, cy, cx + r, cy, LINE, 1),
        line(cx, cy - r, cx, cy + r, LINE, 1),
        (circle(cx + r * 0.45, cy - r * 0.45, 5, ACCENT, 2) if accent else ""),
    ])


def sticker_sheet(x, y, w, h, cols=4, rows=3):
    out = [rect(x, y, w, h, INK, 3), rect(x + 18, y + 18, w - 36, h - 36, LINE, 1, dash="4 5")]
    gx = (w - 36) / cols
    gy = (h - 36) / rows
    for r in range(rows):
        for c in range(cols):
            px = x + 18 + c * gx + 6
            py = y + 18 + r * gy + 6
            out.append(rect(px, py, gx - 12, gy - 12, INK_2, 1.2, rx=3, dash="3 3"))
            out.append(circle(px + (gx - 12) / 2, py + (gy - 12) / 2, 4, ACCENT, 1))
    return "".join(out)


def frame_marks():
    out = []
    for x in (24, 1176):
        for y in (24, 876):
            out.append(line(x - 12, y, x + 12, y, INK, 2))
            out.append(line(x, y - 12, x, y + 12, INK, 2))
    return "".join(out)


def base_svg(title: str, number: int, meta: str, body: str, desc: str) -> str:
    defs = f'''<defs>
  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="{GRID}" stroke-width="1"/>
  </pattern>
  <pattern id="hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
    <line x1="0" y1="0" x2="0" y2="10" stroke="{ACCENT}" stroke-width="1"/>
  </pattern>
  <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
    <circle cx="3" cy="3" r="1.2" fill="{INK_2}"/>
  </pattern>
</defs>'''
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="1200" height="900" role="img" aria-labelledby="t{number} d{number}">
<title id="t{number}">{esc(title)} — industrial schematic</title>
<desc id="d{number}">{esc(desc)}</desc>
{defs}
<rect width="1200" height="900" fill="{PAPER}"/>
<rect x="40" y="40" width="1120" height="820" fill="url(#grid)"/>
<rect x="24" y="24" width="1152" height="852" fill="none" stroke="{INK}" stroke-width="3"/>
<rect x="36" y="36" width="1128" height="828" fill="none" stroke="{LINE}" stroke-width="1"/>
{frame_marks()}
{text(64, 68, "CUSTOM STICKERS PRINTING / PRODUCT SCHEMATIC", 13, INK_2, "bold", family=MONO, spacing=1.2)}
{text(64, 110, title.upper(), 31, INK, "bold")}
{text(64, 136, meta, 13, INK_2, family=MONO, spacing=0.6)}
{text(1136, 68, f"DWG {number:02d} / 15", 14, ACCENT, "bold", "end", MONO, 1)}
{text(1136, 90, "REV 2026-11", 12, INK_2, "normal", "end", MONO, 1)}
{line(64, 154, 1136, 154, INK, 1.5)}
{body}
{line(64, 764, 1136, 764, INK, 1.5)}
{text(64, 792, "SCHEMATIC — NOT A PHOTOGRAPH / NOT TO SCALE", 13, INK_2, "bold", family=MONO, spacing=1)}
{text(64, 816, "CUSTOMER PRINT WORK IS NOT SHOWN WITHOUT WRITTEN PERMISSION", 13, ACCENT, "bold", family=MONO, spacing=1)}
{text(1136, 816, "INDUSTRIAL SERIES / 2026", 12, INK_2, "normal", "end", MONO, 1)}
</svg>'''


def body_for(slug: str) -> str:
    if slug == "custom-labels":
        b = [
            label_panel(330, 300, 330, 210),
            label_panel(455, 365, 260, 170),
            label_panel(575, 425, 190, 125),
            dim_h(330, 660, 260, "OVERALL WIDTH"),
            dim_v(300, 300, 510, "HEIGHT"),
            path("M845,300 l45,45 l-25,25 l-45,-45", ACCENT, 2),
            text(845, 282, "PEEL / CORNER", 12, ACCENT, family=MONO),
            callout(660, 365, 810, "PAPER / PP / PET"),
            callout(660, 425, 810, "DIE CUT / SHEET"),
        ]
    elif slug == "roll-labels":
        b = [
            roll(390, 440, 150, 0.24, True),
            line(540, 440, 820, 300, INK, 2.5),
            path("M540,440 C660,440 720,330 820,300", INK, 2.5),
            rect(760, 270, 120, 60, ACCENT, 2, "none", rx=5),
            rect(760, 270, 120, 60, LINE, 1, "none", rx=5, dash="4 4"),
            text(820, 258, "WIND DIRECTION", 12, ACCENT, anchor="middle", family=MONO),
            path("M640,402 q46,-28 90,-20", ACCENT, 1.5),
            arrow(700, 390, 735, 382, ACCENT, 1.5),
            dim_h(240, 540, 655, "WEB WIDTH"),
            dim_v(210, 290, 590, "ROLL Ø"),
            callout(620, 510, 850, "ROLL / CORE / WIND"),
        ]
    elif slug == "bottle-labels":
        b = [
            bottle(420, 210, 280, 470, 0.22),
            label_panel(465, 395, 190, 170),
            path("M665,395 q50,85 0,170", ACCENT, 2, dash="5 5"),
            dim_h(420, 700, 710, "BODY WIDTH"),
            dim_v(390, 210, 680, "PRINTABLE HEIGHT"),
            callout(700, 455, 850, "CURVED SURFACE"),
            callout(700, 520, 850, "WRAP / PANEL"),
        ]
    elif slug == "cosmetic-labels":
        b = [
            bottle(300, 280, 180, 390, 0.22),
            rect(348, 260, 84, 24, INK, 2.5, "none", rx=3),
            label_panel(330, 420, 120, 140),
            jar(680, 360, 220, 300),
            label_panel(700, 470, 180, 100),
            dim_h(300, 480, 710, "SMALL DIAMETER"),
            dim_v(270, 420, 560, "LABEL H"),
            callout(560, 420, 620, "DROPPER / JAR"),
            callout(560, 500, 620, "PP / PET / CLEAR"),
        ]
    elif slug == "food-labels":
        b = [
            jar(360, 280, 260, 390),
            label_panel(390, 430, 200, 150),
            text(900, 320, "CHILL / FREEZE", 18, ACCENT, "bold", family=MONO, spacing=1),
            text(900, 346, "CONDENSATION", 12, INK_2, family=MONO, spacing=1),
            path("M900,380 q90,22 180,0", INK_2, 1.5, dash="4 5"),
            circle(930, 410, 4, INK_2, 1.2), circle(980, 410, 4, INK_2, 1.2),
            circle(1030, 410, 4, INK_2, 1.2), circle(1080, 410, 4, INK_2, 1.2),
            dim_h(360, 620, 710, "JAR BODY"),
            dim_v(330, 280, 670, "BODY HEIGHT"),
            callout(650, 500, 810, "MANDATORY TEXT"),
        ]
    elif slug == "jar-labels":
        b = [
            jar(360, 250, 300, 430),
            label_panel(395, 430, 230, 150),
            line(380, 370, 640, 370, ACCENT, 2, dash="5 5"),
            text(510, 350, "SHOULDER LINE", 12, ACCENT, anchor="middle", family=MONO, spacing=1),
            dim_h(360, 660, 720, "JAR DIAMETER"),
            dim_v(330, 250, 700, "BODY HEIGHT"),
            callout(670, 475, 820, "BODY / LID"),
        ]
    elif slug == "waterproof-labels":
        b = [
            bottle(380, 210, 280, 470, 0.24),
            label_panel(430, 420, 180, 150),
            path("M330,590 q60,-18 120,0 t120,0 t120,0 t120,0", INK_2, 2),
            text(900, 300, "WATER LINE", 13, INK_2, "bold", family=MONO, spacing=1),
            circle(900, 350, 5, INK_2, 1.2), circle(940, 340, 4, INK_2, 1.2),
            circle(980, 360, 5, INK_2, 1.2), circle(1020, 335, 4, INK_2, 1.2),
            path("M890,380 l30,22 l-30,22 l-30,-22 z", ACCENT, 2),
            text(890, 450, "MOISTURE / IMMERSION", 12, ACCENT, anchor="middle", family=MONO, spacing=0.8),
            dim_v(350, 210, 680, "PRINTABLE H"),
            callout(640, 480, 810, "PP / PET + LAMINATE"),
        ]
    elif slug == "clear-labels":
        b = [
            bottle(350, 210, 280, 470, 0.24),
            path("M410,400 q80,-12 160,0 l0,180 q-80,12 -160,0 z", ACCENT, 2, "6 5"),
            path("M430,420 q60,-8 120,0 l0,50 q-60,8 -120,0 z", ACCENT, 1, "url(#hatch)"),
            text(610, 430, "WHITE INK", 13, ACCENT, family=MONO, spacing=1),
            line(610, 438, 545, 445, ACCENT, 1, "4 4"),
            text(610, 470, "CLEAR FILM", 13, INK_2, family=MONO, spacing=1),
            line(610, 478, 545, 505, INK_2, 1, "4 4"),
            dim_v(320, 210, 680, "HEIGHT"),
            callout(640, 550, 810, "NO-LABEL LOOK"),
        ]
    elif slug == "custom-stickers":
        b = [
            circle(380, 440, 120, ACCENT, 3),
            circle(380, 440, 106, INK_2, 1, dash="5 5"),
            rect(560, 340, 210, 160, INK, 3, rx=22),
            rect(574, 354, 182, 132, INK_2, 1, rx=16, dash="4 4"),
            path("M850,420 l100,-55 l90,70 l-40,105 l-110,-10 z", ACCENT, 2.5),
            path("M850,420 l100,-55", INK_2, 1, dash="5 5"),
            dim_h(260, 500, 610, "DIE CUT"),
            dim_h(560, 770, 310, "KISS CUT SHEET"),
            callout(790, 560, 930, "PEEL / APPLY"),
        ]
    elif slug == "vinyl-stickers":
        b = [
            rect(300, 280, 420, 300, INK, 3),
            rect(330, 310, 360, 230, ACCENT, 2, rx=8),
            line(300, 610, 720, 610, INK, 2),
            text(300, 645, "APPLICATION SURFACE", 12, INK_2, family=MONO, spacing=1),
            rect(800, 250, 250, 52, INK, 2), text(825, 282, "FACE STOCK", 13, MONO),
            rect(800, 322, 250, 38, ACCENT, 2), text(825, 347, "ADHESIVE", 13, MONO),
            rect(800, 380, 250, 38, INK_2, 2), text(825, 405, "LINER", 13, MONO),
            line(780, 276, 720, 320, INK_2, 1, "4 4"),
            line(780, 341, 690, 400, ACCENT, 1, "4 4"),
            line(780, 399, 720, 500, INK_2, 1, "4 4"),
            dim_h(330, 690, 580, "STICKER W"),
            dim_v(300, 310, 530, "H"),
        ]
    elif slug == "logo-stickers":
        b = [
            circle(520, 440, 160, INK, 3),
            circle(520, 440, 144, ACCENT, 1.5, dash="5 5"),
            circle(520, 440, 86, INK_2, 1.2),
            path("M470,470 l50,-80 l50,80", ACCENT, 3),
            line(360, 440, 680, 440, INK_2, 1, "4 5"),
            line(520, 280, 520, 600, INK_2, 1, "4 5"),
            text(720, 390, "REGISTRATION", 12, INK_2, family=MONO, spacing=1),
            text(720, 420, "DIE CUT / CENTRED", 12, ACCENT, family=MONO, spacing=1),
            dim_h(360, 680, 640, "CIRCLE Ø"),
            callout(700, 500, 820, "BRAND MARK"),
        ]
    elif slug == "die-cut-stickers":
        b = [
            rect(330, 280, 560, 400, INK, 2, "none", rx=4),
            path("M390,360 l110,-36 l80,78 l-38,120 l-118,-8 z", ACCENT, 2.5),
            circle(710, 390, 70, ACCENT, 2.5),
            rect(610, 500, 160, 90, ACCENT, 2.5, rx=14),
            path("M390,360 l110,-36", INK_2, 1, "4 4"),
            path("M332,282 l0,396 l556,0", INK_2, 1, "4 4"),
            text(340, 715, "SHEET / CUT LAYER", 12, INK_2, family=MONO, spacing=1),
            dim_h(330, 890, 250, "SHEET W"),
            callout(680, 620, 810, "CONTOUR / DIE"),
        ]
    elif slug == "sticker-sheets":
        b = [
            sticker_sheet(330, 250, 540, 430, 4, 3),
            dim_h(330, 870, 720, "SHEET WIDTH"),
            dim_v(300, 250, 680, "SHEET HEIGHT"),
            callout(720, 390, 900, "KISS CUT GRID"),
            callout(720, 470, 900, "MIXED DESIGNS"),
        ]
    elif slug == "clear-stickers":
        b = [
            rect(300, 250, 500, 420, INK, 3, "#1c2b3a", rx=6),
            path("M380,320 q120,-24 240,0 l0,240 q-120,24 -240,0 z", ACCENT, 2, "6 5"),
            path("M410,350 q80,-16 160,0 l0,70 q-80,16 -160,0 z", ACCENT, 1, "url(#hatch)"),
            text(600, 345, "CLEAR FILM", 13, ACCENT, family=MONO, spacing=1),
            text(600, 380, "WHITE INK AREA", 12, INK_2, family=MONO, spacing=0.8),
            line(600, 390, 530, 385, INK_2, 1, "4 4"),
            dim_h(380, 620, 620, "STICKER W"),
            callout(840, 420, 960, "TRANSPARENT EDGE"),
        ]
    elif slug == "hang-tags":
        b = [
            path("M450,260 L750,260 L800,720 L400,720 Z", INK, 3),
            path("M450,260 L400,720", ACCENT, 1.5, dash="5 5"),
            circle(600, 320, 18, INK, 2.5),
            circle(600, 320, 11, ACCENT, 1.5),
            path("M600,302 C560,210 700,180 760,230", INK_2, 2),
            label_panel(490, 390, 220, 210),
            dim_h(400, 800, 760, "TAG WIDTH"),
            dim_v(370, 260, 720, "TAG HEIGHT"),
            callout(700, 420, 860, "350–400 GSM"),
            callout(700, 480, 860, "EYELET / STRING"),
        ]
    else:
        raise ValueError(slug)
    return "".join(b)


def press_svg() -> str:
    body = []
    # unwind
    body += [roll(230, 480, 95, 0.22, True), line(325, 480, 420, 430, INK, 3),
             line(420, 430, 900, 430, INK, 3), line(900, 430, 1010, 500, INK, 3),
             roll(1040, 500, 60, 0.22, True)]
    # stations
    for i, x in enumerate([440, 560, 680, 800]):
        body += [rect(x, 360, 90, 150, INK, 2.5), rect(x + 10, 380, 70, 32, ACCENT, 1.2),
                 text(x + 45, 545, f"ST{i + 1}", 12, INK_2, anchor="middle", family=MONO, spacing=1)]
    # control panel
    body += [rect(880, 580, 150, 100, INK, 2.5), rect(895, 596, 120, 32, ACCENT, 1.2),
             text(910, 618, "CONTROL", 11, INK, family=MONO),
             line(880, 700, 1030, 700, INK, 2)]
    # web and callouts
    body += [path("M325,480 C400,480 390,430 440,430", ACCENT, 2, dash="5 5"),
             text(230, 610, "UNWIND", 13, INK_2, "bold", family=MONO, spacing=1),
             text(1010, 610, "REWIND", 13, INK_2, "bold", family=MONO, spacing=1),
             callout(610, 330, 610, "PRINT / DIE / LAMINATE"),
             callout(610, 360, 610, "ROLL-FED WEB") ]
    # frame is provided by base; body needs no footer
    return base_svg("Roll-fed label press", 16, "PROCESS SCHEMATIC / PARTNER PRODUCTION", "".join(body),
                    "A schematic side view of a roll-fed label press with unwind, print stations, die station, rewind and control panel. Not a photograph of a specific factory.")


def read_meta(path: Path) -> dict:
    """Read the three frontmatter fields this generator needs, without PyYAML."""
    raw = path.read_text()
    fm = raw.split("---", 2)[1]
    data = {}
    for line in fm.splitlines():
        if line.startswith("title:"):
            data["title"] = line.split(":", 1)[1].strip().strip('"').strip("'")
        elif line.startswith("category:"):
            data["category"] = line.split(":", 1)[1].strip().strip('"').strip("'")
    return data


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    products = [(p.stem, read_meta(p)) for p in sorted(PROD.glob("*.md"))]
    for i, (slug, data) in enumerate(products, 1):
        title = data.get("title", slug.replace("-", " ").title())
        cat = data.get("category", "labels")
        if cat == "labels":
            meta = "FORMAT: ROLL / SHEET   ·   MOQ: 50 UNITS   ·   MATERIAL: PAPER / PP / PET"
        elif cat == "stickers":
            meta = "FORMAT: DIE CUT / SHEET   ·   MOQ: 50 UNITS   ·   MATERIAL: VINYL / PAPER / CLEAR"
        else:
            meta = "FORMAT: CARD / EYELET   ·   MOQ: 50 UNITS   ·   MATERIAL: 350–400 GSM"
        desc = f"Industrial schematic of {title}. Not a photograph. Customer print work is not shown without written permission."
        svg = base_svg(title, i, meta, body_for(slug), desc)
        (OUT / f"{slug}.svg").write_text(svg)
        print("wrote", slug)
    (ROOT / "public" / "images" / "production").mkdir(parents=True, exist_ok=True)
    (ROOT / "public" / "images" / "production" / "roll-press-schematic.svg").write_text(press_svg())
    print("wrote press schematic")


if __name__ == "__main__":
    main()
