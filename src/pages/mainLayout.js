import React from "react";
import Footer from "../component/footer";
import Navbar from "../component/navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex w-full flex-col justify-between  min-h-screen "
    //  className="flex flex-col justify-between h-full min-h-screen">
    >
    <Navbar />   <div className=" ">{children} </div><Footer />
    </div>
  );
};

export default MainLayout;
