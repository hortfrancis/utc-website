/**
 * Captures both favicon assets from Storybook and writes them to app/.
 * Next.js App Router registers these automatically — no metadata config needed.
 *
 * Usage:
 *   npx tsx scripts/capture-favicon.ts
 *
 * Requires Storybook to be running on localhost:6006 (`npm run storybook`).
 *
 * Outputs:
 *   app/icon.png       — 256×256px  (browser tab favicon, all modern browsers)
 *   app/apple-icon.png — 180×180px  (iOS "Add to Home Screen" touch icon)
 *
 * PNG is used (not JPEG): the logomark has sharp geometric edges and hard colour
 * fills — lossless compression is both smaller and crisper here than JPEG.
 *
 * Re-run whenever the logomark design changes.
 */

import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import path from 'path';

const STORYBOOK_URL = 'http://localhost:6006';

const TARGETS = [
  {
    label: 'icon (256×256)',
    storyId: 'molecules-logo--favicon-capture',
    viewport: { width: 128, height: 128 },
    outputPath: path.join(process.cwd(), 'app', 'icon.png'),
  },
  {
    label: 'apple-icon (180×180)',
    storyId: 'molecules-logo--apple-favicon-capture',
    viewport: { width: 90, height: 90 },
    outputPath: path.join(process.cwd(), 'app', 'apple-icon.png'),
  },
] as const;

async function captureTarget(target: typeof TARGETS[number]): Promise<void> {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    deviceScaleFactor: 2,
    viewport: target.viewport,
  });
  const page = await context.newPage();

  const url = `${STORYBOOK_URL}/iframe.html?id=${target.storyId}&viewMode=story`;
  console.log(`Capturing ${target.label}...`);

  // 'networkidle' times out on Storybook due to persistent HMR websocket connections
  await page.goto(url, { waitUntil: 'load' });

  // Let CSS 3D transforms and fonts settle
  await page.waitForTimeout(800);

  // Wait for the logomark to be visible
  const root = page.locator('#storybook-root > *').first();
  await root.waitFor({ state: 'visible' });

  // Screenshot the full page (not just the element) — the container is viewport-filling
  // so the page IS the icon. This avoids clipping from the CSS layout box, which the
  // 3D-transformed cube overflows visually.
  const screenshot = await page.screenshot({ type: 'png' });
  writeFileSync(target.outputPath, screenshot);

  await browser.close();

  console.log(`Saved: ${target.outputPath}`);
}

async function run(): Promise<void> {
  for (const target of TARGETS) {
    await captureTarget(target);
  }
}

run().catch((err: unknown) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
