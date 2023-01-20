import React from 'react'
import { Link } from "react-router-dom";

const Finalpayment = () => {
  const Title = 'Jennifer Theme Wedding'
  const name = 'Nancy Roberts'
  const mail = 'nancy@gmail.com'
  const location = '5 Erie Close, Nile Street, Asokoro,Abuja, Nigeria'
  const amount = 'N150,0000'
  return (
    <div className='p-10 h-[70vh] md:h-[90vh]'>
      <div>
      <div className='flex justify-between items-center'>
        <p className='text-xl md:text-3xl font-bold'>{Title}</p>
      </div>
      <div className='mt-10 px-20 md:p-0'>
        
        <div className='flex justify-around items-center border b-2 border-black mt-10   md:w-[50%] m-auto flex justify-between items-center  p-5'>
          <div className='p-0'>
            <p className='text-sm md:text-xl'>{name}</p>
            <p className='text-sm md:text-xl'>{mail}</p>
          </div>
          <div>
            <p className='text-cyan-400 text-sm md:text-xl'>Edit</p>
          </div>
        </div>
        <div className='flex justify-around items-center border b-2 border-black mt-10  md:w-[50%] m-auto flex justify-between items-center p-5'>
          <div className=''>
            <p className='text-sm md:text-xl'>{location}</p>
          </div>
          <div>
            <p className='text-cyan-400 text-sm md:text-xl'>Edit</p>
          </div>
        </div>
        <div className='flex justify-around items-center border b-2 border-black mt-10  md:w-[50%] m-auto flex justify-between items-center p-5'>
          <div>
            <p className='text-sm md:text-xl'>{amount}</p>
          </div>
          <div>
            <p className='text-cyan-400 text-sm md:text-xl'>Edit</p>
          </div>
        </div>
        <div className='flex justify-center md:justify-center pl-4 font-bold '>
        <Link to='/orderpayment'><button className='border bg-cyan-500 rounded-lg  px-8 py-2 mt-10   md:mt-15 text-white'>Pay
        </button></Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Finalpayment
