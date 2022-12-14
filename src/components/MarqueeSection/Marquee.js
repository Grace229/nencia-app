import React from "react";
import "./Marquee.css";
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <section className="marquee-section">
      <Marquee speed={60} gradient={false} pauseOnHover>
        <div className="marquee-container">
          <div className="marquee3k">
            <h4>
              {" "}
              <span>Nencia</span>
              <span>Business</span>
              <span>Fashion</span>
              <span>Event</span>{" "}
            </h4>
            <h4>
              {" "}
              <span>Nencia</span>
              <span>Business</span>
              <span>Fashion</span>
              <span>Event</span>{" "}
            </h4>
            <h4>
              {" "}
              <span>Nencia</span>
              <span>Business</span>
              <span>Fashion</span>
              <span>Event</span>{" "}
            </h4>
          </div>
        </div>
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
