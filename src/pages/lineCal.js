import React from "react";
import GeoTemp from "../component/sections/geoTemp";
// import SubCard from "../component/sections/subCard";
// import MainLayout from "./mainLayout";

const LineCal = () => {

  
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
      title: "Equation of a line. Two point form.",

      link: "/twopointform",
    },
    {
      title: "Equation of a line. Point slope form.",
      link: "/pointslopeform",
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
  ];

  return (
    <>
      <GeoTemp elements={lineElements} title={"Line"} />
    </>
  );
};

export default LineCal;
