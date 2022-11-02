import React from "react";
import GeoTemp from "../component/sections/geoTemp";

const Circle = () => {
  const lineElements = [
    {
      title: "Center and Radius from equation",

      link: "/crequation",
    },
    {
      title: "Equation of circle from center and radius",
      link: "/eqfromcr",
    },
    {
      title: "General form equation to standard form",
      link: "/gentostand",
    },
    {
      title: "Equation of circle passing through a point with center given",
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
  ];

  return (
    <div>
      <GeoTemp title={"Circle"} elements={lineElements} />
    </div>
  );
};

export default Circle;
