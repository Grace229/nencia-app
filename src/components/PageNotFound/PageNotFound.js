import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";
import dribble from "../../assets/img/dribbble_1.gif";

const PageNotFound = () => {
  return (
    <section class="page_404">
      <div>
        <img src={dribble} alt="404Page" />
      </div>
      <div>
        <h1>404</h1>
        <h3 class="h2">Look like you're lost</h3>
        <p>the page you are looking for not available!</p>

        <Link to="/" class="link_404">
          Go to Home
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
