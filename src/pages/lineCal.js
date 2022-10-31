import React from "react";
import SubCard from "../component/sections/subCard";
import MainLayout from "./mainLayout";

const LineCal = () => {
  const lineElements = [
    {
      title: "Distance between two points",

      link: "/pages/lineCal",
    },
    {
      title: "Slope of a line",
      link: "",
    },
    {
      title: "Point of intersection of two lines",
      link: "",
    },
    {
      title: "x-intercept and y-intercept of a line.",
      link: "",
    },
    {
      title: "Equation of perpendicular bisector.",
      link: "",
    },
    {
      title: "Equation of a line. Two point form.",

      link: "/pages/lineCal",
    },
    {
      title: "Equation of a line. Point slope form.",
      link: "",
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
    // <MainLayout>

    <div className='className="w-full flex flex-col items-center justify-center h-[100%] '>
      <div className="font-[600] mb-[4rem] text-[3rem] mt-7 ">Lines</div>
      <div className="mx-2 mb-24 h-20rem flex-wrap flex items-center justify-center gap-10">
        {lineElements.map((data, index) => {
          return (
            <div key={index}>
              <SubCard title={data.title} />
            </div>
          );
        })}
      </div>
    </div>

    // </MainLayout>
  );
};

export default LineCal;
