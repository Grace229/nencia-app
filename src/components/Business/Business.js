import React, { useState } from "react";
import "./Business.scss";
import { businessImageData } from "./BusinessData";
import Typewriter from "typewriter-effect";

const Business = () => {
  const [selected] = useState(0);

  return (
    <div className="container">
      <div className="container__left">
        <img
          key={selected}
          src={businessImageData[selected].image}
          alt=""
          className="container__left__image"
        />
      </div>
      <div className="container__right">
        <div className="container__right__heading">
          <p>Business</p>
        </div>
        <div className="container__right__header">
          <h1>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: ["You had the dream, now we give you the stage."],
              }}
            />
          </h1>
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
