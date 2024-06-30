import React from 'react'
import './footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
function footer ()  {
  return (
    <footer>
      <a href='#' className='footer__logo'>FRSG</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#ideology'>ideology</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#Contact'>Contact</a></li>
        </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookSquare /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://twitter.com"><FaTwitter /></a>

      </div>

<div className="footer__copyright">
  <small>&copy; 2022 FRSG. All rights reserved.</small>
</div>
      </footer>

      
  )
}

export default footer