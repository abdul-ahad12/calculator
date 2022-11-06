import React, { useState } from "react";
import Circle from "../../calculations/circle";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

const Lengthoftangent = () => {
    const [eqInput, seteqInput] = useState({
        x: "",
        y: "",
        g: "",
        f: "",
        c: "",
      });
      console.log(eqInput)
    
      const [result, setresult] = useState("");
      const circle = new Circle(
        eqInput.x,
        eqInput.y,
        eqInput.g,
        eqInput.f,
        eqInput.c
      );
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
        const result = circle.lengthoftangent(
          eqInput.x,
          eqInput.y,
          eqInput.g,
          eqInput.f,
          eqInput.c
        );
        let a = result[0];
        let b = result[1];
        let c = result[2];
        let d = result[3];
    
        let final = <MathComponent tex={`Eqn of tangent:${b}x+${c}y+${d}=0, \\hspace{.5cm} Length of tangent:${a}`} />;
    
        setresult(final);
      };
    
      const onResult = () => {
        eqInput.x === "" ||
        eqInput.y === "" ||
        eqInput.g === "" ||
        eqInput.f === "" ||
        eqInput.c === ""
          ? alert("Enter all inputs")
          : resultDumm();
        // setvariables({
        //     ax:"",
        //     ay:"",
        //     bx:"",
        //     by:"",
    
        // })
      };

      const f = 'Tangent \\hspace{.15cm} at \\hspace{.15cm} P(x_1,y_1): xx_1 + yy_1 + g(x +x_1) + f(y + y_1) +c';
      const f1 = <MathComponent tex={f} />

  return (
    <div>
      <TitleTemplate
        title={"Eqn and length of tangent at a point to a circle"}
        type={"pointeqCircle"}
        formula = {f1}
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

export default Lengthoftangent;
