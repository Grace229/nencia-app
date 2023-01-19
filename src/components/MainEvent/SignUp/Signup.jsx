import React from 'react'
import Google from "../../../assets/img/goggle.png";
import Checkbox from "../../../assets/img/Checkbox.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className='h-[1000] md:h-[1200px]'>
      <div className='flex justify-center ' >
      <p className='text-2xl md:text-4xl font-bold'>Create Account</p>
      </div>
     <div className=' flex justify-center'>
      <div className=' flex justify-center md: mt-10 w-[800px] h-[1000px] drop-shadow-md bg-white '>
      
      <div className='mt-10'>
        <div className='border b-2 border-cyan-400 mt-5 flex justify-center items-center '>
          <input type='text' placeholder='sign up with google' className='w-[180px] h-[40px] outline-none md:w-[180px]'/>
          <img src={Google} alt="pic" className='w-4' />
        </div>
        <div className='flex justify-center mt-10'>
          <div className='flex justify-center items-center gap-x-3'>
          <hr className='border-b bg-black w-[100px] font-bold'/>
          <p className='text-cyan-400 text-sm'>or sign up with your email</p>
          <hr className='border-b bg-black w-[100px] font-bold'/>
          </div>
        </div>
        <div className='mt-10 '>
        <label htmlFor="Firstname" className=''>First name:</label>
        <div className='border b-2 border-cyan-400 mt-3'>
          <input type='text' placeholder='Enter first name' className='w-[300px] h-[40px] outline-none md:w-[500px]'/>
        </div>
        </div>
        <div className='mt-5 '>
        <label htmlFor="lastname" className=''>Last name:</label>
        <div className='border b-2 border-cyan-400 mt-3'>
          <input type='text' placeholder='Enter last name' className='w-[300px] h-[40px] outline-none md:w-[500px]'/>
        </div>
        </div>
        <div className='mt-5'>
        <label htmlFor="username" className=''>Username:</label>
        <div className='border b-2 border-cyan-400 mt-3'>
          <input type='text' placeholder='Enter username' className='w-[300px] h-[40px] outline-none md:w-[500px]'/>
        </div>
        </div>
        <div className='mt-5'>
        <label htmlFor="email" className=''>Email address:</label>
        <div className='border b-2 border-cyan-400 mt-3'>
          <input type='email' placeholder='Enter email address' className='w-[300px] h-[40px] outline-none md:w-[500px]'/>
        </div>
        </div>
        <div className='mt-5'>
        <label htmlFor="password" className=''>Password:</label>
        <div className='border b-2 border-cyan-400 mt-3'>
          <input type='text' placeholder='Enter password' className='w-[300px] h-[40px] outline-none md:w-[500px]'/>
        </div>
        </div>
        <div className='mt-5'>
        <label htmlFor="confirmpassword" className=''>Confirm Password:</label>
        <div className='border b-2 border-cyan-400 mt-3'>
          <input type='text' placeholder='Confirm Password' className='w-[300px] h-[40px] outline-none md:w-[500px]'/>
        </div>
        </div>
        <div className='flex justify-start items-center gap-x-1 mt-3 '>
          <div className='flex justify-start items-center gap-x-1'>
            <p className='text-blue-400 text-[14px]'>By registering,you agree to our</p>
            <p className='text-red-600 text-[14px]'>Terms.</p>
          </div>
          <div className='flex justify-start items-center gap-x-1'>
            <p className='text-blue-400 text-[14px]'>Check box</p>
            <img src={Checkbox} alt="pic" className='w-4' />
          </div>
        </div>
        <div className='flex justify-center md:justify-center pl-4 font-bold'>
        <Link to='/signin'><button className='border bg-cyan-500 rounded-lg  px-8 py-2 mt-10   md:mt-15 text-white'>Sign Up
        </button></Link>
        </div>
        <div className='flex justify-center items-center gap-x-1 mt-10'>
          <div className='flex justify-start items-center gap-x-4'>
            <p className=' text-[14px] font-bold'>Already have an account?</p>
            <Link to='/signin'><p className='text-red-600 text-[14px]'>Sign in.</p></Link>
          </div>
        </div>
        
        
      </div>
      </div>
      </div>
    </div>
  )
}

export default SignUp
