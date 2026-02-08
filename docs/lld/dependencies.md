# Dependencies

> Quick reference: see `package.json` for versions; see `.cursor/rules/handover.mdc` (Gotchas) for runbooks.

## Overview

This document describes major project dependencies, why they are used, and any version or integration constraints (e.g. RSC, Turbopack, production build).

---

## Key dependencies

- **Next.js** — App Router, RSC, Turbopack in dev. Production: run `next build` then `next start`; do not rely on `.next` from `next dev` for `next start` (see Gotchas in handover).
- **React 19** — Used with Next 15.
- **@phosphor-icons/react** — Icon set for the design system. Uses React `createContext` internally; must be used only in client components (e.g. `components/Icon/Icon.tsx` has `"use client"`).
- **Tailwind v4** — Styling. Note: v4 uses CSS `translate` (not `transform`); theme tokens in outline utilities may need `var(--theme-*)` (see handover Gotchas).
- **clsx** — Conditional class names in components.
- **MDX** — `@next/mdx`, `@mdx-js/loader`, `@mdx-js/react` for MDX content when used.
- **Storybook** — `@storybook/nextjs` for component development. Use `@storybook/nextjs` for `Meta` / `StoryObj` types, not `@storybook/react` (enforced by eslint-plugin-storybook).

---

## Client vs server

- **Icon / Phosphor**: The Icon component is a client boundary so that Phosphor’s `createContext` is never run in the RSC environment. Other components that use `<Icon>` can remain Server Components.
- **Build vs dev**: `next build` produces a full routes manifest (including `dataRoutes`, `dynamicRoutes`, `staticRoutes`). `next start` expects that manifest; a stale or dev-only `.next` can cause `routesManifest.dataRoutes is not iterable`.

---

## Gotchas (runbooks)

- **`next start` fails with `routesManifest.dataRoutes is not iterable`**  
  The `.next` directory was not produced by a full production build. Fix: `rm -rf .next && npm run build`, then `npm start`.
- **`createContext is not a function` in Icon / Phosphor**  
  Phosphor icons require a client React runtime. Ensure `components/Icon/Icon.tsx` has `"use client"` at the top.

---

## Version and upgrade notes

- **Next 15.x, React 19, Tailwind 4** — Current stack. When upgrading Next, check release notes for changes to Turbopack, manifest shape, or RSC behaviour.
- **Phosphor** — Icon names are PascalCase in the package; this project’s Icon registry uses kebab-case keys. Verify new icons against `node_modules/@phosphor-icons/react/dist/index.d.ts`.
