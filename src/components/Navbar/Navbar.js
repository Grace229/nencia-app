import React, { useState } from "react";
import "./Navbar.scss";
import logo_image from "../../assets/img/apple-touch-icon.png";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaBars,
} from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { useScroll } from "../../useScroll";
import { motion } from "framer-motion";
import { navAnimation } from "../../animation";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT US",
    to: "/about",
  },
  {
    label: "SERVICES",
    to: "/services",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [element, controls] = useScroll();

  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <motion.nav
        ref={element}
        variants={navAnimation}
        transition={{ delay: 0.1 }}
        animate={controls}
        className="navbar"
      >
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <img
              src={logo_image}
              alt="logo"
              width="40"
              height="40"
              className="logo__img"
            />
            <h1>Nencia</h1>
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, index) => (
            <li key={index} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
                onClick={handleToggle}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="header-social-links">
          <FaTwitter />
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
        </div>
        <div className="nav-icon" onClick={handleToggle}>
          {toggleIcon ? <HiX size={25} /> : <FaBars size={25} />}
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
