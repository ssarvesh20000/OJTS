import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Services from './components/Services';
import SmallGallery from './components/SmallGallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Quote from './components/Quote';
import Gallery from './components/Gallery';
import ContactIcons from './components/ContactIcons';
import './App.css';

import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Analytics />
        <Routes>
          <Route 
            path="/" 
            element={
              <div>
                <Home />
                <SmallGallery />
                <Services />
                <Quote />
                <ContactForm />
              </div>
            } 
          />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
        <ContactIcons />
      </div>
    </Router>
  );
}

function Home() {
  const [opacity, setOpacity] = React.useState(1);
  const [isLargeScreen, setIsLargeScreen] = React.useState(window.innerWidth > 768);

  React.useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = 400;

      if (scrollY >= fadeStart && scrollY <= fadeEnd) {
        setOpacity(1 - scrollY / fadeEnd);
      } else if (scrollY > fadeEnd) {
        setOpacity(0);
      } else {
        setOpacity(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const homeStyle = {
    minHeight: '100vh', // Allows the section to expand if content is larger than the viewport
    position: 'relative',
    textAlign: 'center',
    //backgroundImage: `url('https://cdn.pixabay.com/photo/2016/11/23/17/16/automobile-1853893_1280.jpg')`,
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url('https://cdn.pixabay.com/photo/2016/11/23/17/16/automobile-1853893_1280.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    width: '100vw',
    maxWidth: '100%',
    overflowX: 'hidden',
    overflowY: 'hidden',
    opacity: opacity,
    transition: 'opacity 0.5s ease-out',
  };
/*
  const titleStyle = {
    fontSize: '102.5px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
    position: 'relative',
    zIndex: 2,
    animation: 'glow 3s infinite',
    letterSpacing: '-1.6px',
    fontFamily: "'Playfair Display', serif"
  };
*/
//NEW TITLE STYLE
const titleStyle = {
  fontSize: '102.5px',
  textAlign: 'center',
  fontWeight: 'bold',
  color: '#00aaff', // Changed to blue color
  position: 'relative',
  zIndex: 2,
  letterSpacing: '-1.6px',
  fontFamily: "'Playfair Display', serif"
};

  const landingParaStyle = {
    fontSize: '28px', //28px
    fontFamily: 'Merriweather, serif',  //"'Dancing Script', cursive"       'Merriweather, serif'
    textAlign: 'center',
    color: '#ffffff',
    lineHeight: '1.5',
    maxWidth: '750px',
    margin: '0 auto',
    opacity: 0,
    animation: 'fadeInFromDarkness 10s ease-out forwards',
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)',
    transform: 'scale(1.05)',
    transition: 'transform 0.5s ease',
  };

  const glowAnimation = `
    @keyframes glow {
      0% {
        text-shadow: 0 0 10px #00aaff, 0 0 20px #00aaff, 0 0 30px #00aaff, 0 0 40px #00aaff;
      }
      50% {
        text-shadow: 0 0 20px #0088cc, 0 0 30px #0088cc, 0 0 40px #0088cc, 0 0 50px #0088cc;
      }
      100% {
        text-shadow: 0 0 10px #00aaff, 0 0 20px #00aaff, 0 0 30px #00aaff, 0 0 40px #00aaff;
      }
    }

    @keyframes fadeInFromDarkness {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `;

  return (
    <section id="home" style={homeStyle}>
      {isLargeScreen && <div style={{ height: '40px' }}></div>}
      {isLargeScreen && <div style={{ height: '40px' }}></div>}
      {isLargeScreen && <div style={{ height: '20px' }}></div>}
      <style>{glowAnimation}</style>
      <h2 style={titleStyle}>OJ TINT STUDIO</h2>
      {isLargeScreen && <div style={{ height: '10px' }}></div>}
      {isLargeScreen && <div style={{ height: '50px' }}></div>}
      <p className="landing-para" style={landingParaStyle}>
        Since 2019, OJ Tint Studio has been providing top-quality automotive window tinting in &nbsp;
        <a
          href="https://www.google.com/maps/place/1580+Oakland+Rd,+San+Jose,+CA+95131"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#0088cc', textDecoration: 'underline' }}
        >
          San Jose, CA
        </a>
        . We offer fair pricing and exceptional service, with a focus on personalized care and competitive rates for everyone in the Bay Area.
      </p>
    </section>
  );
}

export default App;