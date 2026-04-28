/**
 * Generates AVIF + WebP next to each PNG under public/assets/memes/.
 * Run: npm run optimize:memes
 */
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const root = process.cwd();
const dir = path.join(root, "public", "assets", "memes");

const files = fs.readdirSync(dir).filter((f) => /\.png$/i.test(f) && !f.startsWith("."));

if (files.length === 0) {
  console.warn("No PNG files in", dir);
  process.exit(0);
}

for (const file of files) {
  const input = path.join(dir, file);
  const stem = file.replace(/\.png$/i, "");
  const avifOut = path.join(dir, `${stem}.avif`);
  const webpOut = path.join(dir, `${stem}.webp`);

  await sharp(input)
    .avif({ quality: 72, effort: 6 })
    .toFile(avifOut);

  await sharp(input)
    .webp({ quality: 85, effort: 6 })
    .toFile(webpOut);

  const pngSz = fs.statSync(input).size;
  const avifSz = fs.statSync(avifOut).size;
  const webpSz = fs.statSync(webpOut).size;
  console.log(`${stem}: PNG ${(pngSz / 1024).toFixed(0)} KB → AVIF ${(avifSz / 1024).toFixed(0)} KB, WebP ${(webpSz / 1024).toFixed(0)} KB`);
}

console.log(`Done: ${files.length} source image(s).`);
