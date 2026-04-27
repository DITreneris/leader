#!/usr/bin/env bash
# Build PDF for CEO/COO Max Value Kit (same toolchain pattern as DITreneris/lead).
# Source:  docs/executive-operating-kit-pdf.md
# Output:  public/assets/downloads/executive-operating-kit.pdf
# Requires: pandoc; PDF engine: typst OR pdflatex/xelatex/lualatex on PATH.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
mkdir -p public/assets/downloads

if ! command -v pandoc >/dev/null 2>&1; then
  echo "pandoc not found" >&2
  exit 1
fi

OUT="$ROOT/public/assets/downloads/executive-operating-kit.pdf"
SRC="$ROOT/docs/executive-operating-kit-pdf.md"
COMMON=( "$SRC" -o "$OUT" --resource-path=".:docs" )

if command -v typst >/dev/null 2>&1; then
  pandoc "${COMMON[@]}" --pdf-engine=typst
else
  ENGINE=""
  for e in pdflatex xelatex lualatex; do
    if command -v "$e" >/dev/null 2>&1; then
      ENGINE="$e"
      break
    fi
  done
  if [ -z "$ENGINE" ]; then
    echo "No PDF engine found. Install typst or a LaTeX distribution with pdflatex on PATH." >&2
    echo "See docs/SETUP_PDF.md" >&2
    exit 1
  fi
  pandoc "${COMMON[@]}" --pdf-engine="$ENGINE" -V lang=en
fi
echo "OK: $OUT"
