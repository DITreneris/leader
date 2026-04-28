import { SHIPPED_LOCALES } from "../constants/siteLocale";
import { enCopy } from "./locales/en";
import { ltCopy } from "./locales/lt";

/** Must match `src/constants/siteLocale.ts` `SHIPPED_LOCALES`. */
export const supportedLanguages = SHIPPED_LOCALES;

export type Language = (typeof supportedLanguages)[number];

/** `lt` retained for bilingual restores — only shipped when `/lt/` is emitted. */
export const uiCopy = {
  en: enCopy,
  lt: ltCopy,
} as const;
