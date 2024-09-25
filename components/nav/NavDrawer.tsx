import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useRouter } from "next/router";

import pages from "../../data/pages.json";

export default function NavDrawer() {
  const router = useRouter();

  const BACKDROP_TRANSITION_DURATION_IN_MS = 500;
  const SHOW_BACKDROP_DELAY = BACKDROP_TRANSITION_DURATION_IN_MS * 0.5;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  const transitionDuration = {
    transitionDuration: `${BACKDROP_TRANSITION_DURATION_IN_MS}ms`,
  };
  function openNavDrawer() {
    // 1). open drawer + add backdrop to DOM
    setIsDrawerOpen(true);
    document.body.style.overflow = "hidden";

    // 2). show backdrop
    setTimeout(() => {
      setShowBackdrop(true);
    }, SHOW_BACKDROP_DELAY);
  }

  function closeNavDrawer() {
    // 1).hide backdrop
    setShowBackdrop(false);
    document.body.style.overflow = "";

    // 2).after backdrop is hidden, close drawer + remove backdrop from DOM
    setTimeout(() => {
      setIsDrawerOpen(false);
    }, SHOW_BACKDROP_DELAY * 2);
  }

  return (
    <>
      <button className="block lg:hidden p-1.5 style-box shadow-lg bg-accent text-white cursor-pointer">
        <Bars3Icon
          onClick={() => openNavDrawer()}
          className=" h-6 w-6 stoke stroke-white"
        />
      </button>

      {isDrawerOpen == true && (
        <section
          onClick={() => closeNavDrawer()}
          style={transitionDuration}
          className={`fixed z-40 left-0 top-0 w-screen h-screen bg-[#0b192edd] transition-all ease-in-out ${
            showBackdrop ? "opacity-100" : "opacity-0"
          }`}
        ></section>
      )}

      <aside
        style={transitionDuration}
        className={`bg-white fixed z-50 left-0 top-0 max-w-[18rem] w-full h-screen card transition-all ease-in-out grid grid-rows-[auto_minmax(0,1fr)_auto] gap-card ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* <img
          src="/logo-text.png"
          alt="devex it company logo"
          className="w-40 h-auto object-contain"
        /> */}
         <strong className="py-1.5 px-3 text-black  uppercase font-heading tracking-widest text-responsive-2xl">
            Slick Slice
          </strong>

        <nav className="flex flex-col gap-card card">
          {pages.map((page) => {
            return (
              <Link
                onClick={() => closeNavDrawer()}
                key={page.label}
                href={page.href}
                className={`py-2 px-4 transition-all duration-300 ease-in-out text-sm uppercase font-heading font-bold tracking-widest ${
                  router.pathname == page.href
                    ? "style-packet bg-accent text-white hover:text-white"
                    : "bg-transparent text-body hover:text-accent"
                }`}
              >
                {page.label}
              </Link>
            );
          })}
        </nav>

        {/* <Link href="/get-a-quote">
					<button className="btn btn-secondary w-full">Get Quote</button>
				</Link> */}
      </aside>
    </>
  );
}
