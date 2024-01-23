import React, { useState, useEffect } from "react";
import Line from "../../calculations/line";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";
import { useLocation } from "react-router-dom";

import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);
ReactGA.send("pageview");

const Xyintercept = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [coeficient, setcoeficient] = useState({
    a: "",
    b: "",
    c: "",
  });
  const [result, setResult] = useState("");

  const line = new Line(coeficient.a, coeficient.b, coeficient.c);
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

  const resultDumm = () => {
    const result = line.intercepts(coeficient.a, coeficient.b, coeficient.c);
    let x = result[0];
    let y = result[1];
    let c = `(${x},0)`;
    let d = `(0,${y})`;
    let final = ``;
    if (!isFinite(x)) {
      final = `\\displaylines{Line \\ is\\ parallel \\ to \\ X-axis, \\ therefore \\ x-intercept \\ does \\ not \\ exist \\\\ y-intercept:${d}}`;
    } else if (!isFinite(y)) {
      final = `\\displaylines{x-intercept:${c} \\\\ Line \\ is\\ parallel \\ to \\ Y-axis, \\ therefore \\ y-intercept \\ does \\ not \\ exist}`;
    } else {
      final = `\\displaylines{x-intercept:${c} \\\\ y-intercept:${d}}`;
    }
    let e = <MathComponent tex={final} />;
    setResult(e);
  };

  const onResult = () => {
    coeficient.a === "" || coeficient.b === "" || coeficient.c === ""
      ? alert("Enter all inputs")
      : all_zero();
  };

  const all_zero = () => {
    coeficient.a === "0" && coeficient.b === "0" && coeficient.c === "0"
      ? alert("Invalid Input! Enter proper Equation of a Line")
      : xy_zero();
  };

  const xy_zero = () => {
    coeficient.a === "0" && coeficient.b === "0"
      ? alert("Invalid Input! Enter proper Equation of a Line")
      : resultDumm();
  };
  const f =
    "\\displaylines{line: ax + by + c = 0 \\\\ \\\\ x-intercept : -\\frac{c}{a} \\\\ \\\\ y-intercept : -\\frac{c}{b}}";
  const f1 = <MathComponent tex={f} />;

  return (
    <div>
      <Helmet>
        <title>x-intercept and y-intercept of a line.</title>
        <meta
          name="description"
          content="Free calculator to find x-intercept and y-intercept of a line."
        />
      </Helmet>{" "}
      <TitleTemplate
        title={"x-intercept and y-intercept of a line."}
        formula={f1}
        type={"oneline"}
        valueA={coeficient.a}
        valueB={coeficient.b}
        valueC={coeficient.c}
        onAChange={onAChange}
        onBChange={onBChange}
        onCChange={onCChange}
        onResult={onResult}
        result={result}
      />
    </div>
  );
};

export default Xyintercept;
