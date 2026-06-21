import React from 'react';
import ReactDOM from 'react-dom/client';
import { definePlatformApp } from '@openmf/core/configurable-app';
import { CustomerApp } from './CustomerApp';
import './app.css';

const platformApp = definePlatformApp({
  id: 'customer',
  name: 'Customer App',
  tagName: 'micro-customer-app',
  framework: 'react',
  rendering: ['csr'],
  mcp: true,
  mount(host) {
    const root = ReactDOM.createRoot(host);
    root.render(<CustomerApp />);
    return () => root.unmount();
  }
});

export const MicroCustomerApp = platformApp.customElementClass;
