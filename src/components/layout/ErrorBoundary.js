import React from 'react';

/**
 * Catches a crash in the part of the page it wraps and shows `fallback`
 * there instead, so one broken section can't blank the whole site.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }

  render() {
    return this.state.failed ? this.props.fallback ?? null : this.props.children;
  }
}

export default ErrorBoundary;
