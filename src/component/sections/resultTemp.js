import React from "react";

const ResultTemp = ({ a, b, c, d, e, f, g, }) => {
  return (
    <div className="flex flex-col">
      <div>Length of Major axis:{a}</div>
      <div>Length of Minor axis:{b}</div>
      <div>Length of latusrectrum:{c}</div>
      <div>Center:{d}</div>
      <div>e:{e}</div>
      <div>Foci:{f}</div>
      <div>Equation of directrices are:{g}</div>
     
    </div>
  );
};

export default ResultTemp;
