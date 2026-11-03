import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense, type ReactNode } from "react";
import Gallery from "@/components/Gallery";
import { cleanTitle, getProject, portfolio, projectSlugs, type Block } from "@/lib/projects";
import { links } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { btnAmber, btnBlue, container } from "@/lib/ui";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getProject(slug);
  if (!page) return {};
  return { title: cleanTitle(page.title), description: page.description || undefined };
}

type Segment =
  | { kind: "h"; level: number; text: string }
  | { kind: "p"; text: string }
  | { kind: "quote"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "gallery"; images: string[] }
  | { kind: "links"; items: { text: string; href: string }[] };

// Group the flat block list from the live page into layout segments
function toSegments(blocks: Block[]): Segment[] {
  const out: Segment[] = [];
  for (const b of blocks) {
    const last = out[out.length - 1];
    if (b.type === "img") {
      if (last?.kind === "gallery") last.images.push(b.src);
      else out.push({ kind: "gallery", images: [b.src] });
    } else if (b.type === "li") {
      if (last?.kind === "list") last.items.push(b.text);
      else out.push({ kind: "list", items: [b.text] });
    } else if (b.type === "link") {
      if (last?.kind === "links") last.items.push(b);
      else out.push({ kind: "links", items: [b] });
    } else if (b.type === "h") {
      // Long small headings on the live site are client quotes
      if (b.level >= 5 && b.text.length > 90) out.push({ kind: "quote", text: b.text });
      else out.push({ kind: "h", level: b.level, text: b.text });
    } else {
      out.push({ kind: "p", text: b.text });
    }
  }
  return out;
}

function Heading({ level, children }: { level: number; children: string }) {
  // Zyro pages often use headings for whole sentences; set those as lead text
  if (children.length > 70)
    return <p className="wide mt-10 text-[1.35rem] font-bold leading-snug text-ink first:mt-0">{children}</p>;
  if (level <= 2)
    return <h2 className="display mt-16 text-[clamp(1.9rem,3.6vw,3rem)] text-blue first:mt-0">{children}</h2>;
  if (level === 3) return <h3 className="display mt-12 text-[clamp(1.5rem,2.6vw,2.1rem)] first:mt-0">{children}</h3>;
  return <h4 className="wide mt-10 text-xl font-bold first:mt-0">{children}</h4>;
}

function ProjectLink({ href, className, children }: { href: string; className: string; children: ReactNode }) {
  return href.startsWith("/") ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

type TextSeg = Exclude<Segment, { kind: "gallery" }>;
type Run = { kind: "gallery"; images: string[] } | { kind: "text"; items: TextSeg[] };

function groupRuns(segments: Segment[]): Run[] {
  const runs: Run[] = [];
  for (const s of segments) {
    if (s.kind === "gallery") runs.push(s);
    else {
      const last = runs[runs.length - 1];
      if (last?.kind === "text") last.items.push(s);
      else runs.push({ kind: "text", items: [s] });
    }
  }
  return runs;
}

function TextSegment({ s }: { s: TextSeg }) {
  if (s.kind === "h") return <Heading level={s.level}>{s.text}</Heading>;
  if (s.kind === "p") return <p className="mt-5 whitespace-pre-line text-lg leading-relaxed text-ink/80 first:mt-0">{s.text}</p>;
  if (s.kind === "quote")
    return (
      <blockquote className="display my-12 border-l-4 border-amber pl-6 text-[clamp(1.3rem,2.2vw,1.75rem)] !leading-[1.25] whitespace-pre-line text-blue first:mt-0">
        {s.text}
      </blockquote>
    );
  if (s.kind === "list")
    return (
      <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10 first:mt-0">
        {s.items.map((t) => (
          <li key={t} className="flex gap-4 py-3.5 text-lg">
            <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-amber" />
            {t}
          </li>
        ))}
      </ul>
    );
  return (
    <div className="mt-10 flex flex-wrap gap-4 first:mt-0">
      {s.items.map((l, j) => (
        <ProjectLink key={l.text} href={l.href} className={j === 0 ? btnBlue : btnAmber}>
          {l.text}
        </ProjectLink>
      ))}
    </div>
  );
}

// params are read inside <Suspense> so client navigations can show the shell instantly
export default function ProjectPage({ params }: PageProps<"/[slug]">) {
  return (
    <Suspense fallback={<ProjectSkeleton />}>
      <ProjectContent params={params} />
    </Suspense>
  );
}

function ProjectSkeleton() {
  return (
    <section aria-busy="true" className="bg-night">
      <div className={`${container} flex min-h-[30rem] flex-col justify-end gap-5 pb-14 pt-28 md:min-h-[38rem] md:pb-20`}>
        <span className="h-4 w-32 animate-pulse rounded-full bg-white/15" />
        <span className="h-14 w-3/4 max-w-2xl animate-pulse rounded-sm bg-white/15" />
        <span className="h-5 w-2/3 max-w-xl animate-pulse rounded-full bg-white/10" />
      </div>
    </section>
  );
}

async function ProjectContent({ params }: { params: PageProps<"/[slug]">["params"] }) {
  const { slug } = await params;
  const page = getProject(slug);
  if (!page) notFound();

  const blocks = [...page.blocks];
  // Title: the page's h1, or its first heading if it has none
  let titleIdx = blocks.findIndex((b) => b.type === "h" && b.level === 1);
  if (titleIdx === -1) titleIdx = blocks.findIndex((b) => b.type === "h");
  const titleBlock = titleIdx >= 0 ? blocks[titleIdx] : null;
  const title = titleBlock && titleBlock.type === "h" ? titleBlock.text : cleanTitle(page.title);
  // A short heading just before the h1 (e.g. "Project Clayton") becomes the kicker
  const before = titleIdx > 0 ? blocks[titleIdx - 1] : null;
  const kicker = before && before.type === "h" && before.text.length < 40 ? before.text : null;
  const heroIdx = blocks.findIndex((b) => b.type === "img");
  const hero = heroIdx >= 0 ? blocks[heroIdx] : null;
  const introIdx = titleIdx >= 0 && blocks[titleIdx + 1]?.type === "p" ? titleIdx + 1 : -1;
  const intro = introIdx >= 0 ? blocks[introIdx] : null;

  const used = new Set([titleIdx, heroIdx, introIdx, kicker ? titleIdx - 1 : -1]);
  const segments = toSegments(blocks.filter((_, i) => !used.has(i)));

  const pos = portfolio.findIndex((p) => p.slug === slug);
  const prev = pos > 0 ? portfolio[pos - 1] : null;
  const next = pos >= 0 && pos < portfolio.length - 1 ? portfolio[pos + 1] : null;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-night text-white">
        {hero && hero.type === "img" && (
          <>
            <Image src={hero.src} alt="" fill priority sizes="100vw" className="-z-10 object-cover" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/60 to-night/10" />
          </>
        )}
        <div className={`${container} flex min-h-[30rem] flex-col justify-end pb-14 pt-28 md:min-h-[38rem] md:pb-20`}>
          <Link href={links.portfolio} className="rise mb-6 self-start text-sm font-semibold text-white/80 hover:text-amber">
            ‹ Our Portfolio
          </Link>
          {kicker && <p className="rise mb-3 text-lg font-semibold text-amber">{kicker}</p>}
          <h1 className="display rise max-w-[22ch] text-[clamp(2.2rem,5vw,4.75rem)] [animation-delay:80ms]">{title}</h1>
          {intro && intro.type === "p" && (
            <p className="rise mt-6 max-w-[60ch] whitespace-pre-line text-lg leading-relaxed text-white/85 [animation-delay:160ms]">
              {intro.text}
            </p>
          )}
        </div>
      </section>

      <div className="py-16 md:py-24">
        {groupRuns(segments).map((run, i) =>
          run.kind === "gallery" ? (
            <div key={i} className={`${container} my-12 first:mt-0 last:mb-0 md:my-14`}>
              <Gallery images={run.images} label={title} />
            </div>
          ) : (
            <Reveal as="div" key={i}  className="mx-auto my-12 max-w-3xl px-5 first:mt-0 last:mb-0 md:my-14 md:px-10">
              {run.items.map((s, j) => (
                <TextSegment key={j} s={s} />
              ))}
            </Reveal>
          ),
        )}
      </div>

      {(prev || next) && (
        <nav aria-label="More projects" className="grid border-t border-ink/10 md:grid-cols-2">
          {[prev, next].map((p, i) =>
            p ? (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className={`group flex flex-col gap-2 px-5 py-10 transition-colors hover:bg-limewash md:px-10 md:py-14 ${i === 1 ? "md:items-end md:border-l md:border-ink/10 md:text-right" : ""}`}
              >
                <span className="text-sm font-semibold text-pennant">{i === 0 ? "‹ Previous project" : "Next project ›"}</span>
                <span className="display text-[clamp(1.6rem,3vw,2.5rem)] text-blue">{p.name}</span>
              </Link>
            ) : (
              <span key={i} />
            ),
          )}
        </nav>
      )}
    </>
  );
}
