import type { Metadata } from "next";
import ClientForm from "./ClientForm";
import { container } from "@/lib/ui";

export const metadata: Metadata = { title: "Design Briefing - Client Form" };

export default function ClientFormPage() {
  return (
    <section className={`${container} grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-16`}>
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <h1 className="display rise text-[clamp(2.4rem,4.6vw,4.25rem)] text-blue">Design Briefing Client Form</h1>
          <div className="mt-10 rounded-sm bg-night p-8 text-white">
            <h2 className="display text-3xl text-amber">Step 1</h2>
            <p className="mt-4 leading-relaxed text-white/85">
              When you click &apos;submit form&apos; button, your completed forms will be automatically emailed to us and
              you will be directed to step 2 of the process.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:col-span-8">
        <ClientForm />
      </div>
    </section>
  );
}
