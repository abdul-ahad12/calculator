import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Circle from "../../calculations/circle";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

import ReactGA from "react-ga";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);

const Lengthoftangent = () => {

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);

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
        let final = <MathComponent tex={`Length \\ of \\ tangent:${a}`} />;
    
        setresult(final);
      };
    
      const onResult = () => {
        eqInput.x === "" ||
        eqInput.y === "" ||
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

      const f = '\\displaylines{Length \\ of \\ Tangent: \\sqrt{S_{11}}, \\\\ \\\\ \\sqrt{S_{11}} = \\sqrt{x_1^2 + y_1^2 + 2gx_1 +2fy_1 + c}}';
      const f1 = <MathComponent tex={f} />

  return (
    <div>
      <TitleTemplate
        title={"Length of tangent at a point to a circle"}
        type={"pointeqCircle"}
        formula = {f1}
        valueA={eqInput.x}
        valueB={eqInput.y}
        valueC={eqInput.g}
        valueD={eqInput.f}
        valueE={eqInput.c}
        onAChange={onXChange}
        onBChange={onYChange}
        onCChange={onGChange}
        onDChange={onFChange}
        onEChange={onCChange}
        result={result}
        onResult={onResult}
      />
    </div>
  );
};

export default Lengthoftangent;
