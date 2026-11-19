import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Section from '../layout/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { CONTACT } from './contactInfo';

// Field names must match the EmailJS template variables.
const FIELDS = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'number', label: 'Phone Number', type: 'tel', autoComplete: 'tel' },
  { name: 'make', label: 'Vehicle Make, Model & Year', type: 'text' },
];

const inputClasses =
  'w-full rounded-lg border border-white/10 bg-ink-800 px-4 py-3 text-sm text-white placeholder:text-fg-subtle outline-none transition-colors focus:border-brand';

function normalizePhone(raw) {
  let digits = raw.replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('1')) digits = digits.slice(1);
  return digits;
}

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null); // { message, isError }
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const target = e.target;

    if (normalizePhone(target.number.value.trim()).length !== 10) {
      setStatus({ message: 'Phone number must be a valid 10-digit number.', isError: true });
      return;
    }

    setSending(true);
    emailjs
      .sendForm('service_9v8bv8k', 'template_xp8se1b', form.current, 'iEPd4ZUZDvveGMX7H')
      .then(
        () => {
          setStatus({
            message: `Thanks ${target.name.value}! We received your request (${target.make.value}) and will reach out soon.`,
            isError: false,
          });
          target.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus({ message: 'Message submission unsuccessful. Please call or email us instead.', isError: true });
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <Section id="contact">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
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

        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid gap-5 rounded-card border border-white/10 bg-ink-700 p-6 shadow-card sm:grid-cols-2 sm:p-8"
        >
          {FIELDS.map((f) => (
            <label key={f.name} className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-wide text-white/80">
              {f.label}
              <input type={f.type} name={f.name} autoComplete={f.autoComplete} required className={inputClasses} />
            </label>
          ))}
          <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-wide text-white/80 sm:col-span-2">
            Message
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Which windows, shade, and film are you interested in?"
              className={`${inputClasses} resize-y normal-case tracking-normal`}
            />
          </label>

          {status && (
            <p
              role="status"
              className={`m-0 text-sm sm:col-span-2 ${status.isError ? 'text-red-400' : 'text-emerald-400'}`}
            >
              {status.message}
            </p>
          )}

          <div className="sm:col-span-2">
            <Button type="submit" variant="primary" size="lg" className="w-full disabled:opacity-60" disabled={sending}>
              {sending ? 'Sending…' : 'Request My Quote'} <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
}

export default Contact;
