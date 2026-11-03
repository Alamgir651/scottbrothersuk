import type { Metadata } from "next";
import Link from "next/link";
import Stars from "@/components/Stars";
import { links, site } from "@/lib/site";
import { container } from "@/lib/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Bristol Homeowner Testimonials" };

const reviews = [
  {
    title: '"The workmanship was so Neat"',
    name: "Miss R - Bristol",
    body: [
      "Kirk, Matt & Tom have just finished our garden and we are over the moon. Our garden was in a state as we hadn't really touched it since moving into our house 2 years ago and it wasn't our vibe at all. It was messy, hard to maintain and needed an update to suit us. I contacted Kirk and he was more than happy to pop round and give us a quote. Throughout the whole process the communication was great and we didn't have to worry about a thing.",
      "We had been previously let down by another company and in hindsight I am so glad we were, as we then contacted Scott Bros. Kirk, Matt & Tom worked tirelessly in 31 degree heat with no shade, and rain and nothing was too much trouble. We are so pleased with the final result and actually want to spend time in our garden now. The workmanship is so neat and exactly what we wanted, if not better.Thank you so much Kirk and the team, we will definitely have you back in the future and wouldn't hesitate to recommend you to anyone. Thanks again",
    ],
    cta: "Want to speak with our team?",
  },
  {
    title: '"We are over the Moon"',
    name: "Mr & Mrs O - Bristol",
    body: ["Thank you, thank you, thank you, we are over the moon. It has exceeded all of our expectations."],
    cta: "PSSt - Lets talk!",
  },
  {
    title: '"Nothing was to much Trouble"',
    name: "Mrs H - Bristol",
    body: [
      "Kirk ,Matt & Tom have totally transformed my back garden its now a lovely place to unwind & relax . Nothing was to much trouble for them & so helpful with ideas to maximize the space we had. A great big thank you for all.",
    ],
    cta: "Fancy improving your garden?",
  },
  {
    title: '"Delighted with the final Result"',
    name: "Mr & Mrs W - South Glos.",
    body: [
      "Thank you so much for all your hard work, working in the hot sunshine & pouring rain to make our garden a space to enjoy. youve turned an ugly, overgrown and full of sheds garden into a little piece of heaven for us. We cant thank and recommend you enough, we are delighted with the final result.",
    ],
  },
  {
    title: '"Great communication throughout"',
    name: "Mr & Mrs H - South Glos.",
    body: [
      "Great communication throughout the whole process. We had the front of our house painted/repaired, including garage doors. Before and after photos are on the F/B page. Both Kirk and his colleague were hardworking & polite, the job was carried out to a high standard and nothing seemed too much trouble. Would highly recommend, and would not hesitate to use again. PS hubby was pleased as they didn’t eat all the biscuits!",
    ],
    cta: "Click here to talk with us",
  },
  {
    title: '"Really nice and Polite"',
    name: "Mr & Mrs H",
    body: [
      "Absolutely amazing job done building my bike & bin storage. Brilliant quality & built to measure. Highly recommend over buying off the shelf as this will last for life & built to size. Really nice & polite builder. Courteous to passers by & neighbours. Would highly recommend to anyone. Going to start saving for the back garden now. Very happy",
    ],
    cta: "enquire here!",
  },
  {
    title: '"We couldn\'t be Happier"',
    name: "Mr & Mrs W",
    body: ["Thank you so much guys, we still can’t believe what you achieved in less than a week! Excellent work, we couldn’t be happier. Thank you"],
  },
  {
    title: '"Would definitely recommend"',
    name: "Mr & Mrs C",
    body: ["Absolutely amazing job done what a transformation to my garden with my new fencing amazing guy would definitely recommend thanks again Kirk"],
    cta: "Need help? - click here",
  },
  {
    title: '"One in a Million"',
    body: [
      "100% recommend Kirk for any types of building works, the driveway he has completed for us is one in a million, I will always keep him in mind for other works needed in our house",
    ],
    cta: "Contact Us Here!",
  },
];

export default function TestimonialsPage() {
  const [featured, ...rest] = reviews;
  return (
    <>
      <section className="bg-blue text-white">
        <div className={`${container} py-20 md:py-28`}>
          <h3 className="display rise max-w-[20ch] text-[clamp(1.5rem,3vw,2.5rem)] text-amber">
            &quot;There is only one boss, the customer&quot;
          </h3>
          <h4 className="rise mt-3 font-semibold text-white/75 [animation-delay:80ms]">- Sam Walton</h4>
          <h1 className="display rise mt-12 max-w-[14ch] text-[clamp(2.1rem,7vw,6.5rem)] [animation-delay:160ms]">
            Bristol Homeowner Testimonials
          </h1>
        </div>
      </section>

      <section className={`${container} py-20 md:py-28`}>
        {/* The longest review gets the full width */}
        <Reveal as="article"  className="grid gap-10 border-b border-ink/15 pb-16 md:pb-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Stars className="text-2xl" />
            <h3 className="display mt-5 text-[clamp(2.2rem,4.4vw,3.75rem)] text-blue">{featured.title}</h3>
            <p className="wide mt-6 text-lg font-bold">{featured.name}</p>
            <Link href={links.contact} className="mt-6 inline-block font-bold text-blue underline decoration-amber decoration-2 underline-offset-4">
              {featured.cta}
            </Link>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink/80 lg:col-span-7">
            {featured.body.map((b) => (
              <p key={b}>{b}</p>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 columns-1 gap-4 md:mt-20 md:gap-6 md:columns-2 xl:columns-3">
          {rest.map((r, i) => (
            <Reveal as="article"
              key={r.title}
              kind="up" delay={(i % 3) * 110}
              className={`mb-4 break-inside-avoid rounded-sm p-7 sm:p-8 md:mb-6 md:p-10 ${i % 3 === 1 ? "bg-night text-white" : "bg-limewash"}`}
            >
              <Stars />
              <h3 className={`display mt-4 text-[1.75rem] ${i % 3 === 1 ? "" : "text-blue"}`}>{r.title}</h3>
              {r.body.map((b) => (
                <p key={b} className={`mt-5 leading-relaxed ${i % 3 === 1 ? "text-white/85" : "text-ink/80"}`}>
                  {b}
                </p>
              ))}
              {r.name && <p className="wide mt-6 font-bold">{r.name}</p>}
              {r.cta && (
                <Link
                  href={links.contact}
                  className={`mt-4 inline-block font-bold underline decoration-amber decoration-2 underline-offset-4 ${i % 3 === 1 ? "text-amber" : "text-blue"}`}
                >
                  {r.cta}
                </Link>
              )}
            </Reveal>
          ))}
        </div>

        <h6 className="mt-14 text-center text-lg font-semibold">
          <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="text-blue underline decoration-amber decoration-2 underline-offset-4 hover:text-blue-deep">
            Find more customer reviews on our Facebook Page
          </a>
        </h6>
      </section>
    </>
  );
}
