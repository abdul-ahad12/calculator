import React, { useState } from "react";
import Circle from "../../calculations/circle";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";


const Parametriceq = () => {
  const [eqInput, seteqInput] = useState({
    g: "",
    f: "",
    c: "",
  });

  const [result, setresult] = useState("");
  const circle = new Circle(eqInput.g, eqInput.f, eqInput.c);
  console.log(eqInput);
  const onGChange = (e) => {
    seteqInput({
      ...eqInput,
      g: e.target.value,
    });
  };
  const onFChange = (e) => {
    seteqInput({
      ...eqInput,
      f: e.target.value,
    });
  };
  const onCChange = (e) => {
    seteqInput({
      ...eqInput,
      c: e.target.value,
    });
  };
  const resultDumm = () => {
    const result = circle.parametriceq(eqInput.g, eqInput.f, eqInput.c);
    let a = result[0];
    let b = result[1];
    let c=result[2]

    let final =<MathComponent tex={`\\displaylines{x=${a}+(${c})Cos(\\theta) \\\\ y=${b}+(${c})Sin(\\theta)  \\\\  0<\\theta<2\\pi}`}/>

    setresult(final);
  };

  const onResult = () => {
    eqInput.g === "" || 
    eqInput.f === "" || 
    eqInput.c === ""
      ? alert("Enter all inputs")
      : check_circle();
  };

  const check_circle = () => {
    (eqInput.g/2 * eqInput.g/2) + (eqInput.f/2 * eqInput.f/2) - eqInput.c <= 0 
    ? alert("The Entered Equation of circle is invalid! Enter Valid Input")
    :resultDumm()
  }

  const f = '\\displaylines{ x = -g + rcos(\\theta) \\\\ \\\\ y = -f + rSin(\\theta)}';
  const f1 = <MathComponent tex={f} />

  return (
    <div>
      <TitleTemplate
        title={"Parametric equation of circle"}
        type={"eqCircle"}
        formula = {f1}
        valueA={eqInput.g}
        valueB={eqInput.f}
        valueC={eqInput.c}
        onAChange={onGChange}
        onBChange={onFChange}
        onCChange={onCChange}
        result={result}
        onResult={onResult}
      />
    </div>
  );
};

export default Parametriceq;
