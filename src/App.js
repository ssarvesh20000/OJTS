import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/site/Navbar';
import SiteFooter from './components/site/SiteFooter';
import { ScrollToTop } from './components/layout/RouteEffects';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import OurStoryPage from './pages/OurStoryPage';
import ContactPage from './pages/ContactPage';

import { Analytics } from '@vercel/analytics/react';

// Loaded only when visited, so the 3D library stays off every other page.
const SimulatorPage = lazy(() => import('./pages/SimulatorPage'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-ink">
        <Navbar />
        <Analytics />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Beta: not linked from the nav yet */}
          <Route
            path="/simulator"
            element={
              <Suspense fallback={<div className="min-h-[60vh]" />}>
                <SimulatorPage />
              </Suspense>
            }
          />
          {/* Earlier page addresses, kept working for existing links */}
          <Route path="/films" element={<Navigate to="/services" replace />} />
          <Route path="/work" element={<Navigate to="/gallery" replace />} />
          <Route path="/about" element={<Navigate to="/our-story" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
