import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Line from "../../calculations/line";
import TitleTemplate from "../../component/sections/titleTemplate";
import { InlineMath } from "react-katex";
import { MathComponent } from "mathjax-react";

import ReactGA from "react-ga";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);

const SlopeLine = () => {

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);

  const [variables, setvariables] = useState({
    ax: "",
    ay: "",
    bx: "",
    by: "",
  });
  console.log(variables);

  const line = new Line(variables.ax, variables.ay, variables.bx, variables.by);
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
  const onBxChange = (e) => {
    setvariables({
      ...variables,
      bx: e.target.value,
    });
  };
  const onByChange = (e) => {
    setvariables({
      ...variables,
      by: e.target.value,
    });
  };
  const resultDumm = () => {
    const result = line.slope(
      variables.ax,
      variables.ay,
      variables.bx,
      variables.by
    );

    let a = <MathComponent tex={`m = ${result}`} />;
    setResult(a);
  };

  const onResult = () => {
    variables.ax === "" ||
    variables.ay === "" ||
    variables.bx === "" ||
    variables.by === ""
      ? alert("Enter all inputs")
      : check_input();
  };

  const check_input = () => {
    variables.ax === variables.bx && variables.ay === variables.by
      ? alert("The Points are same! Enter two Different Points")
      :resultDumm();
  };

  const f = "m = \\frac{y_2-y_1}{x_2-x_1}";
  const f1 = (
    <p>
      {" "}
      <InlineMath math={f} />
    </p>
  );

  return (
    <div>
      <TitleTemplate
        title={"Calculate Slope of a Line"}
        formula={f1}
        type={"twoPoints"}
        valueA={variables.ax}
        onAChange={onAxChange}
        valueB={variables.ay}
        onBChange={onAyChange}
        valueC={variables.bx}
        onCChange={onBxChange}
        valueD={variables.by}
        onDChange={onByChange}
        onResult={onResult}
        result={result}
      ></TitleTemplate>
    </div>
  );
};

export default SlopeLine;
