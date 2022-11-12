import React from "react";
import GeoTemp from "../component/sections/geoTemp";

const Circle = () => {
  const lineElements = [
    {
      title: "Area and Circumference of a circle from equation",
      link: "/areacircum",
    },
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
      title: "Power of point with respect to a Circle",

      link: "/powerofpoint",
    },
    {
      title: "Length of Tangent at a point to a circle",
      link: "/lengthoftangent",
    },
    {
      title: "Equation of Tangent and Normal at a point to a circle",
      link: "/eqnoftangent",
    },
    {
      title: "Length of x and y intercepts of a circle",
      link: "/lengthxy",
    },


  ];

  return (
    <div>
      <GeoTemp title={"Circle"} elements={lineElements} />
    </div>
  );
};

export default Circle;
