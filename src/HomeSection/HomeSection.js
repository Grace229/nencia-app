import React from 'react'
import Business from '../components/Business/Business';
import Events from '../components/Events/Events';
import Home from "../components/Home/Home";
import FashionStars from '../components/FashionStars/FashionStars';
import Cta from '../components/cta/Cta';
import Footer from '../components/footer/Footer';
import MarqueeSection from '../components/MarqueeSection/Marquee';


const HomeSection = () => {
  return (
    <div>
        <Home />
        <MarqueeSection />
        <Business />
        <Events />
        <FashionStars /> 
        <Cta />
        <Footer />
    </div>
  )
}

export default HomeSection