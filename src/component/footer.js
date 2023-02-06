import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LinkItem = ({ href, text }) => {
  const location = useLocation();
  const path = location.pathname;
  const active = href === path;

  return (
    <Link
      className={
        active
          ? "text-white text-[17px] font-[600]"
          : "flex base:flex-col lg:flex-row lg:gap-5 text-[#d6d6d6] base:text-[17px] base:gap-4  hover:text-white"
      }
      to={href}
    >
      {text}
    </Link>
  );
};

const Footer = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="w-full base:gap-9 base:px-6 base:pt-7 lg:pt-0 lg:px-[7rem] lg:font-[400]  bg-[#383838] text-[#d6d6d6] flex lg:flex-row base:flex-col-reverse justify-between  lg:text-[1rem]   lg:items-center lg:h-[3rem]">
      {" "}
      <div className="base:self-center base:pb-4 lg:pb-0 base:text-[16px] lg:text-[17px] ">
        Copyright © 2022 . All rights reserved{" "}
      </div>
      <div className="lg:hidden">
        {/* <div className="base: text-[25px] font-[600] ">Follow Us</div> */}
        <div className="flex pt-4 gap-4  justify-center">
          
          <a
            href="https://www.linkedin.com/company/coordinate-geometry-calculator"
            className="w-[3rem] "
          >
            <img src="/linkedin.svg" alt="" />
          </a>
          <a
            href="https://www.instagram.com/cg.calculator"
            className="w-[3rem] "
          >
            <img src="/instagram.svg" alt="" />
          </a>
          <a href="https://twitter.com/CgCalculator" className="w-[3rem] ">
            <img src="/twitter.svg" alt="" />
          </a>
        </div>
      </div>
      {/* <div className={location.pathname==="/"?"base:hidden":"base:hidden lg:inline-block"}>
      <div className="flex  gap-5  justify-center">
      <div className="base: text-[25px] font-[500] "></div>
        <div className="w-[2.5rem]"><img src="/linkedin.svg" alt="" /></div>
        <div className="w-[2.5rem] "><img src="/instagram.svg" alt="" /></div>
        <div className="w-[2.5rem] "><img src="/twitter.svg" alt="" /></div>

        </div>
      


      </div> */}
      <div className="flex base:flex-col lg:flex-row lg:gap-5 base:text-[17px] base:gap-4">
        <LinkItem href={"/aboutus"} text={"About Us"} />
        <LinkItem href={"/contactus"} text={"Contact Us"} />
        <LinkItem href={"/privacypolicy"} text={"Privacy Policy"} />
        <LinkItem href={"/termsofuse"} text={"Terms Of Use"} />
        <div className="relative">
          <div
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className={
              isShown
                ? "absolute h-[12rem] w-[4rem] bottom-5 rounded-t-[30px] rounded-br-[30px] left-11 bg-[#5c5c5c] fkex flex-col"
                : "hidden"
            }
          >
            <a
            href="https://www.linkedin.com/company/coordinate-geometry-calculator"
            className="w-[3rem] "
          >
            <img src="/linkedin.svg" alt="" />
          </a>
            <a
              href="https://www.instagram.com/cg.calculator"
              className="w-[3rem] "
            >
              <img src="/instagram.svg" alt="" />
            </a>
            <a href="https://twitter.com/CgCalculator" className="w-[3rem] ">
              <img src="/twitter.svg" alt="" />
            </a>
          </div>
          <div
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className={isShown?"text-white":"text-[#d6d6d6] base:hidden lg:inline-block"}
          >
            Social
          </div>
        </div>

        {/* <Link to={"/contactus"}>About Us</Link>
      <Link to={"/contactus"}>Contact Us</Link>
      <Link to={"/contactus"}>Privacy Policy</Link>
      <Link to={"/contactus"}>Terms of use</Link> */}
      </div>
      <div className="base:flex ml-[-1rem] lg:hidden ">
        {/* <div className="w-[4rem] "><img src="/Logo.png" alt="" /></div>
<div className="self-center text-[30px] font-[600]">Calculator</div> */}
        <div className="w-[15rem]">
          <img src="/mainlogo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
