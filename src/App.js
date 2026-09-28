import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/site/Navbar';
import SiteFooter from './components/site/SiteFooter';
import { ScrollToTop } from './components/layout/RouteEffects';
import HomePage from './pages/HomePage';
import FilmsPage from './pages/FilmsPage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-ink">
        <Navbar />
        <Analytics />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/films" element={<FilmsPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Old gallery URL, kept working for existing links */}
          <Route path="/gallery" element={<Navigate to="/work" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
