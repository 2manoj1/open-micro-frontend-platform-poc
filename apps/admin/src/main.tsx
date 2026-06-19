import React from 'react';
import ReactDOM from 'react-dom/client';
import { defineMicroAppElement } from '@micro-frontend/platform-sdk/client';
import { AdminApp } from './AdminApp';
import './app.css';

const MicroAdminApp = defineMicroAppElement('micro-admin-app', {
  mount(host) {
    const root = ReactDOM.createRoot(host);
    root.render(<AdminApp />);
    return () => root.unmount();
  },
});

export { MicroAdminApp };
