import Link from "next/link";
import { links } from "@/lib/site";
import { btnAmber, btnBlue, container } from "@/lib/ui";

export default function NotFound() {
  return (
    <section className={`${container} py-28 md:py-40`}>
      <p className="display outline-num text-[clamp(5rem,14vw,11rem)] !leading-[0.85]" style={{ WebkitTextStrokeColor: "var(--color-blue)" }}>
        404
      </p>
      <h1 className="display mt-8 max-w-[18ch] text-[clamp(2rem,4.4vw,3.75rem)] text-blue">This page could not be found</h1>
      <p className="mt-5 max-w-[50ch] text-lg text-ink/75">The page may have moved or no longer exists. Try our portfolio or get in touch with the team.</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href={links.portfolio} className={btnBlue}>
          Back to Portfolio
        </Link>
        <Link href={links.contact} className={btnAmber}>
          Contact Us
        </Link>
      </div>
    </section>
  );
}
