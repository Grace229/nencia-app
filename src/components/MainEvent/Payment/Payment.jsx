import React from 'react'
import Dot from '../../../assets/img/dot.png'
import { Link } from "react-router-dom";

const Payment = () => {
  const name = 'Jennifer Iwobi'
  const initials = 'JI'
  const notes = 'Following our phone conversion with you, we have carefully made preliminary designs for your upcoming event. Please pay the sum below to access the designs. The payment is security fee to ensure our designs are not taken elsewhere';
  return (
    <div className='p-10 md:px-40 py-10'>
      <div className='flex justify-between items-center'>
          <div className='flex justify-between items-center w-[95%] md: w-[100%]'>
            <p className='text-2xl font-bold'>Welcome {name}</p>
            <div className='flex justify-between items-center gap-x-3'>
            <div className='bg-slate-400 w-[50px] h-[50px] rounded-full flex justify-center items-center'>
            <p className=''>{initials}</p>
            </div>
            <Link to='/dotpop'><img src={Dot} alt="pic" className='w-4.5 h-8' /></Link>
            </div>
            
          </div>
          
      </div>
      <div className='mt-10'>
        <p className='text-lg' >{notes}</p>
      </div>

      <div className='flex justify-center md:justify-center pl-4 font-bold'>
        <button className='border  border-cyan-500 rounded-lg  px-8 py-2 mt-20 text-black'>N20,000</button>
        </div>

        <div className='flex justify-center md:justify-center pl-4 font-bold'>
        <Link to='/eventownerpage'><button className='border bg-cyan-500 rounded-lg  px-12 py-2 mt-10   md:mt-20 px-12 text-white'>Pay
        </button></Link>
        </div>
      
    </div>
  )
}

export default Payment
