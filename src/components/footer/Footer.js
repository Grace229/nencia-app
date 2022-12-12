import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container__info">
          <h3>Nencia</h3>
          <p>
            <strong>Phone:</strong> +234-9025977376 <br />
            <strong>Email:</strong> care@nencia.com
            <br />
          </p>
        </div>
        <div className="footer__container__links">
          <h4>Useful Links</h4>
          <div className="footer__container__links__unordered">
            <div className="footer__container__links__unordered__list">
              <Link className="footer__container__links__unordered__list__link" href="#">Home</Link>
            </div>
            <div>
              <Link className="footer__container__links__unordered__list__link" href="#">About us</Link>
            </div>
            <div>
              <Link className="footer__container__links__unordered__list__link" href="#">Careers</Link>
            </div>
          </div>
        </div>
        <div className="footer__container__company">
          <h4>Company</h4>
          <ul>
            <li>
              <Link href="#">Legal</Link>
            </li>
            <li>
              {" "}
              <Link href="#">Terms and Conditions </Link>
            </li>
            <li>
              {" "}
              <Link href="#">Privacy policy</Link>
            </li>
          </ul>
        </div>
        <div className="footer__container__social">
          <h4>Follow us</h4>
          <div className="footer__container__social__media"></div>
        </div>
      </div>
      <div className="footer__copyright">
        Copyright &copy; 2022{" "}
        <strong>
          <span>Nencia</span>
        </strong>
        . All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
