import React, { useState } from "react";
import Line from "../../calculations/line";
import TitleTemplate from "../../component/sections/titleTemplate";

const PointSlopeForm = () => {
  const [variables, setvariables] = useState({
    ax: "",
    ay: "",
  });
  const [valueM, setvalueM] = useState("");

  const line = new Line(valueM,variables.ax, variables.ay);
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

  const resultDumm = () => {
    const result = line.pointslopeform(
      valueM,
      variables.ax,
      variables.ay
    );
     
    let m=result[0]
    let c=result[1]
    let a=`y=${m}x+${c}`
     
    setResult(a);
  };

  const onResult = () => {
    variables.ax === "" ||
    variables.ay === "" ||
    variables.bx === "" ||
    variables.by === ""
      ? alert("Enter all inputs")
      : resultDumm();
    // setvariables({
    //     ax:"",
    //     ay:"",
    //     bx:"",
    //     by:"",

    // })
  };

  const onMChange = (e) => {
    setvalueM(e.target.value);
  };

  return (
    <div>
      <TitleTemplate
        title={"Equation of a line. Point slope form."}
        type={"slopePoint"}
        subTitle={"for"}
        valueax={variables.ax}
        onAxChange={onAxChange}
        valueay={variables.ay}
        onAyChange={onAyChange}
        valueM={valueM}
        onMChange={onMChange}
        result={result}
        onResult={onResult}
      />
    </div>
  );
};

export default PointSlopeForm;
