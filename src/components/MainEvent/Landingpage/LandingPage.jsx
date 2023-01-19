import React from 'react'
import First from "../../../assets/img/Rectangle32.png";
import Second from "../../../assets/img/Rectangle28.png";
import Third from "../../../assets/img/Rectangle27.png";
import Mobileone from "../../../assets/img/Rectangle40.png";
import Mobiletwo from "../../../assets/img/Rectangle41.png";
import Playstore from "../../../assets/img/Rectangle45.png";
import Last from "../../../assets/img/Rectangle43.png";
import Footer from '../../footer/Footer';
import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <div className=''>
      <div className='p-10  border-b-2 border-zinc-400 w-full'>
      <div className=''>
        <span className='text-xl md:text-3xl flex justify-center font-bold'>Make a fashion statement</span>
        <span className='text-xl mt-2 md:text-3xl flex justify-center font-bold'>on your wedding day.</span>
        </div>

        <div className='block md:flex justify-between mt-10 font-bold'>
        <div className=' font-semibold md:px-16'>
          <span>For the moment that becomes memory, we help you tell a fashion story that is timeless.<br /> Let’s work with you from design to delivering a theme wedding that expresses your unique <br /> fashion personality.
           </span>
        </div>
        <div className=''>
        <Link to='/readmorewed'><button className='border bg-cyan-500 rounded-lg w-full px-8 py-2 mt-5 md:mt-0 text-white' >Read More</button></Link>
        </div>
        </div>
        <div className='block md:flex justify-center items-end gap-x-10 mt-5'>
          <img className='w-[400px] h-full mt-10 flex justify-center  md:w-[400px] ' src={First} alt="pic" />
          <img className='w-[400px] h-full mt-10 md:w-[400px] ' src={Second} alt="pic" />
          <img className='w-[400px] h-full mt-10 md:w-[300px] ' src={Third} alt="pic"  />
        </div>
      </div>
      <div className='grid md:grid-cols-2  border-b-2 border-zinc-400 w-full'>
        <div className=''>
          <div className=' flex items-center  md:flex justify-center items-end'>
          <img className='w-[170px]  mt-10  md:w-[300px] ' src={Mobileone} alt="pic" />
          <img className='w-[120px]  mt-10 md:w-[200px] ' src={Mobiletwo} alt="pic" />
          </div>

        </div>
        <div className='flex flex-col justify-center p-10'>
          <div className='md:mt-[-100px]'>
          <p className='flex justify-start text-2xl font-bold'>Take your Fashion Business</p>
          <p className='flex justify-start text-2xl font-bold'>global</p>
          </div>
          <div>
            <p className='flex justify-start mt-5'>Whatever the size of your fashion business today, there is a wider market waiting beyond the walls of your work space.</p>
            <p className='flex justify-start'>Take advantage of our mobile platform designed to enhace your sales process and product discovery</p>
          </div>
          <div className='flex justify-center md:justify-end'>
          <Link to='/readmorefashion'><button className='border bg-cyan-500 rounded-lg  px-8 py-2 mt-5  md:mt-0 text-white' >Read More</button></Link>
          </div>
          <div className=''>
          <img className='w-[250px]  mt-10 md:w-[-200px] mt-[100px]   ' src={Playstore} alt="pic" />
          </div>

        </div>
        

      </div>
      <div className='grid pt-0 md:grid-cols-2 py-20  '>
        <div className=''>
          <div className=' flex justify-start items-center px-10  md:flex justify-start items-center px-28'>
          <img className='w-[300px]  mt-10 md:w-[400px] ' src={Last} alt="pic" />
          </div>

        </div>
        <div className='flex flex-col justify-center p-10'>
          <div className='md:mt-[-0px]'>
          <p className='flex justify-start text-2xl font-bold'>Turn your Event to a Fashion Story</p>
          </div>
          <div>
            <p className='flex justify-start mt-5'>Host delightful events with our fashion story telling platform. whether it is tech community, conference, or religious event; we provide the tools</p>
            <p className='flex justify-start'>for you to turn it into a fashion story, create branded expereince that connects with your audience by templating, customizing and </p>
            <p className='flex justify-start'>staging it in an interactive fun way. And whats more, your community members can also donate to an event using our app.</p>
          </div>
          <div className='mt-0 '>
          <img className='w-[250px] mt-5 md:w-[200px] mt-[100px]' src={Playstore} alt="pic" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage
