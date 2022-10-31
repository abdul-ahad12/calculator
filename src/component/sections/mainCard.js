import React from 'react'
import { Link } from 'react-router-dom'

const MainCard = ({title,link}) => {
  return (
    <div className='min-w-[10rem] max-w-[15vw] bg-white flex flex-col '>
    <div className='h-40 w-full bg-black'></div>
    <div className='flex h-16 items-center justify-center '> 
    <button  className='border-2 w-32 border-black px-5 py-1'><Link to={link}>{title}</Link></button>
    </div>

    </div>
  )
}

export default MainCard