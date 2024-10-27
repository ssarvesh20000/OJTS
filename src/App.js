import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Services from './components/Services';
import SmallGallery from './components/SmallGallery'; // Small gallery for the homepage
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Quote from './components/Quote';
import Gallery from './components/Gallery'; // Separate Gallery Page
import ContactIcons from './components/ContactIcons'; // Import the ContactIcons component


import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <div>
                <Home /> {/* Updated Home component with background image and scroll fade */}
                <SmallGallery />
                <Services />
                <Quote />
                <ContactForm />
              </div>
            } 
          />
          <Route path="/gallery" element={<Gallery />} /> {/* Main Gallery Page */}
        </Routes>
        <Footer />
        <ContactIcons /> {/* Add phone and email icons here */}
      </div>
    </Router>
  );
}

function Home() {
  const [opacity, setOpacity] = React.useState(1); // Initial opacity for the car image

  // Hook to monitor scroll and update opacity
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0; // Where the fade should start
      const fadeEnd = 400; // Where the fade should end (adjust to your preference)

      // Calculate opacity based on scroll position
      if (scrollY >= fadeStart && scrollY <= fadeEnd) {
        setOpacity(1 - scrollY / fadeEnd); // Adjust opacity from 1 to 0
      } else if (scrollY > fadeEnd) {
        setOpacity(0); // Fully faded
      } else {
        setOpacity(1); // Full opacity if at top
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Inline styles for the home section and background image
  const homeStyle = {
    height: '100vh', // Full view height for the first section
    position: 'relative',
    textAlign: 'center',
    backgroundImage: `url('https://cdn.pixabay.com/photo/2016/11/23/17/16/automobile-1853893_1280.jpg')`, // Replace with your image path
    backgroundSize: 'cover', // Ensures the image covers the entire width and height
    backgroundPosition: 'center center', // Center the image vertically and horizontally
    backgroundRepeat: 'no-repeat', // Ensures the image is not repeated
    backgroundAttachment: 'fixed', // Keeps the image fixed during scroll
    width: '100vw', // Ensure the image takes up the full width of the page
    opacity: opacity, // Apply the dynamic opacity
    transition: 'opacity 0.5s ease-out', // Smooth transition
  };

  const titleStyle = {
    fontSize: '102.5px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
    position: 'relative',
    zIndex: 2, // Ensure the title appears on top of the image
    animation: 'glow 3s infinite', // Combine animations
    letterSpacing: '-1.6px',
    fontFamily: "'Playfair Display', serif"
  };

const landingParaStyle = {
  fontSize: '28px',
  fontFamily: 'Merriweather, serif',
  textAlign: 'center',
  color: '#ffffff',  // A brighter color to make it pop immediately
  lineHeight: '1.5',  // Slightly increased for better readability
  maxWidth: '750px',
  margin: '0 auto',
  opacity: 0, // Start invisible for the fade-in effect
  animation: 'fadeInFromDarkness 10s ease-out forwards', // Fade-in from darkness for paragraph text
  textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)', // Text shadow for depth and more "pop"
  transform: 'scale(1.05)',  // Slightly larger text for emphasis
  transition: 'transform 0.5s ease',  // Smooth transition for any changes
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
        opacity: 0; // Start fully transparent (hidden in the darkness)
      }
      100% {
        opacity: 1; // End fully visible
      }
    }
  `;

  return (
    <section id="home" style={homeStyle}>
      <div style={{ height: '40px' }}></div> {/* This adds the empty space */}
      <div style={{ height: '40px' }}></div> {/* This adds the empty space */}
      <div style={{ height: '20px' }}></div> {/* This adds the empty space */}
      <style>{glowAnimation}</style>
      <h2 style={titleStyle}>OJ TINT STUDIO</h2>
      <div style={{ height: '10px' }}></div> {/* This adds the empty space */}
      <div style={{ height: '50px' }}></div> {/* This adds the empty space */}
      <p style={landingParaStyle}>
      Since 2019, OJ Tint Studio has been providing top-quality automotive window tinting in&nbsp;  
      <a 
        href="https://www.google.com/maps/place/1580+Oakland+Rd,+San+Jose,+CA+95131/@37.3801141,-121.8968122,17z/data=!3m1!4b1!4m6!3m5!1s0x808fcc0c3be581a5:0xe5961794fa5200b2!8m2!3d37.3801141!4d-121.8942373!16s%2Fg%2F11bw3wyxq3?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: '#0088cc', textDecoration: 'underline' }}
      >
      San Jose, CA
      </a>. 
      We offer fair pricing and exceptional service, with a focus on personalized care and competitive rates for everyone in the Bay Area.
      </p>

    </section>
  );
}

export default App;
