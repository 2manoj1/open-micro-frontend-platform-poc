import React from 'react';
import ReactDOM from 'react-dom/client';
import { defineMicroAppElement } from '@openmf/core/client';
import { McpDemoApp } from './McpDemoApp';
import './app.css';

const MicroMcpDemoApp = defineMicroAppElement('micro-mcp-demo-app', {
  mount(host, context) {
    const root = ReactDOM.createRoot(host);
    root.render(<McpDemoApp apiBaseUrl={context.shellOrigin} />);
    return () => root.unmount();
  },
});

export { MicroMcpDemoApp };
