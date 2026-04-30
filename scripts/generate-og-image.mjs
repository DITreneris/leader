/**
 * Writes public/og-image.png (1200×630) for Open Graph / X / LinkedIn.
 * Matches og:image:width / og:image:height in src/layouts/Page.astro.
 *
 * Design notes (social preview best practice):
 * - 1200×630 (1.91∶1) — universal OG; X crops ~2∶1 — keep copy in the center ~80% “safe zone”.
 * - Large, high-contrast type (readable when scaled down in feeds).
 * - Absolute URLs in HTML only here we bake brand colors from src/styles/global.css tokens.
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("..", import.meta.url));
const outDir = path.join(root, "public");
const outFile = path.join(outDir, "og-image.png");

/** Brand-aligned layout; keep primary copy inside ~x 120–1080, y 140–490 (safe zone). */
const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050816"/>
      <stop offset="45%" stop-color="#0b1320"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <radialGradient id="spot" cx="50%" cy="42%" r="65%">
      <stop offset="0%" stop-color="#1e3a5f" stop-opacity="0.45"/>
      <stop offset="55%" stop-color="#0b1320" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="goldBar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#cfa73a" stop-opacity="0"/>
      <stop offset="50%" stop-color="#e8b93c"/>
      <stop offset="100%" stop-color="#cfa73a" stop-opacity="0"/>
    </linearGradient>
    <filter id="titleShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#020617" flood-opacity="0.75"/>
    </filter>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#spot)"/>
  <!-- Inset frame — guides eye; stays inside crop-safe margins -->
  <rect x="72" y="56" width="1056" height="518" rx="24" ry="24" fill="none" stroke="#cfa73a" stroke-opacity="0.22" stroke-width="2"/>
  <!-- Bottom accent strip -->
  <rect x="0" y="602" width="1200" height="28" fill="url(#goldBar)" opacity="0.85"/>
  <!-- Headline block — centered, large type for small thumbnails -->
  <text x="600" y="258" text-anchor="middle" fill="#f8fafc" font-family="ui-sans-serif,system-ui,Segoe UI,sans-serif" font-size="68" font-weight="700" letter-spacing="-0.02em" filter="url(#titleShadow)">Prompt Anatomy</text>
  <rect x="420" y="278" width="360" height="5" rx="2" fill="#cfa73a" opacity="0.95"/>
  <text x="600" y="348" text-anchor="middle" fill="#e8b93c" font-family="ui-sans-serif,system-ui,Segoe UI,sans-serif" font-size="36" font-weight="600" letter-spacing="0.06em">EXECUTIVE OS</text>
  <text x="600" y="408" text-anchor="middle" fill="#cbd5e1" font-family="ui-sans-serif,system-ui,Segoe UI,sans-serif" font-size="26" font-weight="500">CEO/COO operating kit</text>
  <text x="600" y="458" text-anchor="middle" fill="#64748b" font-family="ui-sans-serif,system-ui,Segoe UI,sans-serif" font-size="21" font-weight="400">Static kit + demo · No login</text>
</svg>`;

await mkdir(outDir, { recursive: true });
await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9, effort: 10 })
  .toFile(outFile);
console.log(`Wrote ${outFile} (1200×630, OG best-practice layout)`);
