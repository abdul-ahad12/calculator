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
    console.log(x);
    console.log(y);
    console.log(z);
    if(x>y)
    {
        final = `\\displaylines{C_1C_2 = ${x} \\hspace{.5cm} r_1+r_2 = ${y} \\\\ Since, \\hspace{.15cm} C_1C_2 >r_1+r_2  \\hspace{.15cm} the \\hspace{.15cm} circles \\hspace{.15cm} lie \\hspace{.15cm} completely \\hspace{.15cm} detached \\hspace{.15cm} from \\hspace{.15cm} one \\hspace{.15cm} another  \\\\Number \\hspace{.15cm} of \\hspace{.15cm} common \\hspace{.15cm} Tangents = 4}`;
    }
    else if(x === y)
    {
      final = `\\displaylines{C_1C_2 = ${x} \\hspace{.5cm} r_1+r_2 = ${y} \\\\ Since, \\hspace{.15cm} C_1C_2 = r_1+r_2  \\hspace{.15cm} the \\hspace{.15cm} circles \\hspace{.15cm} touch \\hspace{.15cm}  one \\hspace{.15cm} another \\hspace{.15cm} externally \\\\ Number \\hspace{.15cm} of \\hspace{.15cm} common \\hspace{.15cm} Tangents = 3}`;
    }
    else if(x === z)
    {
      final = `\\displaylines{C_1C_2 = ${x} \\hspace{.5cm} |r_1-r_2| = ${z} \\\\ Since, \\hspace{.15cm} C_1C_2 = |r_1-r_2|  \\hspace{.15cm} the \\hspace{.15cm} circles \\hspace{.15cm} touch \\hspace{.15cm}  one \\hspace{.15cm} another \\hspace{.15cm} internally \\\\ Number \\hspace{.15cm} of \\hspace{.15cm} common \\hspace{.15cm} Tangents = 1}`;
    }
    else if(z <x && x<y)
    {
      final = `\\displaylines{C_1C_2 = ${x} \\hspace{.5cm} r_1+r_2 = ${y} \\hspace{.5cm} |r_1-r_2| = ${z} \\\\ Since, \\hspace{.15cm} |r_1-r_2| < C_1C_2 < r_1+r_2  \\hspace{.15cm} the \\hspace{.15cm} circles \\hspace{.15cm} intersect \\hspace{.15cm}  each \\hspace{.15cm} other \\\\ Number \\hspace{.15cm} of \\hspace{.15cm} common \\hspace{.15cm} Tangents = 2}`;
    }
    else if(x<z)
    {
      final = `\\displaylines{C_1C_2 = ${x} \\hspace{.5cm} |r_1-r_2| = ${z} \\\\ Since, \\hspace{.15cm} C_1C_2 < |r_1-r_2|  \\hspace{.15cm} one \\hspace{.15cm} circle \\hspace{.15cm} lies \\hspace{.15cm} completely \\hspace{.15cm} inside \\hspace{.15cm} the \\hspace{.15cm} other \\hspace{.15cm} circle  \\\\Number \\hspace{.15cm} of \\hspace{.15cm} common \\hspace{.15cm} Tangents = 0}`;
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
        title={"Relative position of two Circles and Number of common Tangents"}
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
