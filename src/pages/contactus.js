// import emailjs from '@emailjs/browser';
import emailjs from "emailjs-com";

import MainLayout from "./mainLayout";

const Contactus = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
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
  };

  return (
    <div>
      <MainLayout>
        <div className="w-full flex  justify-center items-center ">
          <div className="max-w-[40rem] bg-[#f6f6f6] shadow-2xl w-[35rem] min-w-[18rem] min-h-[35rem] items-center py-5 md:my-10 base:my-4 flex flex-col mx-4 rounded-[25px] gap-2">
            <div className="text-[1.5rem] font-[600] ">Contact Us</div>
            <div className="text-[1.2rem] text-center">
              Have feedback for us?
              <br/>
              Want us to add some new calculator<br/>
              Found a bug?<br />
              Just want to connect?<br/>
              Feel free to use the following form,we<br />
              respond to every message.
            </div>
            <form
              className="flex flex-col w-[90%] gap-2"
              onSubmit={sendEmail}
              action="submit"
            >
              <label className="font-[600]">Name</label>
              <input
                name="name"
                className="p-2 bg-[#fbfbfb] rounded-[20px]"
                type="text"
              />
              <label className="font-[600]">Email address</label>
              <input className="p-2 bg-[#fbfbfb] rounded-[20px]" type="text" />
              <label className="font-[600]">Write your problem here </label>
              <textarea rows={"7"} className=" bg-[#fbfbfb] p-2 rounded-[20px]" type="text" />
            </form>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Contactus;
