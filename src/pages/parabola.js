import React from 'react'
import GeoTemp from '../component/sections/geoTemp'

const Parabola = () => {
    const lineElements = [
        {
          title: "Find the vertex and focus of parabola alongside x-axis",
    
          link: "/vertexfocusx",
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
     
      ];
  return (
    <div>
      <GeoTemp title={"Parabola"} elements={lineElements} />
    </div>
  )
}

export default Parabola
