import React from 'react'
import Arrow from "../../../assets/img/Vector.png";
import MarqueeSection from '../../MarqueeSection/Marquee';
import One from "../../../assets/img/Rectangle30.png";
import Two from "../../../assets/img/Rectangle31.png";
import Bob from "../../../assets/img/Rectangle36.png";
import Playstore from "../../../assets/img/Rectangle45.png";




const ReadMoreFashion = () => {
  const Title = 'Take your business beyond your store.';
  const subText = 'Your typical business process involves posting your products on social media and getting into lengthy interactions with prospects.Most times those interactions do not lead to sales because your social media channels are not optimised for sales. ';
  const secondText = 'We have taken care of those gaps with an App that allows a prospect to make purchase desicion within the shortest time';
  const thirdText = 'We are here to make your wedding experience easy and exceptional with a complete fashion stack for your biggest day and even helping you derive additional monetary value. Anywhere you may be, our design team will work virtually with you in sessions to craft a memorable fashion story and series of exotic dresses. Once the designs are approved by you, we open a link for you to share with your bridal train, and guests to make their choices and payments.';
  const offer = 'Our Offers:';
  const arrowTextone = 'Collect accurate measurements from your cusotmers online.';
  const arrowTexttwo = 'Sale RTW with less interactions.';
  const arrowTextthree = 'Acess larger market with our curated events taking place in your location.';
  const arrowTextfour = 'automated delivery process as we are linked to a shipping agency with capacity for nationwide and international delivery.';
  const arrowTextfive = 'Buiild a community of your customers with our easy referral link that allows your loyal customer to refer you to their friends';
  const arrowTextSix = 'Collect payment easily with our Paystak intergration.';
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
          <div className='mt-3 flex justify-start gap-x-4 items-center'>
          <img className='w-[20px] ' src={Arrow} alt="pic" />
          <span className='break-word'>{arrowTextSix}</span>
          </div>
        </div>
        <div className=''>
          <img className='w-[250px]  mt-10 md:w-[-200px] mt-[100px]   ' src={Playstore} alt="pic" />
          </div>
        <div className='block p-10 md:flex justify-center items-end gap-x-10'>
        <img className='' src={Bob} alt="pic" width={500} />
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default ReadMoreFashion
