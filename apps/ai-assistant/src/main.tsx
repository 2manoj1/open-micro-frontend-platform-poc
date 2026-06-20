import React from 'react';
import ReactDOM from 'react-dom/client';
import { defineMicroAppElement } from '@openmf/core/client';
import { AiAssistantApp } from './AiAssistantApp';
import './app.css';

const MicroAiAssistantApp = defineMicroAppElement('micro-ai-assistant-app', {
  mount(host) {
    const root = ReactDOM.createRoot(host);
    root.render(<AiAssistantApp />);
    return () => root.unmount();
  },
});

export { MicroAiAssistantApp };
