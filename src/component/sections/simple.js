import React from "react";

const Simple = ({ title }) => {
  return (
    <div className='className="w-full flex mx-10 flex-col items-center justify-center h-[100%] '>
      <div className="font-[500] base:mb-4 lg:mb-[4rem] base:text-[2rem] lg:text-[3rem] mt-7 ">
        {title}
      </div>
      <div className="text-[2rem] text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
        maiores aliquid iste nisi, dicta cum amet ut, quo expedita cumque ipsam
        voluptatibus natus veritatis eveniet quae autem accusantium veniam
        doloribus.
      </div>
    </div>
  );
};

export default Simple;
