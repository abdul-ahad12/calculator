import React from "react";
import MainLayout from "../../pages/mainLayout";
import { MathComponent } from "mathjax-react";

const InputTemplate = ({
  type,
  valueA,
  valueB,
  valueC,
  valueD,
  valueE,
  valueF,
  valueG,
  valueH,
  valueI,
  valueJ,
  valueK,
  onAChange,
  onBChange,
  onCChange,
  onDChange,
  onEChange,
  onFChange,
  onGChange,
  onHChange,
  onIChange,
  onJChange,
  onKChange,
}) => {
  switch (type) {
    case "twoPoints":
      return (
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 flex-row items-center">
            <div className="w-[4rem]">
              <MathComponent tex={"Point 1:"} />
            </div>
            <input
              className="rounded-[5px] base:w-[6.5rem] lg:w-[12rem]"
              value={valueA}
              onChange={onAChange}
              placeholder="x1"
              type="number"
            />
            <input
              className="rounded-[5px]  base:w-[6.5rem] lg:w-[12rem]"
              value={valueB}
              onChange={onBChange}
              placeholder="y1"
              type="number"
            />
          </div>
          <div className="flex gap-4 flex-row items-center">
            <div className="w-[4rem]">
              <MathComponent tex={"Point 2:"} />
            </div>
            <input
              className="rounded-[5px]  base:w-[6.5rem] lg:w-[12rem]"
              value={valueC}
              onChange={onCChange}
              placeholder="x2"
              type="number"
            />
            <input
              className="rounded-[5px]  base:w-[6.5rem] lg:w-[12rem]"
              value={valueD}
              onChange={onDChange}
              placeholder="y2"
              type="number"
            />
          </div>
        </div>
      );

    case "threePoints":
      return (
        <div className="flex flex-col gap-1">
          <div className="flex gap-4 flex-row items-center">
            <div className="w-[4rem]">
              <MathComponent tex={"Point 1:"} />
            </div>
            <input
              className="rounded-[5px] base:w-[6.5rem] lg:w-[12rem]"
              value={valueA}
              onChange={onAChange}
              placeholder="x1"
              type="number"
            />
            <input
              className="rounded-[5px]  base:w-[6.5rem] lg:w-[12rem]"
              value={valueB}
              onChange={onBChange}
              placeholder="y1"
              type="number"
            />
          </div>
          <div className="flex gap-4 flex-row items-center">
            <div className="w-[4rem]">
              <MathComponent tex={"Point 2:"} />
            </div>
            <input
              className="rounded-[5px]  base:w-[6.5rem] lg:w-[12rem]"
              value={valueC}
              onChange={onCChange}
              placeholder="x2"
              type="number"
            />
            <input
              className="rounded-[5px]  base:w-[6.5rem] lg:w-[12rem]"
              value={valueD}
              onChange={onDChange}
              placeholder="y2"
              type="number"
            />
          </div>

          <div className="flex gap-4 flex-row items-center">
            <div className="w-[4rem]">
              <MathComponent tex={"Point 3:"} />
            </div>
            <input
              className="rounded-[5px]  base:w-[6.5rem] lg:w-[12rem]"
              value={valueE}
              onChange={onEChange}
              placeholder="x2"
              type="number"
            />
            <input
              className="rounded-[5px]  base:w-[6.5rem] lg:w-[12rem]"
              value={valueF}
              onChange={onFChange}
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
            <div className="w-[3.5rem]">
              <MathComponent tex={"Line 1:"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueA}
              onChange={onAChange}
              placeholder="a1"
              type="number"
            />
            <div className="lg:mr-8">
              <MathComponent tex={"x+ "} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueB}
              onChange={onBChange}
              placeholder="b1"
              type="number"
            />
            <div className="lg:mr-8">
              <MathComponent tex={" y+"} />
            </div>

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueC}
              onChange={onCChange}
              placeholder="c1"
              type="number"
            />
            <div className="lg:mr-8">
              <MathComponent tex={"=0"} />
            </div>
          </div>
          <div className="flex gap-2 flex-row items-center">
            <div className="w-[3.5rem]">
              <MathComponent tex={"Line 2:"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueD}
              onChange={onDChange}
              placeholder="a2"
              type="number"
            />
            <div className="lg:mr-8">
              <MathComponent tex={" x+"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueE}
              onChange={onEChange}
              placeholder="b2"
              type="number"
            />
            <div className="lg:mr-8">
              <MathComponent tex={"y +"} />
            </div>

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueF}
              onChange={onFChange}
              placeholder="c2"
              type="number"
            />
            <div className="lg:mr-8">
              <MathComponent tex={"=0"} />
            </div>
          </div>
        </div>
      );

    case "threelines":
      return (
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 flex-row items-center">
            <div className="w-[3.5rem]">
              <MathComponent tex={"Line 1: "} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueA}
              onChange={onAChange}
              placeholder="a1"
              type="number"
            />
            <div className="lg:mr-8">
              <MathComponent tex={"x "} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueB}
              onChange={onBChange}
              placeholder="b1"
              type="number"
            />
            <div className="lg:mr-8">
              <MathComponent tex={"y "} />
            </div>

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueC}
              onChange={onCChange}
              placeholder="c1"
              type="number"
            />
            <div className="lg:mr-8">
              <MathComponent tex={"=0"} />
            </div>
          </div>
          <div className="flex gap-2 flex-row items-center">
            <div className="w-[3.5rem]">
              <MathComponent tex={"Line 2: "} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueD}
              onChange={onDChange}
              placeholder="a2"
              type="number"
            />
            <div className="lg:mr-8">
              <MathComponent tex={"x "} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueE}
              onChange={onEChange}
              placeholder="b2"
              type="number"
            />
            <div className="lg:mr-8">
              <MathComponent tex={" y"} />
            </div>

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueF}
              onChange={onFChange}
              placeholder="c2"
              type="number"
            />
            <div className="lg:mr-8">
              <MathComponent tex={"=0"} />
            </div>
          </div>
          <div className="flex gap-2 flex-row items-center">
            <div className="w-[3.5rem]">
              <MathComponent tex={"Line 3: "} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueG}
              onChange={onGChange}
              placeholder="a2"
              type="number"
            />
            <div className="lg:mr-8">
              <MathComponent tex={"x "} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueH}
              onChange={onHChange}
              placeholder="b2"
              type="number"
            />
            <div className="lg:mr-8">
              <MathComponent tex={"y "} />
            </div>

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueI}
              onChange={onIChange}
              placeholder="c2"
              type="number"
            />
            <div className="lg:mr-8">
              <MathComponent tex={"=0"} />
            </div>
          </div>
        </div>
      );

    case "oneline":
      return (
        <div className="flex flex-col gap-8">
          <div className="flex gap-2 flex-row items-center">
            <div>
              <MathComponent tex={"Line 1: "} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueA}
              onChange={onAChange}
              placeholder="a1"
              type="number"
            />
            <div className="lg:mr-8">
              <MathComponent tex={"x +"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueB}
              onChange={onBChange}
              placeholder="b1"
              type="number"
            />
            <div className="lg:mr-8">
              <MathComponent tex={" y+"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueC}
              onChange={onCChange}
              placeholder="c1"
              type="number"
            />
            <div className="lg:mr-8">
              <MathComponent tex={"=0"} />
            </div>
          </div>
        </div>
      );

    case "onelinepoint":
      return (
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 flex-row items-center">
            <div className="w-[4rem]">
              <MathComponent tex={"Point 1:"} />
            </div>
            <input
              className="rounded-[5px] base:w-[6.5rem] lg:w-[12rem]"
              value={valueA}
              onChange={onAChange}
              placeholder="x1"
              type="number"
            />
            <input
              className="rounded-[5px]  base:w-[6.5rem] lg:w-[12rem]"
              value={valueB}
              onChange={onBChange}
              placeholder="y1"
              type="number"
            />
          </div>
          <div className="flex gap-2 flex-row items-center">
            <div>
              <MathComponent tex={"Line 1: "} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueC}
              onChange={onCChange}
              placeholder="a1"
              type="number"
            />
            <div className="lg:mr-8">
              <MathComponent tex={"x + "} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueD}
              onChange={onDChange}
              placeholder="b1"
              type="number"
            />
            <div className="lg:mr-8">
              <MathComponent tex={" y+"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueE}
              onChange={onEChange}
              placeholder="c1"
              type="number"
            />
            <div className="lg:mr-8">
              <MathComponent tex={"=0"} />
            </div>
          </div>
        </div>
      );

    case "slopePoint":
      return (
        <div className="flex flex-col gap-8">
          <div className="flex gap-2 flex-row items-center">
            <div className="lg:mr-8">
              <MathComponent tex={"Point:"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueB}
              onChange={onBChange}
              placeholder="x1"
              type="number"
            />
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueC}
              onChange={onCChange}
              placeholder="y1"
              type="number"
            />
            <div>
              <MathComponent tex={"Slope:"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueA}
              onChange={onAChange}
              placeholder="m"
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
              value={valueA}
              onChange={onAChange}
              placeholder="2g"
              type="number"
            />
            <div className="lg:mr-3">
              <MathComponent tex={"x +"} />
            </div>

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueB}
              onChange={onBChange}
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
            <div className="lg:mr-3">
              <MathComponent tex={"= 0"} />
            </div>
          </div>
        </div>
      );

    case "centerAR":
      return (
        <div className="flex text=[2rem] flex-col gap-8">
          <div className="flex gap-2 flex-row items-center">
            <div>
              <MathComponent tex={"Point: "} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueA}
              onChange={onAChange}
              placeholder="x"
              type="number"
            />

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueB}
              onChange={onBChange}
              placeholder="y"
              type="number"
            />
            <div>
              <MathComponent tex={"Radius:"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueC}
              onChange={onCChange}
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
              value={valueA}
              onChange={onAChange}
              placeholder="x"
              type="number"
            />

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueB}
              onChange={onBChange}
              placeholder="y"
              type="number"
            />
            <div>
              <MathComponent tex={"Center"} />
            </div>

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueC}
              onChange={onCChange}
              placeholder="c1"
              type="number"
            />

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueD}
              onChange={onDChange}
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
              value={valueA}
              onChange={onAChange}
              placeholder="x"
              type="number"
            />

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueB}
              onChange={onBChange}
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
              value={valueC}
              onChange={onCChange}
              placeholder="2g"
              type="number"
            />
            <div className="lg:mr-3">
              <MathComponent tex={"x +"} />
            </div>

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueD}
              onChange={onDChange}
              placeholder="2f"
              type="number"
            />

            <div className="lg:mr-3">
              <MathComponent tex={"y +"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueE}
              onChange={onEChange}
              placeholder="c"
              type="number"
            />
             <div className="lg:mr-3">
              <MathComponent tex={"=0"} />
            </div>
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
              value={valueA}
              onChange={onAChange}
              placeholder="a"
              type="number"
            />
            <div>
              {" "}
              <MathComponent tex={"y^2+"} />
            </div>

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueB}
              onChange={onBChange}
              placeholder="b"
              type="number"
            />
            <div>
              {" "}
              <MathComponent tex={"x+"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueC}
              onChange={onCChange}
              placeholder="c"
              type="number"
            />
            <div>
              {" "}
              <MathComponent tex={"y+"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueD}
              onChange={onDChange}
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
        <div className="flex text=[2rem] max-w-[80vw] flex-col gap-8">
          <div className="flex gap-2 flex-row items-center">
            <div>
              <MathComponent tex={"Eqn: "} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueA}
              onChange={onAChange}
              placeholder="l"
              type="number"
            />
            <div>
              {" "}
              <MathComponent tex={"x^2+"} />
            </div>

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueB}
              onChange={onBChange}
              placeholder="m"
              type="number"
            />
            <div>
              {" "}
              <MathComponent tex={"y^2 +"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueC}
              onChange={onCChange}
              placeholder="n"
              type="number"
            />
            <div>
              {" "}
              <MathComponent tex={"x+"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueD}
              onChange={onDChange}
              placeholder="o"
              type="number"
            />
            <div>
              {" "}
              <MathComponent tex={"y+"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueE}
              onChange={onEChange}
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

    case "pairoflines":
      return (
        <div className="flex text=[2rem] overflow-hidden lg:scrollbar-hide overflow-x-scroll max-w-[80vw] flex-col gap-8">
          <div className="flex gap-2 flex-row items-center">
            <div>
              <MathComponent tex={"S: "} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueA}
              onChange={onAChange}
              placeholder="a"
              type="number"
            />
            <div>
              {" "}
              <MathComponent tex={"x^2+"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueB}
              onChange={onBChange}
              placeholder="2h"
              type="number"
            />
            <div>
              {" "}
              <MathComponent tex={"xy+"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueC}
              onChange={onCChange}
              placeholder="b"
              type="number"
            />
            <div>
              {" "}
              <MathComponent tex={"y^2 +"} />
            </div>

            <input
              className="rounded-[5px] w-[5rem]"
              value={valueD}
              onChange={onDChange}
              placeholder="2g"
              type="number"
            />
            <div>
              {" "}
              <MathComponent tex={"x+"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueE}
              onChange={onEChange}
              placeholder="2f"
              type="number"
            />
            <div>
              {" "}
              <MathComponent tex={"y+"} />
            </div>
            <input
              className="rounded-[5px] w-[5rem]"
              value={valueF}
              onChange={onFChange}
              placeholder="c"
              type="number"
            />
            <div>
              {" "}
              <MathComponent tex={"= 0"} />
            </div>
          </div>
        </div>
      );

      case "pointpairoflines":
        return (
          <div className="flex text=[2rem] overflow-hidden lg:scrollbar-hide overflow-x-scroll max-w-[80vw] flex-col gap-8">
            <div className="flex gap-4 flex-row items-center content-center">
            <div className="w-[4rem]">
              <MathComponent tex={"Point:"} />
            </div>
            <input
              className="rounded-[5px] base:w-[6.5rem] lg:w-[12rem]"
              value={valueA}
              onChange={onAChange}
              placeholder="x1"
              type="number"
            />
            <input
              className="rounded-[5px]  base:w-[6.5rem] lg:w-[12rem]"
              value={valueB}
              onChange={onBChange}
              placeholder="y1"
              type="number"
            />
          </div>
            <div className="flex gap-2 flex-row items-center">
              <div>
                <MathComponent tex={"S: "} />
              </div>
              <input
                className="rounded-[5px] w-[5rem]"
                value={valueC}
                onChange={onCChange}
                placeholder="a"
                type="number"
              />
              <div>
                {" "}
                <MathComponent tex={"x^2+"} />
              </div>
              <input
                className="rounded-[5px] w-[5rem]"
                value={valueD}
                onChange={onDChange}
                placeholder="2h"
                type="number"
              />
              <div>
                {" "}
                <MathComponent tex={"xy+"} />
              </div>
              <input
                className="rounded-[5px] w-[5rem]"
                value={valueE}
                onChange={onEChange}
                placeholder="b"
                type="number"
              />
              <div>
                {" "}
                <MathComponent tex={"y^2 +"} />
              </div>
  
              <input
                className="rounded-[5px] w-[5rem]"
                value={valueF}
                onChange={onFChange}
                placeholder="2g"
                type="number"
              />
              <div>
                {" "}
                <MathComponent tex={"x+"} />
              </div>
              <input
                className="rounded-[5px] w-[5rem]"
                value={valueG}
                onChange={onGChange}
                placeholder="2f"
                type="number"
              />
              <div>
                {" "}
                <MathComponent tex={"y+"} />
              </div>
              <input
                className="rounded-[5px] w-[5rem]"
                value={valueH}
                onChange={onHChange}
                placeholder="c"
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
  type,
  result,
  onResult,
  valueA,
  valueB,
  valueC,
  valueD,
  valueE,
  valueF,
  valueG,
  valueH,
  valueI,
  valueJ,
  valueK,
  onAChange,
  onBChange,
  onCChange,
  onDChange,
  onEChange,
  onFChange,
  onGChange,
  onHChange,
  onIChange,
  onJChange,
  onKChange,
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
        <div className="max-w-[90vw] overflow-hidden overflow-x-scroll lg:scrollbar-hide">
        <InputTemplate
          type={type}
          valueA={valueA}
          valueB={valueB}
          valueC={valueC}
          valueD={valueD}
          valueE={valueE}
          valueF={valueF}
          valueG={valueG}
          valueH={valueH}
          valueI={valueI}
          valueJ={valueJ}
          valueK={valueK}
          onAChange={onAChange}
          onBChange={onBChange}
          onCChange={onCChange}
          onDChange={onDChange}
          onEChange={onEChange}
          onFChange={onFChange}
          onGChange={onGChange}
          onHChange={onHChange}
          onIChange={onIChange}
          onJChange={onJChange}
          onKChange={onKChange}
        />
        </div>
        <button
          onClick={onResult}
          className="hover:bg-black bg-[#292929] rounded-[10px] px-5 py-2 text-white"
        >
          Calculate
        </button>
        <div>Wrong inputs are likely to show NaN as output</div>

        <div className="font-[500] px-5 text-center max-w-[90vw] overflow-hidden overflow-x-scroll lg:scrollbar-hide text-[2rem]">
          {/* {subTitle} : */}
          {result}
        </div>
      </div>
    </MainLayout>
  );
};

export default TitleTemplate;
