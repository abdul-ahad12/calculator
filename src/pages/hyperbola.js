import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GeoTemp from '../component/sections/geoTemp'

const Hyperbola = () => {

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);

    const lineElements = [
        {
          title: "Attributes of Hyperbola",
    
          link: "/attributesel",
        },
         
      ];
  return (
    <div>
      <GeoTemp title={"Hyperbola"} elements={lineElements} />
    </div>
  )
}

export default Hyperbola
