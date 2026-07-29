#!/usr/bin/env python3
"""
Scrape a public Google Doc into markdown + images, tab by tab.

Why this exists
---------------
The PDF export of this document lost things. Google Docs now supports
*tabs*, and a print/PDF export does not reliably carry every tab, nor
does it preserve which image sat next to which paragraph — `pdfimages`
gives you a pile of PNGs with no idea where they belonged.

The ZIP export does. `export?format=zip` returns HTML plus an images/
folder, so headings, list nesting, tables, links and image *position*
all survive. This script pulls that per tab and writes structured
markdown you can actually diff and search.

Usage
-----
    python3 scripts/scrape_gdoc.py <doc-url-or-id> [-o docs/brand]
    python3 scripts/scrape_gdoc.py <url> --tab t.a780sqdh2kjj
    python3 scripts/scrape_gdoc.py <url> --list-tabs

The document must be shared "anyone with the link can view". This does
not authenticate and deliberately does not try to: it only fetches what
is already public.
"""

from __future__ import annotations

import argparse
import io
import re
import sys
import zipfile
from pathlib import Path
from urllib.parse import urlparse, parse_qs

import requests
from bs4 import BeautifulSoup, NavigableString, Tag

EXPORT = "https://docs.google.com/document/d/{doc_id}/export"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36"


# ----------------------------------------------------------------- utils


def doc_id_from(value: str) -> str:
    """Accept a full URL or a bare document id."""
    m = re.search(r"/document/d/([a-zA-Z0-9_-]{20,})", value)
    if m:
        return m.group(1)
    if re.fullmatch(r"[a-zA-Z0-9_-]{20,}", value):
        return value
    raise SystemExit(f"Could not find a document id in: {value}")


def tab_from_url(value: str) -> str | None:
    q = parse_qs(urlparse(value).query)
    tab = q.get("tab", [None])[0]
    return tab


def fetch(session: requests.Session, doc_id: str, fmt: str, tab: str | None = None) -> bytes:
    params = {"format": fmt}
    if tab:
        params["tab"] = tab
    r = session.get(EXPORT.format(doc_id=doc_id), params=params, timeout=120, allow_redirects=True)
    if r.status_code == 404:
        raise SystemExit("404. The document is not public, or the id is wrong.")
    if "accounts.google.com" in r.url:
        raise SystemExit(
            "Google redirected to sign-in. Set the doc to "
            "'Anyone with the link can view' and try again."
        )
    r.raise_for_status()
    return r.content


def discover_tabs(session: requests.Session, doc_id: str) -> list[tuple[str, str]]:
    """Return [(tab_id, title)]. Falls back to a single unnamed tab."""
    r = session.get(
        f"https://docs.google.com/document/d/{doc_id}/edit", timeout=60, allow_redirects=True
    )
    if r.ok:
        # Tab ids appear as "t.<id>" in the bootstrap payload, paired with titles.
        pairs = re.findall(r'"(t\.[a-z0-9]{6,})"\s*,\s*"([^"]{1,120})"', r.text)
        seen, out = set(), []
        for tid, title in pairs:
            if tid in seen:
                continue
            seen.add(tid)
            out.append((tid, title.strip()))
        if out:
            return out
        ids = dict.fromkeys(re.findall(r'"(t\.[a-z0-9]{6,})"', r.text))
        if ids:
            return [(t, "") for t in ids]
    return [("", "")]


# ------------------------------------------------------------- conversion


def _text(node: Tag) -> str:
    """Inline text with emphasis and links preserved."""
    out: list[str] = []
    for child in node.children:
        if isinstance(child, NavigableString):
            out.append(str(child))
        elif child.name == "a" and child.get("href"):
            href = child["href"]
            # Google wraps external links in a redirector; unwrap it.
            m = re.search(r"[?&]q=([^&]+)", href)
            if m:
                from urllib.parse import unquote

                href = unquote(m.group(1))
            out.append(f"[{_text(child)}]({href})")
        elif child.name in ("b", "strong"):
            inner = _text(child).strip()
            out.append(f"**{inner}**" if inner else "")
        elif child.name in ("i", "em"):
            inner = _text(child).strip()
            out.append(f"*{inner}*" if inner else "")
        elif child.name == "br":
            out.append("\n")
        elif child.name == "img":
            out.append(f"\n\n![]({child.get('src','')})\n\n")
        elif isinstance(child, Tag):
            out.append(_text(child))
    s = "".join(out)
    s = s.replace(" ", " ").replace("​", "")
    return re.sub(r"[ \t]+", " ", s).strip()


def _list(node: Tag, depth: int = 0) -> list[str]:
    lines, ordered = [], node.name == "ol"
    for n, li in enumerate(node.find_all("li", recursive=False), 1):
        nested = [c for c in li.find_all(["ul", "ol"], recursive=False)]
        for c in nested:
            c.extract()
        bullet = f"{n}." if ordered else "-"
        body = _text(li)
        if body:
            lines.append(f"{'  ' * depth}{bullet} {body}")
        for c in nested:
            lines.extend(_list(c, depth + 1))
    return lines


def _table(node: Tag) -> list[str]:
    rows = []
    for tr in node.find_all("tr"):
        cells = [_text(td).replace("\n", " ") or " " for td in tr.find_all(["td", "th"])]
        if cells:
            rows.append(cells)
    if not rows:
        return []
    width = max(len(r) for r in rows)
    rows = [r + [" "] * (width - len(r)) for r in rows]
    out = ["| " + " | ".join(rows[0]) + " |", "|" + "---|" * width]
    out += ["| " + " | ".join(r) + " |" for r in rows[1:]]
    return out


def html_to_markdown(html: str, image_map: dict[str, str]) -> str:
    soup = BeautifulSoup(html, "lxml")
    body = soup.body or soup

    # Point images at the files we extracted from the same zip.
    for img in body.find_all("img"):
        src = img.get("src", "")
        img["src"] = image_map.get(Path(src).name, src)

    out: list[str] = []
    for el in body.find_all(
        ["h1", "h2", "h3", "h4", "h5", "h6", "p", "ul", "ol", "table", "hr"], recursive=True
    ):
        if el.find_parent(["li", "table"]) and el.name not in ("table",):
            continue
        if el.name == "hr":
            out.append("\n---\n")
        elif el.name.startswith("h") and el.name[1:].isdigit():
            t = _text(el)
            if t:
                out.append(f"\n{'#' * int(el.name[1])} {t}\n")
        elif el.name == "p":
            t = _text(el)
            if t:
                out.append(t + "\n")
        elif el.name in ("ul", "ol"):
            if el.find_parent(["ul", "ol"]):
                continue
            out.extend(_list(el))
            out.append("")
        elif el.name == "table":
            out.extend(_table(el))
            out.append("")

    md = "\n".join(out)
    md = re.sub(r"\n{3,}", "\n\n", md)
    return md.strip() + "\n"


# ------------------------------------------------------------------- main


def first_heading(md: str) -> str:
    """Google does not expose tab titles without auth, so fall back to the
    document's own first heading. Far more useful than a raw tab id."""
    for line in md.splitlines():
        if line.startswith("#"):
            t = line.lstrip("#").strip()
            if t:
                return t
    for line in md.splitlines():
        if line.strip():
            return line.strip()[:60]
    return ""


def scrape_tab(
    session: requests.Session, doc_id: str, tab: str, title: str, outdir: Path, index: int
) -> tuple[Path, int]:
    blob = fetch(session, doc_id, "zip", tab or None)

    # Extract to a staging dir first: the final name depends on content.
    staging = outdir / "images" / f".staging-{index:02d}"
    staging.mkdir(parents=True, exist_ok=True)

    html, files = None, []
    with zipfile.ZipFile(io.BytesIO(blob)) as z:
        for name in z.namelist():
            if name.lower().endswith((".html", ".htm")) and html is None:
                html = z.read(name).decode("utf-8", "replace")
            elif re.search(r"\.(png|jpe?g|gif|webp|svg)$", name, re.I):
                dest = staging / Path(name).name
                dest.write_bytes(z.read(name))
                files.append(dest.name)

    if html is None:
        raise SystemExit(f"No HTML found in the export for tab {tab or '(default)'}")

    provisional = html_to_markdown(html, {f: f for f in files})
    label = title or first_heading(provisional)
    slug = re.sub(r"[^a-z0-9]+", "-", label.lower()).strip("-") or (tab or "tab")
    stem = f"{index:02d}-{slug}"[:70]

    img_dir = outdir / "images" / stem
    if img_dir.exists():
        for old in img_dir.iterdir():
            old.unlink()
        img_dir.rmdir()
    if files:
        staging.rename(img_dir)
    else:
        staging.rmdir()

    image_map = {f: f"images/{stem}/{f}" for f in files}
    md = html_to_markdown(html, image_map)
    header = (
        f"> Source tab `{tab or 'default'}` · {len(files)} image(s) · "
        f"{len(md.split()):,} words\n\n"
    )
    path = outdir / f"{stem}.md"
    path.write_text(header + md, encoding="utf-8")
    return path, len(files)


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("url", help="Google Doc URL or bare document id")
    ap.add_argument("-o", "--out", default="docs/brand", help="output directory")
    ap.add_argument("--tab", action="append", help="only this tab id (repeatable)")
    ap.add_argument("--list-tabs", action="store_true", help="list tabs and exit")
    args = ap.parse_args()

    doc_id = doc_id_from(args.url)
    outdir = Path(args.out)
    outdir.mkdir(parents=True, exist_ok=True)

    session = requests.Session()
    session.headers["User-Agent"] = UA

    tabs = discover_tabs(session, doc_id)
    url_tab = tab_from_url(args.url)
    if args.tab:
        wanted = set(args.tab)
        tabs = [t for t in tabs if t[0] in wanted] or [(t, "") for t in args.tab]
    elif url_tab:
        match = [t for t in tabs if t[0] == url_tab]
        tabs = match or [(url_tab, "")]

    if args.list_tabs:
        print(f"{len(tabs)} tab(s) in {doc_id}:")
        for tid, title in tabs:
            print(f"  {tid or '(default)':<24} {title}")
        return 0

    print(f"Scraping {len(tabs)} tab(s) from {doc_id}")
    written = []
    for i, (tid, title) in enumerate(tabs, 1):
        try:
            path, n_img = scrape_tab(session, doc_id, tid, title, outdir, i)
        except SystemExit:
            raise
        except Exception as exc:  # keep going; one bad tab shouldn't kill the run
            print(f"  ! {tid or '(default)'}: {exc}", file=sys.stderr)
            continue
        words = len(path.read_text(encoding="utf-8").split())
        if words < 5 and n_img == 0:
            path.unlink()  # empty tab, nothing to keep
            print(f"  · {tid} is empty, skipped")
            continue
        print(f"  OK {path.name}  ({words:,} words, {n_img} image(s))")
        written.append(path)

    if not written:
        print("Nothing written.", file=sys.stderr)
        return 1

    index = outdir / "README.md"
    index.write_text(
        "# Scraped source\n\n"
        f"Document: `{doc_id}`\n\n"
        + "\n".join(f"- [{p.stem}]({p.name})" for p in sorted(written))
        + "\n",
        encoding="utf-8",
    )
    print(f"\nIndex: {index}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
