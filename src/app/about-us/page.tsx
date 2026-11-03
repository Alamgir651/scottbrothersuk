import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { zyro } from "@/lib/site";
import { container } from "@/lib/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "About Us Your Trusted Builders In Yate" };

const team = [
  { name: "Lucy", role: "Director", image: zyro("lucy-scott-bros-gardner-YNqOeZOl8zU0bnZz.jpg", 900), alt: "Lucy, director" },
  { name: "Kirk", role: "Director", image: "/img/kirk.jpg", alt: "Kirk, director, on site" },
  { name: "Dexter & Nola", role: "Side Kicks", image: zyro("scot-bros-dogs-ALpBZDOLWZsyokPA.jpg", 900), alt: "Dexter and Nola, the company dogs" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" image={zyro("ALVESTON-AE00wvzRLGcPqD2N.jpg", 2000)} alt="Raised timber planter in a finished Alveston garden">
        <p>
          Scott Brothers UK LTD was originally founded in 2018 by Kirk J Scott, since then we have flourished and gained
          a reputation of building and refurbishing high quality modern homes in Bristol and the South West of England.
        </p>
      </PageHero>

      <section className={`${container} py-20 md:py-28`}>
        <Reveal as="p"  className="display max-w-[34ch] text-[clamp(1.5rem,2.6vw,2.25rem)] !leading-[1.2] text-blue">
          Our company now specialises in Landscape Renovation and Design, creating inviting, timeless and bespoke spaces
          for home or public environment&apos;s.
        </Reveal>
        <Reveal as="p" kind="up" delay={120} className="mt-8 max-w-[62ch] text-lg leading-relaxed text-ink/80">
          We believe our experience, enthusiasm and innovative approach to our projects ensures that your dream space is
          achieved whilst keeping within that important budget.
        </Reveal>
      </section>

      <section className="bg-limewash">
        <div className={`${container} grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16`}>
          <Reveal as="div" kind="clip" className="relative min-h-[20rem] overflow-hidden rounded-sm sm:min-h-[26rem] lg:col-span-5">
            <Image
              src={zyro("ALVESTON-m7VVxko60KFDXM0z.jpg", 1200)}
              alt="Finished garden in Alveston"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal as="div" kind="up" delay={150} className="space-y-12 md:space-y-14 lg:col-span-7">
            <div>
              <h3 className="display text-[clamp(2rem,3.6vw,3.25rem)]">Our Mission</h3>
              <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-ink/80">
                With our years of experience and passion for creating extraordinary landscapes, we are committed to
                delivering exceptional results that will exceed your expectations. Our team of skilled professionals is
                dedicated to turning your vision into reality. We understand that every project is unique, and
                that&apos;s why we approach each one with a fresh and innovative mindset.
              </p>
            </div>
            <div>
              <h3 className="display text-[clamp(2rem,3.6vw,3.25rem)]">Our Vision</h3>
              <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-ink/80">
                Imagine stepping into your own personal oasis, perfectly tailored to your tastes and desires. Our
                Landscape Renovation and Design service aims to create spaces that are not only visually stunning but
                also timeless in their appeal. By carefully selecting the right blend of flora, hardscape elements, and
                lighting, we bring balance and harmony to your surroundings. The end result? A space that will continue
                to captivate and delight for years to come.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`${container} py-20 md:py-28`}>
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal as="h3"  className="display text-[clamp(2.2rem,5vw,4.5rem)] text-blue lg:col-span-5">Our Team</Reveal>
          <p className="max-w-[60ch] text-lg leading-relaxed text-ink/80 lg:col-span-7 lg:pt-4">
            Meet our team of experts! With years of experience and a passion for all things green, we are here to help
            you create the garden of your dreams. Trust in our team to bring your vision to life and create some garden
            envy.
          </p>
        </div>
        <ul className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-6 md:mt-14 md:grid-cols-3">
          {team.map((m, i) => (
            <Reveal as="li" key={m.name} kind="up" delay={i * 140} className={i === 1 ? "md:translate-y-10" : ""}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-limewash">
                <Image src={m.image} alt={m.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <p className="display mt-5 text-3xl">{m.name}</p>
              <p className="mt-1 font-semibold text-pennant">{m.role}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-blue text-white">
        <Reveal as="p" kind="scale" className={`${container} display py-14 text-center text-[clamp(1.5rem,3.4vw,3rem)] md:py-20`}>
          Affordable - Experienced - Friendly - Trustworthy
        </Reveal>
      </section>
    </>
  );
}
