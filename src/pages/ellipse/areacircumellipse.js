import React, { useState } from "react";
import Ellipse from "../../calculations/ellipse";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";


const Areacircumellipse = () => {
  const [eqInput, seteqInput] = useState({
    l: "",
    m: "",
    n: "",
    o: "",
    p: "",
  });

  const [result, setresult] = useState("");
  const ellipse = new Ellipse(eqInput.l, eqInput.m);
  console.log(eqInput);
  const onLChange = (e) => {
    seteqInput({
      ...eqInput,
      l: e.target.value,
    });
  };
  const onMChange = (e) => {
    seteqInput({
      ...eqInput,
      m: e.target.value,
    });
  };
  
  const resultDumm = () => {
    const result = ellipse.areacircum(eqInput.l, eqInput.m);
    let a = result[0];
    let b = result[1];

    let final = (
      <MathComponent tex={`Area :${a} \\hspace{0.5cm} Circumference:${b}`} />
    );

    setresult(final);
  };

  const onResult = () => {
    eqInput.l === "" || eqInput.m === ""
      ? alert("Enter all inputs")
      : resultDumm();
    // setvariables({
    //     ax:"",
    //     ay:"",
    //     bx:"",
    //     by:"",

    // })
  };

  const s = "Area = \\pi r^2 \\hspace{1cm} Circumference = 2 \\pi r";
  const f2 = <MathComponent tex={s} />;

  return (
    <div>
    <TitleTemplate
      title={"Area and circumference of ellipse from equation"}
      type={"ellipse"}
      formula = {f2}
      valueA={eqInput.l}
      valueB={eqInput.m}
      onAChange={onLChange}
      onBChange={onMChange}
      result={result}
      onResult={onResult}
    />
  </div>
  )
};
export default Areacircumellipse;
