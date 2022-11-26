import React, { useState } from "react";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";
import Triangle from "../../calculations/triangle";

const Areaperimeter = () => {
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
    const result = triangle.areaperimeter(
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

    let e = <MathComponent tex={`Area :${x} \\hspace{1cm} Perimeter: ${y}`} />;
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
    coeficient.a / coeficient.b === coeficient.d / coeficient.e || coeficient.a / coeficient.b === coeficient.g / coeficient.h || coeficient.g / coeficient.h === coeficient.d / coeficient.e 
      ? alert("Lines are parallel! Enter valid Input.")
      : resultDumm();
  };

  const f = "\\displaylines{Area = \\frac{1}{2}|(x_1-x_2)(y_1-y_3) - (x_1-x_3)(y_1-y_2)| \\\\ \\\\ Perimeter = AB + BC + CA  }";
  const f1 = <MathComponent tex={f} />

  return (
    <div>
      <TitleTemplate
        title={"Area and Perimeter of a triangle from equations of sides"}
        formula={f1}
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

export default Areaperimeter;
