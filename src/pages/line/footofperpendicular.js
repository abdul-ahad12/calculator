import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Line from "../../calculations/line";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);
ReactGA.send("pageview");

const Footofperpendicular = () => {

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);

  const [coeficient, setcoeficient] = useState({
    aa: "",
    ba: "",
    ca: "",
    ab: "",
    bb: "",
  });
  const [result, setResult] = useState("");

  const line = new Line(
    coeficient.aa,
    coeficient.ba,
    coeficient.ca,
    coeficient.ab,
    coeficient.bb
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

  const resultDumm = () => {
    const result = line.footofperpendicular(
      coeficient.aa,
      coeficient.ba,
      coeficient.ca,
      coeficient.ab,
      coeficient.bb
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
    coeficient.bb === "" 
      ? alert("Enter all inputs")
      : zero();
  };

  const zero = () => {
    coeficient.ca === "0" && coeficient.ab === "0"
    ? alert("Invalid Input! Enter proper equation of line")
    :resultDumm();
  }

  const f ="\\frac{h-x_1}{a} = \\frac{k-y_1}{b} = \\frac{-(ax_1+by_1+c)}{a^2+b^2}";
  const f1 = <MathComponent tex={f} />;

  return (
    <div>
      <Helmet>
        <title>
        Foot of Perpendicular from a point to a line.
        </title>
        <meta
          name="description"
          content="Free calculator to find Foot of Perpendicular from a point to a line."
        />
      </Helmet>
      <TitleTemplate
        title={"Foot of Perpendicular from a point to a line"}
        formula={f1}
        type={"onelinepoint"}
        valueA={coeficient.aa}
        valueB={coeficient.ba}
        valueC={coeficient.ca}
        valueD={coeficient.ab}
        valueE={coeficient.bb}
        onAChange={onAaChange}
        onBChange={onBaChange}
        onCChange={onCaChange}
        onDChange={onAbChange}
        onEChange={onBbChange}
        onResult={onResult}
        result={result}
      />
    </div>
  );
};

export default Footofperpendicular;
