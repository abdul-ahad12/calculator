import React, { useState } from "react";
import Circle from "../../calculations/circle";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

const Radicalaxis = () => {
  const [coeficient, setcoeficient] = useState({
    g1: "",
    f1: "",
    c1: "",
    g2: "",
    f2: "",
    c2: "",
  });
  const [result, setResult] = useState("");

  const circle = new Circle(
    coeficient.g1,
    coeficient.f1,
    coeficient.c1,
    coeficient.g2,
    coeficient.f2,
    coeficient.c2,
  );
  console.log(coeficient);

  const onG1Change = (e) => {
    setcoeficient({
      ...coeficient,
      g1: e.target.value,
    });
  };
  const onF1Change = (e) => {
    setcoeficient({
      ...coeficient,
      f1: e.target.value,
    });
  };
  const onC1Change = (e) => {
    setcoeficient({
      ...coeficient,
      c1: e.target.value,
    });
  };
  const onG2Change = (e) => {
    setcoeficient({
      ...coeficient,
      g2: e.target.value,
    });
  };
  const onF2Change = (e) => {
    setcoeficient({
      ...coeficient,
      f2: e.target.value,
    });
  };
  const onC2Change = (e) => {
    setcoeficient({
      ...coeficient,
      c2: e.target.value,
    });
  };

  const resultDumm = () => {
    const result = circle.radicalaxis(
      coeficient.g1,
      coeficient.f1,
      coeficient.c1,
      coeficient.g2,
      coeficient.f2,
      coeficient.c2,
    );
    let x = result[0];
    let y = result[1];
    let z = result[2]

    let c = <MathComponent tex={`(${x})x + (${y})y + (${z}) = 0`} />;
    setResult(c);
  };

  const onResult = () => {
    coeficient.g1 === "" ||
    coeficient.f1 === "" ||
    coeficient.c1 === "" ||
    coeficient.g2 === "" ||
    coeficient.f2 === "" ||
    coeficient.c2 === "" 
      ? alert("Enter all inputs")
      : check_circle1();
  };


const check_circle1 = () => {
    (coeficient.g1/2 * coeficient.g1/2) + (coeficient.f1/2 * coeficient.f1/2) - coeficient.c1 <= 0 
    ? alert("The Equation of First circle is invalid! Enter Valid Input")
    :check_circle2()
  }

  const check_circle2 = () => {
    (coeficient.g2/2 * coeficient.g2/2) + (coeficient.f2/2 * coeficient.f2/2) - coeficient.c2 <= 0 
    ? alert("The Equation of Second circle is invalid! Enter Valid Input")
    :resultDumm()
  }

  const f ="Radical \\ Axis = S_1 - S_2 =0";
  const f1 = <MathComponent tex={f} />;

  return (
    <div>
      <TitleTemplate
        title={"Radical Axis of two circles"}
        type={"twocircles"}
        formula = {f1}
        valueA={coeficient.g1}
        valueB={coeficient.f1}
        valueC={coeficient.c1}
        valueD={coeficient.g2}
        valueE={coeficient.f2}
        valueF={coeficient.c2}
        onAChange={onG1Change}
        onBChange={onF1Change}
        onCChange={onC1Change}
        onDChange={onG2Change}
        onEChange={onF2Change}
        onFChange={onC2Change}
        onResult={onResult}
        result={result}
      />
    </div>
  );
};

export default Radicalaxis;
