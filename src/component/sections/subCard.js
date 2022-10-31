import React from "react";
import { Link } from "react-router-dom";

const SubCard = ({ title, link }) => {
  return (
    <div className="min-w-[10rem] rounded-[12px] bg-white  flex flex-col ">
      <div className="h-[6rem] lg:w-[30rem] base:w-[18rem] flex flex-col justify-center   ">
        <div className="flex text-[25px] font-[600] text-center justify-center">
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
