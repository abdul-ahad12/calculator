import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GeoTemp from "../component/sections/geoTemp";

import ReactGA from "react-ga";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);

const Triangle = () => {

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);

  const lineElements = [
    {
      title: "Area and Perimeter of a Triangle from equations of sides",

      link: "/areaperimeter",
    },
    {
      title: "Area and Perimeter of a Triangle from Vertices",

      link: "/areaperipoints",
    },
    {
      title: "Vertices of a Triangle from equations of sides",

      link: "/sidestovertices",
    },
    {
      title: "Equations of sides of a Triangle from Vertices",

      link: "/verticestosides",
    },
    {
      title: "Centroid of a Triangle from equations of sides",

      link: "/centroid",
    },
    {
      title: "Centroid of a Triangle from Vertices",

      link: "/centroidpoints",
    },
    {
      title: "Circumcentre of a triangle from equations of sides",
      link: "/tricircumcentre",
    },
    {
      title: "Circumcentre of a Triangle from Vertices",

      link: "/tricircumpoints",
    },
    {
      title: "Orthocentre of a Triangle from equations of sides",

      link: "/orthocentre",
    },
    {
      title: "Orthocentre of a Triangle from Vertices",

      link: "/orthopoints",
    },
    {
      title: "Incentre of a Triangle from from Equations of sides",

      link: "/incentre",
    },
    {
      title: "Incentre of a Triangle from Vertices",

      link: "/incentrepoints",
    },
    


  ];

  return (
    <div>
      <GeoTemp title={"Triangle"} elements={lineElements} />
    </div>
  );
};

export default Triangle;
