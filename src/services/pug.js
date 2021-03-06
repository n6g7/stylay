import pug from "pug"

import { writeFile } from "./fs"

export function compileFile(sourcePath, destPath) {
  if (sourcePath === undefined) return Promise.reject("No file provided")

  return writeFile(destPath, pug.renderFile(sourcePath))
}
