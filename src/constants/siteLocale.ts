/**
 * English-only landing — flat URLs at `/` (no `/en/` or `/lt/` prefix).
 * Copy lives in `en.ts`; `lt.ts` is frozen for parity tests only.
 */
export const DEFAULT_LANGUAGE = "en" as const;

/** Used by JSON-LD `inLanguage` on the mother WebSite node. */
export const SHIPPED_LOCALES = ["en"] as const;
