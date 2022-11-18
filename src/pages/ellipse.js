import React from 'react'
import GeoTemp from '../component/sections/geoTemp'

const Ellipse = () => {
    const lineElements = [
        {
          title: "Attributes of ellipse",
    
          link: "/attributes",
        },
        {
          title: "Area and Circumference of an Ellipse from equation",
          link: "/areacircumellipse",
        },
        
     
      ];
  return (
    <div>
      <GeoTemp title={"Ellipse"} elements={lineElements} />
    </div>
  )
}

export default Ellipse
