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

  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };

  return (  
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <img src={logo_image} alt="logo" width="40" height="40" className="logo__img" />
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
      </nav>
    </div>
  );
};

export default Navbar;
