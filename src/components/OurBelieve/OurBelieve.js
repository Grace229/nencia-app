import React, { useState } from "react";
import { believeImageData } from "./ourBelieveData";
import Typewriter from "typewriter-effect";
import "./OurBelieve.scss";

const OurBelieve = () => {
  const [selected] = useState(0);
  return (
    <div className="ourBelieve">
      <div className="ourBelieve__left">
        <img
          key={selected}
          src={believeImageData[selected].image}
          alt=""
          className="ourBelieve__left__image"
        />
      </div>
      <div className="ourBelieve__right">
        <div className="ourBelieve__right__header">
          <h1>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: ["Our Believe"],
              }}
            />
          </h1>
        </div>
        <div className="ourBelieve__right__text">
          <h2>
            {" "}
            At Nencia We believe fashion is a powerful tool for social change.
            It can be used to express our individuality, to challenge norms and
            stereotypes, and to help us express ourselves in ways that can't be
            done in any other way.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default OurBelieve;
