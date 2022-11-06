import React, { useState } from "react";
import Circle from "../../calculations/circle";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";


const GenToStand = () => {
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
    const result = circle.gentostand(eqInput.g, eqInput.f, eqInput.c);
    let a = result[0];
    let b = result[1];
    let c = result[2];

    let final = (
      <MathComponent tex={`(x-(${a}))^2+(y-(${b}))^2=${c}`} />
    );

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

  const f = 'General Eq: x^2 + y^2 + 2gx + 2fy + c \\hspace{0.5cm} Standard Eq: (x-h)^2 + (y-k)^2 = r^2';
  const f1 = <MathComponent tex={f} />
  

  return (
    <div>
      <TitleTemplate
        title={"General form equation to standard form"}
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

export default GenToStand;
