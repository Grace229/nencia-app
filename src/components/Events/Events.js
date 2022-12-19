import React, { useState } from "react";
import "./Events.scss";
import { eventImageData } from "./EventsData";
import { useScroll } from "../../useScroll";
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "../../animation";

const Events = () => {
  const [selected] = useState(0);
  const [element, controls] = useScroll();

  return (
    <div className="container">
      <motion.div
        ref={element}
        variants={homeAnimation}
        animate={controls}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
        className="container__left"
      >
        <div className="container__left__heading">
          <p>Event</p>
        </div>
        <div className="container__left__header">
          <h1>Turn your event to a story for the ages.</h1>
        </div>
        <div className="container__left__text">
          <h2>
            {" "}
            Precious moments are fleeting. A single mishap from your favorite
            fashion designer could replace your smile with a frown on your
            biggest day. Let’s work with you from conception of your event theme
            to delivering a fashion statement reserved for royalty with elegant
            styles treasured long after the event. We also give you the honor of
            allowing your fashion flair and personality rob off on your
            distinctive guests by co-creating your designs with our brands
            before the event. for you to help you move from product awareness to
            transactions.
          </h2>
        </div>
      </motion.div>
      <motion.div
        ref={element}
        animate={controls}
        variants={homeInfoAnimation}
        transition={{ delay: 0.3, duration: 0.5, type: "tween" }}
        className="container__right"
      >
        <img
          src={eventImageData[selected].image}
          alt="EventImage"
          className="container__right__image"
        />
      </motion.div>
    </div>
  );
};

export default Events;
