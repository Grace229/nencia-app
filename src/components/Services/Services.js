import React from 'react'
import ServiceInclude from './serviceInclude/ServiceInclude'
import './Services.scss'
import ServicesHome from './ServicesHome/ServicesHome'
import Cta from '../../components/cta/Cta'
import Footer from '../../components/footer/Footer'


const Services = () => {
  return (
    <div className='Services'>
      <ServicesHome />
      <ServiceInclude />
       <Cta />
      <Footer /> 
    </div>
  )
}

export default Services
