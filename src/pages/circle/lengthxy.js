import React, { useState } from "react";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";
import Circle from "../../calculations/circle";

const Lengthxy = () => {
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
    const result = circle.lengthXY(eqInput.g, eqInput.f, eqInput.c);
    let a = result[0];
    let b = result[1];

    let final = `Length of intercept on x-axis : ${ a} , Length of intercept on y-axis is : ${ b}`

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
        title={"Length of X and Y intercepts"}
        type={"eqCircle"}
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

export default Lengthxy;
