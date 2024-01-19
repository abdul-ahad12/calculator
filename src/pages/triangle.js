import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GeoTemp from "../component/sections/geoTemp";

import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);
ReactGA.send("pageview");

const Triangle = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
      <Helmet>
        <title>Triangle | Coordinate Geometry</title>
        <meta
          name="description"
          content="Unleash the power of precision in triangle geometry with our intuitive Coordinate Geometry Calculator. Effortlessly tackle triangle-related challenges, compute side lengths, angles, and centroids with ease. Explore the efficiency of our calculator for accurate solutions, making triangle problem-solving a breeze. Elevate your geometric mastery today!"
        />
      </Helmet>
      <GeoTemp title={"Triangle"} elements={lineElements} />
    </div>
  );
};

export default Triangle;
