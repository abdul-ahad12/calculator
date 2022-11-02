import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LinkItem = ({ href, text }) => {



  const location = useLocation();
  const path = location.pathname;
  const active =  href === path;

  return (
    <Link
      className={active ? "text-white text-[20px] font-[600]" : "text-[#d6d6d6]  hover:text-white"}
      to={href}
    >
      {text}
    </Link>
  );
};

const Navbar = () => {
  const [isMenu, setisMenu] = useState(false);

  const openDrawer = () => {
    setisMenu(true);
  };

  return (
    <div className="w-full justify-center flex  bg-[#383838] ">
      {/* menu */}

      <div
        className={
          isMenu
            ? "fixed w-full left-36 h-full bg-slate-400 opacity-90"
            : "hidden"
        }
      >sadas</div>
      <div className="w-[90vw]  text-white flex flex-col  ">
        {/* navbar */}
        <div className="flex flex-row align-middle items-center md:justify-start base:justify-between h-16  gap-6">
          <Link to={"/"}>
            {" "}
            <div className="flex flex-row items-center">
              CG-<img className="w-7" src="/favicon.ico"></img>
            </div>
          </Link>
          <div 
          // onClick={openDrawer} 
          className="md:hidden">
            icon
          </div>

          

          {/* has to change div to link */}

          <div className="hidden md:flex flex-row align-middle  items-center gap-6">
            <div className="">
              <LinkItem text={"Home"} href={"/"} />
            </div>
            <div>
              <LinkItem text={"Line"} href={"/lineCal"} />
            </div>
            <div>
              <LinkItem text={"Circle"} href={"/circle"} />
            </div>
            <div>
              <LinkItem text={"Parabola"} href={"/parabola"} />
            </div>
            <div>
              <LinkItem text={"Ellipse"} href={"/ellipse"} />
            </div>
            <div>
              <LinkItem text={"Hyperbola"} href={"/hyperbola"} />
            </div>
          </div>
        </div>

        {/* Hero */}
        <div className="w-full flex justify-center items-center flex-col h-56">
          <div className="base:text-[2rem] text-center font-[500] lg:text-[3rem]">
            {" "}
            Coordinate Geometry Calculator
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
