import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full justify-center flex  bg-[#383838] ">
      <div className="w-[90vw]  text-white flex flex-col  ">

      {/* navbar */}
        <div className="flex flex-row align-middle items-center  h-16  gap-6">
          <div className="flex flex-row items-center">CG-<img className="w-7" src="/favicon.ico"></img></div>
          {/* has to change div to link */}

          <div className="hidden lg:flex flex-row align-middle items-center gap-6">

          <div className="text-[#d6d6d6] hover:text-white"><Link to={"/"}> Home</Link></div>
          <div><Link to={"/lineCal"}> Line </Link></div>
          <div><Link to={"/circle"}> Circle</Link></div>
          <div><Link to={"/parabola"}> Parabola</Link></div>
          <div><Link to={"/ellipse"}> Ellipse</Link></div>
          <div><Link to={"/hyperbola"}> Hyperbola</Link></div>
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
