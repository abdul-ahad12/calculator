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
}) => {
  switch (type) {
    case "twoPoints":
      return (
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 flex-row items-center">
            <div>Point 1:</div>
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
            <div>Point 2:</div>
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
          <div className="flex gap-2 flex-row items-center">
            <div>Line 2 :</div>
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
}) => {
  return (
    <MainLayout>
      <div className="w-full flex flex-col items-center  base:my-[6rem] lg:my-[2rem] justify-center gap-12">
        <div className="font-[500] base:text-[2rem] lg:text-[3rem]  text-center">
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
        />
        <button
          onClick={onResult}
          className="bg-black rounded-[10px] px-5 py-2 text-white"
        >
          Calculate
        </button>

        <div className="font-[500] px-5 text-center text-[2rem]">
          {subTitle} = {result}
        </div>
      </div>
    </MainLayout>
  );
};

export default TitleTemplate;
