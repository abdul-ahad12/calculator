import React, { useState } from "react";
import Line from "../../calculations/line";
import TitleTemplate from "../../component/sections/titleTemplate";
import { InlineMath} from 'react-katex';
import { MathComponent } from "mathjax-react";




const SlopeLine = () => {
    const [variables, setvariables] = useState({
        ax: "",
        ay: "",
        bx: "",
        by: "",
      });
      console.log(variables)
    
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
        const result = line.slope(
            variables.ax,
            variables.ay,
            variables.bx,
            variables.by
          );

          let a = <MathComponent tex={`m = ${result}`} />
          setResult(a);
       
      };
    
      const onResult = () => {
        
        
          variables.ax === "" ||
          variables.ay === "" ||
          variables.bx === "" ||
          variables.by === ""
            ? alert("Enter all inputs")
            :  resultDumm()
            // setvariables({
            //     ax:"",
            //     ay:"",
            //     bx:"",
            //     by:"",
    
            // })
            
        
      };
    
  const f = 'm = \\frac{y_2-y_1}{x_2-x_1}';
  const f1 = <p> <InlineMath math={f} /></p>

  return (
    <div>
      <TitleTemplate
        title={"Calculate Slope of a Line"}
        formula={f1}
        type={"twoPoints"}
        valueax={variables.ax}
        onAxChange={onAxChange}
        valueay={variables.ay}
        onAyChange={onAyChange}
        valuebx={variables.bx}
        onBxChange={onBxChange}
        valueby={variables.by}
        onByChange={onByChange}
        onResult={onResult}
        result={result}
      ></TitleTemplate>
    </div>
  );
};

export default SlopeLine;
