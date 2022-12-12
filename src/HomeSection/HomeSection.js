import React from 'react'
import Business from '../components/Business/Business';
import Events from '../components/Events/Events';
import Home from "../components/Home/Home";
import FashionStars from '../components/FashionStars/FashionStars';
import Cta from '../cta/Cta';

const HomeSection = () => {
  return (
    <div>
        <Home />
        <Business />
        <Events />
        <FashionStars /> 
        <Cta />
    </div>
  )
}

export default HomeSection