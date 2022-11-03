import React from "react";
import { Link } from "react-router-dom";

const SubCard = ({ title, link }) => {
  return (
    <div className="min-w-[10rem] rounded-[12px] shadow-xl bg-white  flex flex-col ">
      <div className="  base:h-[7rem] md:h-[9rem] lg:h-[8rem] lg:w-[28rem] base:w-[90vw] md:w-[43vw] flex flex-col justify-center   ">
        <div className="flex text-[25px] mx-3 font-[500] text-center justify-center">
          {title}
        </div>
      </div>
      <div className="flex h-16 items-center justify-center ">
        <Link to={link}>
          {" "}
          <button className="border-2 w-32  rounded-[12px] hover:bg-black hover:text-white border-black px-5 py-1">
            Find
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SubCard;
