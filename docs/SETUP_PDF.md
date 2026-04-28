# PDF build — Max Value Kit

Same principles as the sister [lead](https://github.com/DITreneris/lead) repository ([SETUP there](https://github.com/DITreneris/lead/blob/main/SETUP.md)): **Markdown is the source of truth**; the committed `public/assets/downloads/executive-operating-kit.pdf` is the artifact users download.

**URLs vs save-as name:** The file on the server stays `executive-operating-kit.pdf` (stable links in README, `llms.txt`, GitHub Pages). The landing CTA uses the `download` attribute so browsers suggest **`PromptAnatomy-Max-Value-Kit.pdf`** when saving.

| Item | Path |
|------|------|
| Source (edit this) | `docs/executive-operating-kit-pdf.md` |
| Output (commit after rebuild) | `public/assets/downloads/executive-operating-kit.pdf` |
| Print fallback (browser) | `public/assets/downloads/executive-operating-kit.html` |

## Prerequisites

1. **Pandoc** — [installing Pandoc](https://pandoc.org/installing.html) or `winget install JohnMacFarlane.Pandoc` on Windows.
2. A **PDF engine** (in order, matching `lead`):
   - **Typst** — `winget install Typst.Typst` (Pandoc uses `--pdf-engine=typst`), or
   - **LaTeX** — `pdflatex`, `xelatex`, or `lualatex` on PATH (MiKTeX / TeX Live).

## Commands

**Windows (PowerShell):**

```powershell
.\scripts\build-executive-kit-pdf.ps1
```

**Linux / macOS:**

```bash
chmod +x scripts/build-executive-kit-pdf.sh
./scripts/build-executive-kit-pdf.sh
```

**npm:**

```bash
npm run build:pdf
```

After changing `docs/executive-operating-kit-pdf.md`, rebuild the PDF and **commit the updated `.pdf`** in the same change (or PR), as in `lead`. Open the PDF once and confirm internal links to `https://www.promptanatomy.app/` work (Pandoc + Typst should preserve them).

## CI

`npm run build` (Astro) does **not** require Pandoc; the PDF is a checked-in static asset. If the PDF is missing, download links 404 — keep `executive-operating-kit.pdf` in the repo for deploys.
