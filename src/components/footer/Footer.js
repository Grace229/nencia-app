import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSkype, FaTwitter } from "react-icons/fa";
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
          <ul className="footer__container__links__unordered">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">About us</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
          </ul>
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
          <div className="footer__container__social__media">
            <Link><FaTwitter /></Link>
            <Link><FaFacebookF /></Link>
            <Link><FaInstagram /></Link>
            <Link><FaSkype /></Link>
            <Link><FaLinkedinIn /></Link>
          </div>
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
