import React, { useState } from "react";
import "./Business.scss";
import { businessImageData } from "./BusinessData";
import leftArrow from "../../assets/img/leftArrow.png";

const Business = () => {
  const [selected, setSelected] = useState(0);
  const tLength = businessImageData.length;
  return (
    <div className="container">
      <div className="container__left">
        <img
          key={selected}
          src={businessImageData[selected].image}
          alt=""
          className="container__left__image"
        />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt="left-arrow"
            className="arrows__left"
          />
          <img
            src={leftArrow}
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            alt="right-arrow"
            className="arrows__right"
          />
        </div>
      </div>
      <div className="container__right">
        <div className="container__right__heading">
          <p>Business</p>
        </div>
        <div className="container__right__header">
          <h1>You had the dream, now we give you the stage</h1>
        </div>
        <div className="container__right__text">
          <h2>
            {" "}
            Sell without border. Increase sales from customers who visit your
            predominant social channels by reducing the time you spend talking
            about measurements, price and logistics, we have taken care of that
            for you to help you move from product awareness to transactions.
          </h2>
        </div> 
      </div>
    </div>
  ); 
};

export default Business;
