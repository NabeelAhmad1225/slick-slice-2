import "@component/styles/globals.css";
import type { AppProps } from "next/app";

import { useRouter } from "next/router";

import LayoutDefault from "../../components/layouts/LayoutDefault";
import LayoutInnerPage from "../../components/layouts/LayoutInnerPage";

export default function App({ Component, pageProps }: AppProps) {
  const INNER_PAGES = [
    "/get-a-quote",
    "/get-a-quote/success",
    "/get-a-quote/error",
    "/jobs/[jobDetailsId]",
    "dev",
  ];
  const router = useRouter();

  function renderLayout() {
    let isInnerPage = !!INNER_PAGES.find((pathname) =>
      router.pathname.includes(pathname)
    );

    if (isInnerPage) {
      return (
        <LayoutInnerPage>
          <Component {...pageProps} />
        </LayoutInnerPage>
      );
    } else {
      return (
        <LayoutDefault>
          <Component {...pageProps} />
        </LayoutDefault>
      );
    }
  }

  return <div>{renderLayout()}</div>;
}
