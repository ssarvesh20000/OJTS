import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/site/Navbar';
import Hero from './components/site/Hero';
import TrustBar from './components/site/TrustBar';
import Gallery from './components/Gallery';

import { Analytics } from '@vercel/analytics/react';

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
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
      </div>
    </Router>
  );
}

export default App;
