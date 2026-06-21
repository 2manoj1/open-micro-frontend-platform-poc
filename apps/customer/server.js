import { startPlatformAppServer } from '@openmf/core/configurable-app-server';
import { z } from 'zod';

const serverConfig = {
  id: 'customer',
  name: 'Customer App',
  framework: 'react',
  tagName: 'micro-customer-app',
  mcp: true,
  
  tools: {
    'customer.getProfile': {
      description: 'Fetch profile details for a given customer ID.',
      inputSchema: {
        customerId: z.string().describe('Unique identifier for the customer.')
      },
      execute: async (args) => {
        const id = args.customerId ?? 'CUST-001';
        return {
          customerId: id,
          name: 'Jane Doe',
          email: 'jane.doe@example.com',
          status: 'Active',
          segment: 'Enterprise',
          signupDate: '2025-01-15',
          healthScore: 92,
          openCases: 0
        };
      }
    }
  },

  resources: {
    'customer.timeline': {
      description: 'Activity timeline for a customer.',
      mimeType: 'application/json',
      read: async (uri) => {
        return [
          { date: '2026-06-20', event: 'Invoice Paid', amount: '$5,000' },
          { date: '2026-06-18', event: 'Support Case Opened', id: 'CASE-442' },
          { date: '2026-06-18', event: 'Support Case Closed', id: 'CASE-442' }
        ];
      }
    }
  }
};

startPlatformAppServer(serverConfig, {
  port: 8788,
  staticDir: './dist'
});
