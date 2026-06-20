import React from 'react';
import ReactDOM from 'react-dom/client';
import { defineMicroAppElement } from '@openmf/core/client';
import { BillingApp } from './BillingApp';
import './app.css';

const MicroBillingApp = defineMicroAppElement('micro-billing-app', {
  mount(host) {
    const root = ReactDOM.createRoot(host);
    root.render(<BillingApp />);
    return () => root.unmount();
  },
});

export { MicroBillingApp };
