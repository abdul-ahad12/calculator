import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Circle from "../../calculations/circle";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

import ReactGA from "react-ga";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);

const Eqfromcp = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);

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

    let final= <MathComponent tex={`Eq:x^2+y^2+(${a})x+(${b})y+(${c}) = 0`} />

    setresult(final)
  };

  const onResult = () => {
    points.ax === "" || 
    points.ay === "" || 
    points.x === ""||
    points.y ===""
      ? alert("Enter all inputs")
      : check_points();
  };

  const check_points = () => {
    points.ax === points.x === "" && points.ay === points.y 
      ? alert("The Point and Centre cannot be same! Enter valid Input")
      : resultDumm();
  };

  return (
    <div>
      <TitleTemplate
        title={"Equation of circle passing through a point with center given"}
        type={"centerpoint"}
        valueA={points.ax}
        valueB={points.ay}
        valueC={points.x}
        valueD={points.y}
        onAChange={onAxChange}
        onBChange={onAyChange}
        onCChange={onXChange}
        onDChange={onYChange}
        onResult={onResult}
        result={result}
      />
    </div>
  );
};

export default Eqfromcp;
