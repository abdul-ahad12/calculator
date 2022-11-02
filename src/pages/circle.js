import React from 'react'
import GeoTemp from '../component/sections/geoTemp'
import LineCal from './lineCal'

const Circle = () => {
    const lineElements = [
        {
          title: "Distance between two points",
    
          link: "/distance",
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
      <GeoTemp title={"Circle"} elements={lineElements} />
    </div>
  )
}

export default Circle
