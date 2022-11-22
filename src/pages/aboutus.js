import React from "react";
import MainLayout from "./mainLayout";

const Aboutus = () => {
  return (
    <div>
      <MainLayout>
        <div className='className="w-full flex mx-10 flex-col items-center h-[100%] '>
          <div className="lg:w-[60%] ">
            <div className="font-[500] base:mb-4 lg:mb-[4rem] base:text-[2rem] lg:text-[3rem] mt-7 text-center">
              About Us
            </div>
            <div className="lg:text-[1.2rem] base:text-[1rem]">
              <div className="font-[600]">
                Welcome to Coordinate Geometry Calculator!
              </div>

              <br />

              <div>
                Hello World! <br />
                Far too often we find ourselves doing easy geometry calculations
                that are part of a larger problem, we know how frustrating it is
                to repeatedly do small calculations. We developed this website
                to offer a host of Calculators that provide solutions to many
                different Coordinate Geometry problems. 
                <br/>
                We hope that this
                website will help you in your academic or professional pursuits.
              </div>

              <div className="w-[30%] flex self-center">
                <img src="/mainlogo.png"/>
              </div>

            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Aboutus;
