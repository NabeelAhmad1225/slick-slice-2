import { useEffect, useRef, useState } from "react";
import Lottie, { AnimationItem } from "lottie-web";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

export default function ServiceCard({ data, active, onClick }: any) {
  const [animation, setAnimation] = useState<AnimationItem | null>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    
    const animation = Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: data.json,
    });

    // Play the animation immediately (without looping)
    animation.play();
    setAnimation(animation);

    return () => {
      animation.destroy();
    };
  }, [data.json]);

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

  // Animation control based on active state
  if (active) {
    startAnimation();
  } else {
    stopAnimation();
  }

  const router = useRouter();

  return (
    <article
      className="grid place-items-center card shadow-lg bg-white relative h-48 w-[95%] cursor-pointer mb-card"
      onMouseEnter={startAnimation}
      onMouseLeave={stopAnimation}
      onClick={onClick} // Handle card click
    >
      <h3 className="text-responsive-2xl text-center capitalize">
        {data?.label ?? ""}
      </h3>

      <div ref={container} className="w-40 h-40" /> {/* Lottie container */}

      <Link
        href={`/get-a-quote?selectedService=${data.id}&previous=${router.asPath}`}
        as="/get-a-quote"
        className="absolute bottom-3 right-4"
      >
        <ArrowLongRightIcon className="w-10 text-accent" />
      </Link>
    </article>
  );
}
