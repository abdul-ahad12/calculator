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
    {
      title: "Check if two points are conjugate with respect to a circle",
      link: "/checkconjugate",
    },
    {
      title: "Relative position of two Circles and Number of common Tangents",
      link: "/nopointstangents",
    },
    {
      title: "Pole of a line with respect to a circle",
      link: "/poleofline",
    },
    {
      title: "Equation of circle from three points",
      link: "/threepointcircle",
    },
    {
      title: "Angle between two Circles",
      link: "/anglebwcircles",
    },
    {
      title: "Radical Axis of two circles",
      link: "/radicalaxis",
    },
    {
      title: "Radical Centre of three circles",
      link: "/radicalcentre",
    },

  ];

  return (
    <div>
      <GeoTemp title={"Circle"} elements={lineElements} />
    </div>
  );
};

export default Circle;
