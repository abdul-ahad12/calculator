import React, { useState } from "react";
import Ellipse from "../../calculations/ellipse";
import TitleTemplate from "../../component/sections/titleTemplate";
import ResultTemp from "../../component/sections/resultTemp";

const Attributes = () => {
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
        subtitle1={"Major axis"}
        subtitle2={"Minor axis"}
   
      />
    );

    setresult(final);
  };

  const onResult = () => {
    eqInput.l === "" || eqInput.m === ""
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
        title={"Program to find attributes of ellipse"}
        type={"ellipse"}
        // formula = {f2}
        valueL={eqInput.l}
        valueM={eqInput.m}
        valueN={eqInput.n}
        valueO={eqInput.o}
        valueP={eqInput.p}
        onLChange={onLChange}
        onMChange={onMChange}
        onNChange={onNChange}
        onOChange={onOChange}
        onPChange={onPChange}
        result={result}
        onResult={onResult}
      >
        <div className="flex flex-col"></div>
      </TitleTemplate>
    </div>
  );
};

export default Attributes;

{
  /* <MathComponent tex={`${a}..${b}..${c}..${d}..${e}..${f}..${g}..${h}..${i}..${j}..${k}`} /> */
}
