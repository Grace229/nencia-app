import React from "react";
import "./Cta.scss";
import appstore from "../../assets/img/appstore.png";
import playstore from "../../assets/img/playstore.png";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { useScroll } from "../../useScroll";
import { motion } from "framer-motion";
import { ctaAnimations } from "../../animation";

const Cta = () => {
  const [element, controls] = useScroll();
  return (
    <div className="cta" ref={element}>
      <motion.div
        variants={ctaAnimations}
        animate={controls}
        transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
        className="cta__left"
      >
        <div className="cta__left__heading">
          <h3>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: ["Get the nencia App"],
              }}
            />
          </h3>
        </div>
        <div className="cta__left__header">
          <p>
            Experience stress-free fashion shopping and make bold fashion
            statement with authentic African fashion styles .
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={ctaAnimations}
        animate={controls}
        transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
        className="cta__right"
      >
        <Link className="cta__right__link">
          <img
            src={appstore}
            alt=""
            style={{ width: "200px" }}
            className="cta__right__link__image"
          />
        </Link>
        <Link className="cta__right__link">
          <img
            src={playstore}
            alt=""
            style={{ width: "200px" }}
            className="cta__right__link__image"
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default Cta;
