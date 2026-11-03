// Pulls the project pages from the live Zyro site into src/content/projects.json,
// so the redesign shows the exact same copy and photos.
// Usage: node scripts/scrape-live.mjs

import fs from "node:fs/promises";
import path from "node:path";

const ORIGIN = "https://www.scottbrothersuk.co.uk";
const SITE_ID = "mePB0Roo6KhE4R47";
const OUT = path.join(import.meta.dirname, "..", "src", "content", "projects.json");

// Project pages linked from the homepage, portfolio and "Design My Space"
const EXTRA = ["winterbourne-landscapers", "project-hazel", "stoke-gifford-landscaping", "design-my-space-clayton"];
const SKIP_IMG = /SB_Ltd_Final_Logo|SB_Final_Logo|scott-icon|traffic\.txt|^icon-/;
const NAV = new Set(["Home", "About Us", "Our Portfolio", "Design My Space", "Contact Us", "Luxury Landscaping"]);

const decode = (s) =>
  s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;|&#x27;|&rsquo;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");

const toText = (html) =>
  decode(html.replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]+>/g, ""))
    .split("\n")
    .map((l) => l.replace(/\s+/g, " ").trim())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

export const imageUrl = (file, w = 1600) => `https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=${w}/${SITE_ID}/${file}`;

function localHref(href) {
  if (!href) return null;
  if (href.startsWith(ORIGIN)) href = href.slice(ORIGIN.length) || "/";
  return href;
}

async function get(slug) {
  const res = await fetch(`${ORIGIN}/${slug}`, { headers: { "User-Agent": "Mozilla/5.0" } });
  return { status: res.status, html: await res.text() };
}

function parse(html) {
  const title = decode((html.match(/<title>([^<]*)/) || [])[1] || "").trim();
  const description = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "");
  html = html.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "").replace(/<svg[\s\S]*?<\/svg>/gi, "");

  const blocks = [];
  const seenText = new Set();
  const seenImg = new Set();
  const re = new RegExp(`<(h[1-6]|p|li|a)\\b([^>]*)>([\\s\\S]*?)<\\/\\1>|${SITE_ID}\\/([A-Za-z0-9_.-]+)`, "gi");
  let m;
  while ((m = re.exec(html))) {
    if (m[4]) {
      const file = m[4];
      if (SKIP_IMG.test(file) || seenImg.has(file)) continue;
      seenImg.add(file);
      blocks.push({ type: "img", src: imageUrl(file) });
      continue;
    }
    const tag = m[1].toLowerCase();
    const text = toText(m[3]);
    if (!text) continue;
    if (tag === "h4" && text === "Get in touch") break; // footer starts here
    if (tag === "li" && NAV.has(text)) continue;
    const key = `${tag}:${text}`;
    if (seenText.has(key)) continue;
    seenText.add(key);

    if (tag === "a") {
      const href = localHref((m[2].match(/href="([^"]*)"/) || [])[1]);
      if (href) blocks.push({ type: "link", text, href });
    } else if (tag === "p") {
      for (const para of text.split(/\n\n+/)) if (para.trim()) blocks.push({ type: "p", text: para.trim() });
    } else if (tag === "li") {
      blocks.push({ type: "li", text });
    } else {
      blocks.push({ type: "h", level: Number(tag[1]), text });
    }
  }
  return { title, description, blocks };
}

async function main() {
  const portfolio = await get("our-portfolio-of-home-transformations-in-bristol");
  const list = [];
  const linkRe = /<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = linkRe.exec(portfolio.html))) {
    const name = toText(m[2]);
    const href = localHref(m[1]);
    if (/^Project /.test(name) && href?.startsWith("/") && !list.some((p) => p.slug === href.slice(1))) {
      list.push({ name, slug: href.slice(1) });
    }
  }

  const slugs = [...new Set([...list.map((p) => p.slug), ...EXTRA])];
  const pages = {};
  for (let i = 0; i < slugs.length; i += 6) {
    await Promise.all(
      slugs.slice(i, i + 6).map(async (slug) => {
        const { status, html } = await get(slug);
        if (status !== 200 || /Website Builder 404/.test(html)) {
          console.warn(`skip ${slug} (not found on live site)`);
          return;
        }
        pages[slug] = parse(html);
        console.log(`ok   ${slug} (${pages[slug].blocks.length} blocks)`);
      }),
    );
  }

  const portfolioList = list.map((p) => ({
    ...p,
    image: pages[p.slug]?.blocks.find((b) => b.type === "img")?.src ?? null,
  }));

  await fs.mkdir(path.dirname(OUT), { recursive: true });
  await fs.writeFile(OUT, JSON.stringify({ portfolio: portfolioList, pages }, null, 2));
  console.log(`\nWrote ${Object.keys(pages).length} pages to ${path.relative(process.cwd(), OUT)}`);
}

main();
