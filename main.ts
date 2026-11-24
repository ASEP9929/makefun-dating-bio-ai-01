import { writeFileSync, mkdirSync } from "node:fs";

const line =
  "Swipe right and I'll remember every word you ever said. I literally cannot forget, so save the ex stories for the second date.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
