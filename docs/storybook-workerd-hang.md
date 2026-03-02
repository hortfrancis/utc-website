# Storybook + OpenNext/Cloudflare — `workerd` hang

## Summary

After running `npx @opennextjs/cloudflare migrate`, Storybook builds started
hanging locally and Vercel preview builds broke.

## Symptom

`npm run build-storybook` prints **"Storybook build completed successfully"**
but the CLI never returns — the Node process keeps running.

## Evidence

- `ps` showed `workerd` running during the hang:

  ```
  @cloudflare/workerd-*/bin/workerd serve ... --external-addr=loopback=127.0.0.1:<port>
  ```

- `ps -o pid,ppid,command` + `pstree` confirmed the `workerd` process PPID was
  the Storybook build Node process — i.e. Storybook was spawning it.

- On Vercel preview builds we also saw:

  ```
  workerd-linux-64 ... GLIBC_2.35 not found
  ```

  Plus Chromatic EPIPE errors. Same root cause: the build tries to run `workerd`;
  on Vercel it fails because of a glibc mismatch.

## Root cause

`@storybook/nextjs` loads and evaluates `next.config.ts` during the Storybook
build. Our `next.config.ts` had a top-level side-effect added by the OpenNext
migrator:

```ts
import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
```

That line runs whenever `next.config.ts` is evaluated — including by Storybook.
`initOpenNextCloudflareForDev()` starts Cloudflare's local runtime (`workerd`).
Storybook doesn't shut it down, so the Node process never exits.

## Fix

Gate the OpenNext dev init so it does not run when Storybook is building.

### `package.json`

Set an env var for the Storybook build script:

```jsonc
"build-storybook": "STORYBOOK_BUILD=1 storybook build --disable-telemetry"
```

### `next.config.ts`

Detect Storybook mode and only run OpenNext dev init when NOT in Storybook:

```ts
const isStorybook = process.env.STORYBOOK === '1' || process.env.STORYBOOK_BUILD === '1';
if (!isStorybook) {
  void import('@opennextjs/cloudflare').then((m) => m.initOpenNextCloudflareForDev());
}
```

After this change, `storybook build` exits normally because it no longer
spawns `workerd`.

## Key lesson

> `@storybook/nextjs` evaluates `next.config.*` at build time. Do **not** run
> `initOpenNextCloudflareForDev()` (or any other process-spawning call)
> unconditionally in `next.config.*`, or Storybook builds will spawn `workerd`
> and hang. Use `STORYBOOK_BUILD=1` gating.
