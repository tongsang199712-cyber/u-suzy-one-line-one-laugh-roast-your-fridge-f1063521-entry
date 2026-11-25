// One Line, One Laugh: Roast Your Fridge
// Writes exactly one roast line (<= 200 chars, no trailing newline)
// to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke: the dead ice maker is a specific, mockable detail; the twist
// is that its nightly groaning is a ghost still clocking in for overtime
// at a job it already quit — haunted appliance, unpaid labour.
const line =
  "My fridge's ice maker died years ago, yet it still groans every night like a ghost doing overtime in a job it already quit.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
