import { services } from "../../../data/services.js";

import Header from "../../../components/Header";
import SvgHeaderServices from "../../../components/svgs/SvgHeaderServices";
import ServiceCard from "../../../components/services/ServiceCard";
import { motion } from "framer-motion";
import Head from "next/head";
export default function Services() {
  const staggerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.25,
        duration: 0.75,
        ease: "easeOut",
      },
    }),
  };
  return (
    <>
      <Head>
        <title> Services - Slick Slice </title>
      </Head>
      <div className="  w-full isolate ">
        <Header
          title="That's"
          accentTitle="our Offer"
          icon={<SvgHeaderServices />}
          background="bg-primary"
          text="text-white"
        />

        <div className="wrapper bg-secondary pb-32">
          <section className="container-fluid pt-container pb-container grid gap-card grid-auto-col-300">
            {services.map((service, index: number) => {
              return (
                <motion.div
                  key={service.id}
                  variants={staggerVariants}
                  custom={index}
                  viewport={{ once: true, amount: "some" }}
                  initial="hidden"
                  whileInView="visible"
                >
                  <ServiceCard data={service} />
                </motion.div>
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
}
