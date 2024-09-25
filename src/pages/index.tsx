import Head from "next/head";
import HeroSection from "../../components/hero/HeroSection";
import StepsSection from "../../components/hero/StepsSection";

import ServiceSection2 from "../../components/hero/ServiceSection2";
import StatsSection from "../../components/hero/StatsSection";
import { motion } from "framer-motion";
import TestimonialSection from "../../components/hero/TestimonialSection";

export default function Home() {
  const whileInView = {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  };
  const initial = {
    y: 100,
    opacity: 0,
  };

  return (
    <>
      <Head>
        <title> Home - Slick Slice </title>
      </Head>
      <motion.div
        initial={initial}
        whileInView={whileInView}
        viewport={{ amount: "some" }}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: "some" }}
      >
        <ServiceSection2 />
      </motion.div>

      {/* <StatsSection /> */}

      {/* <motion.div
        initial={initial}
        whileInView={whileInView}
        viewport={{ once: true, amount: "some" }}
      >
        <StepsSection />
      </motion.div> */}

      {/* <motion.div
        initial={initial}
        whileInView={whileInView}
        viewport={{ once: true, amount: "some" }}
      >
        <TestimonialSection />
      </motion.div> */}
    </>
  );
}
