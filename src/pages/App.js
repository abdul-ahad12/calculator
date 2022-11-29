import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainCard from "../component/sections/mainCard";
import MainLayout from "./mainLayout";

import ReactGA from "react-ga";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);


function App() {
  // let location = useLocation();
  // useEffect(() => {
  //   if (!window.GA_INTIALIZED)
  //   {
  //     ReactGA.initialize("G-H6HVLL90WP");
  //     window.GA_INTIALIZED = true
  //   }
  //   ReactGA.set({ page: location.pathname})
  //   ReactGA.pageview(location.pathname);
  // }, [location]);

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);

  const mainElements = [
    {
      title: "Line",
      url: "/line.JPG",
      link: "/lineCal",
    },
    {
      title: "Triangle",
      url: "/triangle.png",
      link: "/triangle",
    },
    {
      title: "Circle",
      url: "/circle.JPG",
      link: "/circle",
    },
    {
      title: "Parabola",
      url: "/parabola.JPG",
      link: "/parabola",
    },
    {
      title: "Ellipse",
      url: "/ellipse.JPG",
      link: "/ellipse",
    },
    {
      title: "Hyperbola",
      url: "/hyperbola.JPG",
      link: "/hyperbola",
    },
  ];

  return (
    <MainLayout>
      <div className="w-full flex justify-center items-start  min-h-[30rem] py-[3rem]  ">
        <div className="w-90vw mx-3 flex flex-wrap items-center justify-center normal gap-11">
          {mainElements.map((data, index) => {
            return (
              <div key={index}>
                <MainCard title={data.title} url={data.url} link={data.link} />
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
