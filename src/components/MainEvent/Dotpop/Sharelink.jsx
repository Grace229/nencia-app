import React from 'react'
import Dot from '../../../assets/img/dot.png'
import { Link } from "react-router-dom";

const Sharelink = () => {
  const initials = 'JI'
  const note = 'Copy and share with your friends to join your fashion story. they can also use this link to make contributions to support this event'
  const barLink = 'lkgstio/8753w/loyes/#lo;pog'
  return (
    <div className='p-10'>
      <div>
      <div className='flex justify-end items-center gap-x-3'>
            <div className='bg-slate-400 w-[50px] h-[50px] rounded-full flex justify-center items-center'>
            <p className=''>{initials}</p>
            </div>
            <Link to='/dotpop'><img src={Dot} alt="pic" className='w-4.5 h-8' /></Link>
      </div>
      <div>
        <p className='text-xl font-bold md:flex justify-center items-center'>Event Link</p>
      </div>
      <div className='w-[100%] m-auto mt-10 md:w-[50%] '>
        <p>{note}</p>
      </div>
        <div className='border b-2 border-black mt-[100px] drop-shadow-xl bg-white h-[40px] flex justify-center items-center  md:w-[50%] m-auto'>
          <p>{barLink}</p>
        </div>
        <div className='flex justify-center md:justify-center pl-4 font-bold'>
        <button className='border bg-cyan-500 rounded-lg  px-8 py-2 mt-10   md:mt-15 text-white'>Copy
        </button>
        </div>
      </div>
    </div>
  )
}

export default Sharelink
