import Image from "next/image";
import Link from "next/link";
import Seal from "@/components/Seal";
import Stars from "@/components/Stars";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";
import { SocialIcon } from "@/components/Social";
import { homeProjects, links, services, site } from "@/lib/site";
import { btn, btnAmber, btnBlue } from "@/lib/ui";

export default function Home() {
  return (
    <>
      <p className="bg-blue px-5 py-2.5 text-center text-sm font-medium text-white">
        All projects are delivered with precision, integrity and are backed by our 15-year guarantee!
      </p>
        {/* 1. Luxury Landscaping Made Affordable */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[90rem] items-center gap-12 px-5 pb-20 pt-10 lg:items-start md:px-10 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-10">
            <div className="lg:col-span-7 lg:pt-14">
              <h2 className="display rise text-[clamp(2.2rem,5.6vw,5.5rem)] text-blue">
                Luxury Landscaping Made Affordable!
              </h2>
              <p className="rise mt-7 max-w-[54ch] text-lg leading-relaxed text-ink/80 [animation-delay:120ms] md:text-xl">
                Turning your outdated garden space into something you can really show off, We&apos;re an award-winning
                premium finish landscaping company in Bristol, covering the south west with pride.
              </p>
              <p className="rise mt-5 max-w-[54ch] text-lg font-semibold [animation-delay:200ms]">
                Speak with our team today to find out the true potential of your home!
              </p>
              <div className="rise mt-9 flex flex-wrap items-center gap-x-8 gap-y-5 [animation-delay:280ms]">
                <Link href={links.contact} className={btnAmber}>
                  Click here to speak with our team
                </Link>
                <p className="flex items-center gap-3 text-sm font-medium text-ink/75">
                  <Stars className="text-lg" />- 5 star rated by real clients!
                </p>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <Reveal as="div" kind="clip" delay={250} className="relative aspect-[4/5] overflow-hidden rounded-t-[12rem] lg:aspect-[5/6] rounded-b-sm lg:-mr-[max(0px,calc((100vw-90rem)/2+2.5rem))]">
                <Image
                  src="/img/hero.jpg"
                  alt="Timber pergola over a hot tub, with a rendered raised bed, new fencing and an outdoor bar"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-[30%_center]"
                />
              </Reveal>
              <Reveal as="div" kind="scale" delay={700} className="absolute -bottom-12 -left-3 w-32 sm:w-44 lg:-left-20 lg:w-56">
                <Seal />
              </Reveal>
            </div>
          </div>
        </section>

        {/* 2. Your Trusted Landscaping Company */}
        <section className="bg-limewash">
          <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-24 md:px-10 lg:grid-cols-12 lg:gap-16 lg:py-32">
            <div className="lg:col-span-5">
              <Reveal as="h1"  className="display text-[clamp(2.2rem,5vw,4.5rem)]">Your Trusted Landscaping Company</Reveal>
              <Reveal as="div" kind="clip" delay={150} className="relative mt-10 aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/img/builder.jpg"
                  alt="Sandstone patio and new lawn behind a Cotswold stone house"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-3">
              <Reveal as="div" kind="up" delay={100} className="max-w-[62ch] space-y-5 text-lg leading-relaxed text-ink/80">
                <p className="wide text-xl font-bold text-blue">
                  Scott Brothers UK LTD was originally founded in 2018 by Kirk J Scott.
                </p>
                <p>With decades of experience in our team, an eye for detail and a passion for creating enchanting places.</p>
                <p>We have built the trusted reputation you may know in Bristol and beyond.</p>
                <p>
                  With clients spanning the southwest from Cheshire to Cornwall, those who favour quality, passion, and
                  premium-grade materials for their homes, we have made a very reputable name for ourselves with our
                  Landscaping, which is top-tier only!
                </p>
                <p>
                  Over the years, our team has grown and so have our services, from fixing cowboy jobs to producing
                  spectacular results, we have a very well-knit team that is skilled in Landscaping, Kitchen Installs,
                  Extensions and Bathroom Installations.
                </p>
              </Reveal>
              <Link href={links.contact} className={`${btnBlue} mt-9`}>
                Find Out More
              </Link>
              <Reveal as="p" kind="left" className="display mt-16 max-w-[30ch] border-l-4 border-amber pl-6 text-[clamp(1.35rem,2.2vw,1.9rem)] !leading-[1.2] text-blue">
                We believe our experience, enthusiasm and innovative approach to our projects ensures that your dream
                space is achieved whilst keeping within that important budget.
              </Reveal>
            </div>
          </div>
        </section>

        {/* 3. Testimonial */}
        <section className="bg-blue text-white">
          <div className="mx-auto grid max-w-[90rem] gap-14 px-5 py-24 md:px-10 lg:grid-cols-12 lg:py-28">
            <Reveal as="figure"  className="lg:col-span-8">
              <Stars className="text-xl" />
              <h3 className="display mt-6 text-[clamp(2.2rem,5vw,4.25rem)]">&quot;Nothing was to much Trouble&quot;</h3>
              <blockquote className="mt-8 max-w-[60ch] text-xl leading-relaxed text-white/90">
                Kirk ,Matt &amp; Tom have totally transformed my back garden its now a lovely place to unwind &amp; relax .
                Nothing was to much trouble for them &amp; so helpful with ideas to maximize the space we had. A great big
                thank you for all.
              </blockquote>
              <figcaption className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3">
                <span className="wide font-bold">Mrs H - Bristol</span>
                <Link href={links.testimonials} className="font-semibold text-amber underline-offset-4 hover:underline">
                  Read More &gt;
                </Link>
              </figcaption>
            </Reveal>
            <Reveal as="div" kind="up" delay={200} className="flex flex-col justify-end border-t border-white/25 pt-10 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <p className="wide text-2xl font-bold">If you&apos;d like to work with us, you can...</p>
              <Link href={links.contact} className={`${btnAmber} mt-7 self-start`}>
                Book your home consultation here!
              </Link>
            </Reveal>
          </div>
        </section>

        {/* 4. Restoring The Past, Building The Future */}
        <section className="relative overflow-hidden bg-night text-white">
          <div className="mx-auto max-w-[90rem] px-5 py-24 md:px-10 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <Reveal as="p" aria-hidden="true" kind="left" className="display outline-num text-[clamp(4.5rem,10.5vw,9.5rem)] !leading-[0.85]">
                  <CountUp to={697} suffix="+" />
                </Reveal>
              </div>
              <Reveal as="div" kind="up" delay={120} className="lg:col-span-7">
                <h2 className="display text-[clamp(1.9rem,4.2vw,3.75rem)]">
                  Restoring The Past, Building The Future As Your Local Landscaping Company!
                </h2>
                <div className="mt-9 max-w-[62ch] space-y-5 text-lg leading-relaxed text-white/80">
                  <p>
                    We are proud to have completed over 697+ projects for local customers, with a strong reputation and
                    commonly known as your trusted landscape company, with solid reviews as strong as the foundations we
                    lay.
                  </p>
                  <p className="font-semibold text-amber">
                    Recently, an award-winning landscaping Design Company through the 2025 garden rush!
                  </p>
                  <p>
                    You would have probably seen us on your street doing Extensions, Landscaping, Bathroom Fitting, and
                    Kitchen Installs.
                  </p>
                  <p>
                    These are our 4 most popular services, also, it&apos;s really our bread and butter in the building
                    industry.
                  </p>
                  <p>We&apos;re experienced building professionals who put our name to every build.</p>
                  <p>You can rest assured that nothing but perfect really fits our standard,</p>
                </div>
              </Reveal>
            </div>

            <Reveal as="div" kind="scale" className="mt-16 grid overflow-hidden rounded-sm bg-amber text-night md:mt-20 md:grid-cols-12">
              <div className="p-7 sm:p-8 md:col-span-5 md:p-12">
                <p className="display text-[clamp(2rem,4vw,3.25rem)]">Have a project?</p>
                <p className="display mt-2 text-[clamp(2rem,4vw,3.25rem)]">Need expert advice?</p>
                <p className="wide mt-5 text-xl font-bold">Then you&apos;re in the right place.</p>
              </div>
              <div className="flex flex-col justify-center gap-5 bg-amber-soft/60 p-7 text-lg leading-relaxed sm:p-8 md:col-span-7 md:p-12">
                <p>
                  Just let us know your vision, and we can put together a picture of how it will plan out, with our home
                  consultation.
                </p>
                <p className="font-semibold">You can decide for yourself, no pressure and stress-free.</p>
                <Link href={links.contact} className={`${btn} self-start bg-night text-white hover:bg-blue`}>
                  Book your home consultation here!
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 5. Your home, our priority: services */}
        <section className="mx-auto max-w-[90rem] px-5 py-24 md:px-10 lg:py-32">
          <Reveal as="h2"  className="max-w-4xl">
            <span className="display block text-[clamp(2.2rem,5.5vw,5rem)] text-blue">Your home, our priority!</span>
            <span className="wide mt-4 block text-xl font-semibold text-pennant md:text-2xl">
              Let&apos;s create a home you&apos;re proud to show off.
            </span>
          </Reveal>

          <div className="mt-14 space-y-20 md:mt-20 md:space-y-24 lg:space-y-32">
            {services.map((s, i) => {
              const flip = i % 2 === 1;
              return (
                <article key={s.title} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                  <Reveal as="div"
                    kind="clip"
                    className={`relative aspect-[4/3] overflow-hidden rounded-sm lg:col-span-7 ${
                      flip ? "lg:order-2 lg:col-start-6" : ""
                    } ${i >= 2 ? "lg:aspect-[5/4]" : ""}`}
                  >
                    <Image src={s.image} alt={s.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
                  </Reveal>
                  <Reveal as="div" kind={flip ? "left" : "right"} delay={150} className={`lg:col-span-5 ${flip ? "lg:order-1 lg:col-start-1 lg:row-start-1" : ""}`}>
                    <h3 className="display text-[clamp(2rem,3.6vw,3.25rem)]">{s.title}</h3>
                    <p className="wide mt-6 text-xl font-bold text-blue">{s.lead}</p>
                    <div className="mt-5 max-w-[50ch] space-y-4 text-lg leading-relaxed text-ink/75">
                      {s.body.map((b) => (
                        <p key={b}>{b}</p>
                      ))}
                    </div>
                    <Link href={links.contact} className={`${btnBlue} mt-8`}>
                      Click here to speak with us today!
                    </Link>
                  </Reveal>
                </article>
              );
            })}
          </div>
        </section>

        {/* 6. Building a better future */}
        <section className="bg-limewash">
          <div className="mx-auto grid max-w-[90rem] items-stretch lg:grid-cols-2">
            <Reveal as="div" kind="clip" className="relative min-h-[26rem] overflow-hidden sm:min-h-[34rem] lg:min-h-[44rem]">
              <Image
                src="/img/kirk.jpg"
                alt="Kirk Scott smiling on site with a length of timber"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[50%_25%]"
              />
            </Reveal>
            <Reveal as="div" kind="up" delay={150} className="flex flex-col justify-center px-5 py-16 md:px-10 md:py-20 lg:px-20">
              <h3 className="display text-[clamp(2.4rem,5vw,4.75rem)] text-blue">Building a better future for you!</h3>
              <p className="wide mt-6 text-2xl font-bold">Your vision made real in just a click!</p>
              <p className="mt-10 flex items-center gap-4 text-lg font-semibold">
                <Stars className="text-2xl" />
                Top rated by 100+ clients
              </p>
              <Link href={links.contact} className={`${btnBlue} mt-9 self-start`}>
                Contact Us Here!
              </Link>
            </Reveal>
          </div>
        </section>

        {/* 7. Projects */}
        <section className="bg-night text-white">
          <div className="mx-auto max-w-[90rem] px-5 py-24 md:px-10 lg:py-28">
            <div className="grid gap-4 md:grid-cols-3 md:gap-5">
              {homeProjects.map((p, i) => (
                <Reveal as="div" key={p.name} kind="up" delay={i * 120} className={i === 1 ? "md:translate-y-12" : ""}>
                <Link href={p.href} className="group relative block overflow-hidden rounded-sm">
                  <div className="relative aspect-[4/3] md:aspect-[3/4]">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/90 to-transparent p-6 pt-20">
                    <span className="display block text-3xl">{p.name}</span>
                  </span>
                </Link>
                </Reveal>
              ))}
            </div>
            <div className="mt-20 text-center md:mt-24">
              <Link href={links.portfolio} className={btnAmber}>
                View All Our Projects
              </Link>
            </div>
          </div>
        </section>

        {/* 8. Follow us on social */}
        <section className="bg-amber text-night">
          <div className="mx-auto grid max-w-[90rem] items-center gap-10 px-5 py-20 md:px-10 lg:grid-cols-12">
            <Reveal as="h2"  className="lg:col-span-8">
              <span className="display block text-[clamp(2.2rem,5.5vw,5rem)]">Follow Us On Social</span>
              <span className="wide mt-4 block max-w-[40ch] text-xl font-semibold md:text-2xl">
                Leading the way in the Industry with an average of 4 million views a month!
              </span>
            </Reveal>
            <ul className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              {(["facebook", "instagram", "youtube"] as const).map((n) => (
                <Reveal as="li" key={n} kind="scale" delay={100 + ["facebook", "instagram", "youtube"].indexOf(n) * 100}>
                  <Link
                    href={site.social[n]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-night text-white transition-[background-color,translate] duration-300 hover:-translate-y-1 hover:bg-blue"
                  >
                    <span className="sr-only">{n}</span>
                    <SocialIcon name={n} className="h-6 w-6" />
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
    </>
  );
}
