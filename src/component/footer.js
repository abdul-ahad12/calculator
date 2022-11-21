import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full base:px-3 lg:px-12  bg-[#383838] text-white flex justify-between base:text-[10px] lg:text-[1rem] items-center h-9">
      {" "}
      <div>
      Copyright© 2021 |<span><Link to={"/"}> Privacy & Policy</Link></span>{" "}
      </div>
      <div>
      <Link to={"/contactus"}>Contact Us</Link>
      </div>
    </div>
  );
};

export default Footer;
