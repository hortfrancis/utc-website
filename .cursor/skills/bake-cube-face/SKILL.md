# Skill: Bake Cube Face

Use this skill when the user says anything like "bake [face]", "capture [face]", "snapshot [face]", or "freeze [face] as an image".

Baking a face replaces its live React layout (with blend modes, layers, etc.) with a single static PNG captured from Storybook. This eliminates GPU compositor issues caused by `mix-blend-mode` + `transform-style: preserve-3d` in the 3D cube.

---

## Prerequisites

- Storybook must be running on `localhost:6006`. Check the terminals folder first — if it's already running, proceed. If not, start it:
  ```
  npm run storybook
  ```
  Wait until the terminal shows "Storybook started" before continuing.

- `playwright` is installed as a dev dependency and Chromium is installed. If something fails with "browser not found", run:
  ```
  npx playwright install chromium
  ```

---

## Step 1 — Run the capture script

```bash
npx tsx scripts/capture-face.ts <face>
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

Replace the exported component function so it returns the baked image. Preserve the existing FaceGrid layout in a separate named constant so it can be restored and re-baked later.

**Before:**
```tsx
export function XR() {
  return (
    <FaceGrid>
      {/* ... complex layers, blend modes, etc. */}
    </FaceGrid>
  );
}
```

**After:**
```tsx
// Preserved source — restore this to FaceGrid return to redesign and re-bake
const XRDesign = () => (
  <FaceGrid>
    {/* ... complex layers, blend modes, etc. */}
  </FaceGrid>
);

export function XR() {
  return <img src="/faces/xr.jpg" alt="" className="w-full h-full object-cover block" />;
}
```

Apply this pattern for whichever face was baked. The naming convention for the preserved constant is `{FaceName}Design` (e.g. `WorkDesign`, `AIDesign`).

---

## Step 3 — Verify

Tell the user:
- The path of the saved JPEG (e.g. `public/faces/xr.jpg`)
- That the face component now renders the baked image
- How to re-bake: swap `XRDesign` back as the return value, edit the design in Storybook, then run the capture script again

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
5. The `<img>` tag stays the same — the PNG file is simply overwritten
