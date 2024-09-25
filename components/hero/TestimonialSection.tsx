import testimonial from "../../data/testimonial.json";
import TestimonialCard from "./TestimonialCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function TestimonialSection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
  const testimonialCarousel = testimonial.map(
    (testimonial: any, index: number) => {
      return (
        <div key={index} tabIndex={0}>
          <TestimonialCard testimonial={testimonial} />
        </div>
      );
    }
  );

  const CustomDot = ({ onMove, index, onClick, active }: any) => {
    return (
      <li key={index} onClick={() => onClick(testimonial[index].id)}>
        {/* {index + 1} */}
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
      <section className="pb-40 pt-10 bg-gray-100 text-gray-800">
        <div className="container flex flex-col items-center mx-auto  ">
          <h1 className="text-responsive-5xl font-bold mb-card text-center">
            Customer <strong>Testimonials</strong>
          </h1>
        </div>
        <div className="container-fluid  pt-card ">
          <Carousel
            responsive={responsive}
            swipeable={true}
            // renderDotsOutside={true}
            // afterChange={(onMove) => {
            //   console.log("move :>> ", onMove);
            // }}
            arrows={false}
            showDots={false}
            draggable={true}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            keyBoardControl={true}
            customTransition="transform 300ms ease-in-out"
            transitionDuration={300}
            // containerClass="carousel-container"
            dotListClass={"li.bg-primary"}
            // customDot={}
            itemClass=" pb-card"
            customDot={<CustomDot />}
          >
            {testimonialCarousel}
          </Carousel>
        </div>
      </section>
    </>
  );
}
