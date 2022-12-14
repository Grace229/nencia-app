import React, { useState } from "react";
import "./Home.scss";
import appstore from "../../assets/img/appstore.png";
import playstore from "../../assets/img/playstore.png";
import { Link } from "react-router-dom";
import leftArrow from "../../assets/img/leftArrow.png";
import { homeImageData } from "./data/home";
import { motion } from "framer-motion";

const Home = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const tLength = homeImageData.length;

  return (
    <main>
      <div className="container">
        <div className="container__left">
          <div className="container__left__name">
            <span>All the</span>
            <span>COLOURS</span>
            <p>of Africa</p>
            <span>
              We bring the beauty of motherland in one place and empower Africa
              fashion designers, fashion merchants and retailers to sell
              everywhere.
            </span>
          </div>
          <div className="container__left__app">
            <Link>
              <img
                src={appstore}
                alt=""
                style={{ width: "140px" }}
                className="waving-left"
              />
            </Link>
            <Link>
              <img
                src={playstore}
                alt=""
                style={{ width: "140px" }}
                className="waving"
              />
            </Link>
          </div>
        </div>
        <div className="container__right">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            transition={transition}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: -100 }}
            className="container__right__background"
          ></motion.div>
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            transition={transition}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: -100 }}
            key={selected}
            src={homeImageData[selected].image}
            alt=""
            className="container__right__image"
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
      </div>
    </main>
  );
};

export default Home;
