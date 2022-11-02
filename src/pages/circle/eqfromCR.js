import React, { useState } from "react";
import Circle from "../../calculations/circle";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

const EqfromCR = () => {
  const [point, setpoint] = useState({
    x: "",
    y: "",
    r: "",
  });

  console.log(point)
  const [result, setresult] = useState("");

  const circle = new Circle(point.x, point.y, point.r);

  const onXChange = (e) => {
    setpoint({
      ...point,
      x:e.target.value,
    });
  };
  const onYChange = (e) => {
    setpoint({
      ...point,
      y: e.target.value,
    });
  };
  const onRChange = (e) => {
    setpoint({
      ...point,
      r: e.target.value,
    });
  };

  const resultDumm = () => {
    let result = circle.eqFromCR(point.x, point.y, point.r);
    let a = result[0];
    let b = result[1];
    let c = result[2];

    let final = <MathComponent tex={`x^2 + y^2 +${a}x +${b}y +${c}`} />

    setresult(final);
  };
  const onResult = () => {
    point.x === "" || point.y === "" || point.r === ""
      ? alert("Enter all inputs")
      : resultDumm();
    // setvariables({
    //     ax:"",
    //     ay:"",
    //     bx:"",
    //     by:"",

    // })
  };

  const s = 'Equation \\hspace{0.25cm} of \\hspace{0.25cm} Circle: (x-h)^2 + (y-k)^2 = r^2';
  const f2 = <MathComponent tex={s} />

  return (
    <div>
      <TitleTemplate
        title={"Equation of circle from center and radius"}
        formula={f2}
        type={"centerAR"}
        valueX={point.x}
        valueY={point.y}
        valueR={point.r}
        onXChange={onXChange}
        onYChange={onYChange}
        onRChange={onRChange}
        onResult={onResult}
        result={result}
      />
    </div>
  );
};

export default EqfromCR;
