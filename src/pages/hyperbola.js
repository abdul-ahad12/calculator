import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GeoTemp from '../component/sections/geoTemp'
import { Helmet } from "react-helmet";


import ReactGA from "react-ga4";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);
ReactGA.send("pageview");

const Hyperbola = () => {

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);

    const lineElements = [
        {
          title: "Attributes of Hyperbola",
    
          link: "/attributesel",
        },
         
      ];
  return (
    <div>
      <Helmet>
        <title>Hyperbola | Coordinate Geometry Calculator</title>
        <meta
          name="description"
          content="Master Hyperbola geometry effortlessly using our Coordinate Geometry Calculator. Whether you're calculating axes, finding foci, or exploring ellipse equations, our tool provides precision solutions. Explore accurate ellipse solutions today!"
        />
      </Helmet>
      <GeoTemp title={"Hyperbola"} elements={lineElements} />
    </div>
  )
}

export default Hyperbola
