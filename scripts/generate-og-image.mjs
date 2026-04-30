/**
 * Writes public/og-image.png (1200×630) for Open Graph / Twitter cards.
 * Matches og:image:width / og:image:height in src/layouts/Page.astro.
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("..", import.meta.url));
const outDir = path.join(root, "public");
const outFile = path.join(outDir, "og-image.png");

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0b1320"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <text x="600" y="270" text-anchor="middle" fill="#f8fafc" font-family="system-ui,Segoe UI,sans-serif" font-size="52" font-weight="600">Prompt Anatomy</text>
  <text x="600" y="340" text-anchor="middle" fill="#94a3b8" font-family="system-ui,Segoe UI,sans-serif" font-size="28">Executive OS</text>
  <text x="600" y="395" text-anchor="middle" fill="#64748b" font-family="system-ui,Segoe UI,sans-serif" font-size="22">CEO/COO operating kit</text>
</svg>`;

await mkdir(outDir, { recursive: true });
await sharp(Buffer.from(svg)).png().toFile(outFile);
console.log(`Wrote ${outFile}`);
