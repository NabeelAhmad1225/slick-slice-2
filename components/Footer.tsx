import contact from "../data/contact.json";
import socialMedia from "../data/social-media.json";
import pages from "../data/pages.json";
import services from "../data/services.json";
import SvgWhatsappIcon from "./svgs/SvgWhatsappIcon";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

import Link from "next/link";
import SvgFacebook from "./svgs/SvgFacebook";
import SvgInstagram from "./svgs/SvgInstagram";
import SvgLinkedin from "./svgs/SvgLinkedin";
import BgFooter from "./svgs/BgFooter";

export default function Footer() {
  return (
    <>
      <div className="container -mb-[8.5rem] -mt-[8.5rem]  relative z-10 overflow-hidden style-card mt-10">
        <BgFooter />

        <article className="relative z-10 px-10 py-10 overflow-hidden text-center style-card">
          <h2 className="text-white text-responsive-5xl">
            Alright! <strong className="!text-white">Let's do this.</strong>
          </h2>
          <p className="text-white ">
          Schedule a consultation with Slick Slice 
          </p>
          <Link href="/get-a-quote">
            <button className="btn btn-lg btn-primary bg-primary mt-card">
              get a quote
            </button>
          </Link>
        </article>
      </div>

      <div className="relative z-0 pt-24 wrapper bg-primary md:pt-32">
        <footer className="container-fluid pt-20 pb-16 grid grid-cols-1  xs:grid-cols-[minmax(0,10rem)_minmax(0,10rem)] sm:grid-cols-[minmax(0,20rem)_minmax(0,10rem)] md:grid-cols-[20rem_10rem_auto] sm:justify-center midXl:justify-start midXl:grid-cols-[minmax(10rem,1fr)_20rem_10rem_auto] gap-12">
          <article className="col-span-3 md:col-span-3 md:justify-self-center midXl:justify-self-start midXl:col-span-1">
            {/* <img
              src="/logo-text-dark-mode.png"
              alt="devex IT company logo"
              className="object-contain w-60"
            /> */}
              <strong className="py-1.5 px-3 transition-all duration-200 ease-in-out  uppercase  tracking-widest text-white text-responsive-4xl">
            Slick Slice
          </strong>

          </article>

          <article className="col-span-3 md:col-span-1">
            <h2 className="font-medium text-white text-responsive-xl ">
              Contact Us
            </h2>
            <ul className="grid gap-6 mt-6">
              <li className="flex gap-4 text-white text-responsive-base">
                <PhoneIcon className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 text-accent" />
                {contact.phone}
              </li>
              <li className="flex gap-4 text-white text-responsive-base">
                <SvgWhatsappIcon />
                {contact.phone}
              </li>
              <li className="flex gap-4 text-white text-responsive-base">
                <EnvelopeIcon className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 text-accent" />
                {contact.email}
              </li>
              <li className="flex gap-4 text-white text-responsive-base">
                <MapPinIcon className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 text-accent" />
                {contact.location}
              </li>
            </ul>
          </article>

          <article>
            <h2 className="font-medium text-white text-responsive-xl ">
              Services
            </h2>
            <ul className="grid gap-4 mt-6">
              {services.map((services) => {
                return (
                  <li key={services.id}>
                    <Link
                      href="/services"
                      className="text-white text-responsive-base hover:text-white hover:scale-105"
                    >
                      {services.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </article>

          <article>
            <h2 className="font-medium text-white text-responsive-xl ">
              Useful Links
            </h2>
            <ul className="grid gap-4 mt-6">
              {pages.map((page) => {
                return (
                  <li key={page.label}>
                    <Link
                      href={page.href}
                      aria-label={`page link + ${page.href}`}
                      className="text-white text-responsive-base hover:text-white hover:scale-105"
                    >
                      {page.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </article>

          <hr className="w-full col-span-3 opacity-20 md:col-span-3 midXl:col-span-4" />

          <p className="col-span-3 text-center text-white midXl:text-left md:col-span-3 midXl:col-span-2">
            © {new Date().getFullYear()} Slick Slice Enterprise. All rights
            reserved
          </p>

          <article className="flex flex-wrap justify-center col-span-3 midXl:justify-end gap-card md:col-span-3 midXl:col-span-2">
            <Link
              href={socialMedia.facebook}
              aria-label={`facebook link  ${socialMedia.facebook}`}
              className="grid flex-shrink-0 w-10 h-10 rounded-full place-items-center bg-accent-2 hover:scale-105"
            >
              <SvgFacebook />
            </Link>
            <Link
              href={socialMedia.instagram}
              aria-label={`instagram link  ${socialMedia.instagram}`}
              className="grid flex-shrink-0 w-10 h-10 rounded-full place-items-center bg-accent-2 hover:scale-105"
            >
              <SvgInstagram />
            </Link>
            <Link
              href={socialMedia.linkedin}
              aria-label={`linkedin link  ${socialMedia.linkedin}`}
              className="grid flex-shrink-0 w-10 h-10 rounded-full place-items-center bg-accent-2 hover:scale-105"
            >
              <SvgLinkedin />
            </Link>
          </article>
        </footer>
      </div>
    </>
  );
}
