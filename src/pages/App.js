import { useState } from "react";
import Line from "../calculations/line";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import Points from "../component/points";
import MainCard from "../component/sections/mainCard";
import LineCal from "./lineCal";
import MainLayout from "./mainLayout";

function App() {
  const mainElements = [
    {
      title: "Line",
      url: "",
      link:"/pages/lineCal",
    },
    {
      title: "Circle",
      url: "",
      link:"",
    },
    {
      title: "Parabola",
      url: "",
      link:"",
    },
    {
      title: "Ellipse",
      url: "",
      link:"",
    },
    {
      title: "Hypderbola",
      url: "",
      link:"",
    },
  ];

  // const [ax, setax] = useState("");
  // const [ay, setay] = useState("");
  // const [bx, setbx] = useState("");
  // const [by, setby] = useState("");
  // const [calc, setCalc] = useState("");
  // const line=new Line(ax,ay,bx,by)
  // //  const [variables, setvariables] = useState({
  // //   ax:"",
  // //   ay:"",
  // //   bx:"",
  // //   by:"",

  // //  })

  // const onCalc = () => {
  //   // let first = Number(ax) - Number(bx);
  //   // let second = Number(ay) - Number(by);

  //   const result=line.distance(ax,ay,bx,by)
  //   setCalc(result)

  //   // let third = Math.sqrt(first * first + second * second);

  //   // setCalc(Number(third));
  // };
  // console.log(calc);
  // console.log(ax);
  // console.log(ay);

  // const calc=(ax,ay)=>{

  //   let c=ax+ay,

  // }

  return (
    <MainLayout>
      {/* <div className="w-full flex justify-center  h-[35rem] my-11 ">
        <div className="w-90vw mx-3 flex flex-wrap normal gap-11">
          {mainElements.map((data, index)=>{
            return (
            <div key={index}>
              <MainCard 
                title={data.title}
                link={data.link}
              />
            </div>)
          })}
        </div>
      </div> */}
      <LineCal />
      {/* <div className="flex flex-row w-[30vw] gap-5">
    <div>Point1:</div>
    <input
    className="border-cyan-900"
      type={"number"}
      value={ax}
      onChange={(e) => {
        setax(e.target.value);
      }}
    ></input>
    <input
      type={"number"}
      value={ay}
      onChange={(e) => {
        setay(e.target.value);
      }}
    ></input>
  </div>
  <div className="flex flex-row w-[30vw] gap-5">
    <div>Point2:</div>
    <input
    className="border-cyan-900"
      type={"number"}
      value={bx}
      onChange={(e) => {
        setbx(e.target.value);
      }}
    ></input>
    <input
      type={"number"}
      value={by}
      onChange={(e) => {
        setby(e.target.value);
      }}
    ></input>
  </div>
  <button link={onCalc}>Calculate</button>
  <div>{calc}</div>
    <h1></h1>
  <div></div> */}
    </MainLayout>
  );
}

export default App;
