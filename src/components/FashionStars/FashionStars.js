import React, { useState } from "react";
import { fashionStarImageData } from "./FashionStarData";
import "./FashionStars.scss";
import { motion } from "framer-motion";
import { useScroll } from "../../useScroll";
import { fashionAnimations } from "../../animation";

const FashionStars = () => {
  const [selected] = useState(0);
  const [element, controls] = useScroll();

  return (
    <motion.div
      variants={fashionAnimations}
      ref={element}
      animate={controls}
      transition={{
        delay: 0.03,
        type: "tween",
        duration: 0.8,
      }}
      className="fashion"
    >
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
    </motion.div>
  );
};

export default FashionStars;
