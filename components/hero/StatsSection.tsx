import stats from "../../data/stats.json";
import { motion } from "framer-motion";

import BgStats from "../svgs/BgStats";

export default function StatsSection() {
  const staggerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <div className="wrapper bg-primary h-fit relative pt-container pb-container">
        <BgStats />

        <section className="container-fluid flex justify-center lg:justify-end w-full gap-container md:gap-10 lg:gap-container flex-wrap">
          {stats.map((stat: any, index: number) => {
            return (
              <motion.article
                key={stat.label}
                className="text-center transition-all duration-500 ease-out scale-100 hover:scale-105 backdrop-blur-lg style-card card"
                variants={staggerVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
              >
                {/* <p className="text-white text-responsive-6xl font-accent mb-3">
                  {stat.value}+
                </p>
                <h3 className="text-white text-responsive-base md:text-responsive-lg !font-body !font-light">
                  {stat.label}
                </h3> */}
              </motion.article>
            );
          })}
        </section>
      </div>
    </>
  );
}
