#!/usr/bin/env node
/**
 * Generate public/llms-full.txt from English executive prompt library (en.ts).
 * Run after library prompt edits: npm run generate:llms-full
 * Requires Node --experimental-strip-types (see package.json prebuild script).
 */
import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "public", "llms-full.txt");

const { enCopy } = await import("../src/content/locales/en.ts");

const lines = [
  "# PromptAnatomy Executive OS — full English prompt library",
  "",
  "CEO/COO decision operating kit: Global Context Block plus copy-ready executive prompts.",
  "Canonical site: https://promptanatomy.pro/",
  "Mother product: https://www.promptanatomy.app/",
  "",
  "Search-intent boundary: executive decision operations only. Framework basics and learning path: https://promptanatomy.cloud/",
  "",
];

for (const category of enCopy.library.categories) {
  lines.push(`## ${category.title}`, "");
  if (category.description) {
    lines.push(category.description, "");
  }
  for (const prompt of category.prompts) {
    lines.push(`### ${prompt.title}`, "");
    if (prompt.outcome) {
      lines.push(`Outcome: ${prompt.outcome}`, "");
    }
    lines.push(String(prompt.prompt).trim(), "", "---", "");
  }
}

const body = lines.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
writeFileSync(OUT, body, "utf8");
console.log(`[generate:llms-full] Wrote public/llms-full.txt (${enCopy.library.categories.length} categories)`);
