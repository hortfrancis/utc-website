/**
 * Captures a static JPEG snapshot of a cube face from Storybook.
 *
 * Usage:
 *   npx tsx scripts/capture-face.ts <face>
 *
 * Examples:
 *   npx tsx scripts/capture-face.ts xr
 *   npx tsx scripts/capture-face.ts work
 *
 * Requires Storybook to be running on localhost:6006 (`npm run storybook`).
 * Output is written to public/faces/<face>.jpg at 600×600px (300px @2x retina).
 *
 * For the favicon, use scripts/capture-favicon.ts instead.
 */

import { chromium } from 'playwright';
import { mkdirSync, writeFileSync } from 'fs';
import path from 'path';

const STORYBOOK_URL = process.env.STORYBOOK_URL ?? 'http://localhost:6006';
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'faces');

/** Map of face name → Storybook story ID */
const FACE_STORY_IDS: Record<string, string> = {
  xr:            'cube-faces--face-xr',
  work:          'cube-faces--face-work',
  ai:            'cube-faces--face-ai',
  collaborators: 'cube-faces--face-collaborators',
  showcase:      'cube-faces--face-showcase',
  hamster:       'cube-faces--face-hamster',
};

async function captureFace(faceName: string): Promise<void> {
  const storyId = FACE_STORY_IDS[faceName];
  if (!storyId) {
    const valid = Object.keys(FACE_STORY_IDS).join(', ');
    throw new Error(`Unknown face "${faceName}". Valid faces: ${valid}`);
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({
    // 2× device pixel ratio → 600×600px physical pixels from a 300×300 viewport
    deviceScaleFactor: 2,
    viewport: { width: 300, height: 300 },
  });
  const page = await context.newPage();

  const url = `${STORYBOOK_URL}/iframe.html?id=${storyId}&viewMode=story`;
  console.log(`Navigating to: ${url}`);

  // 'networkidle' times out on Storybook due to persistent HMR websocket connections
  await page.goto(url, { waitUntil: 'load' });

  // Let fonts, images, and any entrance transitions fully settle
  await page.waitForTimeout(800);

  const root = page.locator('#storybook-root > *').first();
  await root.waitFor({ state: 'visible' });

  // Playwright element.screenshot() supports 'png' and 'jpeg' only (no WebP).
  // JPEG at q90 gives ~70-84% size reduction vs PNG with no visible quality loss
  // for the solid-background face designs (none require transparency).
  const screenshot = await root.screenshot({ type: 'jpeg', quality: 90 });

  const outPath = path.join(OUTPUT_DIR, `${faceName}.jpg`);
  writeFileSync(outPath, screenshot);

  await browser.close();

  console.log(`Saved: ${outPath}`);
}

const faceName = process.argv[2];
if (!faceName) {
  console.error('Usage: npx tsx scripts/capture-face.ts <face>');
  console.error(`Valid faces: ${Object.keys(FACE_STORY_IDS).join(', ')}`);
  process.exit(1);
}

captureFace(faceName).catch((err: unknown) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
