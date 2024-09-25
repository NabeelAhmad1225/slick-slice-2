import webApp from "../public/icons/web-app.json";
import uiUx from "../public/icons/ui-ux.json";
import wordpress from "../public/icons/wordpress.json";
// import apiSolutions from "../public/icons/api-solutions.json";
import mobileApp from "../public/icons/mobile-app.json";

export const services = [
  {
    id: "mobile-apps",
    label: "Mobile Apps",
    json: mobileApp,
    svg: "Svg/mobile-app.svg",
  },
  {
    id: "e-commerce-websites",
    label: "E-Commerce websites",
    json: wordpress,
    svg: "Svg/e-commerce.svg",
  },
  {
    id: "web-apps",
    label: "Web Apps",
    json: webApp,
    svg: "Svg/web-app.svg",
  },
  {
    id: "ui-ux",
    label: "UX/UI Design",
    json: uiUx,
    svg: "Svg/ui-ux.svg",
  },
  // {
  //   id: "api-solutions",
  //   label: "API Solutions",
  //   json: apiSolutions,
  //   // svg: "Svg/api-solutions.svg",
  // },
];
