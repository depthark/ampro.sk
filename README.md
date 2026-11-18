# AMpro.SK

Slovak business card site for AMpro SK, built from `agent-web-template` with Astro and Bun.

- `bun install --frozen-lockfile` installs dependencies.
- `bun run dev` starts the development server at the root path.
- `bun run build` checks types and builds the static site into `dist/`.
- `bun run preview` serves the built site locally.

Business and contact information lives in `src/data/site.ts`. The GitHub Actions workflow builds from the repository root and publishes `dist/` to [GitHub Pages](https://depthark.github.io/ampro.sk/). It reads the published origin and base path from GitHub Pages.
