import React, { useState } from "react";
import Line from "../../calculations/line";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

const TwoPointForm = () => {
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
    const result = line.twopointform(
      variables.ax,
      variables.ay,
      variables.bx,
      variables.by
    );

    let m = result[0];
    let c = result[1];
    let final =  ``;
    if(variables.ax === variables.bx)
    {
      final = `x = ${variables.ax}`
    }
    else if(variables.ay === variables.by)
    {
      final = `y = ${variables.ay}`;
    }
    else
    {
      final = `y=${m}x+(${c})`
    }
    let a = <MathComponent tex={final} />
    setResult(a);
  };

  const onResult = () => {
    variables.ax === "" ||
    variables.ay === "" ||
    variables.bx === "" ||
    variables.by === ""
      ? alert("Enter all inputs")
      : all_zero();
  };

  const all_zero = () => {
    variables.ax === "0" && variables.ay === "0" && variables.bx === "0" && variables.by === "0"
    ? alert("Invalid Input!")
    :  same()
  }

  const same = () => {
    variables.ax === variables.bx   && variables.ay ===  variables.by 
    ? alert("Invalid Input! Enter two Different points")
    :  resultDumm()
  }

  const f = 'y - y_1 = \\frac{y_2-y_1}{x_2-x_1} (x - x_1)';
  const f1 = <MathComponent tex={f} />

  return (
    <div>
      <TitleTemplate
        title={"Equation of a line. Two point form."}
        formula={f1}
        type={"twoPoints"}
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

export default TwoPointForm;
