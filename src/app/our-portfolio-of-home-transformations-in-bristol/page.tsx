import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/lib/projects";
import { container } from "@/lib/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Our Portfolio Of Home Transformations In Bristol" };

export default function PortfolioPage() {
  return (
    <>
      <section className={`${container} pb-14 pt-16 md:pb-20 md:pt-24`}>
        <h3 className="rise text-lg font-semibold text-amber">Making your dreams a reality</h3>
        <p className="rise mt-2 max-w-[50ch] text-lg text-ink/75 [animation-delay:80ms]">
          We help you take your idea, create a plan for achieving it, and make it happen.
        </p>
        <h1 className="display rise mt-8 max-w-[16ch] text-[clamp(1.9rem,6.4vw,6rem)] text-blue [animation-delay:160ms]">
          Our Portfolio Of Home Transformations In Bristol
        </h1>
      </section>

      <section className={`${container} pb-24 md:pb-32`}>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-4">
          {portfolio.map((p, i) => (
            <Reveal as="li" key={p.slug} kind="up" delay={(i % 4) * 80} className={i === 0 ? "col-span-2 row-span-2" : ""}>
              <Link href={`/${p.slug}`} className="group relative block h-full overflow-hidden rounded-sm bg-night">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  // No photo on the live page: show the logo stripes on brand blue
                  <span aria-hidden="true" className="absolute inset-0 bg-blue">
                    <span className="absolute -right-6 top-6 h-10 w-3/4 -skew-x-[30deg] bg-white/10" />
                    <span className="absolute -right-6 top-20 h-10 w-2/3 -skew-x-[30deg] bg-pennant/40" />
                    <span className="absolute -right-6 top-34 h-10 w-1/2 -skew-x-[30deg] bg-white/10" />
                  </span>
                )}
                <span className="block aspect-[4/5]" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/90 to-transparent p-4 pt-16 text-white md:p-5 md:pt-20">
                  <span className={`display block ${i === 0 ? "text-[clamp(1.75rem,3vw,2.75rem)]" : "text-lg md:text-xl"}`}>{p.name}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
