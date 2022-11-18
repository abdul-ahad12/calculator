import React, { useState } from "react";
import Line from "../../calculations/line";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

const Distancepairpara = () => {
  const [coeficient, setcoeficient] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e1: "",
    f: "",
  });
  const [result, setResult] = useState("");

  const line = new Line(
    coeficient.a,
    coeficient.b,
    coeficient.c,
    coeficient.d,
    coeficient.e1,
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
      e1: e.target.value,
    });
  };
  const onFChange = (e) => {
    setcoeficient({
      ...coeficient,
      f: e.target.value,
    });
  };

  const resultDumm = () => {
    const result = line.distancepairpara(
      coeficient.a,
      coeficient.b,
      coeficient.c,
      coeficient.d,
      coeficient.e1,
      coeficient.f
    );
    let x = result[0];

    let c = <MathComponent tex={`d = ${x}`} />;
    setResult(c);
  };

  const onResult = () => {
    coeficient.a === "" ||
    coeficient.b === "" ||
    coeficient.c === "" ||
    coeficient.d === "" ||
    coeficient.e1 === "" ||
    coeficient.f === ""
      ? alert("Enter all inputs")
      : check_eqn();
  };

  const check_eqn = () => {
    (coeficient.b/2 * coeficient.b/2) - (coeficient.a * coeficient.c) >0 || (coeficient.b/2 * coeficient.b/2) - (coeficient.a * coeficient.c)===0
    ?alert("The equation represents two imaginary lines! Enter Valid Input")
    :resultDumm();
  }

  const f ="d = 2\\sqrt{\\frac{g^2-ac}{a(a+b)}}";
  const f1 = <MathComponent tex={f} />;

  return (
    <div>
      <TitleTemplate
        title={"Distance between two parallel lines from equation of pair of lines"}
        formula={f1}
        type={"pairoflines"}
        valueA={coeficient.a}
        valueB={coeficient.b}
        valueC={coeficient.c}
        valueD={coeficient.d}
        valueE={coeficient.e1}
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

export default Distancepairpara;
