import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(window.pageYOffset);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = scrollPos > currentScrollPos;
      setScrollPos(currentScrollPos);
      setIsVisible(visible);
      setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav className={`navbar ${isVisible ? "" : "hidden"}`}>
      <div className="navbar__content">
        <Logo className="hexagon" />
        <div className="menu-wrapper">
          <div
            className={`hamburger-menu ${isOpen ? "animate" : ""}`}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          ></div>
        </div>
      </div>
      <ul className={`navbar__dropdown ${isOpen ? "open" : ""}`}>
        <li className={`navbar__dropdown__items`}>Home</li>
        <li className={`navbar__dropdown__items`}>Projects</li>
        <li className={`navbar__dropdown__items`}>Contact</li>
        <li className={`navbar__dropdown__items`}>Resume</li>
      </ul>
    </nav>
  );
}

export default Navbar;
