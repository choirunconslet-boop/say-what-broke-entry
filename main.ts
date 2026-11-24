// Say What Actually Broke — entry program.
//
// Writes one line of software error copy to /output/entry.txt:
// a single line, at most 200 characters, naming the real failure
// in plain words and making the reader laugh on the way.
// Pure Node.js standard library: no network, no reads outside the repo.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The database is fine. The password expired at 3 a.m. and told no one. Update it in the vault, not on a sticky note on the monitor.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
