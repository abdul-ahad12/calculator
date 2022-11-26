import React, { useState } from "react";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";
import Circle from "../../calculations/circle";

const Threepointcircle = () => {
  const [coeficient, setcoeficient] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
  });
  const [result, setResult] = useState("");

  const circle = new Circle(
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
    const result = circle.threepointcircle(
      coeficient.a,
      coeficient.b,
      coeficient.c,
      coeficient.d,
      coeficient.e,
      coeficient.f
    );
    let x = result[0];
    let y = result[1];
    let z = result[2];

    let e = <MathComponent tex={`x^2 + y^2 + (${x})x + (${y})y + (${z}) = 0`} />;
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
      : resultDumm();
  };


  
  return (
    <div>
      <TitleTemplate
        title={"Equation of circle from Three points"}
        // formula={f1}
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

export default Threepointcircle;
