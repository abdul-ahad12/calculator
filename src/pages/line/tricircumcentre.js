import React, { useState } from "react";
import Line from "../../calculations/line";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";


const Tricircumcentre = () => {
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

  const line = new Line(
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
    const result = line.tricircumcentre(coeficient.a, coeficient.b, coeficient.c,coeficient.d, coeficient.e, coeficient.f, coeficient.g, coeficient.h, coeficient.i);
    let x = result[0];
    let y = result[1];
    let c = `(${x},${y})`;
    let e = (
      <MathComponent tex={`Circumcentre :${c}`} />
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

  return <div>
    <TitleTemplate
        title={"Circumcentre of a triangle from sides"}
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
  </div>;
};

export default Tricircumcentre;
