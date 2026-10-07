import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Section from '../layout/Section';
import SectionHeading from '../ui/SectionHeading';
import { CONTACT } from './contactInfo';

// Quote requests go straight into the shop's TintWiz CRM through its hosted
// web form. To change the form's fields, edit it in TintWiz, not here.
const TINTWIZ_FORM_URL = 'https://app.tintwiz.com/web/ce/n6qxtgoykg77u0g1xvnzhyllk9bimwgq';

function Contact() {
  return (
    <Section id="contact">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] lg:gap-14">
        <div>
          <SectionHeading eyebrow="Get Your Quote" title="Let's tint your ride." align="left" />
          <p className="m-0 mt-4 max-w-md text-base leading-relaxed text-fg-muted">
            Tell us about your vehicle and the look you&rsquo;re after. We&rsquo;ll get back to you with
            film options and pricing.
          </p>
          <ul className="m-0 mt-8 list-none space-y-4 p-0 text-sm">
            <li>
              <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/85 hover:text-brand">
                <FontAwesomeIcon icon={faLocationDot} className="w-5 text-brand" />
                {CONTACT.address}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-white/85 hover:text-brand">
                <FontAwesomeIcon icon={faEnvelope} className="w-5 text-brand" />
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={CONTACT.phoneHref} className="flex items-center gap-3 text-white/85 hover:text-brand">
                <FontAwesomeIcon icon={faPhone} className="w-5 text-brand" />
                {CONTACT.phone}
              </a>
            </li>
          </ul>
        </div>

        {/* Card around the TintWiz form, matching our other cards. The form's
            dark styling lives in TintWiz (Form Settings > Add custom CSS to
            form). Heights fit the form's content (taller on phones, where its
            fields stack). */}
        <div className="rounded-card border border-white/10 bg-ink-700 p-2 shadow-card sm:p-4">
          <iframe
            title="Request a quote from OJ Tint Studio"
            src={TINTWIZ_FORM_URL}
            className="block h-[1100px] w-full rounded-[10px] border-0 bg-ink-700 sm:h-[800px] lg:h-[680px]"
          />
        </div>
      </div>
    </Section>
  );
}

export default Contact;
