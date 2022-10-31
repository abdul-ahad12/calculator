import React from "react";
import Footer from "../component/footer";
import Navbar from "../component/navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex w-screen flex-col justify-between min-h-screen "
    //  className="flex flex-col justify-between h-full min-h-screen">
    >
      <Navbar /> {children} <Footer />
    </div>
  );
};

export default MainLayout;
