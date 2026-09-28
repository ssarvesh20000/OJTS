import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'OJ Tint Studio';

/**
 * Scrolls to the top when moving to a new page. Links with a #hash (e.g.
 * /#reviews) are left alone so HashLink can scroll to that section.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

/** Sets the browser tab title, e.g. "XPEL Films | OJ Tint Studio". */
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Window Tinting in San Jose`;
  }, [title]);
}
