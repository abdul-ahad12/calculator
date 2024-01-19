import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GeoTemp from "../component/sections/geoTemp";

import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);
ReactGA.send("pageview");

const Ellipse = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const lineElements = [
    {
      title: "Attributes of ellipse",

      link: "/attributes",
    },
    {
      title: "Area and Circumference of an Ellipse from equation",
      link: "/areacircumellipse",
    },
  ];
  return (
    <div>
      <Helmet>
        <title>Ellipse | Coordinate Geometry</title>
        <meta
          name="description"
          content="Master ellipse geometry effortlessly using our Coordinate Geometry Calculator. Whether you're calculating axes, finding foci, or exploring ellipse equations, our tool provides precision solutions. Elevate your geometric expertise and conquer ellipse challenges with ease. Explore accurate ellipse solutions today!"
        />
      </Helmet>
      <GeoTemp title={"Ellipse"} elements={lineElements} />
    </div>
  );
};

export default Ellipse;
