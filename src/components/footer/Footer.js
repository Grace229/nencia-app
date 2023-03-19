import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { useScroll } from "../../useScroll";
import { motion } from "framer-motion";
import { footerTextAnimation } from "../../animation";

const Footer = () => {
  const [element, controls] = useScroll();
  return (
    <div className="footer">
      <motion.div
        ref={element}
        variants={footerTextAnimation}
        animate={controls}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
        className="footer__container"
      >
        <div className="footer__container__info">
          <h3>Nencia</h3>
          <p>
            <strong>Phone:</strong> 09025977376 <br />
            <strong>Email:</strong>  <a href="mailto:care@nencia.ng">care@nencia.ng</a>
            <br />
          </p>
        </div>
        <div className="footer__container__links">
          <h4>Useful Links</h4>
          <ul className="footer__container__links__unordered">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
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
              <Link to="/terms">Terms and Conditions </Link>
            </li>
            <li>
              {" "}
              <Link to="/privacy">Privacy policy</Link>
            </li>
          </ul>
        </div>
        <div className="footer__container__social">
          <h4>Follow us</h4>
          <div className="footer__container__social__media">
            <Link>
              <FaTwitter />
            </Link>
            <Link>
              <FaFacebookF />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
            <Link>
              <FaSkype />
            </Link>
            <Link>
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={element}
        variants={footerTextAnimation}
        animate={controls}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
        className="footer__copyright"
      >
        Copyright &copy; 2022{" "}
        <strong>
          <span className="mx-4">Nencia</span>
        </strong>
        All Rights Reserved
      </motion.div>
    </div>
  );
};

export default Footer;
