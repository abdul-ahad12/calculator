import React from "react";
import SubCard from "../component/sections/subCard";
import MainLayout from "./mainLayout";

const LineCal = () => {
  const title="Line"
  const lineElements = [
    {
      title: "Distance between two points",

      link: "/distance",
    },
    {
      title: "Slope of a line",
      link: "/slopeLine",
    },
    {
      title: "Point of intersection of two lines",
      link: "/pointofint",
    },
    {
      title: "x-intercept and y-intercept of a line.",
      link: "/xyintercept",
    },
    {
      title: "Equation of perpendicular bisector.",
      link: "/perpendicular",
    },
    {
      title: "Equation of a line. Two point form.",

      link: "/twopointform",
    },
    {
      title: "Equation of a line. Point slope form.",
      link: "/pointslopeform",
    },
    {
      title: "Equation of a line. Slope intercept form.",
      link: "",
    },
    {
      title: "Equation of a line. Intercept form.",
      link: "",
    },
    {
      title: "Area of a triangle (3 points).",
      link: "",
    },
  ];

  return (
    <MainLayout>

    <div className='className="w-full flex flex-col items-center justify-center h-[100%] '>
      <div className="font-[600] mb-[4rem] text-[3rem] mt-7 ">{title}</div>
      <div className=" mb-24 max-w-[1800px] h-20rem flex-wrap flex base:px-[1.5rem] lg:px-[2.5rem] items-center justify-center gap-10">
        {lineElements.map((data, index) => {
          return (
            <div key={index}>
              <SubCard title={data.title} link={data.link} />
            </div>
          );
        })}
      </div>
    </div>

     </MainLayout>
  );
};

export default LineCal;
