# Publishing Plan

The SDK is structurally ready to publish, but treat the first public release as an experimental MVP.

## Current Package

- Package: `@micro-frontend/platform-sdk`
- Source: `packages/platform-sdk`
- Output: `dist`
- Format: ESM
- Types: TypeScript declarations
- License: MIT

## Prepublish Checklist

1. Choose the final package name and npm scope.
2. Confirm `author`, `repository`, `bugs`, and `homepage` in `packages/platform-sdk/package.json`.
3. Add CI for `pnpm lint`, `pnpm build`, and `pnpm --filter @micro-frontend/platform-sdk pack --dry-run`.
4. Add unit tests for registry resolution, event bus behavior, and error reporting.
5. Add browser integration tests for Web Component, ESM module, HTML fragment, and iframe remotes.
6. Add security documentation for allowed origins, CSP, trusted HTML fragments, and signed manifests.
7. Decide whether `0.x` APIs are experimental or semver-stable.
8. Run `pnpm --filter @micro-frontend/platform-sdk pack --dry-run`.
9. Run `pnpm --filter @micro-frontend/platform-sdk publish --access public`.

## Suggested Release Channels

- `0.1.x`: POC feedback and architecture validation.
- `0.2.x`: API cleanup, examples, and tests.
- `0.3.x`: MCPApps adapter experiments.
- `1.0.0`: stable manifest schema and runtime contracts.

## Package Positioning

Short description:

> Framework-neutral SDK for manifest-driven, self-deployable, AI-native micro frontends without webpack Module Federation.

Long description:

> A standards-first micro frontend SDK for Next.js shells, Web Components, ESM remotes, HTML fragments, iframes, async events, observability, and MCPApps-style capability metadata.
