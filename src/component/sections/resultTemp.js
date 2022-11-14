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
    <div className="border base:text-[15px] max-w-[1800px] md:text-[25px] lg:text-[30px] lg:p-5 base:p-0 border-black flex flex-col">
      <div className="text-start">
        {" "}
        <div className="flex flex-row">
          <div className="result">{title8}</div>
          <div className="border border-black w-[50rem] min-w-[7rem] px-[7px] base:text-[10px] lg:text-[25px]">{<MathComponent tex={`${h}`} />}</div>
        </div>
       
        <div className="flex flex-row">
          <div className="result">{title1}</div>
          <div className="result">{<MathComponent tex={`${a}`} />}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">{title2}</div>
          <div className="result">{<MathComponent tex={`${b}`} />}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">{title3}</div>

          <div className="result">{<MathComponent tex={`${c}`} />}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">{title4}</div>
          <div className="result">{<MathComponent tex={`${d}`} />}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">{title5}</div>
          <div className="result">{<MathComponent tex={`${e}`} />}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">{title6}</div>
          <div className="result">{<MathComponent tex={`${f}`} />}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">{title7}</div>
          <div className="result">{<MathComponent tex={`${g}`} />}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">{title9}</div>
          <div className="result">{<MathComponent tex={`${i}`} />}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">{title10}</div>
          <div className="result">{<MathComponent tex={`${j}`} />}</div>
        </div>
        <div className="flex flex-row">
          <div className="result">{title11}</div>
          <div className="result">{<MathComponent tex={`${k}`} />}</div>
        </div>{" "}
        <div className="flex flex-row">
          <div className="result">{title12}</div>
          <div className="result">{<MathComponent tex={`${l}`} />}</div>
        </div>{" "}
        
       
      </div>
    </div>
  );
};

export default ResultTemp;
