import React from "react";
import { Link } from "react-router-dom";
import "./AboutHome.scss";

const AboutHome = () => {
  return (
    <div className="main">
      <div className="main__aboutHeader">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>{" "}
          /<li>About</li>
        </ol>
        <h2 className="main__aboutHeader__head">About Us</h2>
      </div>
      <div className="main__believe">
        <h1>
          We believe the world would one day be clothed in all the colors of
          African fashion and feel the comfort of its soothing embrace.
        </h1>
        <p>
          Africa, the colorful continent radiates warmth and opens her heart to
          the world through music, movies and entertainment. The world sings her
          melodies, the rhythm of her beats and laughter fill the global village
          square.
        </p>
      </div>
    </div>
  );
};

export default AboutHome;
