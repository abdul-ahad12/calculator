import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TitleTemplate from "../../component/sections/titleTemplate";
// import { MathComponent } from "mathjax-react";
import ResultTempPara from "../../component/sections/resultTempPara";
import Parabola from "../../calculations/parabola";

import ReactGA from "react-ga4";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);
ReactGA.send("pageview");

const AttributesPara = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);

  const [eqInput, seteqInput] = useState({
    l: "",
    m: "",
    n: "",
    o: "",
    p: "",
  });

  const [result, setresult] = useState("");
  const parabola = new Parabola(
    eqInput.l,
    eqInput.m,
    eqInput.n,
    eqInput.o,
    eqInput.p
  );
  console.log(eqInput);
  const onLChange = (e) => {
    seteqInput({
      ...eqInput,
      l: e.target.value,
    });
  };
  const onMChange = (e) => {
    seteqInput({
      ...eqInput,
      m: e.target.value,
    });
  };
  const onNChange = (e) => {
    seteqInput({
      ...eqInput,
      n: e.target.value,
    });
  };
  const onOChange = (e) => {
    seteqInput({
      ...eqInput,
      o: e.target.value,
    });
  };
  const onPChange = (e) => {
    seteqInput({
      ...eqInput,
      p: e.target.value,
    });
  };

  const resultDumm = () => {

  
    const result = parabola.attributes(
      eqInput.l,
      eqInput.m,
      eqInput.n,
      eqInput.o,
      eqInput.p
    );
    let a = result[0];
    let b = result[1];
    let c = result[2];
    let d = result[3];
    let e = result[4];
    let f = result[5];
    let g = result[6];
    let h = result[7];

    let final = (
      <ResultTempPara
        a={a}
        b={b}
        c={c}
        d={d}
        e={e}
        f={f}
        g={g}
        h={h}
        title1={"Vertex"}
        title2={"Focus"}
        title3={"Equation of Axis"}
        title4={"Equation of directrix"}
        title5={"Equation of lactus rectum"}
        title6={"Length of Lactus rectum"}
        title7={"Equation of tangent"}
        title8={"Standard Form"}
      />
    );

    setresult(final);
  };

  const check=()=>{
    if(eqInput.l!=0){
      eqInput.m==0?resultDumm():alert("Coeficient of x^2 or y^2 should be zero ")
    }
    else{
      eqInput.m!=0?resultDumm():alert("Coeficient of x^2 or y^2 should be zero ")

    }
  }
  
  const onResult = () => {
    eqInput.l === "" ||
    eqInput.m === "" ||
    eqInput.n === "" ||
    eqInput.o === "" ||
    eqInput.p === ""
    ? alert("Enter all inputs")
    : check()
  };
  
  return (
    <div>
      {" "}
      <TitleTemplate
        title={"Program to find attributes of parabola"}
        type={"ellipse"}
        // formula = {f2}
        valueA={eqInput.l}
        valueB={eqInput.m}
        valueC={eqInput.n}
        valueD={eqInput.o}
        valueE={eqInput.p}
        onAChange={onLChange}
        onBChange={onMChange}
        onCChange={onNChange}
        onDChange={onOChange}
        onEChange={onPChange}
        result={result}
        onResult={onResult}
      >
        <div className="flex flex-col"></div>
      </TitleTemplate>
    </div>
  );
};

export default AttributesPara;

{
  /* <MathComponent tex={`${a}..${b}..${c}..${d}..${e}..${f}..${g}..${h}..${i}..${j}..${k}`} /> */
}
