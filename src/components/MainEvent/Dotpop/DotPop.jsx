import React from 'react'
import Dash from '../../../assets/img/dash.png'
import Acc from '../../../assets/img/acc.png'
import Share from '../../../assets/img/share.png'
import { Link } from "react-router-dom";


const DotPop = () => {
  const feedback = 'You do not have any event yet'
  return (
    <div className='p-10 bg-slate-300 h-[100vh] md:h-[100vh]'>
      <div className='bg-white h-[80vh] md:w-[60%] h-[90vh] m-auto'>
        <div className='border border-black py-10 px-5'>
        <Link to='/dashboard'><div className='flex justify-start items-center  gap-x-2 hover:text-cyan-400'>
            <img src={Dash} alt="pic" className='bg-cyan-400 w-7' />
            <p className='cursor-pointer'>Dashboard</p>
          </div>
          </Link>
          <Link to='/sharelink'><div className='flex justify-start items-center mt-10 gap-x-2 hover:text-cyan-400'>
          <img src={Share} alt="pic" className=' w-7' />
          <p className='cursor-pointer'>Share Links to friends</p>
          </div>
          </Link>
          <Link to='/accdetails'><div className='flex justify-start items-center mt-10 gap-x-2 hover:text-cyan-400'>
          <img src={Acc} alt="pic" className=' w-7' />
            <p className='cursor-pointer'>Bank Account Details</p>
          </div>
          </Link>
        </div>
        <div className=' md:w-[60%]  mt-40 flex justify-center items-center m-auto'>
         <p className='text-xl font-bold'>{feedback}</p>
        </div>
      </div>
      
    </div>
  )
}

export default DotPop
