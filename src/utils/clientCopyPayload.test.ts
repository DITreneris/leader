import { describe, expect, it } from "vitest";
import { enCopy } from "../content/locales/en";
import { buildClientCopyPayload } from "./clientCopyPayload";

describe("buildClientCopyPayload", () => {
  it("returns a stable top-level shape for en locale", () => {
    const payload = buildClientCopyPayload(enCopy);
    expect(Object.keys(payload).sort()).toEqual(
      ["a11y", "demo", "library", "modules", "roiPath", "safety"].sort(),
    );
  });

  it("includes safety copy fields used by InteractiveCopy", () => {
    const { safety } = buildClientCopyPayload(enCopy);
    expect(safety).toMatchObject({
      prompt: enCopy.safety.prompt,
      copyPrompt: enCopy.safety.copyPrompt,
      copied: enCopy.safety.copied,
    });
  });

  it("includes roiPath fields for client scripts", () => {
    const { roiPath } = buildClientCopyPayload(enCopy);
    expect(roiPath.steps).toBe(enCopy.roiPath.steps);
    expect(roiPath.copyPrompt).toBe(enCopy.roiPath.copyPrompt);
    expect(roiPath.copied).toBe(enCopy.roiPath.copied);
    expect(roiPath.panelProgressTemplate).toBe(enCopy.roiPath.panelProgressTemplate);
    expect(roiPath.useStepCopy).toBe(enCopy.roiPath.useStepCopy);
  });

  it("passes through modules and demo for compiled prompts", () => {
    const { modules, demo } = buildClientCopyPayload(enCopy);
    expect(modules).toBe(enCopy.modules);
    expect(demo).toBe(enCopy.demo);
  });
});
