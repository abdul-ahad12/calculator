import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Ellipse from "../../calculations/ellipse";
import TitleTemplate from "../../component/sections/titleTemplate";
import ResultTemp from "../../component/sections/resultTemp";

import ReactGA from "react-ga";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);

const Attributes = () => {

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);

  const [eqInput, seteqInput] = useState({
    l: "",
    m: "",
    n: "",
    o: "",
    p: "",
  });

  const [result, setresult] = useState("");
  const ellipse = new Ellipse(
    eqInput.l,
    eqInput.m,
    eqInput.n,
    eqInput.o,
    eqInput.p
  );
  console.log(eqInput);
  const onLChange = (e) => {
    seteqInput({
      ...eqInput,
      l: e.target.value,
    });
  };
  const onMChange = (e) => {
    seteqInput({
      ...eqInput,
      m: e.target.value,
    });
  };
  const onNChange = (e) => {
    seteqInput({
      ...eqInput,
      n: e.target.value,
    });
  };
  const onOChange = (e) => {
    seteqInput({
      ...eqInput,
      o: e.target.value,
    });
  };
  const onPChange = (e) => {
    seteqInput({
      ...eqInput,
      p: e.target.value,
    });
  };

  const resultDumm = () => {
    const result = ellipse.attributes(
      eqInput.l,
      eqInput.m,
      eqInput.n,
      eqInput.o,
      eqInput.p
    );
    let a = result[0];
    let b = result[1];
    let c = result[2];
    let d = result[3];
    let e = result[4];
    let f = result[5];
    let g = result[6];
    let h = result[7];
    let i = result[8];
    let j = result[9];
    let k = result[10];
    let l = result[11];
 

    // let final=`${a},${b},${c},${d},${e},${f},${g}`

    let final = (
      <ResultTemp
        a={a}
        b={b}
        c={c}
        d={d}
        e={e}
        f={f}
        g={g}
        h={l}
        i={i}
        j={j}
        k={k}
        l={h}
        title1={"Length of Major Axis"}
        title2={"Length of Minor Axis"}
        title3={"Length of Latus rectum"}
        title4={" Center"}
        title5={"e"}
        title6={"Foci"}
        title7={"Equation of directrices"}
        title12={"Vertices"}
        title9={"Equation of Major Axis"}
        title10={"Equation of Minor Axis"}
        title11={"Equation of Latus rectrum"}
        title8={"Standard Form"}
   
      />
    );

    setresult(final);
  };

  const check=()=>{
    if(eqInput.l==="0"||eqInput.m==="0"){
      return alert("The equation entered is not of Ellipse")
    }
    

    let nn = eqInput.n / eqInput.l;
    //    let mm=m/m
    let oo = eqInput.o / eqInput.m;
    //this is alpha
    let aa = -1 * (nn / 2);
    //this is beta
    let bb = -1 * (oo / 2);
    //this is the coeeficient we are dividing with
    let c =
      -1 * eqInput.p + eqInput.l * (Number(aa) * Number(aa)) + eqInput.m * (Number(bb) * Number(bb));
    //this is a^2
    let a = c / eqInput.l;
    //this is b^2
    let b = c / eqInput.m;
    console.log(a)
    console.log(b)
    a<0||b<0?alert("The equation entered is not of Ellipse"):resultDumm()

  }

  const onResult = () => {
    eqInput.l === "" || eqInput.m === ""
      ? alert("Enter all inputs")
      : check();
    // setvariables({
    //     ax:"",
    //     ay:"",
    //     bx:"",
    //     by:"",

    // })
  };

  return (
    <div>
      {" "}
      <TitleTemplate
        title={"Program to find attributes of ellipse"}
        type={"ellipse"}
        // formula = {f2}
        valueA={eqInput.l}
        valueB={eqInput.m}
        valueC={eqInput.n}
        valueD={eqInput.o}
        valueE={eqInput.p}
        onAChange={onLChange}
        onBChange={onMChange}
        onCChange={onNChange}
        onDChange={onOChange}
        onEChange={onPChange}
        result={result}
        onResult={onResult}
      >
        <div className="flex flex-col"></div>
      </TitleTemplate>
    </div>
  );
};

export default Attributes;
