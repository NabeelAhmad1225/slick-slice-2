import { useEffect, useRef, useState } from "react";
import Lottie, { AnimationItem } from "lottie-web";
import Link from "next/link";
import { useRouter } from "next/router";
export default function ServiceCard({ data, active }: any) {
  const [animation, setAnimation] = useState<AnimationItem | null>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!!!container.current) return;
    const animation = Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: data.json,
    });

    // to render json without animation
    animation.play();

    setAnimation(animation);

    return () => {
      animation.destroy();
    };
  }, []);

  const startAnimation = () => {
    if (animation) {
      animation.setLoop(true);
      animation.setDirection(1);
      animation.play();
    }
  };

  const stopAnimation = () => {
    if (animation) {
      animation.setLoop(false);
      animation.setDirection(-1);
      animation.play();
    }
  };
  if (active) {
    startAnimation();
    // console.log("if :>> ", active);
  } else {
    stopAnimation();
    // console.log("else :>> ", active);
  }
  const router = useRouter();
  // function goToQuote() {
  //   router.push({
  //     pathname: "/get-a-quote",
  //     query: { id: data.id },
  //   });
  // }

  return (
    <>
      <Link
        href={`/get-a-quote?selectedService=${data.id}&previous=${router.asPath}`}
        as="/get-a-quote"
      >
        <article
          className="grid place-items-center card shadow-lg bg-white  w-[95%] cursor-pointer mb-card"
          onMouseEnter={startAnimation}
          onMouseLeave={stopAnimation}
        >
          <div ref={container} className="w-40 h-40" />
          <h3 className="text-responsive-2xl text-center capitalize">
            {data?.label ?? ""}
          </h3>
        </article>
      </Link>
    </>
  );
}
