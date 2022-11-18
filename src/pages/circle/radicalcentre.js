import React, { useState } from "react";
import Circle from "../../calculations/circle";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

const Radicalcentre = () => {
  const [coeficient, setcoeficient] = useState({
    g1: "",
    f1: "",
    c1: "",
    g2: "",
    f2: "",
    c2: "",
    g3: "",
    f3: "",
    c3: "",
  });
  const [result, setResult] = useState("");

  const circle = new Circle(
    coeficient.g1,
    coeficient.f1,
    coeficient.c1,
    coeficient.g2,
    coeficient.f2,
    coeficient.c2,
    coeficient.g3,
    coeficient.f3,
    coeficient.c3,
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
  const onG3Change = (e) => {
    setcoeficient({
      ...coeficient,
      g3: e.target.value,
    });
  };
  const onF3Change = (e) => {
    setcoeficient({
      ...coeficient,
      f3: e.target.value,
    });
  };
  const onC3Change = (e) => {
    setcoeficient({
      ...coeficient,
      c3: e.target.value,
    });
  };

  const resultDumm = () => {
    const result = circle.radicalcentre(
      coeficient.g1,
      coeficient.f1,
      coeficient.c1,
      coeficient.g2,
      coeficient.f2,
      coeficient.c2,
      coeficient.g3,
      coeficient.f3,
      coeficient.c3,
    );
    let x = result[0];
    let y = result[1];

    let c = <MathComponent tex={`(${x}, ${y})`} />;
    setResult(c);
  };

  const onResult = () => {
    coeficient.g1 === "" ||
    coeficient.f1 === "" ||
    coeficient.c1 === "" ||
    coeficient.g2 === "" ||
    coeficient.f2 === "" ||
    coeficient.c2 === "" ||
    coeficient.g3 === "" ||
    coeficient.f3 === "" ||
    coeficient.c3 === "" 
      ? alert("Enter all inputs")
      : resultDumm();
  };


//   const f ="Radical \\ Axis = S_1 - S_2 =0";
//   const f1 = <MathComponent tex={f} />;

  return (
    <div>
      <TitleTemplate
        title={"Radical Centre of three circles"}
        type={"threecircles"}
        // formula = {f1}
        valueA={coeficient.g1}
        valueB={coeficient.f1}
        valueC={coeficient.c1}
        valueD={coeficient.g2}
        valueE={coeficient.f2}
        valueF={coeficient.c2}
        valueG={coeficient.g3}
        valueH={coeficient.f3}
        valueI={coeficient.c3}
        onAChange={onG1Change}
        onBChange={onF1Change}
        onCChange={onC1Change}
        onDChange={onG2Change}
        onEChange={onF2Change}
        onFChange={onC2Change}
        onGChange={onG3Change}
        onHChange={onF3Change}
        onIChange={onC3Change}
        onResult={onResult}
        result={result}
      />
    </div>
  );
};

export default Radicalcentre;
