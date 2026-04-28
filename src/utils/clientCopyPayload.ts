import { enCopy } from "../content/locales/en";
import { ltCopy } from "../content/locales/lt";

/**
 * Copy subtrees serialized to `window.__PA_COPY__` for client-side clipboard UX
 * (`InteractiveCopy.astro`). Smaller than the full locale bundle; includes
 * `modules` for compiled preset/custom prompts. (Removed `quickPractice`; that
 * slide is not shipped—see git history if needed.)
 */
type LocaleBundle = typeof enCopy | typeof ltCopy;

export function buildClientCopyPayload(copy: LocaleBundle) {
  return {
    a11y: copy.a11y,
    demo: copy.demo,
    modules: copy.modules,
    safety: {
      prompt: copy.safety.prompt,
      copyPrompt: copy.safety.copyPrompt,
      copied: copy.safety.copied,
    },
    roiPath: {
      steps: copy.roiPath.steps,
      copyPrompt: copy.roiPath.copyPrompt,
      copied: copy.roiPath.copied,
      panelProgressTemplate: copy.roiPath.panelProgressTemplate,
      useStepCopy: copy.roiPath.useStepCopy,
    },
    library: copy.library,
  };
}
