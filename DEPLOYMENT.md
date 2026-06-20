# Deployment Guide

This repo supports two showcase paths:

1. **Docker Compose / Podman Compose**: run the shell and every micro app as independently built services.
2. **Vercel showcase**: deploy the Next.js shell and point it at remote app URLs.

## Docker Compose or Podman Compose

Build and start everything:

```bash
pnpm docker:up
```

With Podman:

```bash
pnpm podman:up
```

The Podman script builds services sequentially before starting the stack. That avoids `podman-compose` parallel build stalls on some macOS setups.

Open:

```text
http://localhost:3001
```

Services:

| Service | URL | Runtime entry used by shell |
|---|---|---|
| Shell | `http://localhost:3001` | Next.js |
| Customer | `http://localhost:5173` | `/customer-app.js` |
| Billing | `http://localhost:5174` | `/billing-app.js` |
| Analytics | `http://localhost:5175` | `/analytics-app.js` |
| Admin | `http://localhost:5176` | `/admin-app.js` |
| AI Assistant | `http://localhost:5177` | `/ai-assistant-app.js` |
| Vue Commerce | `http://localhost:5178` | `/vue-commerce-app.js` |
| Angular Operations | `http://localhost:5179` | `/angular-ops-app.js` |
| Design System Contract | `http://localhost:5180` | `/design-system-app.js` |

The shell also loads each app's production stylesheet:

- `/customer-app.css`
- `/billing-app.css`
- `/analytics-app.css`
- `/admin-app.css`
- `/ai-assistant-app.css`
- `/vue-commerce-app.css`
- `/angular-ops-app.css`
- `/design-system-app.css`

Stop:

```bash
pnpm docker:down
```

With Podman:

```bash
pnpm podman:down
```

Follow logs:

```bash
pnpm podman:logs
```

The compose file intentionally uses browser-reachable `localhost` remote origins because the shell sends ESM URLs to the user's browser. Container service names such as `http://billing:5174` are useful for server-to-server calls, but browser runtime imports need public URLs.

Podman note: this compose file avoids Docker-only extensions and runs as plain OCI containers. On macOS, make sure your Podman machine is running before starting the stack:

```bash
podman machine start
```

If a compose command is interrupted and the Podman API becomes unresponsive, restart the Podman machine:

```bash
podman machine stop
podman machine start
```

## Vercel Showcase

The root `vercel.json` builds the SDK and the shell:

```json
{
  "buildCommand": "pnpm --filter @openmf/core build && pnpm --filter @micro-frontend/shell build",
  "outputDirectory": "apps/shell/.next"
}
```

For a real showcase, deploy each micro app somewhere browser-reachable:

- Vercel static project
- S3 + CloudFront
- Netlify
- Cloudflare Pages
- any CDN or app domain that can serve the built JS and manifest

Then set the shell environment variables:

```bash
NEXT_PUBLIC_CUSTOMER_APP_ORIGIN=https://customer-app.example.com
NEXT_PUBLIC_BILLING_APP_ORIGIN=https://billing-app.example.com
NEXT_PUBLIC_ANALYTICS_APP_ORIGIN=https://analytics-app.example.com
NEXT_PUBLIC_ADMIN_APP_ORIGIN=https://admin-app.example.com
NEXT_PUBLIC_AI_ASSISTANT_APP_ORIGIN=https://ai-assistant-app.example.com
NEXT_PUBLIC_VUE_COMMERCE_APP_ORIGIN=https://vue-commerce-app.example.com
NEXT_PUBLIC_ANGULAR_OPS_APP_ORIGIN=https://angular-ops-app.example.com
NEXT_PUBLIC_DESIGN_SYSTEM_APP_ORIGIN=https://design-system-app.example.com

NEXT_PUBLIC_CUSTOMER_APP_ENTRY_PATH=/customer-app.js
NEXT_PUBLIC_BILLING_APP_ENTRY_PATH=/billing-app.js
NEXT_PUBLIC_ANALYTICS_APP_ENTRY_PATH=/analytics-app.js
NEXT_PUBLIC_ADMIN_APP_ENTRY_PATH=/admin-app.js
NEXT_PUBLIC_AI_ASSISTANT_APP_ENTRY_PATH=/ai-assistant-app.js
NEXT_PUBLIC_VUE_COMMERCE_APP_ENTRY_PATH=/vue-commerce-app.js
NEXT_PUBLIC_ANGULAR_OPS_APP_ENTRY_PATH=/angular-ops-app.js
NEXT_PUBLIC_DESIGN_SYSTEM_APP_ENTRY_PATH=/design-system-app.js

NEXT_PUBLIC_CUSTOMER_APP_STYLE_PATH=/customer-app.css
NEXT_PUBLIC_BILLING_APP_STYLE_PATH=/billing-app.css
NEXT_PUBLIC_ANALYTICS_APP_STYLE_PATH=/analytics-app.css
NEXT_PUBLIC_ADMIN_APP_STYLE_PATH=/admin-app.css
NEXT_PUBLIC_AI_ASSISTANT_APP_STYLE_PATH=/ai-assistant-app.css
NEXT_PUBLIC_VUE_COMMERCE_APP_STYLE_PATH=/vue-commerce-app.css
NEXT_PUBLIC_ANGULAR_OPS_APP_STYLE_PATH=/angular-ops-app.css
NEXT_PUBLIC_DESIGN_SYSTEM_APP_STYLE_PATH=/design-system-app.css
```

Keep `NEXT_PUBLIC_MICRO_APP_VITE_REFRESH=false` for production/static remotes.

## Remote Registry Option

Instead of configuring every origin in the shell, you can point the shell at a registry service:

```bash
MICRO_APP_REGISTRY_URL=https://registry.example.com/apps.json
MICRO_APP_LOCAL_APPS_ENABLED=false
```

The registry should return either:

```json
[
  {
    "id": "billing",
    "name": "Billing App",
    "entryUrl": "https://billing-app.example.com/billing-app.js",
    "manifestUrl": "https://billing-app.example.com/manifest.json",
    "runtime": { "type": "web-component", "tagName": "micro-billing-app" }
  }
]
```

or:

```json
{
  "apps": []
}
```

## GitHub Actions

Included workflows:

- `.github/workflows/ci.yml`: install, lint, build, SDK pack dry-run.
- `.github/workflows/e2e.yml`: start the shell and remotes, then run Playwright screenshots.
- `.github/workflows/vercel-preview.yml`: optional manual Vercel deploy using Vercel CLI.

Required secrets for Vercel deploy:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## Production Notes

For public demos and production deployments, add:

- CORS allowlists for remote ESM files.
- CSP `script-src` entries for approved app origins.
- signed or immutable manifests.
- versioned remote URLs.
- rollback policy per app.
- structured log destination for `/api/micro-app-errors`.
