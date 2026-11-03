import Image from "next/image";
import type { ReactNode } from "react";

// Shared opening for inner pages: big slanted title over a photo, or on night blue when there is none
export default function PageHero({
  title,
  kicker,
  children,
  image,
  alt = "",
  as: Tag = "h1",
}: {
  title: string;
  kicker?: ReactNode;
  children?: ReactNode;
  image?: string | null;
  alt?: string;
  as?: "h1" | "h2";
}) {
  return (
    <section className="relative isolate overflow-hidden bg-night text-white">
      {image && (
        <>
          <Image src={image} alt={alt} fill priority sizes="100vw" className="-z-10 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night/95 via-night/75 to-night/20" />
        </>
      )}
      <div className="mx-auto flex min-h-[26rem] max-w-[90rem] flex-col justify-end px-5 pb-14 pt-24 md:min-h-[32rem] md:px-10 md:pb-20">
        {kicker && <div className="rise mb-5 text-lg font-semibold text-amber">{kicker}</div>}
        <Tag className="display rise max-w-[18ch] text-[clamp(2.5rem,6vw,5.75rem)] [animation-delay:80ms]">{title}</Tag>
        {children && <div className="rise mt-7 max-w-[60ch] text-lg leading-relaxed text-white/85 [animation-delay:160ms]">{children}</div>}
      </div>
    </section>
  );
}
