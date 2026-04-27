## Contributing

Thanks for improving the PromptAnatomy Executive OS (Leader) one-pager.

### Development setup

- Node.js: `>=22.12.0`

```bash
npm ci
npm run dev
```

### Build and preview

```bash
npm run build
npm run preview
```

### GitHub Pages environment

Builds expect these environment variables:

```bash
BASE_PATH=/leader
SITE_URL=https://ditreneris.github.io
```

### Max Value Kit PDF (optional)

The PDF is a **checked-in artifact** so GitHub Pages can serve it without requiring Pandoc in CI.

- Setup and prerequisites: `docs/SETUP_PDF.md`
- Source: `docs/executive-operating-kit-pdf.md`
- Output: `public/assets/downloads/executive-operating-kit.pdf`

```bash
npm run build:pdf
```

If you change the PDF source, rebuild and commit the updated PDF in the same PR.

### Content and quality expectations

- Documentation rules: `docs/DOCUMENT_MANAGEMENT.md`
- Quality checks: `docs/QUALITY_ASSURANCE.md`
- Architecture/flow overview: `docs/CODEBASE_OVERVIEW.md`

