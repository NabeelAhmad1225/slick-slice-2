import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import NavDrawer from "./NavDrawer";
import pages from "../../data/pages.json";

export default function NavBar() {
  const router = useRouter();

  // Listen for new scroll events
  function setHTMLDataScroll() {
    document.documentElement.dataset.scroll = (
      window.scrollY <= 0 ? 0 : window.scrollY
    ).toString();
  }

  useEffect(() => {
    setHTMLDataScroll();

    // Add event listener to window
    document.addEventListener("scroll", setHTMLDataScroll);
    // Remove event on unmount to prevent a memory leak
    return () => {
      document.removeEventListener("scroll", setHTMLDataScroll);
    };
  }, []);

  const [defaultBackgroundCSS, setDefaultBackgroundCSS] = useState(
    router.pathname === "/services"
      ? styles.primaryBackground
      : styles.whiteBackground
  );

  useEffect(() => {
    switch (router.pathname) {
      case "/services":
        setDefaultBackgroundCSS(styles.primaryBackground);
        break;
      case "/jobs":
        setDefaultBackgroundCSS(styles.whiteBackground);
        break;
      // case "/aboutUs":
      //   setDefaultBackgroundCSS(styles.whiteBackground);  
      //   break;
      default:
        setDefaultBackgroundCSS(styles.primaryBackground);
        break;
    }
  }, [router]);

  return (
    <>
      <div
        className={`sticky top-0 z-50 transition-all duration-300 ease-out ${styles.scrollModeBackground} ${defaultBackgroundCSS}`}
      >
        <section className="container-fluid pt-card pb-card flex gap-card justify-between items-center">
          <strong className="py-1.5 px-3 transition-all duration-200 ease-in-out  uppercase font-heading tracking-widest text-responsive-2xl">
            Slick Slice
          </strong>

          <nav className="hidden lg:flex gap-box flex-1 justify-center">
            {pages.map((page) => {
              return (
                <Link
                  key={page.label}
                  href={page.href}
                  className={`py-1.5 px-3 transition-all duration-200 ease-in-out text-sm uppercase font-heading tracking-widest border-b-[2.5px] rounded hover:text-tertiary ${
                    router.pathname === page.href
                      ? "font-bold border-tertiary text-inherit"
                      : "border-transparent font-medium text-inherit"
                  } `}
                >
                  {page.label}
                </Link>
              );
            })}
          </nav>

          <NavDrawer />

          <Link href="/get-a-quote" className="hidden lg:block">
            <button className="btn btn-secondary">Get Quote</button>
          </Link>
        </section>
      </div>
    </>
  );
}
