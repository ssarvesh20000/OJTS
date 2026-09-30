import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import PageHeader from '../components/ui/PageHeader';
import WorkGallery from '../components/site/WorkGallery';
import { SOCIALS } from '../components/site/contactInfo';
import { usePageTitle } from '../components/layout/RouteEffects';

const INSTAGRAM = SOCIALS.find((s) => s.label === 'Instagram').href;

function GalleryPage() {
  usePageTitle('Gallery');
  return (
    <>
      <PageHeader compact eyebrow="Gallery" title="Our recent work">
        A look at vehicles we&rsquo;ve tinted, with the shades used on each. Tap any photo to
        see it larger.{' '}
        <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand hover:text-brand-300">
          <FontAwesomeIcon icon={faInstagram} /> Explore 2000+ projects on our Instagram
        </a>
      </PageHeader>
      <WorkGallery />
    </>
  );
}

export default GalleryPage;
