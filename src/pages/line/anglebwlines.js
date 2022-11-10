import React, { useState } from "react";
import Line from "../../calculations/line";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

const Anglebwlines = () => {
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
    const result = line.anglebwlines(
      coeficient.aa,
      coeficient.ba,
      coeficient.ca,
      coeficient.ab,
      coeficient.bb,
      coeficient.cb
    );
    let x = result[0];
    let y = result[1];
    let c = (
      <MathComponent
        tex={`\\theta= Tan^{-1}(${x}) \\hspace{1cm} \\theta = ${y}^o`}
      />
    );
    setResult(c);
  };

  const check_lines = () => {
    coeficient.aa === coeficient.ab &&
    coeficient.ba === coeficient.bb &&
    coeficient.ca === coeficient.cb
      ? alert("Lines are same! Enter two distinct lines")
      : check_parallel();
  };

  const onResult = () => {
    coeficient.aa === "" ||
    coeficient.ba === "" ||
    coeficient.ca === "" ||
    coeficient.ab === "" ||
    coeficient.bb === "" ||
    coeficient.cb === ""
      ? alert("Enter all inputs")
      : check_lines();
  };

  const check_parallel = () => {
    coeficient.aa / coeficient.ba === coeficient.ab / coeficient.bb
      ? alert("Lines are parallel")
      : resultDumm();
  };

  const f = "\\theta = Tan^{-1} |\\frac{m_1-m_2}{1+m_1m_2}|";
  const f1 = <MathComponent tex={f} />;

  return (
    <div>
      <TitleTemplate
        title={"Angle between two lines"}
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

export default Anglebwlines;
