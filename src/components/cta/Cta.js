import React from "react";
import "./Cta.scss";
import appstore from "../../assets/img/appstore.png";
import playstore from "../../assets/img/playstore.png";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Cta = () => {
  return (
    <div className="cta">
      <div className="cta__left">
        <div className="cta__left__heading">
          <h3>
          <Typewriter 
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "Get the nencia App",
              ],
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
      </div>
      <div className="cta__right">
        <Link>
          <img src={appstore} alt="" style={{ width: "200px" }} />
        </Link>
        <Link>
          <img src={playstore} alt="" style={{ width: "200px" }} />
        </Link>
      </div>
    </div>
  );
};

export default Cta;
