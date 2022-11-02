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
    
        let final = <MathComponent tex={`Eqn of tangent:${b}x+${c}y+${d}=0,Length of tangent:${a}`} />;
    
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
  return (
    <div>
      <TitleTemplate
        title={"Eqn and length of tangent at a point to a circle"}
        type={"pointeqCircle"}
        valueX={eqInput.x}
        valueY={eqInput.y}
        valueG={eqInput.g}
        valueF={eqInput.f}
        valueC={eqInput.c}
        onGChange={onGChange}
        onFChange={onFChange}
        onCChange={onCChange}
        onXChange={onXChange}
        onYChange={onYChange}
        result={result}
        onResult={onResult}
      />
    </div>
  );
};

export default Lengthoftangent;
