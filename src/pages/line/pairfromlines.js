import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Line from "../../calculations/line";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

import ReactGA from "react-ga";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);

const Pairfromlines = () => {

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);

  const [coeficient, setcoeficient] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
  });
  const [result, setResult] = useState("");

  const line = new Line(
    coeficient.a,
    coeficient.b,
    coeficient.c,
    coeficient.d,
    coeficient.e,
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
      e: e.target.value,
    });
  };
  const onFChange = (e) => {
    setcoeficient({
      ...coeficient,
      f: e.target.value,
    });
  };

  const resultDumm = () => {
    const result = line.pairfromlines(
      coeficient.a,
      coeficient.b,
      coeficient.c,
      coeficient.d,
      coeficient.e,
      coeficient.f
    );
    let x1 = result[0];
    let x2 = result[1];
    let x3 = result[2];
    let x4 = result[3];
    let x5 = result[4];
    let x6 = result[5];
    let c = <MathComponent tex={`S: ${x1}x^2 + (${x2})xy + (${x3})y^2+ (${x4})x + (${x5})y + (${x6})`}/>;
    setResult(c);
  };

  const onResult = () => {
    coeficient.a === "" ||
    coeficient.b === "" ||
    coeficient.c === "" ||
    coeficient.d === "" ||
    coeficient.e === "" ||
    coeficient.f === ""
      ? alert("Enter all inputs")
      : resultDumm();
    // setvariables({
    //     ax:"",
    //     ay:"",
    //     bx:"",
    //     by:"",

    // })
  };

  const f ="S: ax^2 + 2hxy +by^2 +2gx + 2fy +c = 0";
  const f1 = <MathComponent tex={f} />;

  return (
    <div>
      <TitleTemplate
        title={"Equation of pair of straight lines from two lines"}
        formula={f1}
        type={"twolines"}
        valueA={coeficient.a}
        valueB={coeficient.b}
        valueC={coeficient.c}
        valueD={coeficient.d}
        valueE={coeficient.e}
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

export default Pairfromlines;
