import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import MainLayout from "./mainLayout";

import ReactGA from "react-ga";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);

const Aboutus = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);

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

              <div className="mb-6">
                Hello World! <br />
                Far too often we find ourselves doing easy geometry calculations
                that are part of a larger problem, we know how frustrating it is
                to repeatedly do small calculations. We developed this website
                to offer a host of Calculators that provide solutions to many
                different Coordinate Geometry problems.
                <br />
                We hope that this website will help you in your academic or
                professional pursuits.
              </div>
              {/* <div className="lg:flex w-full justify-center items-center mt-20  base:hidden  ">
                <Link to={"/"} className="w-[20%] h-12 flex items-center justify-center pr-3 hover:bg-black bg-[#363434] rounded-full ">
                  <img src="/mainlogo.png" alt="svg"/>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
        <div className="lg:flex w-full justify-center items-center h-[7rem]  base:hidden  ">
                <Link to={"/"} className="w-[12%] h-12 flex items-center justify-center pr-3 hover:bg-black bg-[#363434] rounded-full ">
                  <img src="/mainlogo.png" alt="svg"/>
                </Link>
              </div>
      </MainLayout>
    </div>
  );
};

export default Aboutus;
