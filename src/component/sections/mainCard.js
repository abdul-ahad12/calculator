import React from 'react'
import { Link } from 'react-router-dom'

const MainCard = ({title,link,url}) => {
  return (
    <Link to={link}><div className=' min-w-[15rem]  max-w=[25rem] base:shadow-md lg:shadow-2xl rounded-b-[10px] bg-white flex flex-col '>
    <div className='h-60 [w-15rem] bg-white'><img className='w-full h-full' src={url} alt="img"></img></div>
    <div className='flex h-16 items-center justify-center '> 
    <button  className='border-2 w-32 hover:bg-black hover:text-white border-black rounded-[1px]  text-black px-5 py-1'>{title}</button>
    </div>

    </div>
    </Link>
  )
}

export default MainCard