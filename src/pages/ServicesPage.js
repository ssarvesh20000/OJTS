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
    <>
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
    </>
  );
}

export default ServicesPage;
