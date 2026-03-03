# UTC Website 2025

Portfolio website for **Urban Tech Creative** — a studio focused on 3D digital narratives, XR/AR/VR projects, and tech-driven creative work.

- Site: [`https://utc-website.alex-hortfrancis.workers.dev`](https://utc-website.alex-hortfrancis.workers.dev/)
- Storybook: [`https://utc-website-storybook.alex-hortfrancis.workers.dev`](https://utc-website-storybook.alex-hortfrancis.workers.dev/)

## Tech stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack) + [React 19](https://react.dev/) + TypeScript 5
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with PostCSS
- **Design tool**: [Storybook 10](https://storybook.js.org/) (deployed via Cloudflare Workers)
- **Hosting**: [Cloudflare Workers](https://workers.cloudflare.com/) via [OpenNext](https://opennext.js.org/cloudflare)
- **Icons**: [Phosphor Icons](https://phosphoricons.com/) via [`@phosphor-icons/react`](https://www.npmjs.com/package/@phosphor-icons/react) (MIT licensed)
- **Font**: [Recursive](https://www.recursive.design/) (variable, axes: CASL, CRSV, MONO, slnt, wght)
- **Node**: 22

## Getting started

```bash
npm install
npm run dev          # Next.js dev server (Turbopack)
npm run storybook    # Storybook on port 6006
npm run build        # Production build (runs ESLint + TypeScript checks)
```

## Deployment

The site and Storybook are deployed to **Cloudflare Workers** with CD via
**GitHub Actions** — every push to `main` triggers both deploys.

| What | Script | Worker |
|------|--------|--------|
| Next.js site | `npm run deploy` | `utc-website` |
| Storybook | `npm run deploy-storybook` | `utc-website-storybook` |

The site uses [OpenNext for Cloudflare](https://opennext.js.org/cloudflare) to
run Next.js on Workers. Storybook is deployed as a plain static-assets Worker.

See [`docs/storybook-workerd-hang.md`](docs/storybook-workerd-hang.md) for an
important gotcha about Storybook builds and OpenNext coexisting in the same repo.

## Project overview

The homepage centerpiece is an **interactive 3D CSS cube** — no third-party 3D library. Each face maps to a site section (XR, Work, Vision, News, Showcase, and a hidden easter egg). The cube auto-spins, supports drag-to-rotate, and tap-to-navigate.

The site is built on an atomic design system with a visual language mixing acid design, 'post-neobrutalism', and LCARS (Star Trek TNG) influences: bold colours, thick borders, selective rounded corners, and strong grid presence. See the [design system reference](.cursor/rules/design-system.mdc) for the component hierarchy, tokens, cube face mapping, and composition patterns.

## Documentation

- **Design system reference**: [`.cursor/rules/design-system.mdc`](.cursor/rules/design-system.mdc) — tokens, component APIs, composition patterns
- **Session handover**: [`.cursor/rules/handover.mdc`](.cursor/rules/handover.mdc) — current project state, next steps, open decisions
- **Low-level design docs**: [`docs/lld/`](docs/lld/) — deep dives on [Cube](docs/lld/cube.md), [Frame](docs/lld/frame.md), [UIGrid](docs/lld/ui-grid.md)
- **Storybook + OpenNext gotcha**: [`docs/storybook-workerd-hang.md`](docs/storybook-workerd-hang.md) — why Storybook builds can hang when OpenNext is in the project

## Third-party assets

- **Icons**: [Phosphor Icons](https://phosphoricons.com/) via [`@phosphor-icons/react`](https://www.npmjs.com/package/@phosphor-icons/react). MIT licensed. Used through the `Icon` component (`components/Icon/`) with a curated registry — add new icons by importing from the library and registering them in `Icon.tsx`.
