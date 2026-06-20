import React from 'react';
import ReactDOM from 'react-dom/client';
import { defineMicroAppElement } from '@openmf/core/client';
import { CustomerApp } from './CustomerApp';
import './app.css';

const MicroCustomerApp = defineMicroAppElement('micro-customer-app', {
  mount(host) {
    const root = ReactDOM.createRoot(host);
    root.render(<CustomerApp />);
    return () => root.unmount();
  },
});

export { MicroCustomerApp };
