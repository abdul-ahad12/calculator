import MainLayout from "./mainLayout";

const Contactus = () => {
  

  return (
    <div>
      <MainLayout>
        <div className="w-full flex  justify-center items-center ">
          <div className="max-w-[40rem] bg-[#f6f6f6] shadow-2xl w-[35rem] min-w-[18rem] h-[35rem] items-center py-5 my-3 flex flex-col mx-4 rounded-[25px] gap-2">
            <div className="text-[1.5rem] font-[600] ">Contact Us</div>
            <div className="text-[1.2rem]">Any problem you have to add</div>
            <form className="flex flex-col w-[90%] gap-2" action="submit">
              <label className="font-[600]">Name</label>
              <input className="p-2 bg-[#fbfbfb] rounded-[20px]" type="text" />
              <label className="font-[600]">Email address</label>
              <input className="p-2 bg-[#fbfbfb] rounded-[20px]" type="text" />
              <label className="font-[600]">Write your problem here </label>
              <textarea rows={"7"} className=" bg-[#fbfbfb] p-2 rounded-[20px]" type="text" />
            </form>
            <button className="bg-[#383838] text-white px-10 py-2 mt-4 rounded-[20px]">Submit</button>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Contactus;
