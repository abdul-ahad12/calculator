import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Line from "../../calculations/line";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

<<<<<<< HEAD
import ReactGA from "react-ga";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);
=======
import ReactGA from "react-ga4";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);
ReactGA.send("pageview");
>>>>>>> 02a88ef35917d7c3a709c83cb8f14e574c0a1062

const Perpendicular = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);

  const [variables, setvariables] = useState({
    ax: "",
    ay: "",
    bx: "",
    by: "",
  });

  const line = new Line(variables.ax, variables.ay, variables.bx, variables.by);
  const [result, setResult] = useState("");

  const onAxChange = (e) => {
    setvariables({
      ...variables,
      ax: e.target.value,
    });
  };
  const onAyChange = (e) => {
    setvariables({
      ...variables,
      ay: e.target.value,
    });
  };
  const onBxChange = (e) => {
    setvariables({
      ...variables,
      bx: e.target.value,
    });
  };
  const onByChange = (e) => {
    setvariables({
      ...variables,
      by: e.target.value,
    });
  };
  const resultDumm = () => {
    const result = line.bisector(
        variables.ax,
        variables.ay,
        variables.bx,
        variables.by
      );
      let m=result[0]
      let b=result[1]
      let final =``;
      
      if(variables.ax - variables.bx === 0)
      {
        final = `y = ${b}`
      }
      else if(variables.ay - variables.by === 0)
      {
        final = `x = ${b}`
      }
      else
      {
        final = `y=${m}x+(${b})`
      }
      let a=<MathComponent tex={final} />
      setResult(a);
      
  };

  const onResult = () => {
      variables.ax === "" ||
      variables.ay === "" ||
      variables.bx === "" ||
      variables.by === ""
        ? alert("Enter all inputs")
        :  same()
  };

  // const all_zero = () => {
  //   variables.ax === "0" && variables.ay === "0" && variables.bx === "0" && variables.by === "0"
  //   ? alert("Invalid Input!")
  //   :  same()
  // }

  const same = () => {
    variables.ax === variables.bx   && variables.ay ===  variables.by 
    ? alert("Invalid Input! Enter two Different points")
    :  resultDumm()
  }

  return (
    <div>
      {" "}
      <TitleTemplate
        title={"Equation of Perpendicular bisector"}
        subTitle={""}
        formula={""}
        type={"twoPoints"}
        valueA={variables.ax}
        onAChange={onAxChange}
        valueB={variables.ay}
        onBChange={onAyChange}
        valueC={variables.bx}
        onCChange={onBxChange}
        valueD={variables.by}
        onDChange={onByChange}
        onResult={onResult}
        result={result}
      />
    </div>
  );
};

export default Perpendicular;
