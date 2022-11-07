import React from "react";
import GeoTemp from "../component/sections/geoTemp";

const Triangle = () => {
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
    


  ];

  return (
    <div>
      <GeoTemp title={"Triangle"} elements={lineElements} />
    </div>
  );
};

export default Triangle;
