import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GeoTemp from '../component/sections/geoTemp'

import ReactGA from "react-ga4";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);
ReactGA.send("pageview");

const Ellipse = () => {

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);

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
        <GeoTemp title={"Ellipse"} elements={lineElements} />
      </div>
  )
}

export default Ellipse
