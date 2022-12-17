import React, { useState } from "react";
import "./Events.scss";
import { eventImageData } from "./EventsData";

const Events = () => {
  const [selected] = useState(0);
 
  return (
    <div className="container">
      <div className="container__left">
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
      </div>
      <div className="container__right">
        <img
          src={eventImageData[selected].image}
          alt="EventImage"
          className="container__right__image"
        />
      </div>
    </div>
  );
};

export default Events;
