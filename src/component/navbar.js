import React from "react";

const Navbar = () => {
  return (
    <div className="w-full justify-center flex  bg-[#383838] ">
      <div className="w-[90vw]  text-white flex flex-col  ">

      {/* navbar */}
        <div className="flex flex-row align-middle items-center  h-16  gap-6">
          <div className="flex flex-row items-center">CG-<img className="w-7" src="/favicon.ico"></img></div>
          {/* has to change div to link */}

          <div className="hidden lg:flex flex-row align-middle items-center gap-6">

          <div>Home</div>
          <div>Line</div>
          <div>Circle</div>
          <div>Parabola</div>
          <div>Ellipse</div>
          <div>Hyperbola</div>
          </div>
        </div>

        {/* Hero */}
        <div className="w-full flex justify-center items-center flex-col h-56">
       <div className="base:text-[2rem] text-center font-[500] lg:text-[3rem]"> Coordinate Geometry Calculator</div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
