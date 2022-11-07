import React, { useState } from "react";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";
import Triangle from "../../calculations/triangle";

const Verticestosides = () => {
    const [coeficient, setcoeficient] = useState({
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
        f: "",
      });
      const [result, setResult] = useState("");
    
      const triangle = new Triangle(
        coeficient.a,
        coeficient.b,
        coeficient.c,
        coeficient.d,
        coeficient.e,
        coeficient.f
      );
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
      const onDChange = (e) => {
        setcoeficient({
          ...coeficient,
          d: e.target.value,
        });
      };
      const onEChange = (e) => {
        setcoeficient({
          ...coeficient,
          e: e.target.value,
        });
      };
      const onFChange = (e) => {
        setcoeficient({
          ...coeficient,
          f: e.target.value,
        });
      };
    
      const resultDumm = () => {
        const result = triangle.verticestosides(
          coeficient.a,
          coeficient.b,
          coeficient.c,
          coeficient.d,
          coeficient.e,
          coeficient.f
        );
        let m1 = result[0];
        let c1 = result[1];
        let m2 = result[2];
        let c2 = result[3];
        let m3 = result[4];
        let c3 = result[5];
        
        let e = <MathComponent tex={`Side1: y = ${m1}x + ${c1} \\hspace{1cm} Side2: y = ${m2}x + ${c2} \\hspace{1cm} Side3: y = ${m3}x + ${c3}`} />;
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
  
    return (
    <div>
        <TitleTemplate
        title={"Equations of Sides of a Triangle from Vertices"}
        // formula={f1}
        type={"threePoints"}
        valueA={coeficient.a}
        valueB={coeficient.b}
        valueC={coeficient.c}
        valueD={coeficient.d}
        valueE={coeficient.e}
        valueF={coeficient.f}
        onAChange={onAChange}
        onBChange={onBChange}
        onCChange={onCChange}
        onDChange={onDChange}
        onEChange={onEChange}
        onFChange={onFChange}
        onResult={onResult}
        result={result}
      />
    </div>
  )
}

export default Verticestosides