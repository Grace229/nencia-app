import React from "react";
import {
  FaTruck,
  FaMoneyCheckAlt,
  FaHandshake,
  FaLayerGroup,
} from "react-icons/fa";
import "./ServiceInclude.css";

const ServiceInclude = () => {
  return (
    <section className="page-section">
      <div className="page-sectionContainer">
        <div className="page-sectionContainerHead">
          <h2>Our Services Include</h2>
        </div>
      </div>
      <ul className="timeline">
        <li>
          <div className="timeline-image">
            <FaTruck />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading-left">
              <span className="goUp">Reliable</span>
              <span className="goUp">Logistics</span>
            </div>
          </div>
        </li>
        <br /> <br />
        <li className="timeline-inverted">
          <div className="timeline-image">
            <FaMoneyCheckAlt />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading-right">
              <span className="goUpFromRight">Seamless </span>
              <span className="goUpFromRight">Payment</span>
            </div>
          </div>
        </li>
        <br /> <br /> <br /> <br />
        <li>
          <div className="timeline-image">
            <FaHandshake />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading-left">
              <span className="goUp">Reliable</span>
              <span className="goUp">Partnership</span>
            </div>
          </div>
        </li>
        <br /> <br />
        <li className="timeline-inverted">
          <div className="timeline-image">
            <FaLayerGroup />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading-right">
              <span className="goUpFromRight">Brand</span>
              <span className="goUpFromRight">Development</span>
            </div>
          </div>
        </li>
        <br /> <br /> <br /> <br />
        <li className="timeline-inverted">
          <div className="timeline-image">
            <div className="timeline-heading-final">
              <span>Be Part</span>
              <span> Of Our</span>
              <span> Story!</span>
            </div> 
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ServiceInclude;
