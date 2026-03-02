# Spec: Agent Skills for Rapid Storybook Prototyping

**Status**: Ready for implementation
**Branch**: `feat/storybook-skills`
**Related**: `CLAUDE.md`, `.claude/commands/`

---

## Background

The team uses Storybook as a general UI prototyping engine. Multiple AI agents are in use
(Claude Code, Cursor, etc.) and the team is in crunch. Two agent "skills" (slash commands) will
remove the boilerplate friction of adding and editing stories — the agent handles numbering,
comment formatting, and file location so the user can focus purely on design intent.

---

## Scope

Skills are **general-purpose** — they work with any `.stories.tsx` file in the project. The
agent infers the correct file from user context (e.g., "add a story to the Collaborators face")
rather than relying on hardcoded file maps.

---

## Skills to Build

### Skill 1: `make-new-story`

**Claude Code invocation**: `/make-new-story` (followed by optional user context / description)
**Other agents**: "Follow the steps in `.claude/commands/make-new-story.md`"

#### Behaviour

1. **Find the target file** — from user context. If ambiguous, ask. Look for `.stories.tsx`
   files; the meta `title:` field tells you what each file covers.
2. **Determine the next story number** — run:
   ```bash
   grep -n "// ───" <file>
   ```
   Parse the highest `N` from `// ─── N ·` lines → new story is `N + 1`.
3. **Derive a label** — use the user's description or context as a readable title. If none
   given, use `Story N` as a placeholder.
4. **Append the story** after the last `};` in the file. Format:

   ```tsx

   /* ------------------------------------------------------------------ */
   /*  N · TITLE IN CAPS                                                  */
   /*  [One-line description, or "Placeholder — ready for editing"]       */
   /* ------------------------------------------------------------------ */

   // ─── N · Title ─────────────────────────────────────────────────────────────────
   export const StoryN: Story = {
     name: 'N – Title',
     render: () => (
       /* JSX body here */
     ),
   };
   ```

   - The identifier line (`// ─── N · Title ─────`) should be padded with `─` (U+2500) to
     reach approximately column 88.
   - `export const` name: `PascalCaseFromTitle` if a meaningful title exists, otherwise
     `Story_N` (e.g., `Story_8`).
   - `name` field: uses en-dash `–` (U+2013), not a regular hyphen.

5. **JSX body** — if the user provided a description of what to show, write real JSX using the
   project's existing primitives (see `CLAUDE.md`). Otherwise, scaffold a minimal stub:

   ```tsx
   <div className="w-full h-full bg-black flex items-center justify-center">
     {/* TODO: replace with content */}
   </div>
   ```

   For Cube face files (those that import `FaceGrid`), prefer:
   ```tsx
   <FaceGrid className="bg-theme-black!">
     <GridLines opacity={0.1} />
     {/* TODO: replace with content */}
   </FaceGrid>
   ```

6. **Add imports** if the JSX body uses components not yet imported at the top of the file.
7. **Verify** — run `npx tsc --noEmit` to confirm no TypeScript errors.

---

### Skill 2: `edit-story`

**Claude Code invocation**: `/edit-story` (followed by story number / description of changes)
**Other agents**: "Follow the steps in `.claude/commands/edit-story.md`"

#### Behaviour

1. **Find the target file and story number** — from user context. If ambiguous, ask.
2. **Locate the story** — run:
   ```bash
   grep -n "// ─── N ·" <file>
   ```
   The matching line is the start of the story. Read from there to the next `};` to extract
   the full story block.
3. **Apply changes** — edit the JSX inside `render: () => (…)` according to the user's
   description.
4. **Preserve** — do not change the identifier comment, `export const` name, or `name` field
   unless the user explicitly asks for a rename.
5. **Add / update imports** if new components are introduced.
6. **Verify** — run `npx tsc --noEmit`.

---

## Files to Create / Modify

| Action | File | Notes |
|---|---|---|
| **Create** | `.claude/commands/make-new-story.md` | Procedural instructions for the agent |
| **Create** | `.claude/commands/edit-story.md` | Procedural instructions for the agent |
| **Update** | `CLAUDE.md` | Add "Agent Skills" section |

---

## CLAUDE.md Addition

Add a section like:

```markdown
## Agent Skills

Two slash commands speed up Storybook prototyping:

| Command | What it does |
|---------|-------------|
| `/make-new-story` | Scaffold a new numbered story in any `.stories.tsx` file |
| `/edit-story` | Locate a specific story by number and edit it in-place |

**Claude Code**: invoke as `/make-new-story` or `/edit-story`.
**Cursor / Copilot / other agents**: read `.claude/commands/make-new-story.md` (or
`edit-story.md`) and follow its steps, or prefix your message with:
"Follow the steps in `.claude/commands/make-new-story.md` — [your description]."
```

---

## Implementation Steps

1. Create branch `feat/storybook-skills` from `main`
2. Create `.claude/commands/` directory
3. Write `make-new-story.md` — clear numbered steps, example output
4. Write `edit-story.md` — clear numbered steps, example output
5. Update `CLAUDE.md` with the "Agent Skills" section
6. **Test** each skill against `CubeFaceCollaboratorsExperiments.stories.tsx` (smallest file, 7
   stories — easiest to verify):
   - `/make-new-story` with a description → story 8 appears, TypeScript passes, Storybook shows it
   - `/edit-story 8 "change background to cyan"` → story 8 updates, TypeScript passes
7. Also test on a non-Cube file if one exists, to confirm general-purpose behaviour
8. Commit and open PR for review

---

## Verification Criteria

- `npx tsc --noEmit` passes after each test
- `grep -n "// ───" <file>` output is clean and sorted after each operation
- Storybook shows the new/edited story in the correct sidebar section with the correct numbered
  name (`N – Title`)
- Skills work on any `.stories.tsx` file, not just Cube face files
- Identifier comment rulers are consistently padded to ~col 88

---

## Notes

- Story numbers are **per-file**, not global
- The `// ─── N ·` identifier comments are the single source of truth for story numbering —
  always derive `N` from them rather than counting `export const` blocks (some files have
  helper exports that aren't stories)
- En-dash `–` (U+2013) in `name` fields, middle-dot `·` (U+00B7) in identifier comments,
  box-drawing dash `─` (U+2500) in identifier rulers — do not substitute regular ASCII
