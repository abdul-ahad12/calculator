import React from "react";
import { MathComponent } from "mathjax-react";


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
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
  title8,
  title9,
  title10,
  title11,
  title12,
  

}) => {
  return (
    <div className="border base:text-[15px] max-w-[1800px] md:text-[25px] lg:text-[30px] lg:p-5 base:p-2 border-black flex flex-col">
      <div className="text-start">
        {" "}
        <div className="flex flex-row">
          <div className="result">{title1}</div>
          <div className="result">{a}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">{title2}</div>
          <div className="result">{b}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">{title3}</div>

          <div className="result">{c}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">{title4}</div>
          <div className="result">{d}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">{title5}</div>
          <div className="result">{e}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">{title6}</div>
          <div className="result">{f}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">{title7}</div>
          <div className="result">{g}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">{title8}</div>
          <div className="result">{h}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">{title9}</div>
          <div className="result">{i}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">{title10}</div>
          <div className="result">{j}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">{title11}</div>
          <div className="result">{k}</div>
        </div>{" "}
        <div className="flex flex-row">
          <div className="result">{title12}</div>
          <div className="result">{l}</div>
        </div>{" "}
       
      </div>
    </div>
  );
};

export default ResultTemp;
