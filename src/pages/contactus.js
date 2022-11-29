// import emailjs from '@emailjs/browser';
import emailjs from "emailjs-com";
import MainLayout from "./mainLayout";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import ReactGA from "react-ga";
const TRACKING_ID = "G-H6HVLL90WP";
ReactGA.initialize(TRACKING_ID);

const Contactus = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onNameChange = (e) => {
    setform({
      ...form,
      name: e.target.value,
    });
  };

  const onEmailChange = (e) => {
    setform({
      ...form,
      email: e.target.value,
    });
  };

  const onMessageChange = (e) => {
    setform({
      ...form,
      message: e.target.value,
    });
  };
  console.log(form);

  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const sendEmail = (e) => {
    e.preventDefault();

    {
      form.name === "" || form.email === "" || form.message === ""
        ? alert("Enter all Fields")
        : emailjs
            .sendForm(
              "service_owzhoi9",
              "template_8zrb4m3",
              e.target,
              "ugaGXz6g1deIfQib2"
            )
            .then(
              (result) => console.log(result.text),
              (error) => console.log(error.text),
              e.target.reset(),
              alert("We will contact you soon")
            );
    }
  };

  return (
    <div>
      <MainLayout>
        <div className="w-full flex justify-center">
          <div className="w-[90%] flex lg:flex-row base:flex-col base:my-11 lg:my-0  max-w-[1500px]  justify-between items-center ">
            <div className="lg:inline-block">
              <div className="base:text-[1.5rem] lg:text-[2.5vw] xl:text-[3rem] w-full font-bold">
                Have feedback for us?
                <br />
                Want us to add some new calculator?
                <br />
                Found a bug?
                <br />
                Just want to connect?
                <br />
                Feel free to use the following form,
                <br />
                we respond to every message.
              </div>
            </div>
            <div className="max-w-[40rem] bg-[#f6f6f6] shadow-2xl base:w-[90vw] lg:w-[30rem] min-w-[18rem] min-h-[35rem] items-center py-5 md:my-10 base:my-4 flex flex-col mx-4 rounded-[25px] gap-2">
              <div className="text-[1.5rem] font-[600] ">Contact Us</div>
              {/* s */}
              <form
                className="flex flex-col w-[90%] gap-2"
                onSubmit={sendEmail}
                action="submit"
              >
                <label className="font-[600]">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onNameChange}
                  className="p-2 shadow-md bg-[#fbfbfb] rounded-[20px]"
                  type="text"
                />
                <label className="font-[600]">Email address</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={onEmailChange}
                  className="p-2 bg-[#fbfbfb] shadow-md rounded-[20px]"
                  type="text"
                />
                <label className="font-[600]">Write your Message here </label>
                <textarea
                  rows={"7"}
                  name="message"
                  value={form.message}
                  onChange={onMessageChange}
                  className=" bg-[#fbfbfb] shadow-md p-2 rounded-[20px]"
                  type="text"
                />
                <button
                  type="submit"
                  className="bg-[#383838] shadow-md text-white px-10 py-2 mt-4 rounded-[20px]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Contactus;
