import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';

function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
      <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
    </div>
  );
}

export default HeaderSocials;
