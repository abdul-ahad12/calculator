import React from "react";
import GeoTemp from "../component/sections/geoTemp";

const Triangle = () => {
  const lineElements = [
    {
      title: "Circumcentre of a triangle from equation of sides",
      link: "/tricircumcentre",
    },
    {
      title: "Circumcentre of a Triangle from Vertices",

      link: "/tricircumpoints",
    },


  ];

  return (
    <div>
      <GeoTemp title={"Triangle"} elements={lineElements} />
    </div>
  );
};

export default Triangle;
