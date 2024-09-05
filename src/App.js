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
          <Route path="/" element={
            <div>
              <Home />
              <Services />
              <SmallGallery />
              <Quote />
              <ContactForm />
            </div>
          } />
          <Route path="/gallery" element={<Gallery />} /> {/* Main Gallery Page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <section id="home">
      <h2>OJ TINT STUDIO</h2>
      <p>
        OJ Tint Studio has been providing the best Automotive Window Tinting services 
        to North San Jose, California, and surrounding areas since 2017. Fair prices, 
        superior quality, and exceptional customer service are guaranteed when you work with us.
      </p>
      <h3>.</h3>
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
