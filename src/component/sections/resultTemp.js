import React from "react";
import { MathComponent } from "mathjax-react";


const ResultTemp = ({ a, b, c, d, e, f, g, h, i, j, k ,subtitle1,subtitle2}) => {
  return (
    <div  className="border base:text-[15px] max-w-[1800px] md:text-[25px] lg:text-[30px] lg:p-5 base:p-2 border-black flex flex-col">
      <div className="text-start" >
        {" "}
        <div className="flex flex-row">
        <div className="result">Length of {subtitle1}</div>
        <div className="result"><MathComponent tex={`${a}`} /></div>
        </div>
        <div className="flex flex-row">

        <div className="result">Length of {subtitle2}</div>
        <div className="result"><MathComponent tex={`${b}`}/></div>
        </div>

        <div className="flex flex-row">

        <div className="result">Length of latusrectrum</div>
        
        <div className="result"><MathComponent tex={`${c}`}/></div>
        </div>

        <div className="flex flex-row">

        <div className="result">Center</div>
        <div className="result"><MathComponent tex={`${d}`} /></div>
        </div>

        <div className="flex flex-row">

        <div className="result">e</div>
        <div className="result"><MathComponent tex={`${e}`} /></div>
        </div>

        <div className="flex flex-row">

        <div className="result">Foci</div>
        <div className="result"><MathComponent tex={`${f}`} /></div>
        </div>

        <div className="flex flex-row">

        <div className="result">Equation of directrices are</div>
        <div className="result"><MathComponent tex={`${g}`} /></div>
        </div>

        <div className="flex flex-row">

        <div className="result">Vertices</div>
        <div className="result"><MathComponent tex={`${h}`} /></div>
        </div>

        <div className="flex flex-row">

        <div className="result">Equation of {subtitle1}</div>
        <div className="result"><MathComponent tex={`${i}`} /></div>
        </div>

        <div className="flex flex-row">

        <div className="result">Equation of {subtitle2}</div>
        <div className="result"><MathComponent tex={`${j}`} /></div>
        </div>

        <div className="flex flex-row">

        <div className="result">Equation of Latus Rectrum</div>
        <div className="result"><MathComponent tex={`${k}`} /></div>
      </div>
      
        {" "}
      </div>
    </div>
  );
};

export default ResultTemp;
