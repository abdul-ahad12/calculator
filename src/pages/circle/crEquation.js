import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Circle from "../../calculations/circle";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

import ReactGA from "react-ga4";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);
ReactGA.send("pageview");

const CrEquation = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);

  const [eqInput, seteqInput] = useState({
    g: "",
    f: "",
    c: "",
  });

  const [result, setresult] = useState("")
  const circle = new Circle(eqInput.g, eqInput.f, eqInput.c);
  console.log(eqInput);
  const onGChange = (e) => {
    seteqInput({
      ...eqInput,
      g: e.target.value,
    });
  };
  const onFChange = (e) => {
    seteqInput({
      ...eqInput,
      f: e.target.value,
    });
  };
  const onCChange = (e) => {
    seteqInput({
      ...eqInput,
      c: e.target.value,
    });
  };
  const resultDumm = () => {
    const result = circle.cenAndrad(eqInput.g, eqInput.f, eqInput.c);
    let a=result[0]
    let b=result[1]
    let c=result[2]

    let final= <MathComponent tex={`Center:(${a},${b}) \\hspace{0.5cm} Radius:${c}`} />

    setresult(final)
  };

  const onResult = () => {
    eqInput.g === "" || 
    eqInput.f === "" || 
    eqInput.c === ""
      ? alert("Enter all inputs")
      : check_circle();
  };

  const check_circle = () => {
    (eqInput.g/2 * eqInput.g/2) + (eqInput.f/2 * eqInput.f/2) - eqInput.c <= 0 
    ? alert("The Entered Equation of circle is invalid! Enter Valid Input")
    :resultDumm()
  }

  const s = '\\displaylines{Centre: (-g,-f) \\\\ \\\\ Radius: \\sqrt{g^2+f^2-c}}';
  const f2 = <MathComponent tex={s} />
  
  return (
    <div>
      <TitleTemplate
        title={"Center and radius from circle equation"}
        subTitle={""}
        formula={f2}
        type={"eqCircle"}
        valueA={eqInput.g}
        valueB={eqInput.f}
        valueC={eqInput.c}
        onAChange={onGChange}
        onBChange={onFChange}
        onCChange={onCChange}
        result={result}
        onResult={onResult}
      />
    </div>
  );
};

export default CrEquation;
