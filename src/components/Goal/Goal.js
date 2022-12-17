import React, { useState } from "react";
import "./Goal.scss";
import Typewriter from "typewriter-effect";
import { goalImageData } from "./GoalData";

const Goal = () => {
  const [selected] = useState(0);
  return (
    <div className="goal">
      <div className="goal__left">
        <div className="goal__left__header">
          <h1 style={{ color: "#1da1f2" }}>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: ["Our Goals"],
              }}
            />
          </h1>
        </div>
        <div className="goal__left__text">
          <h2>
            {" "}
            We want every brand on our platform to have access to the resources
            they need to make their products available all over the world from
            design and manufacturing facilities in Africa, to distribution
            channels across the globe without leaving home.
          </h2>
        </div>
      </div>
      <div className="goal__right">
        <img
          key={selected}
          src={goalImageData[selected].image}
          alt=""
          className="goal__right__image"
        />
      </div>
    </div>
  );
};

export default Goal;
