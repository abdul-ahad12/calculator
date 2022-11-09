import React, { useState } from "react";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";
import ResultTemp from "../../component/sections/resultTemp";
import Parabola from "../../calculations/parabola";

const AttributesPara = () => {
  const [eqInput, seteqInput] = useState({
    l: "",
    m: "",
    n: "",
    o: "",
    p: "",
  });

  const [result, setresult] = useState("");
  const parabola = new Parabola(
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
    const result = parabola.attributes(
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
        title1={"Vertex"}
        title2={"Focus"}
        title3={"Equation of Axis"}
        title4={"Equation of directrix"}
        title5={"Equation of lactus rectrum"}
        title6={"Length of Lactus rectrum"}
        title7={"Equation of tangent"}
        title8={"Standard Form"}
      />
    );

    setresult(final);
  };

  const onResult = () => {
    eqInput.l === "" ||
    eqInput.m === "" ||
    eqInput.n === "" ||
    eqInput.o === "" ||
    eqInput.p === ""
      ? alert("Enter all inputs")
      : resultDumm();
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
        title={"Program to find attributes of parabola"}
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

export default AttributesPara;

{
  /* <MathComponent tex={`${a}..${b}..${c}..${d}..${e}..${f}..${g}..${h}..${i}..${j}..${k}`} /> */
}
