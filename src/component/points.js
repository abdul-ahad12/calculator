import React, { useState } from 'react'

const Points = () => {
    const [ax, setax] = useState("");
    const [ay, setay] = useState("");
    const [bx,setbx]=useState("")
    const [by,setby]=useState("")
    const [calc,setCalc]=useState("")
  return (
    <>
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
  </div> */}
  </>
  )
}

export default Points