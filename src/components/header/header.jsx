import React from 'react';
import './header.css';
import CTA from './CTA';
import Me from '../../assets/me.png';
import HeaderSocial from './headerSocials';

function Header() {
  return (
    <header>
      <div className="container header__container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h5 className='custom-text-light'>Welcome!</h5>
            <h1 className='custom-heading-1'>FRSG WEBSITE</h1>
            <h5 className="custom-text-light">
              Comment about FRSG to explain
            </h5>
          </div>
          <br></br>
          <div className="col-lg-3">
            <CTA />
          </div>
          <div className="col-lg-3 ">
          <HeaderSocial style={{ color: 'green' }}/>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            {/* Use Bootstrap's text-center class to center the image */}
            <div className="me">
              <img src={Me} alt="Logo" />
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-12">
            <a href="#contact" className="scroll__down">
              Scroll Down
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
