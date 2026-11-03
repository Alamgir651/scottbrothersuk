import data from "@/content/projects.json";

export type Block =
  | { type: "h"; level: number; text: string }
  | { type: "p"; text: string }
  | { type: "li"; text: string }
  | { type: "img"; src: string }
  | { type: "link"; text: string; href: string };

export type ProjectPage = { title: string; description: string; blocks: Block[] };

const pages = data.pages as Record<string, ProjectPage>;

export const portfolio = data.portfolio as { name: string; slug: string; image: string | null }[];

export const projectSlugs = Object.keys(pages);

export function getProject(slug: string): ProjectPage | undefined {
  return pages[slug];
}

export function firstImage(slug: string): string | null {
  const page = pages[slug];
  const img = page?.blocks.find((b) => b.type === "img");
  return img && img.type === "img" ? img.src : null;
}

// Strip the "| Scott Brothers Yate Builders" suffix the live site appends
export const cleanTitle = (t: string) => t.replace(/\s*\|\s*Scott Brothers Yate Builders\s*$/, "").trim();
