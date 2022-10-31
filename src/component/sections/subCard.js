import React from "react";
import { Link } from "react-router-dom";

const SubCard = ({ title, link }) => {
  return (
    <div className="min-w-[10rem] rounded-[12px] bg-white  flex flex-col ">
      <div className="h-[6rem] w-[30rem] flex flex-col justify-center   ">
        <div className="flex text-[25px] font-[600] justify-center">
          {title}
        </div>
      </div>
      <div className="flex h-16 items-center justify-center ">
        <button className="border-2 w-32  rounded-[12px] border-black px-5 py-1">
          <Link to={link}>Find</Link>
        </button>
      </div>
    </div>
  );
};

export default SubCard;
