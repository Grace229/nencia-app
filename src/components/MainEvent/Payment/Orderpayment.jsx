import React from 'react'
import { Link } from "react-router-dom";

const Orderpayment = () => {
  const Title = 'Jennifer Theme Wedding'
  const note = 'The Amount for your dress to this event is N90,000.'
  const moreNote = 'You can go above the minimum to support your firend. All contribution goes to the event owner directly!'
  return (
    <div className='h-[160vh] p-10 md:h-[185vh]'>
      <div>
      <div className='flex justify-between items-center'>
        <p className='text-xl md:text-3xl font-bold'>{Title}</p>
      </div>
      <div className='mt-10'>
      <p className='text-xl md:text-xl '>{note}</p>
      <p className='text-xl md:text-xl mt-2 '>{moreNote}</p>
      </div>
      <div className='mt-10 px-20 md:p-0'>
        <p className=' flex justify-center items-center text-2xl font-bold'>Delivery Info</p>
        <div className='border b-2 border-black mt-10  md:w-[50%] m-auto'>
          <input type='text' placeholder='Names' className=' h-[40px] text-center  outline-none w-[100%]'/>
        </div>
        <div className='border b-2 border-black mt-10 md:w-[50%] m-auto'>
          <input type='email' placeholder='Email' className=' h-[40px] text-center  outline-none w-[100%]'/>
        </div>
        <div className='border b-2 border-black mt-10 md:w-[50%] m-auto'>
          <input type='text' placeholder='Phone Number' className=' h-[40px] text-center  outline-none w-[100%]'/>
        </div>
        <div className='border b-2 border-black mt-10 md:w-[50%] m-auto'>
          <input type='text' placeholder='Country' className=' h-[40px] text-center  outline-none w-[100%]'/>
        </div>
        <div className='border b-2 border-black mt-10 md:w-[50%] m-auto'>
          <input type='text' placeholder='State' className=' h-[40px] text-center  outline-none w-[100%]'/>
        </div>
        <div className='border b-2 border-black mt-10 md:w-[50%] m-auto'>
          <input type='text' placeholder='Full Address' className=' h-[40px] text-center  outline-none w-[100%]'/>
        </div>
        <div className='border b-2 border-black mt-10 md:w-[50%] m-auto'>
          <input type='text' placeholder='Postal Code' className=' h-[40px] text-center  outline-none w-[100%]'/>
        </div>
      </div>
      <div className='flex justify-center md:justify-center pl-4 font-bold'>
        <Link to='/orderpayment'><button className='border bg-cyan-500 rounded-lg  px-8 py-2 mt-10   md:mt-15 text-white'>Pay N50,000
        </button></Link>
        </div>
        <div className=''>
          <div className='mt-10 flex justify-center items-center'>
            <p><span className='font-bold '>Make a donation:</span>You can add your donation to the amount stated above</p>
          </div>
          <div className=':w-[400px] h-[100px] md:w-[700px] h-[150px] drop-shadow-md bg-white m-auto flex justify-between items-center p-5 mt-5'>
           <Link to='/finalpayment'><button className='border border-cyan-400  p-2 mb-4 md:px-8 py-3 mb-4 '>Enter Amount</button></Link>
           <Link to='/finalpayment'><button className='border bg-cyan-400 px-10 py-3 mb-4 md:px-16 py-3 mb-4 rounded-xl'>Pay</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orderpayment
