import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

if (process.platform === "win32") {
  const ps1 = path.join(root, "scripts", "build-executive-kit-pdf.ps1");
  execSync(
    `powershell -NoProfile -ExecutionPolicy Bypass -File "${ps1}"`,
    { stdio: "inherit", cwd: root, shell: true },
  );
} else {
  const sh = path.join(root, "scripts", "build-executive-kit-pdf.sh");
  execSync(`bash "${sh}"`, { stdio: "inherit", cwd: root });
}
