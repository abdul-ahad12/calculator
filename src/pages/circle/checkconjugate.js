import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Circle from "../../calculations/circle";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

import ReactGA from "react-ga4";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);
ReactGA.send("pageview");

const Checkconjugate = () => {

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
    g: "",
  });
  const [result, setResult] = useState("");

  const circle = new Circle(
    coeficient.a,
    coeficient.b,
    coeficient.c,
    coeficient.d,
    coeficient.e,
    coeficient.f,
    coeficient.g,
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

  const resultDumm = () => {
    const result = circle.checkconjugate(
      coeficient.a,
      coeficient.b,
      coeficient.c,
      coeficient.d,
      coeficient.e,
      coeficient.f,
      coeficient.g,
    );
    let x = result[0];
    {console.log(x)}
    let final = ``;
    if(x === 0 )
    {
        final = `\\displaylines{S_{12} = ${x} \\\\ Since \\hspace{.15cm} S_{12} \\hspace{.15cm} is \\hspace{.15cm}  equal \\hspace{.15cm}  to \\hspace{.15cm} zero, \\hspace{.15cm} Therefore \\hspace{.15cm} the \\hspace{.15cm} points \\hspace{.15cm} are \\hspace{.15cm} conjugate }`
    }
    else
    {
      final = `\\displaylines{S_{12} = ${x} \\\\ Since \\hspace{.15cm} S_{12} \\hspace{.15cm} is \\hspace{.15cm} not \\hspace{.15cm}  equal \\hspace{.15cm}  to \\hspace{.15cm} zero, \\hspace{.15cm} Therefore \\hspace{.15cm} the \\hspace{.15cm} points \\hspace{.15cm} are \\hspace{.15cm} not \\hspace{.15cm} conjugate }`;
    }
    let c = <MathComponent tex={final} />;
    setResult(c);
  };

  const onResult = () => {
    coeficient.a === "" ||
    coeficient.b === "" ||
    coeficient.c === "" ||
    coeficient.d === "" ||
    coeficient.e === "" ||
    coeficient.f === "" ||
    coeficient.g === ""
      ? alert("Enter all inputs")
      : check_circle();
  };

  const check_circle = () => {
    (coeficient.e/2 * coeficient.e/2) + (coeficient.f/2 * coeficient.f/2) - coeficient.g <= 0 
    ? alert("The Equation of circle is invalid! Enter Valid Input")
    :resultDumm()
  }


  const f ="S_{12} = x_1x_2 +y_1y_2 + g(x_1 + x_2) +f(y_1+y_2) + c=0";
  const f1 = <MathComponent tex={f} />;

  return (
    <div>
      <TitleTemplate
        title={"Check if two Points are Conjugate with respect to a circle"}
        formula={f1}
        type={"twopointeqCircle"}
        valueA={coeficient.a}
        valueB={coeficient.b}
        valueC={coeficient.c}
        valueD={coeficient.d}
        valueE={coeficient.e}
        valueF={coeficient.f}
        valueG={coeficient.g}
        onAChange={onAChange}
        onBChange={onBChange}
        onCChange={onCChange}
        onDChange={onDChange}
        onEChange={onEChange}
        onFChange={onFChange}
        onGChange={onGChange}
        onResult={onResult}
        result={result}
      />
    </div>
  );
};

export default Checkconjugate;
