import Header from "../../../components/Header";
import SvgHeaderServices from "../../../components/svgs/SvgHeaderServices";
import Head from "next/head";

const servicesData = [
  {
    title: "Digital Marketing Services",
    description:
      "Empower your business with tailored marketing strategies that deliver measurable results:",
    imageSrc: "/images/digital.jpeg",
    services: [
      "SEO (Search Engine Optimization)",
      "Social Media Management",
      "Pay-Per-Click (PPC) Advertising",
      "Content Marketing & Copywriting",
      "Email Marketing Campaigns",
      "Website Design & Development",
    ],
  },
  {
    title: "Plumbing Services",
    description: "Reliable and efficient plumbing solutions for every need:",
    imageSrc: "/images/plumbing.jpeg",
    services: [
      "Emergency Plumbing Repairs",
      "Leak Detection & Pipe Repair",
      "Water Heater Installation & Repair",
      "Drain Cleaning & Clog Removal",
      "Bathroom & Kitchen Plumbing",
      "Sewer Line Repair & Replacement",
    ],
  },
  {
    title: "Electrical Services",
    description: "Safe and reliable electrical services for home and business:",
    imageSrc: "/images/electrical-services.jpeg",
    services: [
      "Electrical Wiring & Rewiring",
      "Lighting Installation & Repair",
      "Electrical Panel Upgrades",
      "Generator Installation & Maintenance",
      "Smart Home & Automation Systems",
      "Electrical Safety Inspections",
    ],
  },
  {
    title: "Cleaning Services",
    description: "Thorough and customized cleaning solutions:",
    imageSrc: "/images/cleaning.jpeg",
    services: [
      "Residential Cleaning (Regular & Deep Cleaning)",
      "Commercial Office Cleaning",
      "Post-Construction Cleaning",
      "Move-In/Move-Out Cleaning",
      "Carpet & Upholstery Cleaning",
      "Specialized Disinfection Services",
    ],
  },
  {
    title: "Construction Labor Services",
    description:
      "When it comes to construction projects, having a reliable team of skilled laborers is crucial. At Slick Slice, we provide experienced and hardworking professionals to support a wide range of construction needs.",
    imageSrc: "/images/construction.jpeg",
    services: [
      "General Labor for Construction Projects",
      "Demolition & Site Preparation",
      "Framing & Carpentry",
      "Concrete Pouring & Finishing",
      "Drywall Installation & Finishing",
      "Painting & Finishing Touches",
      "Landscaping & Hardscaping",
    ],
  },
];

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - Slick Slice</title>
      </Head>

      <div className="w-full isolate">
        <Header
          title="About"
          accentTitle="Us"
          icon={<SvgHeaderServices />}
          background="bg-primary"
          text="text-white"
        />
      </div>
      <div className="wrapper pb-32 px-4 md:px-8 lg:px-16 mt-44">
        <section className="container-fluid">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-gray-800 mb-6">
            Our Services
          </h2>

          {servicesData.map((service, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-2">
                {service.title}
              </h3>
              <p className="text-lg md:text-xl text-gray-700 mb-4">
                {service.description}
              </p>
              <div className="relative mb-4 group">
                <img
                  src={service.imageSrc}
                  alt={service.title}
                  className="w-full  h-[250px] sm:h-[400px] object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>

                <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.title}
                </div>
              </div>
              <ul className="list-disc list-inside text-base md:text-lg text-gray-600 space-y-2">
                {service.services.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
