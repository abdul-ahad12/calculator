import React from "react";
import Footer from "../component/footer";
import Navbar from "../component/navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex w-full flex-col  min-h-screen "
    //  className="flex flex-col justify-between h-full min-h-screen">
    >
    <Navbar />   <div className="min-h-[65vh] h-full">{children} </div><Footer />
    </div>
  );
};

export default MainLayout;
