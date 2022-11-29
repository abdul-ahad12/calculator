import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GeoTemp from '../component/sections/geoTemp'

import ReactGA from "react-ga4";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);
ReactGA.send("pageview");

const Hyperbola = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

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
      <GeoTemp title={"Hyperbola"} elements={lineElements} />
    </div>
  )
}

export default Hyperbola
