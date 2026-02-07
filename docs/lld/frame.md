# Frame

> Quick reference: see `.cursor/rules/design-system.mdc` (Atoms section, Composition Patterns).

## Overview

**Frame** is a composable UI primitive: a partial border with configurable sides and rounded corners. It is used for the logo lockup (Default) and can wrap any block that should read as a distinct chunk without a full closed box.

---

## Semantic use

- **Open frame (missing one or more sides)**  
  Suggests “entry point”, “panel edge”, or “badge” — the content isn’t fully boxed in. In a grid or layout, a block open on one side often sits at the edge; the open side reads as “this belongs to a larger system”.

- **One rounded corner (e.g. bottom-right)**  
  Reads as stamp or badge cut — craft, tangibility, something “punched” or “cut”. Fits the bold/acid aesthetic and gives a clear silhouette.

- **Three sides + one curve (logo lockup)**  
  Combines “open at top” (invitation, emergence) with “stamp” (one soft corner). The logo reads as a badge or panel edge, not a closed card.

---

## API

- **borderSides**: which sides get the border; others are flush (`border-*-0`).
- **roundedCorners**: which corners are rounded (e.g. `['bottom-right']`).
- **borderWidth**: `border-2` or `border-4` (default).

Use for: logo lockups, nav panels, badges, or any block that should feel like a distinct chunk without a full box.
