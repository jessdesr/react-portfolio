import React, { useState } from 'react';
import { ReactComponent as Logo } from './assets/logo.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="topbar">
      <div className="topbar__content">
        {/* <h2>Projects</h2> */}
        <Logo className="hexagon" />
        <div className="menu-wrapper">
          <div className={`hamburger-menu ${isOpen ? 'animate' : ''}`} onClick={() => {setIsOpen(!isOpen)}}></div>
        </div>
        {/* <h2>Contact</h2> */}
      </div>
    </nav>
  )
}

export default Navbar;