import type { APIRoute } from "astro";

export const GET: APIRoute = () =>
  Response.json({
    builtAt: new Date().toISOString(),
    commit: process.env.GITHUB_SHA ?? null,
  });
