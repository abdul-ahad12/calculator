import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Line from "../../calculations/line";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);
ReactGA.send("pageview");

const PointOfInt = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [coeficient, setcoeficient] = useState({
    aa: "",
    ba: "",
    ca: "",
    ab: "",
    bb: "",
    cb: "",
  });
  const [result, setResult] = useState("");

  const line = new Line(
    coeficient.aa,
    coeficient.ba,
    coeficient.ca,
    coeficient.ab,
    coeficient.bb,
    coeficient.cb
  );
  console.log(coeficient);

  const onAaChange = (e) => {
    setcoeficient({
      ...coeficient,
      aa: e.target.value,
    });
  };
  const onBaChange = (e) => {
    setcoeficient({
      ...coeficient,
      ba: e.target.value,
    });
  };
  const onCaChange = (e) => {
    setcoeficient({
      ...coeficient,
      ca: e.target.value,
    });
  };
  const onAbChange = (e) => {
    setcoeficient({
      ...coeficient,
      ab: e.target.value,
    });
  };
  const onBbChange = (e) => {
    setcoeficient({
      ...coeficient,
      bb: e.target.value,
    });
  };
  const onCbChange = (e) => {
    setcoeficient({
      ...coeficient,
      cb: e.target.value,
    });
  };

  const resultDumm = () => {
    const result = line.pointOfint(
      coeficient.aa,
      coeficient.ba,
      coeficient.ca,
      coeficient.ab,
      coeficient.bb,
      coeficient.cb
    );
    let x = result[0];
    let y = result[1];
    let c = <MathComponent tex={`(${x},${y})`} />;
    setResult(c);
  };

  const onResult = () => {
    coeficient.aa === "" ||
    coeficient.ba === "" ||
    coeficient.ca === "" ||
    coeficient.ab === "" ||
    coeficient.bb === "" ||
    coeficient.cb === ""
      ? alert("Enter all inputs")
      : all_zero();
  };

  const all_zero = () => {
    coeficient.aa === "0" &&
    coeficient.ba === "0" &&
    coeficient.ca === "0" &&
    coeficient.ab === "0" &&
    coeficient.bb === "0" &&
    coeficient.cb === "0"
      ? alert("Invalid Input! Enter proper Equation of a Line")
      : check_same();
  };

  const check_same = () => {
    coeficient.aa === coeficient.ab &&
    coeficient.ba === coeficient.bb &&
    coeficient.ca === coeficient.cb
      ? alert("Lines are Same! Enter two Different Lines")
      : check_parallel();
  };

  const check_parallel = () => {
    coeficient.aa / coeficient.ba === coeficient.ab / coeficient.bb
      ? alert("Lines are parallel! Enter Lines which are not parallel")
      : resultDumm();
  };

  return (
    <div>
      <Helmet>
        <title>Point of intersection of two lines.</title>
        <meta
          name="description"
          content="Free calculator to find distance between two points"
        />
      </Helmet>{" "}
      <TitleTemplate
        title={"Point of intersection of two lines"}
        formula={""}
        type={"twolines"}
        valueA={coeficient.aa}
        valueB={coeficient.ba}
        valueC={coeficient.ca}
        valueD={coeficient.ab}
        valueE={coeficient.bb}
        valueF={coeficient.cb}
        onAChange={onAaChange}
        onBChange={onBaChange}
        onCChange={onCaChange}
        onDChange={onAbChange}
        onEChange={onBbChange}
        onFChange={onCbChange}
        onResult={onResult}
        result={result}
      />
    </div>
  );
};

export default PointOfInt;
