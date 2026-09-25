/**
 * Writes public/og-image.png (1200×630) for Open Graph / X / LinkedIn.
 * Matches og:image:width / og:image:height in src/layouts/Page.astro.
 *
 * Satori text frame (blog articleOgFrame grammar, no Satori package):
 * left-aligned brand row, category pill, short title, muted subtitle, gold verb, 5px bar.
 * Keep the verb above y≈520 so an X ~2∶1 crop still shows the action line.
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("..", import.meta.url));
const outDir = path.join(root, "public");
const outFile = path.join(outDir, "og-image.png");

const font = "ui-sans-serif,system-ui,Segoe UI,sans-serif";

/** Gold bolt from the blog favicon polygon, scale 1.25 → 40×40, viewBox 0 0 30 30. */
const boltPoints = "16.875,1.875 5.625,17.8125 13.125,17.8125 10.3125,28.125 24.375,12.1875 16.875,12.1875";

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1320"/>
      <stop offset="100%" stop-color="#103b5a"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <svg x="64" y="52" width="40" height="40" viewBox="0 0 30 30" aria-hidden="true">
    <polygon points="${boltPoints}" fill="#fbd304"/>
  </svg>
  <text x="120" y="80" fill="#9ca3af" font-family="${font}" font-size="20" font-weight="500">Prompt Anatomy</text>
  <rect x="64" y="188" width="176" height="40" rx="20" fill="none" stroke="#cfa73a" stroke-width="1"/>
  <text x="152" y="214" text-anchor="middle" fill="#cfa73a" font-family="${font}" font-size="18" font-weight="700" letter-spacing="0.04em">CEO / COO</text>
  <text x="64" y="300" fill="#f9fafb" font-family="${font}" font-size="64" font-weight="700" letter-spacing="-0.02em">One clear decision.</text>
  <text x="64" y="352" fill="#9ca3af" font-family="${font}" font-size="26" font-weight="500">Owner, risks, and a deadline.</text>
  <text x="64" y="412" fill="#e8b93c" font-family="${font}" font-size="28" font-weight="600">Run the 2-minute check.</text>
  <rect x="0" y="625" width="1200" height="5" fill="#cfa73a"/>
</svg>`;

await mkdir(outDir, { recursive: true });
await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9, effort: 10 })
  .toFile(outFile);
console.log(`Wrote ${outFile} (1200×630, Satori text frame)`);
