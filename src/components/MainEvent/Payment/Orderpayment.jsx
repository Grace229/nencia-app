import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const Orderpayment = () => {
  const initialValues = { fullname: "", email: "", phoneNumber: "", country: "", state: "", fullAddress: "", postalCode: "" };
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
    if (!values.fullname) {
      errors.fullname = "Full name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phonenumber is required";
    } else if (values.phoneNumber.length < 11) {
      errors.phoneNumber = "Phonenumber must be more than 4 characters";
    }
    if (!values.country) {
      errors.country = "Country is required!";
    }
    if (!values.state) {
      errors.state = "State is required!";
    }
    if (!values.fullAddress) {
      errors.fullAddress = "Address is required! ";
    } 
    if (!values.postalCode) {
      errors.postalCode = "Postal code is required!";
    }
    return errors;
  };

  const Title = 'Jennifer Theme Wedding'
  const note = 'The Amount for your dress to this event is N90,000.'
  const moreNote = 'You can go above the minimum to support your firend. All contribution goes to the event owner directly!'
  return (
    <div className='h-[160vh] p-10 md:h-[185vh]'>
      <div>
      <div className='flex justify-between items-center'>
        <p className='text-xl md:text-3xl font-bold'>{Title}</p>
      </div>
      <div className='mt-10'>
      <p className='text-xl md:text-xl '>{note}</p>
      <p className='text-xl md:text-xl mt-2 '>{moreNote}</p>
      </div>
      <div className='mt-10 px-20 md:p-0'>
      <form onSubmit={handleSubmit}>
        <p className=' flex justify-center items-center text-2xl font-bold'>Delivery Info</p>

        <div className='border b-2 border-black mt-10  md:w-[50%] m-auto'>
          <input name='fullname'
           onChange={handleChange}
           type="text"
           placeholder='Names'
            className=' h-[40px] text-center  outline-none w-[100%]'/>
        </div>
        <center>
          <p className="text-red-500">{formErrors.fullname}</p>
          </center>
        <div className='border b-2 border-black mt-10 md:w-[50%] m-auto'>
          <input name='email'
           onChange={handleChange}
           type="text"
           placeholder='Email'
            className=' h-[40px] text-center  outline-none w-[100%]'/>
        </div>
        <center>
          <p className="text-red-500">{formErrors.email}</p>
          </center>
        <div className='border b-2 border-black mt-10 md:w-[50%] m-auto'>
          <input name='phoneNumber'
           onChange={handleChange}
           type="text"
           placeholder='Phone Number' 
           className=' h-[40px] text-center  outline-none w-[100%]'/>
        </div>
        <center>
          <p className="text-red-500">{formErrors.phoneNumber}</p>
          </center>
        <div className='border b-2 border-black mt-10 md:w-[50%] m-auto'>
          <input name='country'
           onChange={handleChange}
           type="text"
           placeholder='Country'
            className=' h-[40px] text-center  outline-none w-[100%]'/>
        </div>
        <center>
          <p className="text-red-500">{formErrors.country}</p>
          </center>
        <div className='border b-2 border-black mt-10 md:w-[50%] m-auto'>
          <input name='state'
           onChange={handleChange}
           type="text"
           placeholder='State'
            className=' h-[40px] text-center  outline-none w-[100%]'/>
        </div>
        <center>
          <p className="text-red-500">{formErrors.state}</p>
          </center>
        <div className='border b-2 border-black mt-10 md:w-[50%] m-auto'>
          <input name='fullAddress'
           onChange={handleChange}
           type="text"
           placeholder='Full Address'
            className=' h-[40px] text-center  outline-none w-[100%]'/>
        </div>
        <center>
          <p className="text-red-500">{formErrors.fullAddress}</p>
          </center>
        <div className='border b-2 border-black mt-10 md:w-[50%] m-auto'>
          <input name='postalCode'
           onChange={handleChange}
           type="text"
           placeholder='Postal Code'
            className=' h-[40px] text-center  outline-none w-[100%]'/>
        </div>
        <center>
          <p className="text-red-500">{formErrors.postalCode}</p>
          </center>
          <div className='flex justify-center md:justify-center pl-4 font-bold'>
        <button className='border bg-cyan-500 rounded-lg  px-8 py-2 mt-10   md:mt-15 text-white'>Pay N50,000
        </button>
        </div>
          </form>
      </div>
      
        <div className=''>
          <div className='mt-10 flex justify-center items-center'>
            <p><span className='font-bold '>Make a donation:</span>You can add your donation to the amount stated above</p>
          </div>
          <div className=':w-[400px] h-[100px] md:w-[700px] h-[150px] drop-shadow-md bg-white m-auto flex justify-between items-center p-5 mt-5'>
           <button className='border border-cyan-400  p-2 mb-4 md:px-8 py-3 mb-4 '>Enter Amount</button>
           <Link to='/finalpayment'><button className='border bg-cyan-400 px-10 py-3 mb-4 md:px-16 py-3 mb-4 rounded-xl'>Pay</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orderpayment
