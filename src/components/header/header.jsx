import React from 'react';
import './header.css';
import CTA from './CTA';
import Me from '../../assets/me.png';
// import headerSocial from './headerSocials/
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Welcome!</h5>
        <h1>FRSG WEBSITE</h1>
        <h5 className="text-light">
          Comment about FRSG to explain
        </h5>
        <CTA />
        {/* <headerSocial /> */}


        <div className="me">
          <img src={Me} alt="Logo" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
