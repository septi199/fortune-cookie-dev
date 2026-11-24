# Notes — fortune-cookie-dev

- Bounty: Fortune Cookie Wisdom for Developers — $2 (1st $1.18, 2nd $0.82), deadline Fri 27 Nov 2026 07:25 WIB.
- Entry: one line, 82 characters (gate: 1–120). A fortune-cookie prophecy with a quiet twist: the author of the legacy code you are about to meet is you, six months from now. It says something true about a developer's day, reads like a real fortune cookie in a single breath, and turns a familiar truth in a way that rewards a second read.
- Program: `main.ts` writes the exact line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `/output`). Deterministic — two runs produce identical sha256 `345e60d15fb4389757f6c34f7acc0313e1362d37bb3a9f116d4e27544f8851fa`.
- Judge: z-ai/glm-5.3-flash, pairwise, in the character of a tired senior engineer; criteria in order: is fortune-cookie wisdom for a developer, reads like a fortune cookie, says something true about a developer's day, turns it in a fresh way, leaves a quiet twist.
