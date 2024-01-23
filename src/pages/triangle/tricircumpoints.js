import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";
import Triangle from "../../calculations/triangle";

import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);
ReactGA.send("pageview");

const Tricircumpoints = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [coeficient, setcoeficient] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
  });
  const [result, setResult] = useState("");

  const triangle = new Triangle(
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
    const result = triangle.tricircumpoints(
      coeficient.a,
      coeficient.b,
      coeficient.c,
      coeficient.d,
      coeficient.e,
      coeficient.f
    );
    let x = result[0];
    let y = result[1];
    let c = `(${x},${y})`;
    let e = <MathComponent tex={`Circumcentre :${c}`} />;
    setResult(e);
  };

  const onResult = () => {
    coeficient.a === "" ||
    coeficient.b === "" ||
    coeficient.c === "" ||
    coeficient.d === "" ||
    coeficient.e === "" ||
    coeficient.f === ""
      ? alert("Enter all inputs")
      : check_collinear();
  };

  const check_collinear = () => {
    coeficient.a * (coeficient.d - coeficient.f) +
      coeficient.c * (coeficient.f - coeficient.b) +
      coeficient.e * (coeficient.b - coeficient.d) ===
    0
      ? alert("Given points are collinear! Enter valid Input.")
      : resultDumm();
  };

  return (
    <div>
      <Helmet>
        <title>Circumcentre of a triangle from Vertices.</title>
        <meta
          name="description"
          content="Free calculator to find Circumcentre of a triangle from Vertices."
        />
      </Helmet>
      <TitleTemplate
        title={"Circumcentre of a triangle from Vertices"}
        // formula={f1}
        type={"threePoints"}
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
export default Tricircumpoints;
