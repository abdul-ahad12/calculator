import React from "react";
import MainLayout from "../../pages/mainLayout";
import { MathComponent } from "mathjax-react";

const InputTemplate = ({
  type,
  ax,
  valueax,
  ay,
  valueay,
  bx,
  valuebx,
  valueby,
  onAxChange,
  onAyChange,
  onBxChange,
  onByChange,
  valueAa,
  valueBa,
  valueCa,
  valueAb,
  valueBb,
  valueCb,
  onAaChange,
  onBaChange,
  onCaChange,
  onAbChange,
  onBbChange,
  onCbChange,
  valueM,
  onMChange,
  valueG,
  valueF,
  valueC,
  onGChange,
  onFChange,
  onCChange,
  valueX,
  valueY,
  valueR,
  onXChange,
  onYChange,
  onRChange,
  onCcChange,
  onDdChange,
  valueCc,
  valueDd,
  valueL,
  valueN,
  valueO,
  valueP,
  onLChange,
  onNChange,
  onPChange,
  onOChange

}) => {
  switch (type) {
    case "twoPoints":
      return (
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 flex-row items-center">
            <div className="w-[4rem]">Point 1:</div>
            <input
              className="rounded-[5px] base:w-[6.5rem] lg:w-[12rem]"
              value={valueax}
              onChange={onAxChange}
              placeholder="x1"
              type="number"
            />
            <input
              className="rounded-[5px]  base:w-[6.5rem] lg:w-[12rem]"
              value={valueay}
              onChange={onAyChange}
              placeholder="y1"
              type="number"
            />
          </div>
          <div className="flex gap-4 flex-row items-center">
            <div className="w-[4rem]">Point 2:</div>
            <input
              className="rounded-[5px]  base:w-[6.5rem] lg:w-[12rem]"
              value={valuebx}
              onChange={onBxChange}
              placeholder="x2"
              type="number"
            />
            <input
              className="rounded-[5px]  base:w-[6.5rem] lg:w-[12rem]"
              value={valueby}
              onChange={onByChange}
              placeholder="y2"
              type="number"
            />
          </div>
        </div>
      );

    case "twolines":
      return (
        <div className="flex flex-col gap-8">
          <div className="flex gap-2 flex-row items-center">
            <div className="w-[3.5rem]">Line 1 :</div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueAa}
              onChange={onAaChange}
              placeholder="a1"
              type="number"
            />
            <div className="lg:mr-8">x</div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueBa}
              onChange={onBaChange}
              placeholder="b1"
              type="number"
            />
            <div className="lg:mr-8">y</div>

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueCa}
              onChange={onCaChange}
              placeholder="c1"
              type="number"
            />
          </div>
          <div className="flex gap-2 flex-row items-center">
            <div className="w-[3.5rem]">Line 2 :</div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueAb}
              onChange={onAbChange}
              placeholder="a2"
              type="number"
            />
            <div className="lg:mr-8">x</div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueBb}
              onChange={onBbChange}
              placeholder="b2"
              type="number"
            />
            <div className="lg:mr-8">y</div>

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueCb}
              onChange={onCbChange}
              placeholder="c2"
              type="number"
            />
          </div>
        </div>
      );

    case "oneline":
      return (
        <div className="flex flex-col gap-8">
          <div className="flex gap-2 flex-row items-center">
            <div>Line 1 :</div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueAa}
              onChange={onAaChange}
              placeholder="a1"
              type="number"
            />
            <div className="lg:mr-8">x</div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueBa}
              onChange={onBaChange}
              placeholder="b1"
              type="number"
            />
            <div className="lg:mr-8">y</div>

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueCa}
              onChange={onCaChange}
              placeholder="c1"
              type="number"
            />
          </div>
        </div>
      );

    case "slopePoint":
      return (
        <div className="flex flex-col gap-8">
          <div className="flex gap-2 flex-row items-center">
            <div>Slope :</div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueM}
              onChange={onMChange}
              placeholder="m"
              type="number"
            />
            <div className="lg:mr-8">x :</div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueax}
              onChange={onAxChange}
              placeholder="x"
              type="number"
            />
            <div className="lg:mr-8">y :</div>

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueay}
              onChange={onAyChange}
              placeholder="y"
              type="number"
            />
          </div>
        </div>
      );

    case "eqCircle":
      return (
        <div className="flex text=[2rem] flex-col gap-8">
          <div className="flex gap-2 w-full justify-center flex-row flex-wrap mx-4 items-center">
            <div>
              <MathComponent tex={"Eqn: "} />
            </div>

            <div>
              <MathComponent tex={"x^2 + y^2 +"} />{" "}
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueG}
              onChange={onGChange}
              placeholder="2g"
              type="number"
            />
            <div className="lg:mr-3">
              <MathComponent tex={"x +"} />
            </div>

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueF}
              onChange={onFChange}
              placeholder="2f"
              type="number"
            />

            <div className="lg:mr-3">
              <MathComponent tex={"y +"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueC}
              onChange={onCChange}
              placeholder="c"
              type="number"
            />
          </div>
        </div>
      );

    case "centerAR":
      return (
        <div className="flex text=[2rem] flex-col gap-8">
          <div className="flex gap-2 flex-row items-center">
            <div>Point:</div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueX}
              onChange={onXChange}
              placeholder="x"
              type="number"
            />

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueY}
              onChange={onYChange}
              placeholder="y"
              type="number"
            />
            <div>Radius:</div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueR}
              onChange={onRChange}
              placeholder="r"
              type="number"
            />
          </div>
        </div>
      );
    case "centerpoint":
      return (
        <div className="flex text=[2rem] flex-col gap-8">
          <div className="flex gap-2 flex-row items-center">
            <div>
              <MathComponent tex={"Point"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueax}
              onChange={onAxChange}
              placeholder="x"
              type="number"
            />

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueay}
              onChange={onAyChange}
              placeholder="y"
              type="number"
            />
            <div>
              <MathComponent tex={"Center"} />
            </div>

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueX}
              onChange={onXChange}
              placeholder="c1"
              type="number"
            />

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueY}
              onChange={onYChange}
              placeholder="c2"
              type="number"
            />
          </div>
        </div>
      );

    case "pointeqCircle":
      return (
        <div className="flex text=[2rem] flex-col gap-8">
          <div className="flex gap-2 flex-row items-center">
            <div>
              <MathComponent tex={"Point \\hspace{0.1cm}"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueX}
              onChange={onXChange}
              placeholder="x"
              type="number"
            />

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueY}
              onChange={onYChange}
              placeholder="y"
              type="number"
            />
            <div>
              <MathComponent tex={"Eqn: "} />
            </div>

            <div>
              <MathComponent tex={"x^2 + y^2 +"} />{" "}
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueG}
              onChange={onGChange}
              placeholder="2g"
              type="number"
            />
            <div className="lg:mr-3">
              <MathComponent tex={"x +"} />
            </div>

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueF}
              onChange={onFChange}
              placeholder="2f"
              type="number"
            />

            <div className="lg:mr-3">
              <MathComponent tex={"y +"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueC}
              onChange={onCChange}
              placeholder="c"
              type="number"
            />
          </div>
        </div>
      );
    case "yparabola":
      return (
        <div className="flex text=[2rem] flex-col gap-8">
          <div className="flex gap-2 flex-row items-center">
            <div>
              <MathComponent tex={"Eqn: "} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueAa}
              onChange={onAaChange}
              placeholder="a"
              type="number"
            />
            <div>
              {" "}
              <MathComponent tex={"y^2+"} />
            </div>

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueBb}
              onChange={onBbChange}
              placeholder="b"
              type="number"
            />
            <div>
              {" "}
              <MathComponent tex={"x+"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueCc}
              onChange={onCcChange}
              placeholder="c"
              type="number"
            />
            <div>
              {" "}
              <MathComponent tex={"y+"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueDd}
              onChange={onDdChange}
              placeholder="d"
              type="number"
            />
            <div>
              {" "}
              <MathComponent tex={"=0"} />
            </div>
          </div>
        </div>
      );

    case "ellipse":
      return (
        <div className="flex text=[2rem] overflow-hidden lg:scrollbar-hide overflow-x-scroll max-w-[80vw] flex-col gap-8">
          <div className="flex gap-2 flex-row items-center">
            <div>
              <MathComponent tex={"Eqn: "} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueL}
              onChange={onLChange}
              placeholder="l"
              type="number"
            />
            <div>
              {" "}
              <MathComponent tex={"x^2+"} />
            </div>

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueM}
              onChange={onMChange}
              placeholder="m"
              type="number"
            />
            <div>
              {" "}
              <MathComponent tex={"y^2 +"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueN}
              onChange={onNChange}
              placeholder="n"
              type="number"
            />
            <div>
              {" "}
              <MathComponent tex={"x+"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueO}
              onChange={onOChange}
              placeholder="o"
              type="number"
            />
            <div>
              {" "}
              <MathComponent tex={"y+"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueP}
              onChange={onPChange}
              placeholder="p"
              type="number"
            />
            <div>
              {" "}
              <MathComponent tex={"= 0"} />
            </div>
          </div>
        </div>
      );

    default:
      break;
  }
};

const TitleTemplate = ({
  title,
  formula,
  subTitle,
  type,
  ax,
  ay,
  bx,
  by,
  valueax,
  valueay,
  valuebx,
  valueby,
  onAxChange,
  onAyChange,
  onBxChange,
  onByChange,
  result,
  onResult,
  valueAa,
  valueCc,
  valueDd,
  valueBa,
  valueCa,
  valueAb,
  valueBb,
  valueCb,
  onAaChange,
  onCcChange,
  onDdChange,
  onBaChange,
  onCaChange,
  onAbChange,
  onBbChange,
  onCbChange,
  resultx,
  resulty,
  valueM,
  onMChange,
  valueG,
  valueF,
  valueC,
  onGChange,
  onFChange,
  onCChange,
  valueX,
  valueY,
  valueR,
  onXChange,
  onYChange,
  onRChange,
  valueL,
  valueN,
  valueO,
  valueP,
  onLChange,
  onNChange,
  onOChange,
  onPChange,
}) => {
  return (
    <MainLayout>
      <div className="w-full flex flex-col items-center  base:my-[6rem] lg:my-[2rem] justify-center gap-10">
        <div className="font-[500] base:text-[2rem] lg:text-[3rem] mx-4 text-center">
          {title}
        </div>
        <div className="font-[500] text-center base:text-[1.5rem] max-w-[80vw] overflow-hidden md:scrollbar-hide overflow-x-scroll  lg:text-[2rem]">
          {formula}
        </div>

        <InputTemplate
          type={type}
          ax={ax}
          ay={ay}
          bx={bx}
          by={by}
          valueax={valueax}
          valueay={valueay}
          valuebx={valuebx}
          valueby={valueby}
          onAxChange={onAxChange}
          onAyChange={onAyChange}
          onBxChange={onBxChange}
          onByChange={onByChange}
          valueAa={valueAa}
          valueBa={valueBa}
          valueCa={valueCa}
          valueAb={valueAb}
          valueBb={valueBb}
          valueCb={valueCb}
          onAaChange={onAaChange}
          onBaChange={onBaChange}
          onCaChange={onCaChange}
          onAbChange={onAbChange}
          onBbChange={onBbChange}
          onCbChange={onCbChange}
          valueM={valueM}
          onMChange={onMChange}
          valueG={valueG}
          valueF={valueF}
          valueC={valueC}
          onGChange={onGChange}
          onFChange={onFChange}
          onCChange={onCChange}
          valueX={valueX}
          valueY={valueY}
          valueR={valueR}
          onXChange={onXChange}
          onYChange={onYChange}
          onRChange={onRChange}
          valueCc={valueCc}
          valueDd={valueDd}
          onCcChange={onCcChange}
          onDdChange={onDdChange}
          valueL = {valueL}
          valueN = {valueN}
          valueO = {valueO}
          valueP = {valueP}

          onLChange = {onLChange}
          onNChange = {onNChange}
          onOChange = {onOChange}
          onPChange = {onPChange}
        />
        <button
          onClick={onResult}
          className="hover:bg-black bg-[#292929] rounded-[10px] px-5 py-2 text-white"
        >
          Calculate
        </button>

        <div className="font-[500] px-5 text-center max-w-[90vw] overflow-hidden overflow-x-scroll lg:scrollbar-hide text-[2rem]">
          {/* {subTitle} : */}
          {result}
        </div>
      </div>
    </MainLayout>
  );
};

export default TitleTemplate;
