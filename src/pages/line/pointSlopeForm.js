import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Line from "../../calculations/line";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

import ReactGA from "react-ga4";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);
ReactGA.send("pageview");

const PointSlopeForm = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);

  const [variables, setvariables] = useState({
    ax: "",
    ay: "",
  });
  console.log(variables)
  const [valueM, setvalueM] = useState("");
  console.log(valueM)

  const line = new Line(valueM,variables.ax, variables.ay);
  const [result, setResult] = useState("");

  const onAxChange = (e) => {
    setvariables({
      ...variables,
      ax: e.target.value,
    });
  };
  const onAyChange = (e) => {
    setvariables({
      ...variables,
      ay: e.target.value,
    });
  };


  const resultDumm = () => {
    const result = line.pointslopeform(
      valueM,
      variables.ax,
      variables.ay
    );
     
    let m=result[0]
    let c=result[1]
    let final = ``

    if(valueM === '0')
    {
      final = `y=${c}`
    }
    else
    {
      final = `y=${m}x+(${c})`
    }
    let a=<MathComponent tex={final} />
    
    setResult(a);
  };

  const onResult = () => {
    variables.ax === "" ||
    variables.ay === "" ||
   valueM===""
      ? alert("Enter all inputs")
      : resultDumm();
    // setvariables({
    //     ax:"",
    //     ay:"",
    //     bx:"",
    //     by:"",

    // })
  };

  const onMChange = (e) => {
    setvalueM(e.target.value);
  };

  const f = 'y - y_1 = m (x - x_1)';
  const f1 = <MathComponent tex={f} />

  return (
    <div>
      <TitleTemplate
        title={"Equation of a line. Point slope form."}
        type={"slopePoint"}
        formula={f1}
        valueA={variables.ax}
        onAChange={onAxChange}
        valueB={variables.ay}
        onBChange={onAyChange}
        valueC={valueM}
        onCChange={onMChange}
        result={result}
        onResult={onResult}
      />
    </div>
  );
};

export default PointSlopeForm;
