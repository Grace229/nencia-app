import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";
import dribble from "../../assets/img/dribbble_1.gif";

const PageNotFound = () => {
  return (
    <section className="page_404">
      <div>
        <img
          src={dribble}
          alt="404Page"
          className="imageClass"
        />
      </div>
      <div className="notFoundHeader">
        <h1>404</h1>
        <h3>Look like you're lost</h3>
        <p>the page you are looking for not available!</p>

        <Link to="/" className="link_404">
          Go to Home
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
