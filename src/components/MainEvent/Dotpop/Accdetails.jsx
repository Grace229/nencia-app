import React from 'react'
import Dot from '../../../assets/img/dot.png'
import { Link } from "react-router-dom";

const Accdetails = () => {
  const initials = 'JI'
  return (
    <div className='p-10'>
      <div>
      <div className='flex justify-end items-center gap-x-3'>
            <div className='bg-slate-400 w-[50px] h-[50px] rounded-full flex justify-center items-center'>
            <p className=''>{initials}</p>
            </div>
            <Link to='/dotpop'><img src={Dot} alt="pic" className='w-4.5 h-8' /></Link>
      </div>
      <div className='flex justify-center items-center'>
        <p className='text-xl font-bold'>Account Details</p>
      </div>
      <div className='border b-2 border-black mt-10 drop-shadow-xl bg-white  md:w-[50%] m-auto'>
          <input type='text' placeholder='Full Names' className=' h-[40px] text-center  outline-none w-[100%]'/>
        </div>
        <div className='border b-2 border-black mt-10 drop-shadow-xl bg-white  md:w-[50%] m-auto'>
          <input type='text' placeholder='Name of Bank' className=' h-[40px] text-center  outline-none w-[100%]'/>
        </div>
        <div className='border b-2 border-black mt-10 drop-shadow-xl bg-white  md:w-[50%] m-auto'>
          <input type='text' placeholder='Account Number' className=' h-[40px] text-center  outline-none w-[100%]'/>
        </div>
        <div className='flex justify-center md:justify-center pl-4 font-bold'>
        <Link to='/'><button className='border bg-cyan-500 rounded-lg  px-8 py-2 mt-10   md:mt-15 text-white'>Save
        </button></Link>
        </div>
      </div>
    </div>
  )
}

export default Accdetails
