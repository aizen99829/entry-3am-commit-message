import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "3am: pushed to prod half-asleep, prod is down, it was me, I did this, reverting now — do not touch anything, I am so sorry";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
