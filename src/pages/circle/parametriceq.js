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

    let final =<MathComponent tex={`Eq:x=${a}+${c}Cos(n),y=${b}+${c}Sin(n), 0<n<2Pi`}/>

    setresult(final);
  };

  const onResult = () => {
    eqInput.g === "" || eqInput.f === "" || eqInput.c === ""
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
        title={"Parametric equation of circle"}
        type={"eqCircle"}
        valueG={eqInput.g}
        valueF={eqInput.f}
        valueC={eqInput.c}
        onGChange={onGChange}
        onFChange={onFChange}
        onCChange={onCChange}
        result={result}
        onResult={onResult}
      />
    </div>
  );
};

export default Parametriceq;
