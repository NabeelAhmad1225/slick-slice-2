import PortfolioCard from "../../../components/portfolio/PortfolioCard";
import Header from "../../../components/Header";
import projects from "../../../data/projects.json";
import SvgHeaderPortfolio from "../../../components/svgs/SvgHeaderPortfolio";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Portfolio() {
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
        <title> Portfolio - Slick Slice </title>
      </Head>
      <Header
        title="This is what"
        accentTitle="we do"
        background="bg-secondary"
        icon={<SvgHeaderPortfolio />}
      />
      <div className="wrapper pb-32">
        <section className="container-fluid pt-container pb-container grid gap-card grid-auto-col-300">
          {projects.map((project, index: number) => {
            return (
              <motion.div
                key={project.id}
                variants={staggerVariants}
                custom={index}
                viewport={{ once: true, amount: "some" }}
                initial="hidden"
                whileInView="visible"
              >
                <PortfolioCard data={project} />
              </motion.div>
            );
          })}
        </section>
      </div>
    </>
  );
}
