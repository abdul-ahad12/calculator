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

const Orthocentre = () => {
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
    g: "",
    h: "",
    i: "",
  });
  const [result, setResult] = useState("");

  const triangle = new Triangle(
    coeficient.a,
    coeficient.b,
    coeficient.c,
    coeficient.d,
    coeficient.e,
    coeficient.f,
    coeficient.g,
    coeficient.h,
    coeficient.i
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
  const onGChange = (e) => {
    setcoeficient({
      ...coeficient,
      g: e.target.value,
    });
  };
  const onHChange = (e) => {
    setcoeficient({
      ...coeficient,
      h: e.target.value,
    });
  };
  const onIChange = (e) => {
    setcoeficient({
      ...coeficient,
      i: e.target.value,
    });
  };

  const resultDumm = () => {
    const result = triangle.orthocentre(
      coeficient.a,
      coeficient.b,
      coeficient.c,
      coeficient.d,
      coeficient.e,
      coeficient.f,
      coeficient.g,
      coeficient.h,
      coeficient.i
    );
    let x = result[0];
    let y = result[1];
    let c = `(${x},${y})`;
    let e = <MathComponent tex={`Orthocentre :${c}`} />;
    setResult(e);
  };

  const onResult = () => {
    coeficient.a === "" ||
    coeficient.b === "" ||
    coeficient.c === "" ||
    coeficient.d === "" ||
    coeficient.e === "" ||
    coeficient.f === "" ||
    coeficient.g === "" ||
    coeficient.h === "" ||
    coeficient.i === ""
      ? alert("Enter all inputs")
      : check_parallel();
  };

  const check_parallel = () => {
    coeficient.a / coeficient.b === coeficient.d / coeficient.e ||
    coeficient.a / coeficient.b === coeficient.g / coeficient.h ||
    coeficient.g / coeficient.h === coeficient.d / coeficient.e
      ? alert("Lines are parallel! Enter valid Input.")
      : resultDumm();
  };

  return (
    <div>
      <Helmet>
        <title>Orthocentre of a triangle from sides.</title>
        <meta
          name="description"
          content="Free calculator to find Orthocentre of a triangle from sides."
        />
      </Helmet>
      <TitleTemplate
        title={"Orthocentre of a triangle from sides"}
        // formula={f1}
        type={"threelines"}
        valueA={coeficient.a}
        valueB={coeficient.b}
        valueC={coeficient.c}
        valueD={coeficient.d}
        valueE={coeficient.e}
        valueF={coeficient.f}
        valueG={coeficient.g}
        valueH={coeficient.h}
        valueI={coeficient.i}
        onAChange={onAChange}
        onBChange={onBChange}
        onCChange={onCChange}
        onDChange={onDChange}
        onEChange={onEChange}
        onFChange={onFChange}
        onGChange={onGChange}
        onHChange={onHChange}
        onIChange={onIChange}
        onResult={onResult}
        result={result}
      />
    </div>
  );
};

export default Orthocentre;
