import React from 'react'
import Brw from '../../../assets/img/brw.png'
import { Link } from "react-router-dom";

const Ownerhometwo = () => {
  const Title = 'Jennifer Theme Wedding'
  const sizeM = 'M'
  const sizeL = 'L'
  const sizeXl = 'Xl'
  const sizeXxl = '2xl'
  const A = 'N50,000'
  const B = 'N65,000'
  const C = 'N80,000'
  const note = 'Finished products will be Delivered 7 days to to to the event.'
  const moreNote = 'To ensure your dress is made to fit, our design team will be in touch with you within 2 days to customize your measurement after paymet is made. Please note, only the event owner can request for change of design.'
  
  return (
    <div className='px-20 p-10 h-[100vh] md:h-[190vh]'>
    <div>
    <div className='flex justify-between items-center'>
      <p className='text-xl md:text-3xl font-bold'>{Title}</p>
    </div>
      <div className='flex justify-center items-center p-10'>
        <img src={Brw} alt="pic" />
      </div>
      <div className='flex justify-center items-center'>
        <p className=' text-sm md:text-xl'>You have selected a Frame <span className='font-bold'>B </span>and Size <span className='font-bold'>{sizeM}.</span>Confirm by making a payment of <span className='font-bold'>{B}.</span></p>
      </div>
      <div className='m-auto md:w-[70%] mt-[60px]'>
        <p className=''>{note}</p>
        <p className='mt-3'>{moreNote}</p>
      </div>
      <div className='flex justify-center md:justify-center pl-4 font-bold'>
      <Link to='/orderpayment'><button className='border bg-cyan-500 rounded-lg  px-8 py-2 mt-10   md:mt-15 text-white'>Pay
      </button></Link>
      </div>
    </div>
    
  </div>
  )
}

export default Ownerhometwo
