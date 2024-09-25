// import SvgHero from "../../components/svgs/SvgHero";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Typed from "typed.js";
export default function Hero() {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: ["IT services?", "Cleaning Services?", "Plumbing Services?"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="wrapper py-14 -mt-20 md:-mt-28 bg-gradient-to-tr from-hero-gradient-0 via-hero-gradient-1 to-hero-gradient-2">
        <section className="  relative container-fluid  pt-container pb-container flex gap-card items-center justify-center ">
          <article className="text-center  max-w-xl ">
            <h1 className="text-responsive-5xl font-bold text-heading font-heading text-white">
              Looking for
              <br />
              <strong className="h-[50px] text-5xl" ref={typeTarget}></strong>
            </h1>
            <p className="mt-2 lg:mt-3 text-responsive-lg text-white">
              No need for searching. We're ready to assist you
            </p>

            <button className="btn btn-lg btn-secondary  border-accent-2 mt-6 lg:mt-9">
              <a
                href="#services"
                className="scroll-smooth text-white hover:text-white"
              >
                let's talk
              </a>
            </button>
          </article>
        </section>
      </div>
    </>
  );
}
