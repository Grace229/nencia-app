import React from 'react'
import Dot from '../../../assets/img/dot.png'
import { Link } from "react-router-dom";
import Details from './Details';

const Dashboard = () => {
  const Title = 'Jennifer Theme Wedding'
  const initials = 'JI'
  const amount = 'N70,000'
  const numb = '13 persons'

  return (
    <div className='p-10 h-[105vh] md:h-[145vh]'>
      <div>
      <div className='flex justify-between items-center '>
        <p className='text-xl md:text-3xl font-bold'>{Title}</p>
      </div>
      <div className='flex justify-between items-center mt-5'>
          <div className='flex justify-between items-center w-[95%] md: w-[100%]'>
            <p className='text-2xl font-bold'>Dashboard</p>
            <div className='flex justify-between items-center gap-x-3'>
            <div className='bg-slate-400 w-[50px] h-[50px] rounded-full flex justify-center items-center'>
            <p className=''>{initials}</p>
            </div>
            <Link to='/dotpop'><img src={Dot} alt="pic" className='w-4.5 h-8' /></Link>
            </div>
          </div>
      </div>
      <div className='border b-2 border-cyan-400 mt-10 drop-shadow-xl bg-white  m-auto flex justify-between items-center p-5'>
          <div>
            <p className='font-bold'>Total Contribution</p>
            <p className='mt-3'>{amount}</p>
          </div>
          <div>
            <p className='font-bold'>Dress Bought</p>
            <p className='mt-3'>{numb}</p>
          </div>
        </div>
        <p className='text-xl font-bold mt-5'>Details</p>
        <div className='flex justify-start items-center mt-5 ml-5'>
          <div className=' w-[60%]'><p className='font-bold'>Names</p></div>
          <div className='flex justify-around items-center w-[100%]'>
          <p className='font-bold'>Dress Size</p>
          <p className='font-bold'>Contribution</p>
          </div>
        </div>
        <Details />
      </div>
    </div>
  )
}

export default Dashboard
