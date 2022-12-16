import React from 'react'
import AboutHome from '../AboutHome/AboutHome'
import Goal from '../Goal/Goal'
import OurBelieve from '../OurBelieve/OurBelieve'
import Plans from '../plans/Plans'
import Team from '../Team/Team'
import './About.scss'
import Footer from '../footer/Footer'

const About = () => {
  return (
    <div className='about'>
      <AboutHome />
      <OurBelieve />
      <Goal />
      <Plans />
      <Team />
      <Footer />
    </div>
  )
}

export default About