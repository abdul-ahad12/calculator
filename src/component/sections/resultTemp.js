import React from "react";

const ResultTemp = ({ a, b, c, d, e, f, g, h, i, j, k,l,m }) => {
  return (
    <div className="flex flex-col">
      <div>a={a}</div>
      <div>b={b}</div>
      <div>
        Center=({c},{d})
      </div>
      <div>eccentricity={e}</div>
      <div>
        Vertices=({c}±{a},{d})
      </div>
      <div>
        focii=({c}±{f},{d})
      </div>
      <div>Equation of major axis:{h}</div>
      <div>Length of Major axis={g}</div>{" "}
      <div>Equation of minor axis=y-({d})=0</div>
      <div>Length of minor axis={g}</div>
    </div>
  );
};

export default ResultTemp;
