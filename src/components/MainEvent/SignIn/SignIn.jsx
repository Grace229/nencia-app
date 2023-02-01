import React, { useState, useEffect } from 'react'
import Message from "../../../assets/img/message.png";
import Password from "../../../assets/img/password.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  const initialValues = { username: "", email: "", password: "" };
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
    return errors;
  };

  return (
    <div className='p-10 '>
      <div className='px-10 ' >
      <p className='text-2xl md:text-4xl font-bold'>Welcome</p>
      </div>
      <div className=' flex justify-center'>
      <div className=' flex justify-center w-[800px] h-[400px] drop-shadow-md bg-white mt-10'>
      
      <div className='mt-10'>
      
        <form onSubmit={handleSubmit}>
        <div className='border b-2 border-cyan-400 mt-10 '>
          <input name='email'
          onChange={handleChange}
          type="text"
           value={formValues.email}
           placeholder='Email'
            className='w-[300px] h-[40px] outline-none md:w-[500px]'/>
        </div>
        <center>
          <p className="text-red-500">{formErrors.email}</p>
          </center>

        <div className='border b-2 border-cyan-400 mt-10 '>
          <input name='password'
          onChange={handleChange}
          type="text"
           placeholder='Password'
           value={formValues.password}
            className='w-[300px] h-[40px] outline-none md:w-[500px]'/>
        </div>
        <center>
          <p className="text-red-500">{formErrors.password}</p>
          </center>
        
        <div>
          <p className='text-sm text-cyan-500 mt-3 cursor-pointer italic'>Forgot password?</p>
        </div>

        <div className='flex justify-center md:justify-center pl-4 font-bold'>
        <Link to='/create'>
        <button className='border bg-cyan-500 rounded-lg  px-8 py-2 mt-10   md:mt-15 text-white'>Login
        </button>
        </Link>
        </div>
        </form>

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
