import Image from "next/image";
import { site } from "@/lib/site";
import Social from "./Social";

export default function Footer() {
  return (
    <footer className="bg-limewash">
      <div className="mx-auto max-w-[90rem] px-5 pt-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Image src="/img/logo.png" alt="Scott Brothers UK Ltd" width={600} height={210} className="h-16 w-auto" />
            <h4 className="display mt-10 text-4xl text-blue">Get in touch</h4>
          </div>
          <div className="md:col-span-3">
            <h6 className="text-sm font-semibold text-pennant">Write to us</h6>
            <p className="mt-3 text-lg">{site.address}</p>
          </div>
          <div className="md:col-span-3">
            <h6 className="text-sm font-semibold text-pennant">Contact Us</h6>
            <p className="mt-3 text-lg">
              <a href={site.phoneHref} className="wide block font-bold hover:text-blue">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="mt-1 block hover:text-blue">
                {site.email}
              </a>
            </p>
          </div>
          <div className="md:col-span-2">
            <h6 className="text-sm font-semibold text-pennant">Find &amp; Follow us on</h6>
            <Social className="mt-4 text-blue" iconClassName="h-6 w-6" />
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-ink/15 py-8 text-sm text-pennant">
          <div className="max-w-[80ch] space-y-1">
            <p>Scott Brothers UK LTD Registered office &amp; principle place of business - {site.address}</p>
            <p>
              Registered in England and Wales, company registration number 12864986, A list of company directors is
              available at our registered office - VAT registration number 342 193 123
            </p>
          </div>
          <a href="https://cdrmarketing.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            Powered by CDR Marketing
          </a>
        </div>
      </div>
    </footer>
  );
}
