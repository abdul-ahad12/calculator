import React, { useState } from "react";
import Circle from "../../calculations/circle";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

const Powerofpoint = () => {
    const [eqInput, seteqInput] = useState({
        x:"",
        y:"",
        g: "",
        f: "",
        c: "",
      });
    
      const [result, setresult] = useState("");
      const circle = new Circle(eqInput.x,eqInput.y,eqInput.g, eqInput.f, eqInput.c);
      console.log(eqInput);
      const onXChange = (e) => {
        seteqInput({
          ...eqInput,
          x: e.target.value,
        });
      };
      const onYChange = (e) => {
        seteqInput({
          ...eqInput,
          y: e.target.value,
        });
      };
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
        const result = circle.powerofpoint(eqInput.x,eqInput.y,eqInput.g, eqInput.f, eqInput.c);
        let a = result
    
        let final =<MathComponent tex={`Power \\hspace{0.15cm} of \\hspace{0.15cm} point \\hspace{0.15cm} is:${a}`}/>
    
        setresult(final);
      };
    
      const onResult = () => {
        eqInput.x===""||eqInput.y===""|| eqInput.g === "" || eqInput.f === "" || eqInput.c === ""
          ? alert("Enter all inputs")
          : resultDumm();
        // setvariables({
        //     ax:"",
        //     ay:"",
        //     bx:"",
        //     by:"",
    
        // })
      };

      const s = 'P:(x_1,y_1), \\hspace{0.5cm} S_{11}: (x_1)^2 + (y_1)^2 + 2g(x_1) + 2f(y_1) - c';
      const f2 = <MathComponent tex={s} />

  return (
    <div>
      <TitleTemplate
        title={"Power of point wrt Circle"}
        type={"pointeqCircle"}
        formula = {f2}
        valueA={eqInput.x}
        valueB={eqInput.y}
        valueC={eqInput.g}
        valueD={eqInput.f}
        valueE={eqInput.c}
        onAChange={onGChange}
        onBChange={onFChange}
        onCChange={onCChange}
        onDChange={onXChange}
        onEChange={onYChange}
        result={result}
        onResult={onResult}
      />
    </div>
  );
};

export default Powerofpoint;
