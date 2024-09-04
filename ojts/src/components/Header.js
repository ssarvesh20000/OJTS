import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>OJ TINT STUDIO</h1>
      <nav>
        <a href="#" style={navLinkStyle}>Home</a> {/* Scroll to the top of the page */}
        <a href="#services" style={navLinkStyle}>Services</a>
        <Link to="/gallery" style={navLinkStyle}>Gallery</Link> {/* Separate Gallery Page */}
        <a href="#quote" style={navLinkStyle}>Quote</a>
        <a href="#contact" style={navLinkStyle}>Contact</a>
      </nav>
    </header>
  );
}

const headerStyle = {
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#111',
  color: '#fff',
  position: 'sticky',
  top: 0,
  zIndex: 1000
};

const navLinkStyle = {
  margin: '0 10px',
  color: '#00aaff',
  textDecoration: 'none',
  fontWeight: 'bold',
  cursor: 'pointer'
};

export default Header;
