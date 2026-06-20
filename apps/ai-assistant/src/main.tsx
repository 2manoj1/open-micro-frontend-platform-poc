import React from 'react';
import ReactDOM from 'react-dom/client';
import { defineMicroAppElement } from '@openmf/core/client';
import { AiAssistantApp } from './AiAssistantApp';
import './app.css';

const MicroAiAssistantApp = defineMicroAppElement('micro-ai-assistant-app', {
  mount(host, context) {
    const root = ReactDOM.createRoot(host);
    root.render(<AiAssistantApp apiBaseUrl={context.shellOrigin} />);
    return () => root.unmount();
  },
});

export { MicroAiAssistantApp };
