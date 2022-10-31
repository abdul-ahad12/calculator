import React from "react";

const Navbar = () => {
  return (
    <div className="w-full justify-center flex  bg-black ">
      <div className="w-[90vw]  text-white flex flex-col  ">

      {/* navbar */}
        <div className="flex flex-row align-middle items-center  h-16  gap-6">
          <div>CG GEOMETRY</div>
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
        <div className="w-full flex justify-center items-center flex-col h-64">
       <div className="base:text-[2rem] text-center font-[500] lg:text-[3rem]"> Cordinate Geometry Calculator</div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
