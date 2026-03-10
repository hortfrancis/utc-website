# Skill: Bake Cube Face

Use this skill when the user says anything like "bake [face]", "capture [face]", "snapshot [face]", or "freeze [face] as an image".

Baking a face replaces its live React layout (with blend modes, layers, etc.) with a single static JPEG captured from Storybook. This eliminates GPU compositor issues caused by `mix-blend-mode` + `transform-style: preserve-3d` in the 3D cube.

---

## Prerequisites

**Always start a dedicated Storybook instance for capture on port 6016.** Do not use or kill whatever the user already has running on 6006 — that's their live dev session. Starting on a fixed separate port avoids clashes and port-increment surprises.

```bash
npm run storybook -- --port 6016 --ci
```

Wait until the terminal shows "Storybook ready!" before continuing. The `--ci` flag suppresses the browser auto-open.

- `playwright` is installed as a dev dependency and Chromium is installed. If something fails with "browser not found", run:
  ```
  npx playwright install chromium
  ```
  If the script aborts with no clear error (common on WSL2/Linux), missing system dependencies are likely the cause. Run:
  ```
  npx playwright install-deps chromium
  ```

---

## Step 0 — Promote the design to the face component

The capture script screenshots whatever the face component **currently renders** in Storybook. Before running it, the face component must be showing the final design — not a placeholder or a previously baked image.

Open the face component (see table in Step 2) and make sure its default export renders the live FaceGrid design. If it currently returns a baked `<img>`, swap it back to the design first.

If the final design lives in an experiments story, copy the render function's JSX into the face component as a named const (e.g. `ShowcaseDesign`), and return `<ShowcaseDesign />` from the default export. **Do this before running the capture script.**

---

## Step 1 — Run the capture script

Pass the dedicated port via the `STORYBOOK_URL` env var:

```bash
STORYBOOK_URL=http://localhost:6016 npx tsx scripts/capture-face.ts <face>
```

Valid face names: `xr`, `work`, `ai`, `collaborators`, `showcase`, `hamster`

Example:
```bash
npx tsx scripts/capture-face.ts xr
```

The script will:
- Open a headless Chromium browser at `deviceScaleFactor: 2`
- Navigate to the canonical Storybook story for that face (`Cube/Faces`)
- Wait for load + 800ms for fonts and transitions to settle
- Screenshot the face element at 300×300px → saves as 600×600px JPEG q90 (retina-ready)
- Write to `public/faces/<face>.jpg`

Confirm the file exists before proceeding:
```bash
ls -lh public/faces/<face>.jpg
```

---

## Step 2 — Update the face component

Open the face component file:

| Face | File |
|------|------|
| `xr` | `components/Cube/Faces/XR.tsx` |
| `work` | `components/Cube/Faces/Work.tsx` |
| `ai` | `components/Cube/Faces/AI.tsx` |
| `collaborators` | `components/Cube/Faces/Collaborators.tsx` |
| `showcase` | `components/Cube/Faces/Showcase.tsx` |
| `hamster` | `components/Cube/Faces/Hamster.tsx` |

The design should already be in a named const from Step 0. Now swap the default export to serve the baked image:

**Before (after Step 0):**
```tsx
const ShowcaseDesign = () => (
  <FaceGrid>
    {/* ... */}
  </FaceGrid>
);

export default function Showcase() {
  return <ShowcaseDesign />;
}
```

**After:**
```tsx
const ShowcaseDesign = () => (
  <FaceGrid>
    {/* ... */}
  </FaceGrid>
);

export default function Showcase() {
  return <img src="/faces/showcase.jpg" alt="" className="w-full h-full object-cover block" />;
}
```

The naming convention for the preserved const is `{FaceName}Design` (e.g. `WorkDesign`, `AIDesign`, `ShowcaseDesign`).

---

## Step 3 — Verify

Tell the user:
- The path of the saved JPEG (e.g. `public/faces/showcase.jpg`)
- That the face component now renders the baked image
- How to re-bake: swap `ShowcaseDesign` back as the return value, edit the design in Storybook, then run the capture script again

---

## Favicon

The favicon is captured separately — it is not a cube face.

```bash
npx tsx scripts/capture-favicon.ts
```

Captures both in one run:
- `app/icon.png` — 256×256 RGBA PNG — browser tab favicon (all modern browsers)
- `app/apple-icon.png` — 180×180 RGBA PNG — iOS "Add to Home Screen" touch icon

Both are transparent-background PNGs. Next.js App Router registers them automatically — no metadata config needed. Re-run whenever the logomark changes.

Source stories: `FaviconCapture` and `AppleFaviconCapture` in `Logo.stories.tsx`.

**Transparency note:** The script uses `page.screenshot({ omitBackground: true })` but must also manually clear three background layers via JS before it works — see `scripts/capture-favicon.ts` comments and the `handover.mdc` gotchas for detail.

---

## Re-baking workflow (for reference)

If the user wants to update a baked face:
1. In the face component, swap the baked `<img>` back to `<{FaceName}Design />` (or restore the FaceGrid JSX directly)
2. Edit the design in Storybook experiments as normal
3. Promote the final design to the face component's `{FaceName}Design` const
4. Run `npx tsx scripts/capture-face.ts <face>` again
5. The `<img>` tag stays the same — the JPEG file is simply overwritten
