import React, { useState } from "react";
import Line from "../../calculations/line";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

const Xyintercept = () => {
  const [coeficient, setcoeficient] = useState({
    aa: "",
    ba: "",
    ca: "",
    ab: "",
    bb: "",
    cb: "",
  });
  const [result, setResult] = useState("");

  const line = new Line(coeficient.aa, coeficient.ba, coeficient.ca);
  console.log(coeficient);

  const onAaChange = (e) => {
    setcoeficient({
      ...coeficient,
      aa: e.target.value,
    });
  };
  const onBaChange = (e) => {
    setcoeficient({
      ...coeficient,
      ba: e.target.value,
    });
  };
  const onCaChange = (e) => {
    setcoeficient({
      ...coeficient,
      ca: e.target.value,
    });
  };

  const resultDumm = () => {
    const result = line.intercepts(coeficient.aa, coeficient.ba, coeficient.ca);
    let x = result[0];
    let y = result[1];
    let c = `(${x},0)`;
    let d = `(0,${y})`;
    let e = <MathComponent tex={`x-intercept:${c} y-intercept:${d}`} />;
    setResult(e);
  };

  const onResult = () => {
    coeficient.aa === "" || coeficient.ba === "" || coeficient.ca === ""
      ? alert("Enter all inputs")
      : resultDumm();
    // setvariables({
    //     ax:"",
    //     ay:"",
    //     bx:"",
    //     by:"",

    // })
  };

  const f = 'line: ax + by + c = 0 \\hspace{1cm} x-intercept : -\\frac{c}{a} \\hspace{1cm} y-intercept : -\\frac{c}{b}';
  const f1 = <MathComponent tex={f} />

  return (
    <div>
      <TitleTemplate
        title={"x-intercept and y-intercept of a line."}
        formula={f1}
        type={"oneline"}
        valueAa={coeficient.aa}
        valueBa={coeficient.ba}
        valueCa={coeficient.ca}
        onAaChange={onAaChange}
        onBaChange={onBaChange}
        onCaChange={onCaChange}
        onResult={onResult}
        result={result}
      />
    </div>
  );
};

export default Xyintercept;
