import React, { useState } from 'react'
import Circle from "../../calculations/circle";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

const Areacircum = () => {
    const [eqInput, seteqInput] = useState({
        g: "",
        f: "",
        c: "",
      });
    
      const [result, setresult] = useState("")
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
        const result = circle.areacircum(eqInput.g, eqInput.f, eqInput.c);
        let a=result[0]
        let b=result[1]
    
        let final= <MathComponent tex={`Area :${a} \\hspace{0.5cm} Circumference:${b}`} />
    
        setresult(final)
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
    
      const s = 'Area = \\pi r^2 \\hspace{1cm} Circumference = 2 \\pi r';
      const f2 = <MathComponent tex={s} />
  
    return (
    <div><TitleTemplate
    title={"Area and Circumference of a circle from equation"}
    subTitle={""}
    formula={f2}
    type={"eqCircle"}
    valueG={eqInput.g}
    valueF={eqInput.f}
    valueC={eqInput.c}
    onGChange={onGChange}
    onFChange={onFChange}
    onCChange={onCChange}
    result={result}
    onResult={onResult}
  /></div>
  )
}

export default Areacircum