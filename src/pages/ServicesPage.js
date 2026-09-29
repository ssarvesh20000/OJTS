import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PageHeader from '../components/ui/PageHeader';
import Button from '../components/ui/Button';
import FilmTiers from '../components/site/FilmTiers';
import Benefits from '../components/site/Benefits';
import { usePageTitle } from '../components/layout/RouteEffects';

function ServicesPage() {
  usePageTitle('Services');
  return (
    // On desktop the page fills the screen below the nav, so the footer only
    // appears once you scroll.
    <div className="flex flex-col lg:min-h-[calc(100svh-5rem)]">
      <PageHeader
        compact
        eyebrow="Premium XPEL Window Films"
        title="Choose the perfect film for your vehicle"
        action={
          <Button to="/contact" variant="primary" size="md">
            Get a Quote for Your Vehicle <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        }
      >
        As an authorized XPEL dealer, we install three tiers of film, each backed by the
        manufacturer&rsquo;s warranty and our own lifetime warranty.
      </PageHeader>
      <FilmTiers />
      <Benefits />
    </div>
  );
}

export default ServicesPage;
