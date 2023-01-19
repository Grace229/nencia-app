import React from 'react'
import Message from "../../../assets/img/message.png";
import Password from "../../../assets/img/password.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className='p-10 '>
      <div className='px-10 ' >
      <p className='text-2xl md:text-4xl font-bold'>Welcome</p>
      </div>
      <div className=' flex justify-center'>
      <div className=' flex justify-center w-[800px] h-[400px] drop-shadow-md bg-white mt-10'>
      
      <div className='mt-10'>
        <div className='border b-2 border-cyan-400 mt-10 '>
          <input type='email' placeholder='Email' className='w-[300px] h-[40px] outline-none md:w-[500px]'/>
        </div>
        <div className='border b-2 border-cyan-400 mt-10 '>
          <input type='password' placeholder='Password' className='w-[300px] h-[40px] outline-none md:w-[500px]'/>
        </div>
        <div>
          <p className='text-sm text-cyan-500 mt-3 cursor-pointer italic'>Forgot password?</p>
        </div>

        <div className='flex justify-center md:justify-center pl-4 font-bold'>
        <Link to='/create'><button className='border bg-cyan-500 rounded-lg  px-8 py-2 mt-10   md:mt-15 text-white'>Login
        </button></Link>
        </div>

        <div className='flex justify-center items-center gap-x-3 mt-5'>
          <p className='italic text-[14px]'>Don't have an account?</p>
          <Link to='/signup'><p className='text-cyan-500 cursor-pointer italic text-[14px] '>Sign up</p></Link>
        </div>
        
      </div>
      </div>
      </div>
      
      
    </div>
  )
}

export default SignIn
