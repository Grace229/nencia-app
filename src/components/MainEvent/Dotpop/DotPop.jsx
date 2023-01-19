import React from 'react'
import Dash from '../../../assets/img/dash.png'
import Acc from '../../../assets/img/acc.png'
import Share from '../../../assets/img/share.png'
import { Link } from "react-router-dom";


const DotPop = () => {
  const feedback = 'You do not have any event yet'
  return (
    <div className='p-10 bg-slate-300 h-full'>
      <div className='bg-white h-screen md:w-[60%] m-auto'>
        <div className='border border-black py-10 px-5'>
          <div className='flex justify-start items-center  gap-x-2'>
            <img src={Dash} alt="pic" className='bg-cyan-400 w-7' />
            <Link to='/'><p className='cursor-pointer'>Dashboard</p></Link>
          </div>
          <div className='flex justify-start items-center mt-10 gap-x-2'>
          <img src={Share} alt="pic" className=' w-7' />
            <p className='cursor-pointer'>Share Links to friends</p>
          </div>
          <div className='flex justify-start items-center mt-10 gap-x-2'>
          <img src={Acc} alt="pic" className=' w-7' />
            <p className='cursor-pointer'>Bank Account Details</p>
          </div>
        </div>
        <div className=' md:w-[60%]  mt-40 flex justify-center items-center m-auto'>
         <p className='text-xl font-bold'>{feedback}</p>
        </div>
      </div>
      
    </div>
  )
}

export default DotPop
