import React, { useState } from "react";
import Parabola from "../../calculations/parabola";
import TitleTemplate from "../../component/sections/titleTemplate";
import { MathComponent } from "mathjax-react";


const Vertexfocus = () => {
  const [input, setinput] = useState({
    aa: "",
    bb: "",
    cc: "",
    dd: "",
  });
  const [result, setResult] = useState("")

  const parabola=new Parabola(input.aa,input.bb,input.cc,input.dd)

  const onAaChange = (e) => {
    setinput({
      ...input,
      aa: e.target.value,
    });
  };const onBbChange = (e) => {
    setinput({
      ...input,
      bb: e.target.value,
    });
  };const onCcChange = (e) => {
    setinput({
      ...input,
      cc: e.target.value,
    });
  };const onDdChange = (e) => {
    setinput({
      ...input,
      dd: e.target.value,
    });
  };
  const resultDumm = () => {
    const result = parabola.vertexfocusx(
      input.aa,
      input.bb,
      input.cc,
      input.dd,
      );

      let h=result[0]
      let k=result[1]
      let aaa=result[2]

      let final=<MathComponent tex={`Vertex A is(${h},${k}) Focus is S(${aaa},${k})`}/>
      setResult(final);
   
  };

  const onResult = () => {
    
      input.aa === "" ||
      input.bb === "" ||
      input.cc === "" ||
      input.dd === ""
        ? alert("Enter all inputs")
        :  resultDumm()
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
        title={"Find the vertex and focus of parabola along side x-axis"}
        type={"yparabola"}
        valueAa={input.aa}
        onAaChange={onAaChange}
        valueBb={input.bb}
        onBbChange={onBbChange}
        valueCc={input.cc}
        onCcChange={onCcChange}
        valueDd={input.dd}
        onDdChange={onDdChange}
        onResult={onResult}
        result={result}
      />
    </div>
  );
};

export default Vertexfocus;
