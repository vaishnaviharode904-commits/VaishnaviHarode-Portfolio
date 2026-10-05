# Vaishnavi Harode Portfolio

A static Vite + React portfolio built from Vaishnavi Harode’s resume. It uses local public assets, including the downloadable resume PDF, and contains no server, API key, Vite endpoint, or `index.ts` file.

## Run locally

```bash
pnpm install
pnpm dev
```

The development server listens on port 3000.

## Build for Vercel

```bash
pnpm build
```

The production output is written to `dist/public`. The root `vercel.json` contains the requested Vercel commands and Vite framework settings, so the repository can be imported into Vercel without additional configuration.
