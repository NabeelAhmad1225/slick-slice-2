import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { services } from "../../data/services.js";
import { useState } from "react";

import ServiceCard from "../../components/services/ServiceCard";

export default function ServiceSection2() {
  const [activeServiceID, setActiveServiceID] = useState(services[0].id);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3.3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [expandedServiceID, setExpandedServiceID] = useState<number | null>(
    null
  );

  const handleCardClick = (serviceID: number) => {
    setExpandedServiceID(serviceID === expandedServiceID ? null : serviceID);
  };


  const serviceCarousel = services.map((service: any, index: number) => {
    return (
      <div key={index}>
        <ServiceCard data={service} active={activeServiceID == service.id} />
      </div>
    );
  });



  const CustomDot = ({ onMove, index, onClick, active }: any) => {
    return (
      <li onClick={() => onClick(setActiveServiceID(services[index].id))}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="w-5 h-5 "
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.75 2C6.365 2 2 6.36502 2 11.75C2 17.135 6.365 21.5 11.75 21.5C17.135 21.5 21.5 17.135 21.5 11.75C21.5 6.36502 17.135 2 11.75 2Z"
            fill={active ? " #49c3fa " : "#8377663d"}
          />
        </svg>
      </li>
    );
  };

  return (
    <>
      <div className="wrapper bg-secondary" id="services">
        <section className="pt-container pb-container ">
          <header className="container-fluid grid gap-x-container sm:grid-cols-[minmax(0,1fr)_auto]">
            <button className="btn btn-tertiary text-tertiary col-start-2 row-span-2 self-center w-[100px] sm:w-auto">
              <Link href="/services">View All</Link>
            </button>
            <h2 className="text-responsive-5xl ">
              Our
              <strong className="font-medium">&nbsp;Services?</strong>
            </h2>
          </header>

          <div className="container-fluid  pt-card ">
            <Carousel
              responsive={responsive}
              swipeable={true}
              arrows={false}
              showDots
              draggable={true}
              ssr={true}
              infinite={true}
              autoPlay={false}
              keyBoardControl={true}
              customTransition="transform 300ms ease-in-out"
              transitionDuration={300}
              dotListClass={"li.bg-primary"}
              itemClass=" pb-card"
              customDot={<CustomDot />}
            >
              {serviceCarousel}
            </Carousel>
          </div>
        </section>
      </div>
    </>
  );
}
