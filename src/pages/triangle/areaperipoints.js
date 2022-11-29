import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";
import Triangle from "../../calculations/triangle";

<<<<<<< HEAD
import ReactGA from "react-ga";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);
=======
import ReactGA from "react-ga4";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);
ReactGA.send("pageview");
>>>>>>> 02a88ef35917d7c3a709c83cb8f14e574c0a1062

const Areaperipoints = () => {

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
    const result = triangle.areaperipoints(
      coeficient.a,
      coeficient.b,
      coeficient.c,
      coeficient.d,
      coeficient.e,
      coeficient.f
    );
    let x = result[0];
    let y = result[1];

    let e = <MathComponent tex={`Area :${x} \\hspace{1cm} Perimeter: ${y}`} />;
    setResult(e);
  };

  const onResult = () => {
    coeficient.a === "" || //x1
    coeficient.b === "" || //y1
    coeficient.c === "" || //x2
    coeficient.d === "" || //y2
    coeficient.e === "" || //x3
    coeficient.f === ""   //y3
      ? alert("Enter all inputs")
      : check_collinear();
  };

  const check_collinear = () => {
    (coeficient.a*(coeficient.d - coeficient.f )) +(coeficient.c*(coeficient.f - coeficient.b)) + (coeficient.e*(coeficient.b - coeficient.d)) === 0
    ? alert("Given points are collinear! Enter valid Input.")
    :resultDumm()
  }

  const f = "\\displaylines{Area = \\frac{1}{2}|(x_1-x_2)(y_1-y_3) - (x_1-x_3)(y_1-y_2)| \\\\ \\\\ Perimeter = AB + BC + CA  }";
  const f1 = <MathComponent tex={f} />

  return (
    <div>
      <TitleTemplate
        title={"Area and Perimeter of a triangle from equations of sides"}
        formula={f1}
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

export default Areaperipoints;
