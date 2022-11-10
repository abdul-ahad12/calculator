import React, { useState } from "react";
import Line from "../../calculations/line";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

const Paralinesdist = () => {
  const [coeficient, setcoeficient] = useState({
    aa: "",
    ba: "",
    ca: "",
    ab: "",
    bb: "",
    cb: "",
  });
  const [result, setResult] = useState("");

  const line = new Line(
    coeficient.aa,
    coeficient.ba,
    coeficient.ca,
    coeficient.ab,
    coeficient.bb,
    coeficient.cb
  );
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
  const onAbChange = (e) => {
    setcoeficient({
      ...coeficient,
      ab: e.target.value,
    });
  };
  const onBbChange = (e) => {
    setcoeficient({
      ...coeficient,
      bb: e.target.value,
    });
  };
  const onCbChange = (e) => {
    setcoeficient({
      ...coeficient,
      cb: e.target.value,
    });
  };

  const resultDumm = () => {
    const result = line.paralinesdist(
      coeficient.aa,
      coeficient.ba,
      coeficient.ca,
      coeficient.ab,
      coeficient.bb,
      coeficient.cb
    );
    
  
    let x = `${result[0]}`;
    
    let c = <MathComponent tex={`d = ${x}`} />;
    setResult(c);
  };
 
  const check_input = () => {
    coeficient.aa/coeficient.ba !== coeficient.ab/coeficient.bb 
    ? alert("Lines are not Parallel")
    : resultDumm();
  }

  const onResult = () => {
    coeficient.aa === "" ||
    coeficient.ba === "" ||
    coeficient.ca === "" ||
    coeficient.ab === "" ||
    coeficient.bb === "" ||
    coeficient.cb === ""
      ? alert("Enter all inputs")
      : check_input();
  };


  const f =" d = \\frac{|c_1-c_2|}{\\sqrt{a^2+b^2}}";
  const f1 = <MathComponent tex={f} />;

  return (
    <div>
      <TitleTemplate
        title={"Perpendicular Distance between two parallel lines"}
        formula={f1}
        type={"twolines"}
        valueA={coeficient.aa}
        valueB={coeficient.ba}
        valueC={coeficient.ca}
        valueD={coeficient.ab}
        valueE={coeficient.bb}
        valueF={coeficient.cb}
        onAChange={onAaChange}
        onBChange={onBaChange}
        onCChange={onCaChange}
        onDChange={onAbChange}
        onEChange={onBbChange}
        onFChange={onCbChange}
        onResult={onResult}
        result={result}
      />
    </div>
  );
};

export default Paralinesdist;
