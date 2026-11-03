import type { Metadata } from "next";
import SimpleForm from "@/components/SimpleForm";
import Seal from "@/components/Seal";
import { site } from "@/lib/site";
import { container } from "@/lib/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Contact Our Professional Construction Company in Yate" };

export default function ContactPage() {
  return (
    <section className="bg-night text-white">
      <div className={`${container} grid gap-16 py-20 md:py-28 lg:grid-cols-12 lg:gap-20`}>
        <div className="lg:col-span-5">
          <h3 className="rise text-lg font-semibold text-amber">Almost There....</h3>
          <h1 className="display rise mt-4 text-[clamp(2.5rem,5.5vw,5rem)] [animation-delay:80ms]">Contact us at Scott Brothers</h1>
          <div className="rise mt-8 space-y-5 text-lg leading-relaxed text-white/80 [animation-delay:160ms]">
            <p>
              The best thing to do is have a quick chat, we can discuss your requirements, explore the options and
              provide you with the necessary information so you can make an informed decision.
            </p>
            <p>
              No pushy sales tactics or cowboy tricks, just honest advice from a reputable company that is driven by
              passion, expertise and pride!
            </p>
            <p className="font-semibold text-white">
              All projects are delivered with precision, integrity and are backed by our 15-year guarantee!
            </p>
          </div>

          <Reveal as="dl" kind="up" delay={100} className="mt-12 grid gap-8 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div>
              <dt className="text-sm font-semibold text-white/55">Opening Times</dt>
              <dd className="mt-2 text-lg">
                Tuesday - Saturday 8am-4pm
                <span className="block text-white/70">Quotation by appointment only.</span>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-white/55">Find Us</dt>
              <dd className="mt-2 text-lg">{site.address}</dd>
            </div>
            <div className="sm:col-span-2 lg:col-span-1 xl:col-span-2">
              <dt className="text-sm font-semibold text-white/55">Contact Us</dt>
              <dd className="mt-2">
                <a href={site.phoneHref} className="display block text-3xl hover:text-amber">
                  {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="mt-2 block text-lg hover:text-amber">
                  {site.email}
                </a>
              </dd>
            </div>
          </Reveal>
        </div>

        <Reveal as="div" kind="up" delay={200} className="relative lg:col-span-7">
          <Seal className="absolute -top-14 right-0 hidden w-36 lg:block" />
          <div className="rounded-sm bg-white p-6 text-ink sm:p-8 md:p-12">
            <p className="display max-w-[22ch] text-[clamp(1.6rem,2.6vw,2.25rem)] text-blue">
              We would love to hear about your garden design project!
            </p>
            <p className="mt-4 text-lg text-ink/75">Please fill out our client form below, we will respond within 24 hours!</p>
            <div className="mt-9">
              <SimpleForm
                fields={[
                  { label: "Name*", name: "name", placeholder: "Name" },
                  { label: "Contact Number*", name: "phone", placeholder: "Phone Number", type: "tel" },
                  { label: "Your Email*", name: "email", placeholder: "Your email address", type: "email" },
                  { label: "How Can We Help?*", name: "message", placeholder: "How Can We Help?", multiline: true },
                ]}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
