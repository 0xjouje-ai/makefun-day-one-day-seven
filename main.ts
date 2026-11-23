// Entry program for the "Day one, day seven" make.fun bounty (Node 22,
// standard library only). It copies VIDEO.json — the TikTok address of the
// entry video — from the repository root to the grader's output directory.
// That is all the program has to do. The entry is the video itself: a short
// vertical clip about the same tiny agent-built game on the day it was made
// and a week later, ending with make.fun's referral end card carrying the
// entrant's referral code. The house reads the video's views and interactions
// from TikTok; nothing this program writes about the video is scored.
//
// VIDEO.json here still holds the placeholder address, so the gate refuses
// it as it stands. Replace it with the real TikTok address after the video
// is posted, before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
