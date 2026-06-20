import React from 'react';
import ReactDOM from 'react-dom/client';
import { defineMicroAppElement } from '@openmf/core/client';
import { AnalyticsApp } from './AnalyticsApp';
import './app.css';

const MicroAnalyticsApp = defineMicroAppElement('micro-analytics-app', {
  mount(host) {
    const root = ReactDOM.createRoot(host);
    root.render(<AnalyticsApp />);
    return () => root.unmount();
  },
});

export { MicroAnalyticsApp };
