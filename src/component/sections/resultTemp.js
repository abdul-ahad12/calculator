import React from "react";

const ResultTemp = ({
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
  subtitle1,
  subtitle2,
}) => {
  return (
    <div className="border base:text-[15px] max-w-[1800px] md:text-[25px] lg:text-[30px] lg:p-5 base:p-2 border-black flex flex-col">
      <div className="text-start">
        {" "}
        <div className="flex flex-row">
          <div className="result">Length of {subtitle1}</div>
          <div className="result">{a}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">Length of {subtitle2}</div>
          <div className="result">{b}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">Length of latusrectrum</div>

          <div className="result">{c}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">Center</div>
          <div className="result">{d}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">e</div>
          <div className="result">{e}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">Foci</div>
          <div className="result">{f}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">Equation of directrices are</div>
          <div className="result">{g}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">Vertices</div>
          <div className="result">{h}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">Equation of {subtitle1}</div>
          <div className="result">{i}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">Equation of {subtitle2}</div>
          <div className="result">{j}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">Equation of Latus Rectrum</div>
          <div className="result">{k}</div>
        </div>{" "}
        <div className="flex flex-row">
          <div className="result">Standard Form</div>
          <div className="result">{l}</div>
        </div>{" "}
       
      </div>
    </div>
  );
};

export default ResultTemp;
