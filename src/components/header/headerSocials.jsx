
import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';

function headerSocials() {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link">
        <AiFillLinkedin className="social-icon" />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link">
        <FaGithub className="social-icon" />
      </a>
    </div>
  );
}



export default headerSocials
