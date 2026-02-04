# Deploying Storybook to Vercel

This repo contains both the Next.js site and Storybook. To deploy Storybook to Vercel, use a **separate Vercel project** from the same repo and override the build settings.

## Storybook project settings

In the Vercel project that deploys Storybook, set:

| Setting | Value |
|--------|--------|
| **Framework Preset** | Other |
| **Build Command** | `npm run build-storybook` |
| **Output Directory** | `storybook-static` |
| **Install Command** | `npm install` (default) |
| **Root Directory** | (leave blank) |

1. [Import the repo](https://vercel.com/new) as a new project (or duplicate the existing one).
2. Go to **Settings → General → Build & Development Settings**.
3. Override **Build Command** to `npm run build-storybook`.
4. Override **Output Directory** to `storybook-static`.
5. Set **Framework Preset** to **Other** so Vercel doesn’t run `next build`.

Node version is fixed to **20** via `.nvmrc` in the repo.

## Local build

To confirm the build works locally:

```bash
npm run build-storybook
```

Output is written to `storybook-static/`.
