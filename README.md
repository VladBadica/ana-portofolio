# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Deployment (Cloudflare Workers, static assets)

This is a static build (`dist/`) using `HashRouter`, so no server-side rewrite rules are needed for client-side routes — any static host works. It's deployed as a Cloudflare **Worker with static assets** (`[assets]` in `wrangler.toml`), not a classic "Pages project" — Cloudflare's current dashboard flow for connecting a Git repo under "Workers & Pages" creates this newer resource type by default, and the two use different CLI commands (`wrangler deploy` vs `wrangler pages deploy`).

Live at: https://ana-portofolio.anamaria-dam2001.workers.dev

**Git-connected auto-deploy**: already set up — pushing to `main` triggers a build and deploy automatically via the Cloudflare dashboard's Git integration. Cloudflare reads `.nvmrc` in this repo to build with the right Node version (Vite 8 requires Node `^20.19.0 || >=22.12.0`).

**Manual CLI deploy**: `npm run deploy` (runs `npm run build && wrangler deploy`) — requires `wrangler login` once.

**Custom domain**: in the Cloudflare dashboard, open the Worker → **Settings → Domains & Routes** → **Add** → enter the domain. Since it's already registered/managed in this Cloudflare account, DNS routes automatically.
