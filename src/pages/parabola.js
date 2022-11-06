import React from 'react'
import GeoTemp from '../component/sections/geoTemp'

const Parabola = () => {
    const lineElements = [
        {
          title: "Find the vertex and focus of parabola alongside x-axis",
    
          link: "/vertexfocusx",
        },
        {
          title: "Find the attributes of parabola",
          link: "/attributespara",
        },
       
      ];
  return (
    <div>
      <GeoTemp title={"Parabola"} elements={lineElements} />
    </div>
  )
}

export default Parabola
