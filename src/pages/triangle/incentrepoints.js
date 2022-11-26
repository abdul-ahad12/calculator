import React, { useState } from "react";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";
import Triangle from "../../calculations/triangle";

const Incentrepoints = () => {
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
    const result = triangle.incentrepoints(
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
    let e = <MathComponent tex={`Incenter :${c}`} />;
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
    (coeficient.a*(coeficient.d - coeficient.f )) +(coeficient.c*(coeficient.f - coeficient.b)) + (coeficient.e*(coeficient.b - coeficient.d)) === 0
    ? alert("Given points are collinear! Enter valid Input.")
    :resultDumm()
  }

  const f = "Incenter = (\\frac{ax_1+bx_2+cx_3}{a+b+c}, \\frac{ay_1+by_2+cy_3}{a+b+c})";
  const f1 = <MathComponent tex={f} />

  return (
    <div>
      <TitleTemplate
        title={"Incenter of a triangle from Vertices"}
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
export default Incentrepoints;
