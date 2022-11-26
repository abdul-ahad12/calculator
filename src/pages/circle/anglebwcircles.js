import React, { useState } from "react";
import Circle from "../../calculations/circle";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

const Anglebwcircles = () => {
  const [coeficient, setcoeficient] = useState({
    g1: "",
    f1: "",
    c1: "",
    g2: "",
    f2: "",
    c2: "",
  });
  const [result, setResult] = useState("");

  const circle = new Circle(
    coeficient.g1,
    coeficient.f1,
    coeficient.c1,
    coeficient.g2,
    coeficient.f2,
    coeficient.c2,
  );
  console.log(coeficient);

  const onG1Change = (e) => {
    setcoeficient({
      ...coeficient,
      g1: e.target.value,
    });
  };
  const onF1Change = (e) => {
    setcoeficient({
      ...coeficient,
      f1: e.target.value,
    });
  };
  const onC1Change = (e) => {
    setcoeficient({
      ...coeficient,
      c1: e.target.value,
    });
  };
  const onG2Change = (e) => {
    setcoeficient({
      ...coeficient,
      g2: e.target.value,
    });
  };
  const onF2Change = (e) => {
    setcoeficient({
      ...coeficient,
      f2: e.target.value,
    });
  };
  const onC2Change = (e) => {
    setcoeficient({
      ...coeficient,
      c2: e.target.value,
    });
  };

  const resultDumm = () => {
    const result = circle.anglebwcircles(
      coeficient.g1,
      coeficient.f1,
      coeficient.c1,
      coeficient.g2,
      coeficient.f2,
      coeficient.c2,
    );
    let x = result[0];
    let y = result[1];

    let c = <MathComponent tex={`\\theta = Cos^{-1}(${x}) \\hspace{1cm} \\theta = ${y}`} />;
    setResult(c);
  };

  const onResult = () => {
    coeficient.g1 === "" ||
    coeficient.f1 === "" ||
    coeficient.c1 === "" ||
    coeficient.g2 === "" ||
    coeficient.f2 === "" ||
    coeficient.c2 === "" 
      ? alert("Enter all inputs")
      : check_circle1();
  };

  const check_circle1 = () => {
    (coeficient.g1/2 * coeficient.g1/2) + (coeficient.f1/2 * coeficient.f1/2) - coeficient.c1 <= 0 
    ? alert("The Equation of First circle is invalid! Enter Valid Input")
    :check_circle2()
  }

  const check_circle2 = () => {
    (coeficient.g2/2 * coeficient.g2/2) + (coeficient.f2/2 * coeficient.f2/2) - coeficient.c2 <= 0 
    ? alert("The Equation of Second circle is invalid! Enter Valid Input")
    :check_pos()
  }

  const check_pos = () => {
    function cenAndrad(g, f, c) {
      let c1 = -g / 2;
      let c2 = -f / 2;
      let a = c1 * c1;
      let b = c2 * c2;
      let r = Math.sqrt(Number(a) + Number(b) - Number(c));

      return [c1.toFixed(3), c2.toFixed(3), r.toFixed(3)];
    }
    function distance(ax, ay, bx, by) {
      let first = Number(ax) - Number(bx);
      let second = Number(ay) - Number(by);
      let result = Math.sqrt(first * first + second * second);

      return Number(result.toFixed(2));
    }

    let c1 = cenAndrad(coeficient.g1, coeficient.f1, coeficient.c1);
    let c2 = cenAndrad(coeficient.g2, coeficient.f2, coeficient.c2);

    let d = distance(c1[0], c1[1], c2[0], c2[1]);

    d + c2[2] <= c1[2]
      ? alert(
          "One Circle lies completely inside another circle! Angle does not exist! Enter valid Input"
        )
      : resultDumm();
  };

  const f ="Cos(\\theta) = \\frac{c_1 + c_2 - 2(g_1g_2 + f_1f_2)}{2\\sqrt{g_1^2 + f_1^2 - c_1}\\sqrt{g_2^2 + f_2^2 - c_2}}";
  const f1 = <MathComponent tex={f} />;

  return (
    <div>
      <TitleTemplate
        title={"Angle between two Circles"}
        type={"twocircles"}
        formula = {f1}
        valueA={coeficient.g1}
        valueB={coeficient.f1}
        valueC={coeficient.c1}
        valueD={coeficient.g2}
        valueE={coeficient.f2}
        valueF={coeficient.c2}
        onAChange={onG1Change}
        onBChange={onF1Change}
        onCChange={onC1Change}
        onDChange={onG2Change}
        onEChange={onF2Change}
        onFChange={onC2Change}
        onResult={onResult}
        result={result}
      />
    </div>
  );
};

export default Anglebwcircles;
