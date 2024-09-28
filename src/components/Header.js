import React, { useState } from 'react';
import logo from '../assets/logo.webp';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons';
import './nav-and-icon.css';
function Header() {


  return (
    <header style={headerStyle}>
      <img src={logo} alt="OJ TINT STUDIO" style={logoStyle} />
      <nav id="nav" style={navStyle}>
        
      <HashLink to="/#" className='link'>Home</HashLink>
      <HashLink to="/#small-gallery" className='link'>Gallery</HashLink>
      <HashLink to="/#services"  className='link'>Services</HashLink>
      <HashLink to="/#quote" className='link'>Quote</HashLink>
      <HashLink to="/#contact" className='link'>Contact</HashLink>
      </nav>

      <div style={socialIconsStyle}>
        <a
          href="https://www.yelp.com/biz/oj-tint-studio-san-jose-2"
          target="_blank"
          rel="noopener noreferrer"
          className='icon'
          id="yelp"
        ><FontAwesomeIcon icon={faYelp}/></a>

        <a
          href="https://www.instagram.com/ojtintstudio/"
          target="_blank"
          rel="noopener noreferrer"
          className='icon'
          id="ig"
        ><FontAwesomeIcon icon={faInstagram} /></a>

        <a
          href="https://www.facebook.com/ojtintstudio/"
          target="_blank"
          rel="noopener noreferrer"
          className='icon'
          id="fb"
        ><FontAwesomeIcon icon={faFacebook} /></a></div>
    </header>
  );
}

const headerStyle = {
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'black',
  color: '#fff',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  height: '45px',
};

const logoStyle = {
  height: '85px', // Adjust the height to fit your header
  width: 'auto',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', // Space between the links
  marginBottom: '0px',
};


const socialIconsStyle = {
  display: 'flex',
  gap: '20px', // Space between icons
};




export default Header;