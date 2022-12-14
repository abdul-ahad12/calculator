import React from 'react'
import MainLayout from '../../pages/mainLayout';
import SubCard from './subCard';

const GeoTemp = ({elements,title}) => {
  return (
    <div>
      <MainLayout>

<div className='className="w-full flex flex-col items-center justify-center h-[100%] '>
  <div className="font-[500] base:mb-4 lg:mb-[4rem] base:text-[2rem] lg:text-[3rem] mt-7 ">{title}</div>
  <div className=" mb-24 max-w-[1800px] h-20rem flex-wrap flex  lg:px-[2.5rem] items-center justify-center gap-10">
    {elements.map((data, index) => {
      return (
        <div key={index}>
          <SubCard title={data.title} link={data.link} />
        </div>
      );
    })}
  </div>
</div>

 </MainLayout>
    </div>
  )
}


export default GeoTemp
