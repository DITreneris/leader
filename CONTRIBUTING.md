## Contributing

Thanks for improving the PromptAnatomy Executive OS (Leader) one-pager.

### Development setup

- Node.js: `>=22.12.0`

```bash
npm ci
npm run dev
```

### Versioning

The site displays **`vX.Y.Z`** from root **`package.json`** (see [`src/constants/appVersion.ts`](src/constants/appVersion.ts)). When you ship a meaningful change, bump semver there and refresh **`package-lock.json`** (`npm install`). Guidelines: [`docs/DOCUMENT_MANAGEMENT.md`](docs/DOCUMENT_MANAGEMENT.md) — **Versioning (semver)**.

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
- Output: `public/assets/downloads/executive-operating-kit.pdf` (browser save-as name from the kit CTA: `www.promptanatomy.app.pdf`)
- Print fallback HTML: `public/assets/downloads/executive-operating-kit.html` — keep in sync with kit content when you edit the Markdown

```bash
npm run build:pdf
```

If you change the PDF source, rebuild and commit the updated PDF in the same PR.

### Privacy and telemetry

User brief content and context fields are **not uploaded**—the page is static with client-side copy only. Anonymous **page-view** analytics via Vercel Analytics may run on the Vercel deploy (`promptanatomy.pro`). Do not change FAQ privacy answers to contradict this without a product decision. See [`docs/SOURCE_OF_TRUTH.md`](docs/SOURCE_OF_TRUTH.md) — **User data and telemetry**.

### Content and quality expectations

- **English-only development:** edit `src/content/locales/en.ts` for copy. Lithuanian (`lt.ts`) is frozen — do not update LT strings unless product explicitly unfreezes bilingual delivery (see root `README.md`).
- Pre-PR gate: [`docs/DEFINITION_OF_DONE.md`](docs/DEFINITION_OF_DONE.md)
- Documentation rules: `docs/DOCUMENT_MANAGEMENT.md`
- Quality checks: `docs/QUALITY_ASSURANCE.md`
- Architecture/flow overview: `docs/CODEBASE_OVERVIEW.md`

