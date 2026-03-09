/**
 * Captures the site favicon from the Storybook FaviconCapture story and writes
 * it to app/icon.png, which Next.js App Router automatically registers as the
 * browser favicon and touch icon.
 *
 * Usage:
 *   npx tsx scripts/capture-favicon.ts
 *
 * Requires Storybook to be running on localhost:6006 (`npm run storybook`).
 * Output: app/icon.png at 256×256px (128px container @2x retina), PNG.
 *
 * PNG is used (not JPEG) because the logomark has sharp geometric edges and
 * hard colour fills — lossless compression is both smaller and crisper here.
 *
 * Re-run this script whenever the logomark design changes.
 */

import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import path from 'path';

const STORYBOOK_URL = 'http://localhost:6006';
const STORY_ID = 'molecules-logo--favicon-capture';
const OUTPUT_PATH = path.join(process.cwd(), 'app', 'icon.png');

async function captureFavicon(): Promise<void> {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    // 2× device pixel ratio → 256×256px output from a 128×128 viewport
    deviceScaleFactor: 2,
    viewport: { width: 128, height: 128 },
  });
  const page = await context.newPage();

  const url = `${STORYBOOK_URL}/iframe.html?id=${STORY_ID}&viewMode=story`;
  console.log(`Navigating to: ${url}`);

  // 'networkidle' times out on Storybook due to persistent HMR websocket connections
  await page.goto(url, { waitUntil: 'load' });

  // Let CSS 3D transforms and fonts settle
  await page.waitForTimeout(800);

  const root = page.locator('#storybook-root > *').first();
  await root.waitFor({ state: 'visible' });

  const screenshot = await root.screenshot({ type: 'png' });
  writeFileSync(OUTPUT_PATH, screenshot);

  await browser.close();

  console.log(`Saved: ${OUTPUT_PATH}`);
}

captureFavicon().catch((err: unknown) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
