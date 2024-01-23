import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MainCard from "../component/sections/mainCard";
import MainLayout from "./mainLayout";

import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);
ReactGA.send("pageview");

function App() {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
    <>
      <Helmet>
        <title>
          Coordinate Geometry Calculator
        </title>
        <meta
          name="description"
          content="Free Distance, Slope, and many other Calculators. Explore the world of precise solutions with our Coordinate Geometry Calculator Today."
        />
      </Helmet>
      <MainLayout>
        <div className="w-full flex justify-center items-start  min-h-[30rem] py-[3rem]  ">
          <div className="w-90vw mx-3 flex flex-wrap items-center justify-center normal gap-11">
            {mainElements.map((data, index) => {
              return (
                <div key={index}>
                  <MainCard
                    title={data.title}
                    url={data.url}
                    link={data.link}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default App;
