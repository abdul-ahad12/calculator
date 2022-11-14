import React, { useState } from "react";
import Circle from "../../calculations/circle";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";

const Nopointstangents = () => {
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
    const result = circle.nopointstangents(
      coeficient.g1,
      coeficient.f1,
      coeficient.c1,
      coeficient.g2,
      coeficient.f2,
      coeficient.c2,
    );
    let x = result[0];
    let y = result[1];
    let z = result[2];
    let final = ``;
    if(x>y)
    {
        final = `\\displaylines{C_1C_2 = ${x}, |r_1+r2_2| = ${y} \\\\ Number of common Tangents = 4}`;
    }
    else if(x === y)
    {
      final = `\\displaylines{C_1C_2 = ${x}, |r_1+r2_2| = ${y} \\\\ Number of common Tangents = 3}`;
    }
    else if(x === z)
    {
      final = `\\displaylines{C_1C_2 = ${x}, |r_1+r2_2| = ${y} \\\\ Number of common Tangents = 1}`;
    }
    else if(z <x && x<y)
    {
      final = `\\displaylines{C_1C_2 = ${x}, |r_1+r2_2| = ${y} \\\\ Number of common Tangents = 2}`;
    }
    else if(x<z)
    {
      final = `\\displaylines{C_1C_2 = ${x}, |r_1+r2_2| = ${y} \\\\ Number of common Tangents = 1}`;
    }

    let c = <MathComponent tex={final} />;
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
      : resultDumm();
  };


//   const f ="S_{12} = x_1x_2 +y_1y_2 + g(x_1 + x_2) +f(y_1+y_2) + c=0";
//   const f1 = <MathComponent tex={f} />;

  return (
    <div>
      <TitleTemplate
        title={"Find the Relative position of two Circles and Number of common Tangents"}
        type={"twocircles"}
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

export default Nopointstangents;
