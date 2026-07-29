#!/usr/bin/env python3
"""
Crop portraits and channel avatars out of the scraped brand images.

Two things worth pulling out of that pile:

  --avatars  The circular channel avatar in a YouTube channel-header
             screenshot. Detected with a Hough circle transform, since
             the avatar is reliably a large circle on the left of a wide,
             short image. Written as a square PNG, optionally masked to
             a transparent circle so it drops straight into a UI.

  --faces    Faces in thumbnails and photos, via OpenCV's Haar cascade.
             Crops with headroom so the result is a usable portrait
             rather than a tight box around the eyes.

Usage
-----
    python3 scripts/extract_portraits.py docs/brand/images -o public/people --avatars
    python3 scripts/extract_portraits.py docs/brand/images --faces --min-size 220
    python3 scripts/extract_portraits.py <dir> --avatars --no-mask --review

`--review` writes a contact sheet so you can eyeball every crop at once
instead of opening forty files.

Nothing here is clever about *who* is in a picture. It finds shapes.
Naming and, more importantly, permission to publish a person's face are
human decisions and stay that way.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

import cv2
import numpy as np

IMAGE_EXT = {".png", ".jpg", ".jpeg", ".webp"}


# ------------------------------------------------------------------ helpers


def imread(path: Path) -> np.ndarray | None:
    data = np.fromfile(str(path), dtype=np.uint8)
    if data.size == 0:
        return None
    return cv2.imdecode(data, cv2.IMREAD_COLOR)


def square_crop(img: np.ndarray, cx: int, cy: int, half: int) -> np.ndarray:
    """Square crop clamped to the image, padded if it runs off an edge."""
    h, w = img.shape[:2]
    x0, y0, x1, y1 = cx - half, cy - half, cx + half, cy + half
    pad_l, pad_t = max(0, -x0), max(0, -y0)
    pad_r, pad_b = max(0, x1 - w), max(0, y1 - h)
    x0, y0 = max(0, x0), max(0, y0)
    x1, y1 = min(w, x1), min(h, y1)
    out = img[y0:y1, x0:x1]
    if any((pad_l, pad_t, pad_r, pad_b)):
        out = cv2.copyMakeBorder(
            out, pad_t, pad_b, pad_l, pad_r, cv2.BORDER_REPLICATE
        )
    return out


def circular_mask(img: np.ndarray) -> np.ndarray:
    """Return BGRA with everything outside the inscribed circle transparent."""
    size = img.shape[0]
    mask = np.zeros((size, size), np.uint8)
    cv2.circle(mask, (size // 2, size // 2), size // 2, 255, -1)
    mask = cv2.GaussianBlur(mask, (0, 0), size * 0.004)  # soften the edge
    bgra = cv2.cvtColor(img, cv2.COLOR_BGR2BGRA)
    bgra[:, :, 3] = mask
    return bgra


# ---------------------------------------------------------------- detectors


def find_avatar(img: np.ndarray) -> tuple[int, int, int] | None:
    """Locate the channel avatar: a large circle in the left third."""
    h, w = img.shape[:2]
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    gray = cv2.medianBlur(gray, 5)

    # The avatar fills most of the header's height.
    r_min, r_max = int(h * 0.22), int(h * 0.52)
    if r_max <= r_min:
        return None

    circles = cv2.HoughCircles(
        gray,
        cv2.HOUGH_GRADIENT,
        dp=1.2,
        minDist=h,
        param1=110,
        param2=42,
        minRadius=r_min,
        maxRadius=r_max,
    )
    if circles is None:
        return None

    found = np.round(circles[0]).astype(int)
    # Prefer the largest circle that sits in the left third of the header.
    left = [c for c in found if c[0] < w * 0.4]
    pick = max(left or list(found), key=lambda c: c[2])
    return int(pick[0]), int(pick[1]), int(pick[2])


def find_faces(img: np.ndarray, min_size: int) -> list[tuple[int, int, int, int]]:
    cascade = cv2.CascadeClassifier(
        cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
    )
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    gray = cv2.equalizeHist(gray)
    faces = cascade.detectMultiScale(
        gray, scaleFactor=1.12, minNeighbors=6, minSize=(min_size, min_size)
    )
    return [tuple(map(int, f)) for f in faces]


# -------------------------------------------------------------------- sheet


def contact_sheet(crops: list[tuple[str, np.ndarray]], out: Path, cell: int = 200) -> None:
    if not crops:
        return
    cols = min(6, len(crops))
    rows = (len(crops) + cols - 1) // cols
    sheet = np.full((rows * (cell + 26) + 10, cols * (cell + 10) + 10, 3), 245, np.uint8)
    for i, (name, img) in enumerate(crops):
        r, c = divmod(i, cols)
        x, y = 10 + c * (cell + 10), 10 + r * (cell + 26)
        if img.shape[2] == 4:  # flatten alpha onto white for the sheet
            a = img[:, :, 3:4] / 255.0
            img = (img[:, :, :3] * a + 255 * (1 - a)).astype(np.uint8)
        sheet[y : y + cell, x : x + cell] = cv2.resize(img, (cell, cell))
        cv2.putText(
            sheet, name[:26], (x, y + cell + 17),
            cv2.FONT_HERSHEY_SIMPLEX, 0.42, (40, 40, 40), 1, cv2.LINE_AA,
        )
    cv2.imwrite(str(out), sheet)


# --------------------------------------------------------------------- main


def main() -> int:
    ap = argparse.ArgumentParser(
        description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter
    )
    ap.add_argument("source", help="file or directory of images")
    ap.add_argument("-o", "--out", default="public/people")
    ap.add_argument("--avatars", action="store_true", help="crop circular channel avatars")
    ap.add_argument("--faces", action="store_true", help="crop faces")
    ap.add_argument("--no-mask", action="store_true", help="keep avatars square, no alpha circle")
    ap.add_argument("--size", type=int, default=512, help="output edge in px")
    ap.add_argument("--min-size", type=int, default=180, help="smallest face to accept")
    ap.add_argument("--review", action="store_true", help="also write a contact sheet")
    args = ap.parse_args()

    if not (args.avatars or args.faces):
        ap.error("choose --avatars, --faces, or both")

    src = Path(args.source)
    paths = (
        [src]
        if src.is_file()
        else sorted(p for p in src.rglob("*") if p.suffix.lower() in IMAGE_EXT)
    )
    if not paths:
        print(f"No images under {src}", file=sys.stderr)
        return 1

    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    crops: list[tuple[str, np.ndarray]] = []
    n_av = n_fa = 0

    for path in paths:
        img = imread(path)
        if img is None:
            continue
        h, w = img.shape[:2]
        stem = path.stem

        # Channel headers are wide and short; only those get avatar detection.
        if args.avatars and w > h * 2.0:
            hit = find_avatar(img)
            if hit:
                cx, cy, r = hit
                crop = square_crop(img, cx, cy, int(r * 1.02))
                crop = cv2.resize(crop, (args.size, args.size), interpolation=cv2.INTER_AREA)
                if not args.no_mask:
                    crop = circular_mask(crop)
                name = f"avatar-{stem}.png"
                cv2.imwrite(str(out / name), crop)
                crops.append((name, crop))
                n_av += 1

        if args.faces:
            for i, (x, y, fw, fh) in enumerate(find_faces(img, args.min_size)):
                # Headroom: a portrait, not a box around the eyes.
                cx, cy = x + fw // 2, y + int(fh * 0.42)
                crop = square_crop(img, cx, cy, int(fw * 0.95))
                crop = cv2.resize(crop, (args.size, args.size), interpolation=cv2.INTER_AREA)
                name = f"face-{stem}-{i}.png"
                cv2.imwrite(str(out / name), crop)
                crops.append((name, crop))
                n_fa += 1

    print(f"Scanned {len(paths)} image(s) → {out}")
    if args.avatars:
        print(f"  avatars: {n_av}")
    if args.faces:
        print(f"  faces:   {n_fa}")

    if args.review and crops:
        sheet = out / "_contact-sheet.jpg"
        contact_sheet(crops, sheet)
        print(f"  review:  {sheet}")

    print(
        "\nThese are shape detections, not identifications. Name them yourself,\n"
        "and do not publish anyone's face without their permission."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
