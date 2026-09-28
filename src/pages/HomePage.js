import React from 'react';
import Hero from '../components/site/Hero';
import NoFaultWarranty from '../components/site/NoFaultWarranty';
import TrustBar from '../components/site/TrustBar';
import Reviews from '../components/site/Reviews';
import FAQ from '../components/site/FAQ';
import { usePageTitle } from '../components/layout/RouteEffects';

function HomePage() {
  usePageTitle(null);
  return (
    <>
      <Hero />
      <NoFaultWarranty />
      <TrustBar />
      <Reviews />
      <FAQ />
    </>
  );
}

export default HomePage;
