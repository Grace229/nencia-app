import React from 'react'
import Arrow from "../../../assets/img/Vector.png";
import MarqueeSection from '../../MarqueeSection/Marquee';
import One from "../../../assets/img/Rectangle30.png";
import Two from "../../../assets/img/Rectangle31.png";
import { Link } from "react-router-dom";


const ReadMorewed = () => {
  const Title = 'Raise your game with us.';
  const subText = 'You never have to worry about any tailor giving you headache and you dont have to become a nusiance to your friends over Aso-Abi contributions.';
  const secondText = 'We have the best designers in Nigeria to deliever a personalized collection of themed dress for you';
  const thirdText = 'We are here to make your wedding experience easy and exceptional with a complete fashion stack for your biggest day and even helping you derive additional monetary value. Anywhere you may be, our design team will work virtually with you in sessions to craft a memorable fashion story and series of exotic dresses. Once the designs are approved by you, we open a link for you to share with your bridal train, and guests to make their choices and payments.';
  const offer = 'Our Offers:';
  const arrowTextone = 'A set of customized theme dress of various designs for your guests and bridal train.';
  const arrowTexttwo = 'Dresses finished and delievered to you and your friends in their locations 14 days before the event.';
  const arrowTextthree = 'Donation link you can share with friends around the globe';
  const arrowTextfour = 'Dashboard to monitor donations, and expected guests';
  const arrowTextfive = 'Dedicated event page with gallery featuring pictures from guests in your themed dresses.'

  return (
    
    <div className='p-10'>
      <div className=' w-70'>
        <div>
        <p className='text-xl font-bold'>{Title}</p>
        </div>
        <div className='mt-10'>
        <span className='break-word '>{subText}</span>
        </div>
        <div className='mt-3'>
        <span className='break-word'>{secondText}</span>
        </div>
        <div className='mt-3'>
        <span className='break-word'>{thirdText}</span>
        <div className='mt-3 '>
        <span className='break-word font-bold ml-4'>{offer}</span>

          <div className='mt-3 flex justify-start gap-x-4 items-center'>
          <img className='w-[20px] ' src={Arrow} alt="pic" />
          <span className='break-word'>{arrowTextone}</span>
          </div>
          <div className='mt-3 flex justify-start gap-x-4 items-center'>
          <img className='w-[20px] ' src={Arrow} alt="pic" />
          <span className='break-word'>{arrowTexttwo}</span>
          </div>
          <div className='mt-3 flex justify-start gap-x-4 items-center'>
          <img className='w-[20px] ' src={Arrow} alt="pic" />
          <span className='break-word'>{arrowTextthree}</span>
          </div>
          <div className='mt-3 flex justify-start gap-x-4 items-center'>
          <img className='w-[20px] ' src={Arrow} alt="pic" />
          <span className='break-word'>{arrowTextfour}</span>
          </div>
          <div className='mt-3 flex justify-start gap-x-4 items-center'>
          <img className='w-[20px] ' src={Arrow} alt="pic" />
          <span className='break-word'>{arrowTextfive}</span>
          </div>
        </div>
        <marquee className=' text-xl md:mt-5 font-bold text-6xl' direction="right">
        Talk to us today
        </marquee>
        <div className='flex justify-center md:justify-start pl-4 font-bold'>
        <Link to='/signin'><button className='border bg-cyan-500 rounded-lg  px-8 py-2 mt-5   md:mt-10 text-white' >Create your story here</button></Link>
        </div>
        <div className='block p-10 md:flex justify-center items-end gap-x-10'>
        <img className='' src={One} alt="pic" />
          <img className='mt-10 ' src={Two} alt="pic"  />
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default ReadMorewed
