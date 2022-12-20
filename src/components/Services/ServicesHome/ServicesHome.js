import React from "react";
import { Link } from "react-router-dom";
import './ServicesHome.scss'

const ServicesHome = () => {
  return (
    <div className="section">
      <div className="section__servicesHome">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>{" "}
          /<li>Services</li>
        </ol>
        <h2 className="section__servicesHome__head">Services</h2>
      </div>
      <div className="section__believe">
        <h1>
          We offer a variety of services that can help your brand reach its full
          potential.
        </h1>
        <p>
          Africa, the colorful continent radiates warmth and opens her heart to
          the world through music, movies and entertainment. The world sings her
          melodies, the rhythm of her beats and laughter fill the global village
          square.
        </p>
      </div> 
    </div>
  );
};

export default ServicesHome;
