import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SimpleForm from "@/components/SimpleForm";
import Stars from "@/components/Stars";
import { links, site, zyro } from "@/lib/site";
import { btnAmber, btnBlue, container } from "@/lib/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Landscape Gardeners - Scott Brothers" };

const features = [
  {
    title: "Pergola",
    body: [
      "A huge surge in the demand for a Pergola throughout 2025 with many already booked in for 2026.",
      "Considering one for your garden?",
      "Contact us today!",
    ],
    image: zyro("landscape-renovation-and-design-with-hot-tub-in-bristol-and-south-west-england-AR0b0lgnk3TrLEQY.jpg", 1200),
    alt: "Pergola over a hot tub in a landscaped Bristol garden",
    cta: "contact us here for more information",
  },
  {
    title: "Fencing",
    body: [
      "Making your garden surroundings secure, private, may I add, helps your garden stand out with the beautiful backdrop of sublime wood.",
      "From quick repairs to full garden fencing installs, we do it all. We cover the South West for all your garden needs.",
      "Our team have decades of experience in fencing and is very efficient in order to reduce the stress of having your garden too exposed.",
    ],
    image: zyro("5a-hazelgrove-edits-31-A1aerL6O41U3KZVq.jpg", 1200),
    alt: "New closeboard timber fencing around a landscaped garden",
  },
  {
    title: "Decking",
    body: [
      "Garden Rooms to beautiful decking, we turn your outside space into intriguing, lovable spaces.",
      "Making your garden the best in the street is our aim, from your vision, helping you make it a reality.",
      "Our experienced team can fully map out the garden design that WOW's you and your neighbours!",
    ],
    image: zyro("237108296_2043488182455527_2096327363736724891_n-YanDjpEDoRtQOG2n.jpg", 1200),
    alt: "Timber decking in a finished garden",
  },
];

const services = [
  {
    title: "Extension Building Contactors",
    body: [
      "Enhance your home for added value and comfort.",
      "We have assisted families in extending their homes with ease and stress-free!",
      "Contact our team today to see the possibilities for your home!",
    ],
    image: "/img/extension.jpg",
  },
  {
    title: "Award Winning Landscape Design",
    body: [
      "Professional garden design - Create your dream garden with your vision and with our skills, we can make your dreams become a reality.",
      "Contact our team to help you design your new garden!",
    ],
    image: "/img/builder.jpg",
  },
  {
    title: "A-Grade Kitchens",
    body: [
      "The kitchen is the heart of the home, where the family hangs out and gathers around the dinner table.",
      "If you would like a gorgeous bathroom, bespoke to you, then you should give us a call.",
    ],
    image: "/img/kitchen.jpg",
  },
  {
    title: "Luxurious Bathroom Fitter",
    body: [
      "Maybe it's time to freshen up with a modern look that screams class, elegance and is very practical for the family",
      "Get in touch with our bathroom fitters for a transformation you never knew was possible.",
    ],
    image: "/img/bathroom.jpg",
  },
];

export default function LandscapingPage() {
  return (
    <>
      {/* Hero: copy left, three-photo collage right */}
      <section className={`${container} grid gap-12 pb-20 pt-12 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-16`}>
        <div className="lg:col-span-6 lg:pt-8">
          <h1 className="display rise text-[clamp(2.2rem,6vw,5.75rem)] text-blue">Your Local Landscape Gardeners</h1>
          <p className="wide rise mt-7 text-xl font-bold [animation-delay:100ms]">
            The neighbours will be jealous, but you will love the outcome!
          </p>
          <div className="rise mt-6 max-w-[54ch] space-y-3 text-lg leading-relaxed text-ink/80 [animation-delay:180ms]">
            <p>As award-winning landscape gardeners and we have a high reputation when it comes to garden design.</p>
            <p>Some would even call us the modern-day Alan Titchmarsh.</p>
            <p className="display text-2xl text-blue">But better!</p>
            <p>Click below to find out the full possibilities of your garden.</p>
          </div>
          <Link href={links.contact} className={`${btnAmber} rise mt-8 [animation-delay:260ms]`}>
            Click here!
          </Link>
        </div>
        <div className="grid h-[26rem] grid-cols-2 grid-rows-2 gap-2 sm:h-[34rem] sm:gap-3 lg:col-span-6 lg:h-auto lg:min-h-[38rem]">
          <Reveal as="div" kind="clip" delay={200} className="relative row-span-2 overflow-hidden rounded-t-[8rem] rounded-b-sm">
            <Image src="/img/standrews.jpg" alt="Victorian front garden with white gravel curves and steel edging" fill priority sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
          </Reveal>
          <Reveal as="div" kind="clip" delay={350} className="relative overflow-hidden rounded-sm">
            <Image src={zyro("238706851_2043489499122062_5822640630512619556_n-YNqV8jg9EzUeVg2y.jpg", 900)} alt="Landscaped garden by Scott Brothers" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
          </Reveal>
          <Reveal as="div" kind="clip" delay={500} className="relative overflow-hidden rounded-sm">
            <Image src={zyro("img-mk3jlqqgG4cvMDj1.jpeg", 900)} alt="Finished garden makeover" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
          </Reveal>
        </div>
      </section>

      <div className="grid gap-2 px-2 sm:gap-3 sm:px-3 md:grid-cols-[1.4fr_1fr]">
        <Reveal as="div" kind="clip" className="relative aspect-[16/10] overflow-hidden rounded-sm">
          <Image src={zyro("5a-hazelgrove-edits-52-dOqMN6wzaMIo96yw.jpg", 1800)} alt="Project Hazel garden" fill sizes="60vw" className="object-cover" />
        </Reveal>
        <Reveal as="div" kind="clip" delay={150} className="relative aspect-[16/10] overflow-hidden rounded-sm md:aspect-auto">
          <Image src={zyro("img-dJoogwwLr1F2Zq9n.jpg", 1200)} alt="Landscaped garden detail" fill sizes="40vw" className="object-cover" />
        </Reveal>
      </div>

      <section className={`${container} grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16`}>
        <Reveal as="div"  className="lg:col-span-6">
          <h2 className="display text-[clamp(2rem,4.4vw,3.9rem)]">Let&apos;s Create Your Garden into a Space You’ll Love...</h2>
          <h3 className="wide mt-8 text-2xl font-bold text-blue">Looking to refresh your outdoor space?</h3>
          <div className="mt-6 max-w-[58ch] space-y-4 text-lg leading-relaxed text-ink/80">
            <p>At Scott Brothers, our skilled team of landscape gardeners can design and create gardens that are both beautiful and practical.</p>
            <p>From complete garden makeovers to smaller landscaping projects, we’ve helped homeowners make the most of their outdoor spaces.</p>
            <p>Whether it’s a new patio, a fresh lawn, or a full redesign, we’ll work with you to bring your ideas to life.</p>
            <p>If you’re ready to start your garden transformation, we’d love to hear from you.</p>
            <p className="font-semibold text-ink">Contact our friendly team today and let’s create the perfect outdoor space for your home.</p>
          </div>
          <Link href={links.contact} className={`${btnBlue} mt-8`}>
            Contact Us today!
          </Link>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 lg:col-span-6">
          <Reveal as="div" kind="clip" delay={100} className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <Image src={zyro("ALVESTON-mnllO5BwGZfVqrwe.jpg", 900)} alt="Planting detail in an Alveston garden" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
          </Reveal>
          <Reveal as="div" kind="clip" delay={300} className="relative mt-10 aspect-[3/4] overflow-hidden rounded-sm sm:mt-16">
            <Image src={zyro("photo-2023-03-09-14-22-27-m5KPLOqV20sVWqLW.jpg", 900)} alt="New patio and lawn" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
          </Reveal>
        </div>
      </section>

      {/* Pergola, Fencing, Decking */}
      <section className="bg-limewash">
        <div className={`${container} py-20 md:py-28`}>
          <div className="grid gap-12 md:grid-cols-3 md:gap-6 lg:gap-10">
            {features.map((f, i) => (
              <Reveal as="article" key={f.title} kind="up" delay={i * 140} className={i === 1 ? "md:mt-20" : ""}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image src={f.image} alt={f.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <h2 className="display mt-7 text-[clamp(2.25rem,3.6vw,3.25rem)] text-blue">{f.title}</h2>
                <div className="mt-4 space-y-3 text-lg leading-relaxed text-ink/80">
                  {f.body.map((b) => (
                    <p key={b}>{b}</p>
                  ))}
                </div>
                {f.cta && (
                  <Link href={links.contact} className="mt-5 inline-block font-bold text-blue underline decoration-amber decoration-2 underline-offset-4 hover:text-blue-deep">
                    {f.cta}
                  </Link>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-night text-white">
        <div className={`${container} grid gap-14 py-20 md:py-28 lg:grid-cols-12 lg:gap-20`}>
          <Reveal as="div"  className="lg:col-span-5">
            <h2 className="display text-[clamp(2.2rem,5vw,4.5rem)]">Contact us</h2>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-white/80">
              If you have any questions or would like advice from skilled professionals, please let us know below, and we
              will respond within 24 hours.
            </p>
            <div className="mt-12 grid gap-8 border-t border-white/15 pt-10 sm:grid-cols-2">
              <div>
                <h6 className="text-sm font-semibold text-white/55">Call/Email us at...</h6>
                <a href={site.phoneHref} className="display mt-2 block text-2xl hover:text-amber">
                  {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="mt-1 block hover:text-amber">
                  {site.email}
                </a>
              </div>
              <div>
                <h6 className="text-sm font-semibold text-white/55">Opening hours</h6>
                <p className="mt-2">Monday - Friday: 8:00 - 16:00</p>
                <p>Saturday: 8:00 - 16:00</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </Reveal>
          <Reveal as="div" kind="up" delay={150} className="lg:col-span-7">
            <SimpleForm
              tone="dark"
              fields={[
                { label: "Name*", name: "name", placeholder: "Your name" },
                { label: "Phone*", name: "phone", placeholder: "Your Phone Number", type: "tel" },
                { label: "Your email*", name: "email", placeholder: "Your email address", type: "email" },
                { label: "Message*", name: "message", placeholder: "Enter your message", multiline: true },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* Landscaping to Extensions */}
      <section className={`${container} py-20 md:py-28`}>
        <Reveal as="div"  className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="wide text-xl font-bold text-pennant">Landscaping to Extensions</h2>
            <h2 className="display mt-3 text-[clamp(2.6rem,6vw,5.5rem)] text-blue">We can do it all!</h2>
          </div>
          <Stars className="text-2xl" />
        </Reveal>
        <ul className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} kind="up" delay={i * 110}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image src={s.image} alt="" fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
              <h3 className="display mt-6 text-2xl">{s.title}</h3>
              <div className="mt-3 space-y-3 leading-relaxed text-ink/75">
                {s.body.map((b) => (
                  <p key={b}>{b}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </ul>
        <div className="mt-14">
          <Link href={links.contact} className={btnBlue}>
            Click here to speak with us today!
          </Link>
        </div>
      </section>
    </>
  );
}
