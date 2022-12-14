import React, { useState } from "react";
import Line from "../../calculations/line";
import TitleTemplate from "../../component/sections/titleTemplate";
import "katex/dist/katex.min.css";
import { MathComponent } from "mathjax-react";

const Distance = () => {
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
    const result = line.distance(
      variables.ax,
      variables.ay,
      variables.bx,
      variables.by
    );
    let a = <MathComponent tex={`d = ${result}`} />;
    setResult(a);
  };

  const onResult = () => {
    variables.ax === "" ||
    variables.ay === "" ||
    variables.bx === "" ||
    variables.by === ""
      ? alert("Enter all inputs")
      : resultDumm();
  };

  const f = "d = \\sqrt{{(x_2-x_1)^2}+{(y_2-y_1)^2}}";
  const f1 = <MathComponent tex={f} />;

  return (
    <div>
      <TitleTemplate
        title={"Distance between two points"}
        type={"twoPoints"}
        formula={f1}
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

export default Distance;
