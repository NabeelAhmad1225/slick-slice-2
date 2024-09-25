import JobCard from "../../../components/jobs/JobCard";
import jobs from "../../../data/jobs.json";
import Header from "../../../components/Header";
import SvgHeaderJobs from "../../../components/svgs/SvgHeaderJobs";
import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
export default function Jobs() {
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

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const filteredJobs = jobs.filter((job) => {
    if (job.name && job.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
    return false;
  });
  return (
    <>
      <Head>
        <title> Jobs - Slick Slice </title>
      </Head>
      <Header
        title="Want to work"
        accentTitle="with us?"
        icon={<SvgHeaderJobs />}
      />

      <div className="wrapper bg-secondary pb-32">
        <section className="container-fluid pt-container">
          <article className="flex flex-row">
            <input
              type="text"
              className="bg-white px-6 py-3 text-base rounded-md  sm:mr-6 shadow-md w-full max-w-md  focus:outline-none border-accent border-2"
              placeholder="Search for jobs"
              value={searchTerm}
              onChange={handleChange}
            />
          </article>
        </section>
        {/* change 10 to 0 */}
        {filteredJobs.length > 10 ? (
          <section className="container-fluid pt-card mt-card pb-container grid gap-card grid-auto-col-300">
            {filteredJobs.map((job, index: number) => {
              return (
                <motion.div
                  key={job.id}
                  variants={staggerVariants}
                  custom={index}
                  viewport={{ once: true, amount: "some" }}
                  initial="hidden"
                  whileInView="visible"
                >
                  <JobCard data={job} />
                </motion.div>
              );
            })}
          </section>
        ) : (
          <section className="container-fluid pt-card mt-card pb-container grid gap-card grid-auto-col-300">
            <h2 className="text-2xl font-bold text-center mb-8">
              {/* No jobs found for "{searchTerm}" */}
              No Jobs Available Right Now
            </h2>
          </section>
        )}
      </div>
    </>
  );
}
