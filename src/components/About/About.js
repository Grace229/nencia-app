import React from "react";
import { Link } from "react-router-dom";
import "./About.scss";

const About = () => {
  return (
    <div className="main">
      <div className="main__aboutHeader">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li> /
          <li>About</li>
        </ol>
        <h2 className="main__aboutHeader__head">About Us</h2>
      </div>
    </div>
  );
};

export default About;
