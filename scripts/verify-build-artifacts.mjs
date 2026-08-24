#!/usr/bin/env node

/**
 * Post-build deploy artifact checks. Requires dist/ from `npm run build`
 * with the same SITE_URL and BASE_PATH as production.
 * @see docs/COMMANDS.md
 */

import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { getAstroBase, getSiteOrigin, getSitemapIndexUrl } from "./lib/deploy-env.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");

const failures = [];

const MEME_STEMS = [
  "meme-03-clear-decision",
  "meme-01-ai-chaos",
  "meme-04-delegation-bottleneck",
  "reward_2",
];

const REQUIRED_DIST_FILES = [
  "assets/downloads/executive-operating-kit.pdf",
  "assets/downloads/executive-operating-kit.html",
  ...MEME_STEMS.flatMap((stem) => [
    `assets/memes/${stem}.png`,
    `assets/memes/${stem}.webp`,
    `assets/memes/${stem}.avif`,
  ]),
  "favicon.svg",
  "favicon-16x16.png",
  "favicon-32x32.png",
  "apple-touch-icon.png",
  "android-chrome-192x192.png",
  "android-chrome-512x512.png",
  "og-image.png",
  "site.webmanifest",
  "google7305663b2567346e.html",
];

function fail(message) {
  failures.push(message);
}

function readDist(relativePath) {
  const full = path.join(DIST, relativePath);
  if (!existsSync(full)) {
    fail(`Missing file: dist/${relativePath.replace(/\\/g, "/")}`);
    return null;
  }
  return readFileSync(full, "utf8");
}

function extractMetaContent(html, attr, value) {
  const re = new RegExp(
    `<meta[^>]+${attr}=["']${value}["'][^>]+content=["']([^"']+)["']|<meta[^>]+content=["']([^"']+)["'][^>]+${attr}=["']${value}["']`,
    "i",
  );
  const match = html.match(re);
  return match?.[1] ?? match?.[2] ?? null;
}

function extractMetaNameContent(html, name) {
  const re = new RegExp(
    `<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']+)["']|<meta[^>]+content=["']([^"']+)["'][^>]+name=["']${name}["']`,
    "i",
  );
  const match = html.match(re);
  return match?.[1] ?? match?.[2] ?? null;
}

function extractLinkHref(html, rel) {
  const re = new RegExp(
    `<link[^>]+rel=["']${rel}["'][^>]+href=["']([^"']+)["']|<link[^>]+href=["']([^"']+)["'][^>]+rel=["']${rel}["']`,
    "i",
  );
  const match = html.match(re);
  return match?.[1] ?? match?.[2] ?? null;
}

function countSitemapUrls(xml) {
  return (xml.match(/<url>/g) ?? []).length;
}

if (!existsSync(DIST)) {
  console.error("[verify:build] dist/ not found. Run `npm run build` first (with production SITE_URL + BASE_PATH).");
  process.exit(1);
}

const origin = getSiteOrigin();
const base = getAstroBase();
const expectedPageCanonical = `${origin}${base === "/" ? "" : base.replace(/\/$/, "")}/`.replace(/([^:]\/)\/+/g, "$1");
const expectedSitemapLine = `Sitemap: ${getSitemapIndexUrl()}`;

for (const relativePath of REQUIRED_DIST_FILES) {
  if (!existsSync(path.join(DIST, relativePath))) {
    fail(`Missing file: dist/${relativePath.replace(/\\/g, "/")}`);
  }
}

const googleVerify = readDist("google7305663b2567346e.html");
if (googleVerify !== null && !googleVerify.includes("google-site-verification: google7305663b2567346e.html")) {
  fail("dist/google7305663b2567346e.html must contain the Google Search Console verification token");
}

const ogImagePath = path.join(DIST, "og-image.png");
if (existsSync(ogImagePath)) {
  const meta = await sharp(ogImagePath).metadata();
  if (meta.width !== 1200 || meta.height !== 630) {
    fail(`dist/og-image.png must be 1200×630 (got ${meta.width ?? "?"}×${meta.height ?? "?"})`);
  }
}

const robots = readDist("robots.txt");
if (robots !== null) {
  if (!robots.includes(expectedSitemapLine)) {
    fail(`robots.txt must contain exactly:\n  ${expectedSitemapLine}`);
  }
}

const landingHtml = readDist("index.html");
if (landingHtml !== null) {
  const canonical = extractLinkHref(landingHtml, "canonical");
  if (!canonical?.startsWith("http")) {
    fail("dist/index.html: link[rel=canonical] must be an absolute URL");
  } else if (canonical !== expectedPageCanonical) {
    fail(`dist/index.html: canonical should be ${expectedPageCanonical} (got ${canonical})`);
  }

  const ogUrl = extractMetaContent(landingHtml, "property", "og:url");
  if (!ogUrl?.startsWith("http")) {
    fail("dist/index.html: og:url must be an absolute URL");
  } else if (ogUrl !== canonical) {
    fail(`dist/index.html: og:url must match canonical (got ${ogUrl})`);
  }

  const ogImage = extractMetaContent(landingHtml, "property", "og:image");
  if (!ogImage?.startsWith("http")) {
    fail("dist/index.html: og:image must be an absolute URL");
  }

  const kitDownload =
    landingHtml.match(/<a[^>]*data-kit-download[^>]*href="([^"]+)"/i) ??
    landingHtml.match(/<a[^>]*href="([^"]+)"[^>]*data-kit-download/i);
  if (!kitDownload) {
    fail("dist/index.html: data-kit-download link not found");
  } else if (!kitDownload[1].endsWith(".pdf")) {
    fail(`dist/index.html: data-kit-download href must end with .pdf (got ${kitDownload[1]})`);
  }

  const promoLabel = "Prove on a scenario before the full product.";
  const promoIndex = landingHtml.indexOf(promoLabel);
  if (promoIndex === -1) {
    fail("dist/index.html: PromoBanner aria-label copy not found (EN promo section missing?)");
  } else {
    const sliceEnd = landingHtml.indexOf("</section>", promoIndex);
    const promoSection = sliceEnd === -1 ? landingHtml.slice(promoIndex) : landingHtml.slice(promoIndex, sliceEnd);
    const goldMatch =
      promoSection.match(/<a[^>]*class="[^"]*cta-gradient[^"]*"[^>]*href="([^"]+)"/i) ??
      promoSection.match(/<a[^>]*href="([^"]+)"[^>]*class="[^"]*cta-gradient[^"]*"/i);
    if (!goldMatch) {
      fail("dist/index.html: PromoBanner gold cta-gradient link not found");
    } else if (goldMatch[1] !== "#demo") {
      fail(`dist/index.html: PromoBanner gold CTA must href="#demo" (got ${goldMatch[1]})`);
    }
    const paInPromo = promoSection.match(/href="(https:\/\/[^"]*promptanatomy\.app[^"]*)"/i);
    if (paInPromo) {
      fail("dist/index.html: PromoBanner must not include outbound PromptAnatomy.app (scale stays at #kit)");
    }
  }
}

const sitemap = readDist("sitemap-0.xml");
if (sitemap !== null) {
  const urlCount = countSitemapUrls(sitemap);
  if (urlCount !== 1) {
    fail(`dist/sitemap-0.xml: expected exactly 1 landing URL (got ${urlCount})`);
  }
  if (!sitemap.includes(`<loc>${expectedPageCanonical}</loc>`)) {
    fail(`dist/sitemap-0.xml: must include landing URL ${expectedPageCanonical}`);
  }
}

for (const stubPath of ["en/index.html", "lt/index.html"]) {
  const stubHtml = readDist(stubPath);
  if (stubHtml === null) continue;
  const robotsMeta = extractMetaNameContent(stubHtml, "robots");
  if (!robotsMeta?.includes("noindex")) {
    fail(`dist/${stubPath}: must include noindex robots meta`);
  }
  const stubCanonical = extractLinkHref(stubHtml, "canonical");
  if (stubCanonical !== expectedPageCanonical) {
    fail(`dist/${stubPath}: canonical must point to landing ${expectedPageCanonical} (got ${stubCanonical})`);
  }
}

if (!existsSync(path.join(DIST, "llms.txt"))) {
  fail("dist/llms.txt missing (public/llms.txt should copy at build)");
}

if (!existsSync(path.join(DIST, "llms-full.txt"))) {
  fail("dist/llms-full.txt missing (run npm run generate:llms-full and commit public/llms-full.txt)");
}

if (failures.length) {
  console.error("[verify:build] Failed checks:\n");
  for (const message of failures) {
    console.error(`  - ${message}`);
  }
  console.error(`\nEnv: SITE_URL=${process.env.SITE_URL ?? "(default)"} BASE_PATH=${process.env.BASE_PATH ?? "(default)"}`);
  console.error(`Expected landing canonical: ${expectedPageCanonical}`);
  process.exit(1);
}

console.log(
  "[verify:build] OK — robots.txt, meta, sitemap, legacy stubs, llms files, deploy assets, og-image dimensions, kit PDF link",
);
