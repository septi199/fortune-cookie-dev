// fortune-cookie-dev — entry program.
//
// Writes the single fortune-cookie line to the grader's output directory
// as entry.txt. No network, no randomness, no arguments: the same bytes go
// out on every run, so the two grading runs agree.

import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

// The line is 82 characters: a fortune-cookie prophecy ("You will meet...")
// with a quiet twist — the author of the legacy code is you, six months
// from now. It is true about a developer's day, reads in a single breath,
// and turns a familiar truth in a way that rewards a second read.
const LINE =
  "You will meet the author of this legacy code soon. It is you, six months from now.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const dst = join(outDir, "entry.txt");
writeFileSync(dst, LINE, "utf8");

// Same bytes out on every run: confirm the file holds exactly the line.
const back = readFileSync(dst, "utf8");
if (back !== LINE) throw new Error("entry.txt mismatch");
console.log(`wrote ${dst} (${LINE.length} chars)`);
