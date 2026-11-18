import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://ampro.sk",
  base: "/",
  output: "static",
  devToolbar: {
    enabled: false,
  },
  trailingSlash: "always",
  // Page CSS is small: inline it so nothing blocks the first render.
  build: {
    inlineStylesheets: "always",
  },
});
