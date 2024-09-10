import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Services from './components/Services';
import SmallGallery from './components/SmallGallery'; // Small gallery for the homepage
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Quote from './components/Quote';
import Gallery from './components/Gallery'; // Separate Gallery Page

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
                <Services />
                <SmallGallery />
                <Quote />
                <ContactForm />
              </div>
            } 
          />
          <Route path="/gallery" element={<Gallery />} /> {/* Main Gallery Page */}
        </Routes>
        <Footer />
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
    fontSize: '72px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
    position: 'relative',
    zIndex: 2, // Ensure the title appears on top of the image
    animation: 'glow 3s infinite',
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
  `;

  return (
    <section id="home" style={homeStyle}>
      <style>{glowAnimation}</style>
      <h2 style={titleStyle}>OJ TINT STUDIO</h2>
      <p>
        OJ Tint Studio has been providing the best Automotive Window Tinting services 
        to North San Jose, California, and surrounding areas since 2017. Fair prices, 
        superior quality, and exceptional customer service are guaranteed when you work with us.
      </p>
      <p>
        Over the years, we’ve learned that great service begins and ends with experienced 
        and friendly professionals. We believe that our team is the best in the business, 
        and have complete and total confidence in every person providing our services.
      </p>
      <p>
        OJ Tint Studio finishes each project on schedule and with the highest level of quality. 
        With a focus on personalized service, competitive rates, and customer satisfaction, 
        we’re always striving to meet and exceed expectations.
      </p>
    </section>
  );
}

export default App;
