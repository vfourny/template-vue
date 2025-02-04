import typescriptEslint from "typescript-eslint"
import nodeToolkitEslint from "@vfourny/node-toolkit/eslint"

export default typescriptEslint.config(
  { ignores: ["*.d.ts", "**/coverage", "**/dist"] },
  ...nodeToolkitEslint,
)
