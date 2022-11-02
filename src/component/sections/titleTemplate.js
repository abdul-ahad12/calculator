import React from "react";
import MainLayout from "../../pages/mainLayout";

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
        <div
          className="flex text=[2rem] flex-col gap-8"
        >
          <div className="flex gap-2 flex-row items-center">
            <div>Eq :</div>

            <div>x2+y2 + </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueG}
              onChange={onGChange}
              placeholder="g"
              type="number"
            />
            <div className="lg:mr-8">x +</div>

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueF}
              onChange={onFChange}
              placeholder="f"
              type="number"
            />
            <div className="lg:mr-8">y +</div>
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
    return(
      <div
      className="flex text=[2rem] flex-col gap-8"
    >
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
        <div>, Radius:</div>
        <input
          className="rounded-[5px] w-[5rem]"
          value={valueR}
          onChange={onRChange}
          placeholder="r"
          type="number"
        />
      </div>
    </div>
      
    )
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
  
  
}) => {
  return (
    <MainLayout>
      <div className="w-full flex flex-col items-center  base:my-[6rem] lg:my-[2rem] justify-center gap-12">
        <div className="font-[500] base:text-[2rem] lg:text-[3rem] mx-4 text-center">
          {title}
        </div>
        <div className="font-[500] text-center base:text-[1.5rem] lg:text-[2rem]">
          {subTitle} : {formula}
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
        />
        <button
          onClick={onResult}
          className="hover:bg-black bg-[#292929] rounded-[10px] px-5 py-2 text-white"
        >
          Calculate
        </button>

        <div className="font-[500] px-5 text-center text-[2rem]">
          {subTitle} : {result}
        </div>
      </div>
    </MainLayout>
  );
};

export default TitleTemplate;
