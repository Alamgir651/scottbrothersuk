import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { firstImage } from "@/lib/projects";
import { links, zyro } from "@/lib/site";
import { btnAmber, btnBlue, btnNight, container } from "@/lib/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Garden Consultancy Yate" };

const steps = [
  {
    title: "Step 1",
    body: "Complete and Submit your 'Client Briefing Form'. This helps us understand who will be using the space, your general needs, taste and budget.",
  },
  { title: "Step 2", body: "Take measurements & draw your plan using our easy-to-follow instructions." },
  { title: "Step 3", body: "Send us some photos and we will get to work....YES, IT'S THAT SIMPLE!" },
];

const prices = [
  { size: "Under 100m2", price: "£249 + VAT", total: "(£298.80)" },
  { size: "100m2-200m2", price: "£349 + VAT", total: "(£418.80)" },
  { size: "200m2-500m2", price: "£499 + VAT", total: "(£598.80)" },
];

const included = [
  "An initial scale concept design, based on your completed Client Briefing Form, Measurement Plan & Photos",
  "Multiple still renders of your design from different perspectives",
  "One 'Birds eye view' image with basic information notes",
  "One editing session with unlimited changes (if needed)",
  "Final amended design with still renders & 3D information image.",
];

const extras = [
  { item: "Walk through MP4 Video £39 + VAT" },
  { item: "Additional Editing Session £99 + VAT" },
  { item: "Site Visit To Take Measurements & Discuss Options £49 + VAT", note: "(Within 30 miles of BS34)" },
];

const recent = [
  { name: "Project Paddock", slug: "stoke-gifford-landscaping" },
  { name: "Project Friary", slug: "winterbourne-landscapers" },
  { name: "Project Clayton", slug: "design-my-space-clayton" },
];

export default function DesignMySpacePage() {
  return (
    <>
      <PageHero
        title="Garden Consultancy Near Me"
        image={zyro("design-space-garden-AQEvG4E2KNTnVZXq.jpg", 2000)}
        alt="3D design render of a garden with a garden room"
      />

      <section className={`${container} grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16`}>
        <Reveal as="h2"  className="display text-[clamp(2rem,4.6vw,4rem)] text-blue lg:col-span-5">Let&apos;s unleash some creativity..</Reveal>
        <Reveal as="div" kind="up" delay={120} className="max-w-[62ch] space-y-5 text-lg leading-relaxed text-ink/80 lg:col-span-7 lg:pt-3">
          <p>
            Our goal is to create a space that reflects your unique personality and style. A place where you can escape
            to and feel at peace.
          </p>
          <p>
            Whether you want a vibrant and colourful garden or a serene and calming oasis, Scott Brothers UK LTD is here
            to bring your vision to life.
          </p>
          <p>
            Together, we will create a space that you will love and enjoy for years to come. So let&apos;s embark on this
            journey together and watch your garden flourish into a magical world of its own.
          </p>
          <p className="wide text-xl font-bold text-blue">Book your garden consultation today.</p>
          <div className="space-y-5 border-l-4 border-amber pl-6">
            <p>
              Our design options are structured to give a huge cost saving whilst still gaining a life-like insight as to
              what your space could look like once transformed.
            </p>
            <p>
              We use a simplistic measurement system, meaning our designs cannot be used as detailed working/planning
              drawings and instead, are to be used as a visionary of what can be achieved.
            </p>
          </div>
        </Reveal>
      </section>

      {/* The three steps are a real sequence, so they are numbered */}
      <section className="bg-blue text-white">
        <div className={`${container} py-20 md:py-28`}>
          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} kind="up" delay={i * 150} className="border-t-2 border-amber pt-6">
                <span aria-hidden="true" className="display outline-num text-7xl">
                  {i + 1}
                </span>
                <h3 className="display mt-4 text-3xl">{s.title}</h3>
                <p className="mt-4 max-w-[38ch] text-lg leading-relaxed text-white/85">{s.body}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal as="div"  className="mt-16 grid gap-10 border-t border-white/20 pt-12 lg:grid-cols-12">
            <div className="space-y-4 text-lg leading-relaxed text-white/85 lg:col-span-7">
              <p>
                On completion of Step 3 we will send your invoice for payment. Work on your design will only commence
                once payment has been received.
              </p>
              <p>We will do our absolute best to have all your initial designs completed within 7-10 day of payment.</p>
            </div>
            <div className="lg:col-span-5">
              <h3 className="display text-3xl">Start Step 1</h3>
              <p className="mt-3 text-white/85">Click the button bellow to fill out our client information form and start today!</p>
              <Link href={links.clientForm} className={`${btnAmber} mt-6`}>
                get started
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`${container} py-20 md:py-28`}>
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal as="h2"  className="display text-[clamp(2.2rem,5vw,4.5rem)] lg:col-span-4">Prices</Reveal>
          <div className="space-y-4 text-lg leading-relaxed text-ink/80 lg:col-span-8 lg:pt-3">
            <p>
              Measure the maximum width and depth of the area you want designed, then use a calculator to multiply the
              two measurements to find out which option you will need. EXAMPLE - (5m wide X 10m deep = 50m2)
            </p>
            <p>If the area you have is over 500 M2 then please get in touch for a quotation</p>
            <p className="font-semibold text-blue">Add a Walk-through MP4 Video for £39 + VAT</p>
          </div>
        </div>

        <ul className="mt-14 grid gap-4 md:grid-cols-3">
          {prices.map((p, i) => (
            <Reveal as="li" key={p.size} kind="scale" delay={i * 120} className={`rounded-sm p-7 sm:p-8 md:p-10 ${i === 1 ? "bg-night text-white" : "bg-limewash"}`}>
              <p className="font-semibold">{p.size}</p>
              <p className="display mt-6 text-5xl">{p.price.replace(" + VAT", "")}</p>
              <p className={`mt-2 ${i === 1 ? "text-white/70" : "text-pennant"}`}>
                + VAT {p.total}
              </p>
            </Reveal>
          ))}
        </ul>
        <Link href={links.contact} className={`${btnBlue} mt-10`}>
          Request a quote
        </Link>

        <Reveal as="div"  className="mt-16 grid gap-12 md:mt-20 lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="display text-3xl text-blue">Whats Included</h3>
            <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
              {included.map((item) => (
                <li key={item} className="flex gap-4 py-4 text-lg">
                  <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-amber" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display text-3xl text-blue">Extras with our Garden Consultation</h2>
            <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
              {extras.map((e) => (
                <li key={e.item} className="flex gap-4 py-4 text-lg">
                  <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-amber" />
                  <span>
                    {e.item}
                    {e.note && <span className="block text-base text-pennant">{e.note}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="bg-night text-white">
        <div className={`${container} py-20 md:py-28`}>
          <div className="grid gap-8 lg:grid-cols-12">
            <Reveal as="h2"  className="display text-[clamp(2rem,4.6vw,4rem)] lg:col-span-5">Recent Projects</Reveal>
            <p className="max-w-[60ch] text-lg leading-relaxed text-white/80 lg:col-span-7 lg:pt-3">
              Need some inspiration to get you started? Have a look at a few of our recent projects where we worked with
              clients to designed new gardens using this service
            </p>
          </div>
          <ul className="mt-14 grid gap-5 md:grid-cols-3">
            {recent.map((p, i) => {
              const img = firstImage(p.slug);
              return (
                <Reveal as="li" key={p.slug} kind="up" delay={i * 120}>
                  <Link href={`/${p.slug}`} className="group relative block aspect-[4/3] md:aspect-[4/5] overflow-hidden rounded-sm bg-blue">
                    {img && (
                      <Image src={img} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    )}
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/90 to-transparent p-6 pt-20">
                      <span className="display block text-3xl">{p.name}</span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-amber text-night">
        <Reveal as="div"  className={`${container} flex flex-wrap items-center justify-between gap-8 py-14 md:py-16`}>
          <div>
            <h3 className="display text-[clamp(2rem,4vw,3.25rem)]">Ready to get started?</h3>
            <p className="mt-3 text-lg font-medium">Fill out our client form and take the next step to create a garden of your dreams.</p>
          </div>
          <Link href={links.clientForm} className={btnNight}>
            get started
          </Link>
        </Reveal>
      </section>
    </>
  );
}
