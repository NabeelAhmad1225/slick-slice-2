import PortfolioCard from "../../../components/portfolio/PortfolioCard";
import Header from "../../../components/Header";
import projects from "../../../data/projects.json";
import SvgHeaderPortfolio from "../../../components/svgs/SvgHeaderPortfolio";
import Head from "next/head";
import SvgHeaderServices from "../../../components/svgs/SvgHeaderServices";

export default function AboutUs() {
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
        <title> About Us - Slick Slice </title>
      </Head>

      <div className="  w-full isolate ">
        <Header
          title="About"
          accentTitle="Us"
          icon={<SvgHeaderServices />}
          background="bg-primary"
          text="text-white"
        />
      </div>
      <div className="wrapper pb-32 px-4 md:px-8 lg:px-16 mt-44">
        {/* Services Section */}
        <section className="container-fluid">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-gray-800 mb-6">
            Our Services
          </h2>

          {/* Service Block - Digital Marketing */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-2">
              Digital Marketing Services
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Empower your business with tailored marketing strategies that
              deliver measurable results:
            </p>
            <ul className="list-disc list-inside text-base md:text-lg text-gray-600 space-y-2">
              <li>SEO (Search Engine Optimization)</li>
              <li>Social Media Management</li>
              <li>Pay-Per-Click (PPC) Advertising</li>
              <li>Content Marketing & Copywriting</li>
              <li>Email Marketing Campaigns</li>
              <li>Website Design & Development</li>
            </ul>
          </div>

          {/* Service Block - Plumbing Services */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-2">
              Plumbing Services
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Reliable and efficient plumbing solutions for every need:
            </p>
            <ul className="list-disc list-inside text-base md:text-lg text-gray-600 space-y-2">
              <li>Emergency Plumbing Repairs</li>
              <li>Leak Detection & Pipe Repair</li>
              <li>Water Heater Installation & Repair</li>
              <li>Drain Cleaning & Clog Removal</li>
              <li>Bathroom & Kitchen Plumbing</li>
              <li>Sewer Line Repair & Replacement</li>
            </ul>
          </div>

          {/* Service Block - Electrical Services */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-2">
              Electrical Services
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Safe and reliable electrical services for home and business:
            </p>
            <ul className="list-disc list-inside text-base md:text-lg text-gray-600 space-y-2">
              <li>Electrical Wiring & Rewiring</li>
              <li>Lighting Installation & Repair</li>
              <li>Electrical Panel Upgrades</li>
              <li>Generator Installation & Maintenance</li>
              <li>Smart Home & Automation Systems</li>
              <li>Electrical Safety Inspections</li>
            </ul>
          </div>

          {/* Service Block - Cleaning Services */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-2">
              Cleaning Services
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Thorough and customized cleaning solutions:
            </p>
            <ul className="list-disc list-inside text-base md:text-lg text-gray-600 space-y-2">
              <li>Residential Cleaning (Regular & Deep Cleaning)</li>
              <li>Commercial Office Cleaning</li>
              <li>Post-Construction Cleaning</li>
              <li>Move-In/Move-Out Cleaning</li>
              <li>Carpet & Upholstery Cleaning</li>
              <li>Specialized Disinfection Services</li>
            </ul>
          </div>

          <div className="mt-10">
              <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-2">
                Construction Labor Services
              </h3>
              <p className="text-lg md:text-xl text-gray-700 mb-4">
                When it comes to construction projects, having a reliable team of
                skilled laborers is crucial. At Slick Slice we provide experienced
                and hardworking professionals to support a wide range of
                construction needs. Our construction labor services.
              </p>
              <ul className="list-disc list-inside text-base md:text-lg text-gray-600 space-y-2">
                <li>General Labor for Construction Projects</li>
                <li>Demolition & Site Preparation</li>
                <li>Framing & Carpentry</li>
                <li>Concrete Pouring & Finishing</li>
                <li>Drywall Installation & Finishing</li>
                <li>Painting & Finishing Touches</li>
                <li>Landscaping & Hardscaping</li>
              </ul>
            </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="my-12 container-fluid mt-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-6">
            Why Choose Us?
          </h2>
          <ul className="list-none space-y-4 text-lg md:text-xl text-gray-700">
            <li>
              <span className="font-bold">Quality & Expertise:</span> Dedicated
              to delivering exceptional service, ensuring your satisfaction.
            </li>
            <li>
              <span className="font-bold">Comprehensive Solutions:</span> From
              marketing your business to maintaining your property, we are your
              one-stop solution.
            </li>
            <li>
              <span className="font-bold">Customer-Centric Approach:</span>{" "}
              Personalized services that cater to your specific needs.
            </li>
            <li>
              <span className="font-bold">Reliability:</span> Prompt, efficient,
              and reliable services you can trust.
            </li>
            <li>
              <span className="font-bold">Competitive Pricing:</span> Affordable
              rates without compromising on quality.
            </li>
          </ul>
        </section>

        {/* Contact Us Section */}
        <section className="my-12 text-center mt-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-6">
            Contact Us Today!
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Let us take care of the details while you focus on what matters
            most. Reach out today to learn more about how we can serve you.
          </p>
        </section>
      </div>
    </>
  );
}
