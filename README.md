# UTC Website 2025

Portfolio website for **Urban Tech Creative** — a studio focused on 3D digital narratives, XR/AR/VR projects, and tech-driven creative work.

- Temporary deployment URL: [`https://utc-website-2025.vercel.app`](https://utc-website-2025.vercel.app/)
- Storybook: [`https://utc-website-2025-storybook.vercel.app`](https://utc-website-2025-storybook.vercel.app/)

## Tech stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack) + [React 19](https://react.dev/) + TypeScript 5
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with PostCSS
- **Design tool**: [Storybook 10](https://storybook.js.org/) (deployed via Vercel)
- **Icons**: [Phosphor Icons](https://phosphoricons.com/) via [`@phosphor-icons/react`](https://www.npmjs.com/package/@phosphor-icons/react) (MIT licensed)
- **Font**: [Recursive](https://www.recursive.design/) (variable, axes: CASL, CRSV, MONO, slnt, wght)
- **Node**: 20 (pinned via `.nvmrc`)

## Getting started

```bash
npm install
npm run dev          # Next.js dev server (Turbopack)
npm run storybook    # Storybook on port 6006
npm run build        # Production build (runs ESLint + TypeScript checks)
```

## Project overview

The homepage centerpiece is an **interactive 3D CSS cube** — no third-party 3D library. Each face maps to a site section (XR, Work, Vision, News, Showcase, and a hidden easter egg). The cube auto-spins, supports drag-to-rotate, and tap-to-navigate.

The site is built on an atomic design system with a visual language mixing acid design, 'post-neobrutalism', and LCARS (Star Trek TNG) influences: bold colours, thick borders, selective rounded corners, and strong grid presence. See the [design system reference](.cursor/rules/design-system.mdc) for the component hierarchy, tokens, cube face mapping, and composition patterns.

## Documentation

- **Design system reference**: [`.cursor/rules/design-system.mdc`](.cursor/rules/design-system.mdc) — tokens, component APIs, composition patterns
- **Session handover**: [`.cursor/rules/handover.mdc`](.cursor/rules/handover.mdc) — current project state, next steps, open decisions
- **Low-level design docs**: [`docs/lld/`](docs/lld/) — deep dives on [Cube](docs/lld/cube.md), [Frame](docs/lld/frame.md), [UIGrid](docs/lld/ui-grid.md)
- **Storybook deployment**: [`docs/vercel-storybook.md`](docs/vercel-storybook.md) — how to deploy Storybook to Vercel as a separate project

## Third-party assets

- **Icons**: [Phosphor Icons](https://phosphoricons.com/) via [`@phosphor-icons/react`](https://www.npmjs.com/package/@phosphor-icons/react). MIT licensed. Used through the `Icon` component (`components/Icon/`) with a curated registry — add new icons by importing from the library and registering them in `Icon.tsx`.
