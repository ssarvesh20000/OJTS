import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/site/Navbar';
import Hero from './components/site/Hero';
import TrustBar from './components/site/TrustBar';
import NoFaultWarranty from './components/site/NoFaultWarranty';
import FilmTiers from './components/site/FilmTiers';
import RecentWork from './components/site/RecentWork';
import Reviews from './components/site/Reviews';
import Benefits from './components/site/Benefits';
import Contact from './components/site/Contact';
import SiteFooter from './components/site/SiteFooter';
import Gallery from './components/Gallery';

import { Analytics } from '@vercel/analytics/react';

function HomePage() {
  return (
    <>
      <Hero />
      <NoFaultWarranty />
      <TrustBar />
      <FilmTiers />
      <RecentWork />
      <Reviews />
      <Benefits />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ink">
        <Navbar />
        <Analytics />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
