/**
 * Structural parity guard while `lt.ts` is frozen: new keys in `en.ts` must exist in
 * `lt.ts` (English placeholders OK — no LT translation maintenance). LT prose is not
 * actively developed; see AGENTS.md and language-standard.mdc.
 */
import { describe, expect, it } from "vitest";
import { enCopy } from "./en";
import { ltCopy } from "./lt";

function leafKeyPaths(value: unknown, prefix = ""): string[] {
  if (value === null || typeof value !== "object") {
    return prefix ? [prefix] : [];
  }
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => leafKeyPaths(item, `${prefix}[${index}]`));
  }
  const entries = Object.entries(value as Record<string, unknown>);
  if (entries.length === 0) {
    return prefix ? [prefix] : [];
  }
  return entries.flatMap(([key, child]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (child !== null && typeof child === "object") {
      return leafKeyPaths(child, path);
    }
    return [path];
  });
}

describe("locale parity (en.ts / lt.ts)", () => {
  it("has identical leaf key paths in en and lt bundles", () => {
    const enPaths = leafKeyPaths(enCopy).sort();
    const ltPaths = leafKeyPaths(ltCopy).sort();
    expect(ltPaths).toEqual(enPaths);
  });

  it("keeps FAQ item count and shape aligned", () => {
    expect(ltCopy.faq.items.length).toBe(enCopy.faq.items.length);
    enCopy.faq.items.forEach((enItem, index) => {
      const ltItem = ltCopy.faq.items[index];
      expect(ltItem.q.length).toBeGreaterThan(0);
      expect(ltItem.a.length).toBeGreaterThan(0);
      const enHasBullets = Array.isArray(enItem.bullets);
      const ltHasBullets = Array.isArray(ltItem.bullets);
      expect(ltHasBullets).toBe(enHasBullets);
      if (enHasBullets && ltHasBullets) {
        expect(ltItem.bullets!.length).toBe(enItem.bullets!.length);
      }
    });
  });

  it("guards PromoBanner CTA label ladder (comprehension-first)", () => {
    expect(enCopy.promoBanner.primaryCta.toLowerCase()).not.toContain("promptanatomy");
    expect(enCopy.promoBanner.secondaryCta.toLowerCase()).toContain("promptanatomy");
    expect(ltCopy.promoBanner.primaryCta.toLowerCase()).not.toContain("promptanatomy");
    expect(ltCopy.promoBanner.secondaryCta.toLowerCase()).toContain("promptanatomy");
  });

  it("requires non-empty meta title and description in both locales", () => {
    for (const bundle of [enCopy, ltCopy] as const) {
      expect(bundle.meta.title.trim().length).toBeGreaterThan(0);
      expect(bundle.meta.description.trim().length).toBeGreaterThan(0);
    }
  });

  it("uses en.meta as single source for landing page SEO copy", () => {
    expect(enCopy.meta.title).toContain("Prompt Anatomy");
    expect(enCopy.meta.description).toMatch(/PromptAnatomy|executive|decision/i);
  });
});
