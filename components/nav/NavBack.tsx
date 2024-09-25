import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function NavBack() {
  const [LinkBack, setLinkBack] = useState("/services");
  const router = useRouter();
  const { previous } = router.query;
  useEffect(() => {
    if (previous == "/") {
      setLinkBack("/#services");
    } else if (previous == "services") {
      setLinkBack("/services");
    } else if (router.asPath.startsWith("/jobs/")) {
      setLinkBack("/jobs");
    } else {
      setLinkBack("/services");
    }
  }, [router]);

  return (
    <>
      <section className="w-full bg-white container-fluid py-2 ">
        <a href={LinkBack} className="btn btn-tertiary w-fit scroll-smooth ">
          <ArrowLeftIcon className="btn-icon" />

          <span className="text-body">Go Back</span>
        </a>
      </section>
    </>
  );
}
