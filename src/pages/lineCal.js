import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GeoTemp from "../component/sections/geoTemp";
// import SubCard from "../component/sections/subCard";
// import MainLayout from "./mainLayout";

import ReactGA from "react-ga";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);

const LineCal = () => {

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);


  const lineElements = [
    {
      title: "Distance between two points",

      link: "/distance",
    },
    {
      title: "Slope of a line",
      link: "/slopeLine",
    },
    {
      title: "Point of intersection of two lines",
      link: "/pointofint",
    },
    {
      title: "x-intercept and y-intercept of a line.",
      link: "/xyintercept",
    },
    {
      title: "Equation of perpendicular bisector.",
      link: "/perpendicular",
    },
    {
      title: "Equation of a line, Two point form.",

      link: "/twopointform",
    },
    {
      title: "Equation of a line, Point slope form.",
      link: "/pointslopeform",
    },
    {
      title: "Equation of a line, Normal form.",
      link: "/eqlinenormal",
    },
    {
      title: "Mirror image of a point with respect to a Line",
      link: "/imageofpoint",
    },
    {
      title: "Foot of Perpendicular from a point to a line",
      link: "/footofperpendicular",
    },
    {
      title: "Perpendicular Distance between a point and a line",
      link: "/perpendiculardist",
    },
    {
      title: "Angle between two Lines",
      link: "/anglebwlines",
    },
    {
      title: "Perpendicular Distance between two parallel lines",
      link: "/paralinesdist",
    },
    {
      title: "Distance between two parallel lines from equation of pair of lines",
      link: "/distancepairpara",
    },
    {
      title: "Angle between two lines from equation of pair of straight lines",
      link: "/anglebwpairlines",
    },
    {
      title: "Point of intersection from equation of pair of straight lines",
      link: "/intpair",
    },
    {
      title: "Equation of pair of straight lines from two lines",
      link: "/pairfromlines",
    },
  ];

  return (
    <>
      <GeoTemp elements={lineElements} title={"Line"} />
    </>
  );
};

export default LineCal;
