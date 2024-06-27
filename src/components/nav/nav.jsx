import React, { useState } from 'react';
import './nav.css';
import { FaHome, FaRegUser, FaBookOpen } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { TiMessages } from "react-icons/ti";

function Nav() {
  const [activeNav, setActiveNav] = useState('#');

  const handleNavLinkClick = (navItem) => {
    setActiveNav(navItem);
  };

  return (
    <nav>
      <a href='#' className={activeNav === '#' ? 'active' : ''} onClick={() => handleNavLinkClick('#')}><FaHome /></a>
      <a href='#about' className={activeNav === '#about' ? 'active' : ''} onClick={() => handleNavLinkClick('#about')}><FaRegUser /></a>
      <a href='#ideology' className={activeNav === '#ideology' ? 'active' : ''} onClick={() => handleNavLinkClick('#ideology')}><FaBookOpen /></a>

      <a href='#services' className={activeNav === '#services' ? 'active' : ''} onClick={() => handleNavLinkClick('#services')}><MdDesignServices /></a>
      <a href='#contact' className={activeNav === '#contact' ? 'active' : ''} onClick={() => handleNavLinkClick('#contact')}><TiMessages /></a>
    </nav>
  );
}

export default Nav;