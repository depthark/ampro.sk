# AMpro.SK

Slovak business card site for AMpro SK, built from `agent-web-template` with Astro and Bun.

- `bun install --frozen-lockfile` installs dependencies.
- `bun run dev` starts the development server at the root path.
- `bun run build` checks types and builds the static site into `dist/`.
- `bun run preview` serves the built site locally.

Business and contact information lives in `src/data/site.ts`. GitHub Actions publishes `dist/` to [ampro.sk](https://ampro.sk/) at the root path. Websupport manages the domain’s DNS. The image used for link previews lives at `public/images/ampro-share.png`.
