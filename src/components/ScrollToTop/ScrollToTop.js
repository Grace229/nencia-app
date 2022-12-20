import React, { useState } from "react";
import "./ScrollToTop.css";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });
  return (
    <div className="ScrollToTop">
      <a href="#" className={`${visible ? "block" : "none"} ScrollToTop`}>
        <FaChevronUp className="ScrollToTopIcon"/>
      </a>
    </div>
  );
};

export default ScrollToTop;
