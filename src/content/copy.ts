import { enCopy } from "./locales/en";
import { ltCopy } from "./locales/lt";

export const supportedLanguages = ["en", "lt"] as const;

export type Language = (typeof supportedLanguages)[number];

export const uiCopy = {
  en: enCopy,
  lt: ltCopy,
} as const;
