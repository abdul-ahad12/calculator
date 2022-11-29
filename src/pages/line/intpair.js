import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Line from "../../calculations/line";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

import ReactGA from "react-ga";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);

const Intpair = () => {

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);

  const [coeficient, setcoeficient] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e1: "",
    f: "",
  });
  const [result, setResult] = useState("");

  const line = new Line(
    coeficient.a,
    coeficient.b,
    coeficient.c,
    coeficient.d,
    coeficient.e1,
    coeficient.f
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
  const onDChange = (e) => {
    setcoeficient({
      ...coeficient,
      d: e.target.value,
    });
  };
  const onEChange = (e) => {
    setcoeficient({
      ...coeficient,
      e1: e.target.value,
    });
  };
  const onFChange = (e) => {
    setcoeficient({
      ...coeficient,
      f: e.target.value,
    });
  };

  const resultDumm = () => {
    const result = line.intpair(
      coeficient.a,
      coeficient.b,
      coeficient.c,
      coeficient.d,
      coeficient.e1,
      coeficient.f
    );
    let x = result[0];
    let y = result[1];
    let c = <MathComponent tex={`Point \\hspace{.25cm} of \\hspace{.25cm} Intersection = (${x},${y})`} />;
    setResult(c);
  };

  const onResult = () => {
    coeficient.a === "" ||
    coeficient.b === "" ||
    coeficient.c === "" ||
    coeficient.d === "" ||
    coeficient.e1 === "" ||
    coeficient.f === ""
      ? alert("Enter all inputs")
      : check_eqn();
  };

  const check_eqn = () => {
    (coeficient.b/2 * coeficient.b/2) - (coeficient.a * coeficient.c) < 0
    ?alert("The equation does not represent a pair of straight lines! Enter Valid Input")
    :check_pairpara();
  }

  const check_pairpara = () => {
    (coeficient.b/2 * coeficient.b/2) - (coeficient.a * coeficient.c) === 0
    ?alert("The equation represents a pair of parallel lines, Point of intersection does not exist for parallel lines! Enter Valid Input")
    :resultDumm();
  }




  const f ="(\\frac{hf-bg}{ab-h^2}, \\frac{gh-af}{ab-h^2})";
  const f1 = <MathComponent tex={f} />;

  return (
    <div>
      <TitleTemplate
        title={"Point of Intersection from equation of pair of straight lines"}
        formula={f1}
        type={"pairoflines"}
        valueA={coeficient.a}
        valueB={coeficient.b}
        valueC={coeficient.c}
        valueD={coeficient.d}
        valueE={coeficient.e1}
        valueF={coeficient.f}
        onAChange={onAChange}
        onBChange={onBChange}
        onCChange={onCChange}
        onDChange={onDChange}
        onEChange={onEChange}
        onFChange={onFChange}
        onResult={onResult}
        result={result}
      />
    </div>
  );
};

export default Intpair;
