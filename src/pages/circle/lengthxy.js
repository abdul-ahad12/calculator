import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";
import Circle from "../../calculations/circle";

import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);
ReactGA.send("pageview");

const Lengthxy = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [eqInput, seteqInput] = useState({
    g: "",
    f: "",
    c: "",
  });

  const [result, setresult] = useState("");
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
    const result = circle.lengthXY(eqInput.g, eqInput.f, eqInput.c);
    let a = result[0];
    let b = result[1];
    let final = ``;
    if (isNaN(a) && isNaN(b)) {
      final = `The \\ given \\ circle \\ does \\ not \\ touch \\ the \\ X-axis \\ and \\ the \\ Y-axis`;
    } else if (isNaN(a)) {
      final = `\\displaylines{The \\ given \\ circle \\ does \\ not \\ touch \\ the \\ X-axis \\\\ Length\\  of\\ intercept\\ on\\ Y-axis\\ is : ${b}}`;
    } else if (isNaN(b)) {
      final = `\\displaylines{Length \\ of \\ intercept \\  on \\ x-axis : ${a} \\\\ The \\ given \\ circle \\ does \\ not \\ touch \\ the \\ Y-axis}`;
    } else {
      final = `\\displaylines{Length \\ of \\ intercept \\  on \\ x-axis : ${a} \\\\ Length\\  of\\ intercept\\ on\\ y-axis\\ is : ${b}}`;
    }
    let res = <MathComponent tex={final} />;
    setresult(res);
  };

  const onResult = () => {
    eqInput.g === "" || eqInput.f === "" || eqInput.c === ""
      ? alert("Enter all inputs")
      : check_circle();
  };

  const check_circle = () => {
    Math.pow(eqInput.g / 2, 2) + Math.pow(eqInput.f / 2, 2) - eqInput.c < 0
      ? alert("Entered Circle is imaginary! Enter equation of a real circle")
      : resultDumm();
  };

  return (
    <div>
      <Helmet>
        <title>Length of X and Y intercepts of a circle.</title>
        <meta
          name="description"
          content="Free calculator to find distance between two points"
        />
      </Helmet>
      <TitleTemplate
        title={"Length of X and Y intercepts of a circle"}
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

export default Lengthxy;
