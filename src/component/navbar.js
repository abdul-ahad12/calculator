import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Fade as Hamburger } from 'hamburger-react'

const LinkItem = ({ href, text }) => {
  const location = useLocation();
  const path = location.pathname;
  const active = href === path;

  return (
    <Link
      className={
        active
          ? "text-white text-[20px] font-[600]"
          : "text-[#d6d6d6]  hover:text-white"
      }
      to={href}
    >
      {text}
    </Link>
  );
};

const Navbar = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isOpen, setOpen] = useState(false)

  // const openDrawer = () => {
  //   setisMenu(true);
  // };

  return (
    <div className="w-full justify-center flex  bg-[#383838] ">
      {/* menu */}

      <div
        className={
          isOpen ? "fixed w-full mt-14 h-fit justify-self-end flex flex-col text-[1.1rem] gap-4 z-10 p-4  bg-[#383838]" : "hidden"
        }
      >
      {/* <div className="flex w-full justify-between">
      <div className="text-white font-bold mb-4">CG CALCULATOR</div>
      <div onClick={()=>setisMenu(false)} className="w-7"><img src="/wrong.png" alt="" /></div>
        </div> */}
        <div className="">
              <LinkItem text={"Home"} href={"/"} />
            </div>
            <div>
              <LinkItem text={"Line"} href={"/lineCal"} />
            </div>
            <div>
              <LinkItem text={"Triangle"} href={"/triangle"} />
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
            </div>{" "}
            <div>
              <LinkItem text={"Contact Us"} href={"/contactus"} />
            </div>
        
      </div>
      <div className="w-[100%]  text-white flex flex-col  ">
        {/* navbar */}
        <div className="bg-[#383838] md:pl-[4rem] fixed flex w-full flex-row align-middle items-center md:justify-start base:justify-between h-16  md:gap-6">
          <Link to={"/"}>
            {" "}
            <div className=" flex flex-row items-center">
              <img className="mt-3 w-[4rem]" src="/Logo.png" alt="logo"></img>
            </div>
          </Link>
          <div
            className="base:justify-self-end self-end md:hidden"
          >
            <div className="w-full">
              {" "}

              <div><Hamburger size={25} toggled={isOpen} toggle={setOpen} /></div>
            </div>
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
              <LinkItem text={"Triangle"} href={"/triangle"} />
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
            </div>{" "}
            <div>
              <LinkItem text={"Contact Us"} href={"/contactus"} />
            </div>
          </div>
        </div>

        {/* Hero */}
        <div className="w-full flex justify-center items-center flex-col h-[18rem]">
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
