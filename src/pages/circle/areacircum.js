import React, { useState } from 'react'
import Circle from "../../calculations/circle";
import { MathComponent } from "mathjax-react";
import TitleTemplate from '../../component/sections/titleTemplate';

const Areacircum = () => {
    const [value, setValue] = useState({
        a: "",
        b: "",
        c: "",
      });
    
      const [result, setresult] = useState("")
      const circle = new Circle(value.a, value.b, value.c);
      const onAChange = (e) => {
        setValue({
          ...value,
          a: e.target.value,
        });
      };
      const onBChange = (e) => {
        setValue({
          ...value,
          b: e.target.value,
        });
      };
      const onCChange = (e) => {
        setValue({
          ...value,
          c: e.target.value,
        });
      };
      const resultDumm = () => {
        const result = circle.areacircum(value.a, value.b, value.c);
        let a=result[0]
        let b=result[1]
    
        let final= <MathComponent tex={`Area :${a} \\hspace{0.5cm} Circumference:${b}`} />
    
        setresult(final)
      };
    
      const onResult = () => {
        value.a === "" || 
        value.b === "" || 
        value.c === ""
          ? alert("Enter all inputs")
          : check_circle();
      };

      const check_circle = () => {
        (value.a/2 * value.a/2) + (value.b/2 * value.b/2) - value.c <= 0 
        ? alert("The Entered Equation of circle is invalid! Enter Valid Input")
        :resultDumm()
      }
    
      const s = '\\displaylines{Area = \\pi r^2 \\\\ \\\\ Circumference = 2 \\pi r}';
      const f2 = <MathComponent tex={s} />
  
    return (
    <div>
    <TitleTemplate
    title={"Area and Circumference of a circle from equation"}
    subTitle={""}
    formula={f2}
    type={"eqCircle"}
    valueA={value.a}
    valueB={value.b}
    valueC={value.c}
    onAChange={onAChange}
    onBChange={onBChange}
    onCChange={onCChange}
    result={result}
    onResult={onResult}
  /></div>
  )
}

export default Areacircum