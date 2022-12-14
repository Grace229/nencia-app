import React, { useState } from "react";
import { fashionStarImageData } from "./FashionStarData";
import "./FashionStars.scss";

const FashionStars = () => {
  const [selected] = useState(0); 
  
  return (
    <div className="fashion">
      <div className="fashion__left">
        <img
          src={fashionStarImageData[selected].image}
          alt=""
          className="fashion__left__image"
        />
      </div>
      <div className="fashion__right">
        <div className="fashion__right__heading">
          <p>Fashionstars</p>
        </div>
        <div className="fashion__right__header">
          <h1>
            Imagine your world sparkling in all the colours of Africa fashion
          </h1>
        </div>
        <div className="fashion__right__text">
          <h2>
            {" "}
            Discover all the creative designers and authentic fabrics shops in
            few clicks leading you to a world of fashion as unique as you.
          </h2>
        </div>
      </div>
    </div>
  ); 
};

export default FashionStars;
