import React, { useState, useEffect } from 'react'
import Google from "../../../assets/img/goggle.png";
import Checkbox from "../../../assets/img/Checkbox.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const initialValues = { firstname: "", lastname: "", username: "", email: "", password: "", confirmpassword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "Firstname is required!";
    }
    if (!values.lastname) {
      errors.lastname = "Lastname is required!";
    }
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "Confirm Password ";
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = "Incorrect Password";
    } 
    return errors;
  };

  return (
    <div className='h-[1100] md:h-[1300px]'>
      <div className='flex justify-center ' >
      <p className='text-2xl md:text-4xl font-bold'>Create Account</p>
      </div>
     <div className=' flex justify-center'>
      <div className=' flex justify-center md: mt-10 w-[900px] h-[1100px] drop-shadow-md bg-white '>
      
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
        <form onSubmit={handleSubmit}>
        <div className='mt-10 '>
        <label htmlFor="Firstname" className=''>First name:</label>
        <div className='border b-2 border-cyan-400 mt-3'>
          <input name='firstname'
          onChange={handleChange}
          type="text"
           placeholder='Enter first name' 
           className='w-[300px] h-[40px] outline-none md:w-[500px]'/>
        </div>
        </div>
        <center>
          <p className="text-red-500">{formErrors.firstname}</p>
          </center>
        <div className='mt-5 '>
        <label htmlFor="lastname" className=''>Last name:</label>
        <div className='border b-2 border-cyan-400 mt-3'>
          <input name='lastname'
          onChange={handleChange}
          type="text"
           placeholder='Enter last name'
            className='w-[300px] h-[40px] outline-none md:w-[500px]'/>
        </div>
        </div>
        <center>
          <p className="text-red-500">{formErrors.lastname}</p>
          </center>
        <div className='mt-5'>
        <label htmlFor="username" className=''>Username:</label>
        <div className='border b-2 border-cyan-400 mt-3'>
          <input name='username'
           placeholder='Enter username' 
           onChange={handleChange}
           type="text"
           className='w-[300px] h-[40px] outline-none md:w-[500px]'/>
        </div>
        </div>
        <center>
          <p className="text-red-500">{formErrors.username}</p>
          </center>
        <div className='mt-5'>
        <label htmlFor="email" className=''>Email address:</label>
        <div className='border b-2 border-cyan-400 mt-3'>
          <input name='email'
           onChange={handleChange}
           type="text"
            value={formValues.email}
           placeholder='Enter email address'
            className='w-[300px] h-[40px] outline-none md:w-[500px]'/>
        </div>
        </div>
        <center>
          <p className="text-red-500">{formErrors.email}</p>
          </center>
        <div className='mt-5'>
        <label htmlFor="password" className=''>Password:</label>
        <div className='border b-2 border-cyan-400 mt-3'>
          <input name='password'
          onChange={handleChange}
          type="text"
           placeholder='Enter password'
            className='w-[300px] h-[40px] outline-none md:w-[500px]'/>
        </div>
        </div>
        <center>
          <p className="text-red-500">{formErrors.password}</p>
          </center>
        <div className='mt-5'>
        <label htmlFor="confirmpassword" className=''>Confirm Password:</label>
        <div className='border b-2 border-cyan-400 mt-3'>
          <input name='confirmpassword'
          onChange={handleChange}
          type="text"
           placeholder='Confirm Password'
            className='w-[300px] h-[40px] outline-none md:w-[500px]'/>
        </div>
        </div>
        <center>
          <p className="text-red-500">{formErrors.confirmpassword}</p>
          </center>
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
        <div className='flex justify-center md:justify-center pl-4 font-bold outline:none '>
        <Link to='/signin'><button className='border bg-cyan-500 rounded-lg  px-8 py-2 mt-10 outline:none  md:mt-15 text-white'>Sign Up
        </button>
        </Link>
        </div>
        </form>
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
