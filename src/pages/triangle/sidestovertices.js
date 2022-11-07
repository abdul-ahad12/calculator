import React, { useState } from "react";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";
import Triangle from "../../calculations/triangle";

const Sidestovertices = () => {
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
    const result = triangle.sidestovertices(
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
    let x1 = result[0];
    let y1 = result[1];
    let x2 = result[2];
    let y2 = result[3];
    let x3 = result[4];
    let y3 = result[5];
    let a = `(${x1},${y1})`;
    let b = `(${x2},${y2})`;
    let c = `(${x3},${y3})`;
    let e = (
      <MathComponent
        tex={`V_1${a} \\hspace{1cm} V_2${b} \\hspace{1cm} V_3${c}`}
      />
    );
    setResult(e);
  };

  const onResult = () => {
    coeficient.aa === "" || coeficient.ba === "" || coeficient.ca === ""
      ? alert("Enter all inputs")
      : resultDumm();
    // setvariables({
    //     ax:"",
    //     ay:"",
    //     bx:"",
    //     by:"",

    // })
  };

  return (
    <div>
      <TitleTemplate
        title={"Vertices of a Triangle from equations of sides"}
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

export default Sidestovertices;
