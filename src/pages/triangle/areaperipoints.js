import React, { useState } from "react";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";
import Triangle from "../../calculations/triangle";

const Areaperipoints = () => {
    const [coeficient, setcoeficient] = useState({
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
        f: "",
      });
      const [result, setResult] = useState("");
    
      const triangle = new Triangle(coeficient.a, coeficient.b, coeficient.c, coeficient.d, coeficient.e, coeficient.f);
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
        const result = triangle.areaperipoints(coeficient.a, coeficient.b, coeficient.c,coeficient.d, coeficient.e, coeficient.f);
        let x = result[0];
        let y = result[1];
        
        let e = (
          <MathComponent tex={`Area :${x} \\hspace{1cm} Perimeter: ${y}`} />
        );
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
        title={"Area and Perimeter of a triangle from equations of sides"}
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

export default Areaperipoints