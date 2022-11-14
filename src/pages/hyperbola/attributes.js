import React, { useState } from "react";
import { MathComponent } from "mathjax-react";
import Hyperbola from "../../calculations/hyperbola";
import ResultTemp from "../../component/sections/resultTemp";
import TitleTemplate from "../../component/sections/titleTemplate";



const AttributesEl = () => {
  const [eqInput, seteqInput] = useState({
    l: "",
    m: "",
    n: "",
    o: "",
    p: "",
  });

  const [result, setresult] = useState("");
  const hyperbola = new Hyperbola(
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
    const result = hyperbola.attributes(
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
    let m = result[12];
    
 

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
        h={h}
        i={i}
        j={j}
        k={k}
        l={l}
        m={m}
        title1={"Length of Tranverse Axis"}
        title2={"Length of Conjugate Axis"}
        title3={"Length of Latus rectrum"}
        title4={" Center"}
        title5={"e"}
        title6={"Foci"}
        title7={"Equation of directrices"}
        title8={"Vertices"}
        title9={"Equation of Tranverse Axis"}
        title10={"Equation of Conjugate Axis"}
        title11={"Equation of Latus rectrum"}
        title12={"Standard Form"}
   
      />
    );

    setresult(final);
  };
const firstcheck=()=>{
  eqInput.l==="0"||eqInput.m==="0"?alert("The Equation entered is not of Hyperbola"):check()
}

  const check=()=>{
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
      if (eqInput.l <0 ) {
        //this is a^2
      let a = -1*(c / eqInput.l);
      //this is b^2
      let b = (c / eqInput.m);
      console.log(a)
      console.log(b)

      a<0||b<0?alert("The Equation entered is not of Hyperbola"):resultDumm()
  }
  else{
    let a = (c /  eqInput.l);
    //this is b^2
    let b = -1*(c /  eqInput.m);

      a<0||b<0?alert("The Equation entered is not of Hyperbola"):resultDumm()

  }
}

  const onResult = () => {
    eqInput.l === "" || eqInput.m === ""
      ? alert("Enter all inputs")
      : firstcheck();
    // setvariables({
    //     ax:"",
    //     ay:"",
    //     bx:"",
    //     by:"",

    // })
  };
  // const s = "Area = \\pi r^2 \\hspace{1cm} Circumference = 2 \\pi r";
  // const f2 = <MathComponent tex={s} />;

  return (
    <div>
      {" "}
      <TitleTemplate
        title={"Program to find attributes of hyperbola"}
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

export default AttributesEl;

{
  /* <MathComponent tex={`${a}..${b}..${c}..${d}..${e}..${f}..${g}..${h}..${i}..${j}..${k}`} /> */
}
