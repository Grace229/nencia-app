import React from 'react'
import { useState } from 'react'

const Details = () => {
  const [order , setOrder ] = useState ([
    {
    id:1,
    initials:'JI',
    clientName:'Ijeoma Iwobi',
    dressSize:'M/Frame A',
    contribution: 'Nill'
  },
  {
    id:2,
    initials:'NA',
    clientName:'Nora Alex',
    dressSize:'M/Frame A',
    contribution: 'N20,000'
  },
  {
    id:3,
    initials:'DB',
    clientName:'Debby Sam',
    dressSize:'X/Frame C',
    contribution: 'N20,000'
  },
  {
    id:4,
    initials:'EA',
    clientName:'Esther Aloy',
    dressSize:'M/Frame E',
    contribution: 'Nill'
  },
  {
    id:5,
    initials:'WN',
    clientName:'Wuni Nancy',
    dressSize:'S/Frame E',
    contribution: 'Nill'
  },
  {
    id:6,
    initials:'QE',
    clientName:'Queen Eze',
    dressSize:'XL/Frame D',
    contribution: 'N30,000'
  },
]) 
  return (
    <div className='    m-auto flex justify-between items-center w-[100%]'>
      <div className=' w-[100%]'>
        {
          order.map((datum) => 
            <div key={datum.id} className=' flex justify-between items-center h-[50px] border border-cyan-400 drop-shadow-xl bg-white mt-5'>

            <div className='flex justify-start items-center gap-x-10 w-[60%]'>
             <div className='bg-slate-400 w-[30px] h-[30px] rounded-full flex justify-center items-center'>
              <p className='text-sm md:text-xl'>{datum.initials}</p>
             </div>
             <div className=''>
              <p className='text-sm md:text-xl'>{datum.clientName}</p>
            </div>
            </div>
            <div className='flex justify-around items-center  w-[100%] '>
            <p className='text-sm md:text-xl'>{datum.dressSize}</p>
            <p className='text-sm md:text-xl'>{datum.contribution}</p>
          </div>

            </div>
          )
        }
      </div>
      
    </div>
  )
}

export default Details

