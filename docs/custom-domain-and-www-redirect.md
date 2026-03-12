# Custom domain and `www` redirect for `utc-website`

## Why this exists

For `utc-website`, the Cloudflare Worker is the **origin** for the site, so we should use **Workers Custom Domains** rather than plain Worker routes. Cloudflare recommends Custom Domains when the Worker is serving the site itself, and notes that Custom Domains create the DNS records and certificates on your behalf.

## Hostnames are separate

These are different hostnames:

- `urbantechcreative.com`
- `www.urbantechcreative.com`

Cloudflare does **not** automatically redirect `www` to the apex domain just because the apex domain is configured. Each hostname must either:

- be attached explicitly to the Worker, or
- be redirected intentionally.

## Recommended production setup

Use:

- **canonical hostname**: `https://urbantechcreative.com`
- **redirect**: `https://www.urbantechcreative.com/*` → `https://urbantechcreative.com/*`

This avoids duplicate hostname variants and gives search engines a clearer canonical URL. Google recommends redirects as a strong canonicalization signal, and Next.js supports canonical metadata via its Metadata API.

## Wrangler config

We can bind both hostnames in `wrangler.jsonc` first:

```jsonc
{
  "routes": [
    {
      "pattern": "urbantechcreative.com",
      "custom_domain": true
    },
    {
      "pattern": "www.urbantechcreative.com",
      "custom_domain": true
    }
  ]
}
```

This lets both hostnames resolve to the Worker. After that, Cloudflare can redirect `www` to the apex. Cloudflare documents `custom_domain: true` in Wrangler for this exact use case. ([Cloudflare Docs][1])

## Cloudflare redirect

The simplest approach is a Cloudflare redirect from `www` to apex.

Cloudflare supports this using **Redirect Rules** / **Bulk Redirects**. Their docs include a `www` → apex pattern that preserves path and query string. ([Cloudflare Docs][2])

### Intended redirect

* source: `https://www.urbantechcreative.com/*`
* target: `https://urbantechcreative.com/$1`
* status: `301 Permanent Redirect`

When configuring it, preserve:

* query string
* path suffix / subpath matching

## Next.js canonical metadata

The app should also emit canonical metadata pointing at the apex hostname.

Example idea in `app/layout.tsx` or equivalent:

```ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://urbantechcreative.com"),
};
```

And where needed:

```ts
alternates: {
  canonical: "/",
}
```

Next.js supports canonical metadata via the Metadata API. ([Next.js][3])

## Why we are doing it this way

This setup gives us:

* one canonical public hostname
* cleaner SEO signals
* explicit Cloudflare-managed hostname mapping
* less ambiguity than relying on ad hoc dashboard config

## Operational note

We should treat `wrangler.jsonc` as the source of truth for Worker hostname bindings, and Cloudflare Rules as the source of truth for hostname redirects.

A future automation script or agent could check/set:

* Worker custom domains
* DNS state
* `www` redirect rule
* canonical hostname consistency

[1]: https://developers.cloudflare.com/workers/configuration/routing/custom-domains/?utm_source=chatgpt.com "Custom Domains · Cloudflare Workers docs"
[2]: https://developers.cloudflare.com/pages/how-to/www-redirect/?utm_source=chatgpt.com "Redirecting www to domain apex · Cloudflare Pages docs"
[3]: https://nextjs.org/docs/app/api-reference/functions/generate-metadata?utm_source=chatgpt.com "Functions: generateMetadata"