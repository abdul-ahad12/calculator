import React, { useState } from "react";
import Line from "../../calculations/line";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

const Eqlinenormal = () => {
  const [coeficient, setcoeficient] = useState({
    a: "",
    b: "",
    c: "",
  });
  const [result, setResult] = useState("");

  const line = new Line(coeficient.aa, coeficient.ba, coeficient.ca);
  console.log(coeficient);

  const onAChange = (e) => {
    setcoeficient({
      ...coeficient,
      a: e.target.value,
    });
  };
  const onBChange = (e) => {
    setcoeficient({
      ...coeficient,
      b: e.target.value,
    });
  };
  const onCChange = (e) => {
    setcoeficient({
      ...coeficient,
      c: e.target.value,
    });
  };

  const resultDumm = () => {
    const result = line.eqlinenormal(coeficient.a, coeficient.b, coeficient.c);
    let x = result[0];
    let y = result[1];
    let z = result[2];
    
    let e = <MathComponent tex={`xCos(${x})+ ySin(${y}) = ${z}`} />;
    setResult(e);
  };

  const onResult = () => {
    coeficient.a === "" || coeficient.b === "" || coeficient.c === ""
      ? alert("Enter all inputs")
      : resultDumm();
    // setvariables({
    //     ax:"",
    //     ay:"",
    //     bx:"",
    //     by:"",

    // })
  };

  const f = 'Normal \\hspace{.25cm} Form: xCos(\\alpha) +ySin(\\alpha) = r \\hspace{.5cm}|  \\hspace{.5cm} r = \\sqrt{a^2+b^2}';
  const f1 = <MathComponent tex={f} />

  return (
    <div>
      <TitleTemplate
        title={"Normal Form of a Line from equation of a line"}
        formula={f1}
        type={"oneline"}
        valueA={coeficient.aa}
        valueB={coeficient.ba}
        valueC={coeficient.ca}
        onAChange={onAChange}
        onBChange={onBChange}
        onCChange={onCChange}
        onResult={onResult}
        result={result}
      />
    </div>
  );
};

export default Eqlinenormal;
