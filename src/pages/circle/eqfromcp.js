import React, { useState } from "react";
import Circle from "../../calculations/circle";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

const Eqfromcp = () => {
  const [points, setpoints] = useState({
    ax: "",
    ay: "",
    x: "",
    y: "",
  });
  const [result, setresult] = useState("")
  const circle = new Circle(points.ax, points.ay, points.x,points.y);

  const onAxChange = (e) => {
    setpoints({
      ...points,
      ax: e.target.value,
    });
  };
  const onAyChange = (e) => {
    setpoints({
      ...points,
      ay: e.target.value,
    });
  };
  const onXChange = (e) => {
    setpoints({
      ...points,
      x: e.target.value,
    });
  };
  const onYChange = (e) => {
    setpoints({
      ...points,
      y: e.target.value,
    });
  };

  const resultDumm = () => {
    const result = circle.eqfromPC(points.ax, points.ay, points.x,points.y);
    let a=result[0]
    let b=result[1]
    let c=result[2]

    let final= <MathComponent tex={`Eq:x^2+y^2+${a}x+${b}y+${c}`} />

    setresult(final)
  };

  const onResult = () => {
    points.ax=== "" || points.ay === "" || points.x === ""||points.y===""
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
        title={"Equation of circle passing through a point with center given"}
        type={"centerpoint"}
        valueax={points.ax}
        valueay={points.ay}
        valueX={points.x}
        valueY={points.y}
        onAxChange={onAxChange}
        onAyChange={onAyChange}
        onXChange={onXChange}
        onYChange={onYChange}
        onResult={onResult}
        result={result}
      />
    </div>
  );
};

export default Eqfromcp;
