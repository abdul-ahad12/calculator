import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GeoTemp from '../component/sections/geoTemp'

import ReactGA from "react-ga";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);

const Parabola = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

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
      <GeoTemp title={"Parabola"} elements={lineElements} />
    </div>
  )
}

export default Parabola
