import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Circle from "../../calculations/circle";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

import ReactGA from "react-ga";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);

const Poleofline = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);

  const [coeficient, setcoeficient] = useState({
    a: "",
    b: "",
    c: "",
    g: "",
    f: "",
    c1: "",
  });
  const [result, setResult] = useState("");

  const circle = new Circle(
    coeficient.a,
    coeficient.b,
    coeficient.c,
    coeficient.g,
    coeficient.f,
    coeficient.c1,
  );
  console.log(coeficient);

  const onAChange = (e) => {
    setcoeficient({
      ...coeficient,
      a: e.target.value,
    });
  };
  const onBChange = (e) => {
    setcoeficient({
      ...coeficient,
      b: e.target.value,
    });
  };
  const onCChange = (e) => {
    setcoeficient({
      ...coeficient,
      c: e.target.value,
    });
  };
  const onGChange = (e) => {
    setcoeficient({
      ...coeficient,
      g: e.target.value,
    });
  };
  const onFChange = (e) => {
    setcoeficient({
      ...coeficient,
      f: e.target.value,
    });
  };
  const onC1Change = (e) => {
    setcoeficient({
      ...coeficient,
      c1: e.target.value,
    });
  };

  const resultDumm = () => {
    const result = circle.poleofline(
      coeficient.a,
      coeficient.b,
      coeficient.c,
      coeficient.g,
      coeficient.f,
      coeficient.c1,
    );
    let x = result[0];
    let y = result[1]

    let c = <MathComponent tex={`(${x},${y})`} />;
    setResult(c);
  };

  const onResult = () => {
    coeficient.a === "" ||
    coeficient.b === "" ||
    coeficient.c === "" ||
    coeficient.g === "" ||
    coeficient.f === "" ||
    coeficient.c1 === "" 
      ? alert("Enter all inputs")
      : check_circle();
  };

  const check_circle = () => {
    (coeficient.g/2 * coeficient.g/2) + (coeficient.f/2 * coeficient.f/2) - coeficient.c1 <= 0 
    ? alert("The Entered Equation of circle is invalid! Enter Valid Input")
    :resultDumm()
  }


  const f ="(-g + \\frac{lr^2}{lg+mf-n} , -f + \\frac{mr^2}{lg+mf-n})";
  const f1 = <MathComponent tex={f} />;

  return (
    <div>
      <TitleTemplate
        title={"Pole of a line with respect to a circle"}
        type={"linecircle"}
        formula = {f1}
        valueA={coeficient.a}
        valueB={coeficient.b}
        valueC={coeficient.c}
        valueD={coeficient.g}
        valueE={coeficient.f}
        valueF={coeficient.c1}
        onAChange={onAChange}
        onBChange={onBChange}
        onCChange={onCChange}
        onDChange={onGChange}
        onEChange={onFChange}
        onFChange={onC1Change}
        onResult={onResult}
        result={result}
      />
    </div>
  );
};

export default Poleofline;
