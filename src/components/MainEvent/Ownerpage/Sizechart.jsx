import React from 'react'
import Owner from '../../../assets/img/owner.png'
import Small from '../../../assets/img/small.png'
import Back from '../../../assets/img/back.png'
import Forward from '../../../assets/img/forward.png'
import Brown from '../../../assets/img/brown.png'
import Browntwo from '../../../assets/img/browntwo.png'
import Brownthree from '../../../assets/img/brownthree.png'
import Sizechar from '../../../assets/img/sizechart.png'
import { Link } from "react-router-dom";


const Sizechart = () => {
  const Title = 'Jennifer Theme Wedding'
  const firstPrice = 'N50,000'
  const secondPrice = 'N65,000'
  const thirdPrice = 'N80,000'
  return (
    <div className='p-10 h-[2000px] ' >
     <div>
      <div className='flex justify-between items-center'>
        <p className='text-xl md:text-3xl font-bold'>{Title}</p>
        <img src={Small} alt="pic" className='w-5 md:w-20' />
      </div>
      <div className='flex justify-center items-center mt-10'>
        <img src={Owner} alt="pic"  />
      </div>
      <div className=' w-[70%] mt-10  m-auto md:w-[60%] '>
      <div className='grid gap-y-10 md:grid-cols-3 gap-x-12 '>
        <div className='hover:border border-cyan-400'>
          <img src={Brown} alt="pic" className='w-[300px] '/>
          <p className='mt-3 flex justify-center font-bold '>A</p>
          <p className='mt-3 flex justify-center font-bold md:mt-3'>{firstPrice}</p>
        </div>
        <div className='hover:border border-cyan-400 '>
        <img src={Browntwo} alt="pic" className='w-[300px] ' />
        <p className='mt-3 flex justify-center font-bold '>B</p>
        <p className='mt-3 flex justify-center font-bold  md:mt-3'>{secondPrice}</p>
        </div>
        <div className='hover:border border-cyan-400'>
        <img src={Brownthree} alt="pic" className='w-[300px] ' />
        <p className='mt-3 flex justify-center font-bold md:mt-5'>C</p>
        <p className='mt-3 flex justify-center font-bold md:mt-3'>{thirdPrice}</p>
        </div>
      </div>
      </div>
      <div className='flex justify-between items-center px-10 h-[300px] mt-[-90px] md:mt-[-80px] '>
        <div className='flex justify-start items-center gap-x-3 md:gap-x-5'>
        <label>
          Select Size
          </label>
         <select className='border border-black outline-none '>
           <option value="S" id='option'>s</option>
           <option value="M" id='option'>m</option>
           <option value="L" id='option'>l</option>
           <option value="XL" id='option'>xl</option>
           <option value="2XL" id='option'>2xl</option>
           </select>
           
        </div>
        <div>
          <Link to='/sizechart'><p className='text-cyan-400'>See Size Charts</p></Link>
        </div>
        
      </div>
      <div className='h-[400px] mt-[-80px]'>
          <div className='flex justify-center items-center text-4xl '>
            <p>Size Chart</p>
          </div>
          <div className='flex justify-center items-center mt-5'>
            <img src={Sizechar} alt="" className='w-[70%] md:w-[50%]' />
          </div>
        </div>
     </div>
    </div>
  )
}

export default Sizechart
