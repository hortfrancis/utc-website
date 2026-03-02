# Agent Instructions — UTC Website 2025

This file is read by AI coding agents (Claude Code, Cursor, GitHub Copilot, etc.)
at the start of every session. It describes the conventions for this codebase.
**All agents should follow these rules regardless of what session they're in.**

---

## Storybook Experiment Files

Stories for Cube face experiments live in:

```
components/Cube/Faces/experiments/
  CubeFaceXRExperiments.stories.tsx         ← formerly CubeFaceExperiments
  CubeFaceWorkExperiments.stories.tsx
  CubeFaceCollaboratorsExperiments.stories.tsx
  CubeFaceSystemExperiments.stories.tsx     → renamed to "Cube Face Primitives"
```

### Story naming

Every story **must** have a numbered `name` in the format `'N – Short Title'`:

```ts
export const MyStory: Story = {
  name: '7 – Portraits + Icon Quad',
  ...
};
```

Numbers make it easy to reference stories by number in conversation
("can you update story 7") and keep Storybook's sidebar sorted.

### Story identifier comments

Every story export must be preceded by a single-line identifier comment:

```ts
// ─── 7 · Portraits + Icon Quad ──────────────────────────────────────────────
export const PortraitsIconQuad: Story = {
```

This makes stories easy to find with `Cmd+F`, `grep`, or the editor outline.
Use `─` (U+2500) and `·` (U+00B7) to match the existing style.

### Layout model — use Cell + primitives, not absolute divs

All Cube face stories must use the `<Cell>` + primitives pattern.
Do **not** wrap FaceGrid children in raw `absolute inset-0` divs or bare grid wrappers —
this breaks `overflow-hidden` clipping and `cqi` unit resolution.

```tsx
// ✅ correct
<FaceGrid>
  <Cell col={1} row={1} colSpan={6} rowSpan={3}>
    <ImageBlock src="..." alt="..." mask="fade-down" />
  </Cell>
  <Cell col={1} row={5} colSpan={3} zIndex={1}>
    <TextBlock fontSize={22}>XR</TextBlock>
  </Cell>
  <StripeBars />
</FaceGrid>

// ❌ wrong — breaks clipping and cqi units
<FaceGrid>
  <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
    ...
  </div>
</FaceGrid>
```

See `CubeFaceSystemExperiments.stories.tsx` (title: "Cube Face Primitives")
for working examples of every primitive.

### Available primitives

| Import | Purpose |
|--------|---------|
| `Cell` | Grid placement — `col`, `row`, `colSpan`, `rowSpan`, `zIndex` |
| `GridLines` | Decorative 6×6 border overlay |
| `ColorBlock` | Solid colour fill |
| `GradientBlock` | Linear gradient — takes `stops` array, not `fromColor`/`toColor` |
| `ImageBlock` | Image with optional `mask` fade direction |
| `TextBlock` | CQI-scaled text — uses `fontSize` (not `size`), children not `text` prop |
| `IconQuad` | 4 icons — `icons={{ tl, tr, bl, br }}` object, not an array |
| `IconSingle` | Single centred icon — `name`, `color`, `weight`, `iconSize` |
| `StripeBars` | Thin horizontal colour bars at row boundaries — must be a direct `FaceGrid` child |

### Icon names

Only use icons registered in `components/Icon/Icon.tsx`. Key ones:
`users`, `hand-waving`, `chat`, `share`, `globe`, `cube`, `atom`,
`lightning`, `sparkle`, `rocket`, `brain`, `broadcast`, `blueprint`,
`hard-hat`, `crane`, `virtual-reality`, `google-cardboard`, `cube-focus`.

Do **not** invent icon names like `users-three`, `handshake`, `network` —
they will cause runtime errors.

### Storybook section titles

| File | Storybook title |
|------|----------------|
| `CubeFaceExperiments.stories.tsx` | `Experiments/Cube Face XR` |
| `CubeFaceWorkExperiments.stories.tsx` | `Experiments/Cube Face Work` |
| `CubeFaceCollaboratorsExperiments.stories.tsx` | `Experiments/Cube Face Collaborators` |
| `CubeFaceSystemExperiments.stories.tsx` | `Experiments/Cube Face Primitives` |

---

## General conventions

- **TypeScript** throughout — no `any`, no implicit types on component props.
- **Tailwind** for styling — use theme tokens (`bg-theme-cyan`, `text-theme-white`, etc.), not raw hex values.
- **CQI units** for all sizing inside `FaceGrid` — `1cqi` = 1% of face width. Do not use `px`, `rem`, or `%` for element sizing inside faces.
- **No new files unless necessary** — prefer editing existing files.
- **No documentation files** unless explicitly requested.
