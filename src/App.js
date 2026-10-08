import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/site/Navbar';
import SiteFooter from './components/site/SiteFooter';
import { ScrollToTop } from './components/layout/RouteEffects';
import ErrorBoundary from './components/layout/ErrorBoundary';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import OurStoryPage from './pages/OurStoryPage';
import ContactPage from './pages/ContactPage';

import { Analytics } from '@vercel/analytics/react';

// Loaded only when visited, so the 3D library stays off every other page.
const SimulatorPage = lazy(() => import('./pages/SimulatorPage'));

// If a page crashes, show a message in its place and keep the nav and footer
// working. Resets when you go to another page.
function PageBoundary({ children }) {
  const { pathname } = useLocation();
  return (
    <ErrorBoundary
      key={pathname}
      fallback={
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-5 text-center">
          <p className="m-0 text-lg font-semibold text-white">Something went wrong loading this page.</p>
          <Link to="/" className="font-semibold text-brand hover:text-brand-300">
            Back to the home page
          </Link>
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-ink">
        <Navbar />
        <Analytics />
        <PageBoundary>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/our-story" element={<OurStoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Tint simulator */}
            <Route
              path="/simulator"
              element={
                <Suspense fallback={<div className="min-h-[60vh]" />}>
                  <SimulatorPage />
                </Suspense>
              }
            />
            {/* Earlier page addresses, kept working for existing links */}
            <Route path="/betasim" element={<Navigate to="/simulator" replace />} />
            <Route path="/films" element={<Navigate to="/services" replace />} />
            <Route path="/work" element={<Navigate to="/gallery" replace />} />
            <Route path="/about" element={<Navigate to="/our-story" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </PageBoundary>
        <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
