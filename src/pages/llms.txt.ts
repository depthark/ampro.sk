import type { APIRoute } from "astro";
import { site } from "@/data/site";

export const GET: APIRoute = () =>
  new Response(
    [
      `# ${site.name}`,
      "",
      `> ${site.description}`,
      "",
      "## Kontakt",
      "",
      `- ${site.person.name}, ${site.person.role}, ${site.company}`,
      `- ${site.person.certification.reference} – ${site.person.certification.service}`,
      `- Telefón: ${site.person.phone}`,
      `- E-mail: ${site.person.email}`,
      `- [Vizitka](${site.url})`,
      `- [Strojovo čitateľné údaje](${new URL("agent/site.json", site.url)})`,
      "",
    ].join("\n"),
    { headers: { "Content-Type": "text/markdown; charset=utf-8" } },
  );
