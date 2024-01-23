import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GeoTemp from '../component/sections/geoTemp'

import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);
ReactGA.send("pageview");

const Parabola = () => {

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);

    const lineElements = [
      {
        title: "Find the attributes of parabola",
        link: "/attributespara",
      },
        // {
        //   title: "Find the equation of parabola with given focus and vertex",
    
        //   link: "/vertexfocusx",
        // },
       
      ];
  return (
    <div>
       <Helmet>
        <title>Parabola | Coordinate Geometry</title>
        <meta
          name="description"
          content="Navigate the intricacies of parabolas effortlessly with our advanced Coordinate Geometry Calculator. Tackle parabola-related challenges with ease, from vertex calculations to finding focus points. Unlock the precision of our calculator for seamless solutions in parabolic geometry. Elevate your understanding and conquer parabola problems effortlessly today!"
        />
      </Helmet>
      <GeoTemp title={"Parabola"} elements={lineElements} />
    </div>
  )
}

export default Parabola
