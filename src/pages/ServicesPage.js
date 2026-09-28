import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import FilmTiers from '../components/site/FilmTiers';
import Benefits from '../components/site/Benefits';
import { usePageTitle } from '../components/layout/RouteEffects';

function ServicesPage() {
  usePageTitle('Services');
  return (
    <>
      <PageHeader eyebrow="Premium XPEL Window Films" title="Choose the perfect film for your vehicle">
        As an authorized XPEL dealer, we install three tiers of film, each backed by the
        manufacturer&rsquo;s warranty and our own lifetime warranty.
      </PageHeader>
      <FilmTiers />
      <Benefits />
    </>
  );
}

export default ServicesPage;
