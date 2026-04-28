import { enCopy } from "../content/locales/en";
import { ltCopy } from "../content/locales/lt";

/**
 * Minimal copy tree for client-side clipboard UX (`InteractiveCopy.astro`).
 * Keeps HTML payload smaller than serializing the full locale bundle.
 */
type LocaleBundle = typeof enCopy | typeof ltCopy;

export function buildClientCopyPayload(copy: LocaleBundle) {
  return {
    a11y: copy.a11y,
    demo: copy.demo,
    quickPractice: {
      prompt: copy.quickPractice.prompt,
      copyPrompt: copy.quickPractice.copyPrompt,
      copied: copy.quickPractice.copied,
    },
    safety: {
      prompt: copy.safety.prompt,
      copyPrompt: copy.safety.copyPrompt,
      copied: copy.safety.copied,
    },
    roiPath: {
      steps: copy.roiPath.steps,
      copyPrompt: copy.roiPath.copyPrompt,
      copied: copy.roiPath.copied,
    },
    library: copy.library,
  };
}
