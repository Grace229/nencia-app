import React from 'react'
import { Link } from "react-router-dom";

const Create = () => {
  const theme = 'Create your theme wedding'

  return (
    <div className='p-20 '>
      <div className='flex items-center md:justify-center'>
        <p className='text-xl font-bold md:text-3xl'>{theme}</p>
        </div>
      <div className='block md:flex justify-center items-center'>
        <div className=' m-auto mt-10'>
          <button className='border border-black flex justify-center items-center w-[350px] font-bold  md:w-[450px] h-[50px]'>Fashion Theme Title</button>
          <button className='border border-black flex justify-center items-center w-[350px] font-bold md:w-[450px] h-[50px] mt-5'>Event Location</button>
          <button className='border border-black flex justify-center items-center w-[350px] font-bold md:w-[450px] h-[50px]  mt-5'>Event Date</button>
          <button className='border border-black flex justify-center items-center w-[350px] font-bold md:w-[450px] h-[50px]  mt-5'>Event Colours</button>
        </div>
      </div>
      <div className='flex justify-center md:justify-center pl-4 font-bold'>
      <Link to='/payment'><button className='border bg-cyan-500 rounded-lg  px-8 py-2 mt-10   md:mt-15 text-white'>Create</button></Link>
        </div>
    </div>
  )
}

export default Create
