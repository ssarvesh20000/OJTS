import React from 'react';
import Contact from '../components/site/Contact';
import { usePageTitle } from '../components/layout/RouteEffects';

function ContactPage() {
  usePageTitle('Get a Quote');
  return <Contact />;
}

export default ContactPage;
