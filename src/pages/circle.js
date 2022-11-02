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
      title: "Equation of Circle General form to standard form",
      link: "/gentostand",
    },
    {
      title: "Equation of circle passing through a point with center given",
      link: "/eqfromcp",
    },
    {
      title: "Parametric equation of circle",
      link: "/parametriceq",
    },
    {
      title: "Power of point wrt Circle",

      link: "/powerofpoint",
    },
    {
      title: "Equation and length of tangent at a point to a circle",
      link: "/lengthoftangent",
    },
  ];

  return (
    <div>
      <GeoTemp title={"Circle"} elements={lineElements} />
    </div>
  );
};

export default Circle;
