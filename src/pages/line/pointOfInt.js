import React, { useState } from "react";
import Line from "../../calculations/line";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

const PointOfInt = () => {
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
    const result = line.pointOfint(
      coeficient.aa,
      coeficient.ba,
      coeficient.ca,
      coeficient.ab,
      coeficient.bb,
      coeficient.cb
    );
    let x = result[0];
    let y = result[1];
    let c = <MathComponent tex={`(${x},${y})`} />;
    setResult(c);
  };

  const onResult = () => {
    coeficient.aa === "" ||
    coeficient.ba === "" ||
    coeficient.ca === "" ||
    coeficient.ab === "" ||
    coeficient.bb === "" ||
    coeficient.cb === ""
      ? alert("Enter all inputs")
      : resultDumm();
    // setvariables({
    //     ax:"",
    //     ay:"",
    //     bx:"",
    //     by:"",

    // })
  };

  return (
    <div>
      <TitleTemplate
        title={"Point of intersection of two lines"}
        formula={""}
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

export default PointOfInt;
