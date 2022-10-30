
import { useState } from "react";
import Points from "./component/points";

function App() {
  const [ax, setax] = useState("");
  const [ay, setay] = useState("");
  const [bx,setbx]=useState("")
  const [by,setby]=useState("")
  const [calc,setCalc]=useState("")
//  const [variables, setvariables] = useState({
//   ax:"",
//   ay:"",
//   bx:"",
//   by:"",

//  })

  const onCalc=()=>{
    let first=(Number(ax)-Number(bx))
    let second=(Number(ay)-Number(by))

    let third=Math.sqrt((first*first)+(second*second))


    setCalc(Number(third))

  }
  console.log(calc)
  console.log(ax)
  console.log(ay)

  // const calc=(ax,ay)=>{

  //   let c=ax+ay,

  // }

  return (
    <div className="bg-zinc-400 flex flex-col w-full align-middle gap-5 h-[100vh]">
      <div>CORDINATE GEOMETRY CALUCLATOR</div>
      <div>Distance between 2 points</div>

      {/* <Points /> */}

      <div className="flex flex-row w-[30vw] gap-5">
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
        <button className="w-36 bg-white" onClick={onCalc}>Calculate</button>
        <div className="bg-white text-slate-900">{calc}</div>
    </div>
  );
}

export default App;
