import React from 'react'
import GeoTemp from '../component/sections/geoTemp'

const Parabola = () => {
    const lineElements = [
      {
        title: "Find the attributes of parabola",
        link: "/attributespara",
      },
        // {
        //   title: "Find the equation of parabola with given focus and vertex",
    
        //   link: "/vertexfocusx",
        // },
       
      ];
  return (
    <div>
      <GeoTemp title={"Parabola"} elements={lineElements} />
    </div>
  )
}

export default Parabola
