import { useState, useEffect } from 'react';

interface Invoice {
  id: string;
  amount: number;
  date: string;
  status: 'paid' | 'pending' | 'overdue';
  description: string;
}

export function BillingApp() {
  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: 'INV-001',
      amount: 2500,
      date: '2024-06-01',
      status: 'paid',
      description: 'Platform Subscription - June',
    },
    {
      id: 'INV-002',
      amount: 500,
      date: '2024-06-15',
      status: 'pending',
      description: 'Additional Services',
    },
    {
      id: 'INV-003',
      amount: 1200,
      date: '2024-05-01',
      status: 'overdue',
      description: 'Platform Subscription - May',
    },
  ]);

  useEffect(() => {
    console.log('[BillingApp] Micro app loaded');

    // Listen for events from shell
    const handleEvent = (event: any) => {
      console.log('[BillingApp] Event received:', event.detail);
    };

    window.addEventListener('platform-event', handleEvent);
    return () => window.removeEventListener('platform-event', handleEvent);
  }, []);

  const totalAmount = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const paidAmount = invoices.filter((inv) => inv.status === 'paid').reduce((sum, inv) => sum + inv.amount, 0);
  const pendingAmount = invoices.filter((inv) => inv.status === 'pending').reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <div className="micro-app-container" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div className="micro-app-header">
        <h1>💳 Billing Management</h1>
        <p>Invoice and payment tracking for your account</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Invoices</div>
          <div className="stat-value">${totalAmount.toLocaleString()}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Paid</div>
          <div className="stat-value paid">${paidAmount.toLocaleString()}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Pending</div>
          <div className="stat-value pending">${pendingAmount.toLocaleString()}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Overdue</div>
          <div className="stat-value overdue">
            ${invoices
              .filter((inv) => inv.status === 'overdue')
              .reduce((sum, inv) => sum + inv.amount, 0)
              .toLocaleString()}
          </div>
        </div>
      </div>

      <div className="invoices-section">
        <h2>Recent Invoices</h2>
        <table className="invoices-table">
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td className="invoice-id">{invoice.id}</td>
                <td>{invoice.date}</td>
                <td>{invoice.description}</td>
                <td className="amount">${invoice.amount.toLocaleString()}</td>
                <td>
                  <span className={`status-badge status-${invoice.status}`}>
                    {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="actions">
        <button className="btn btn-primary">Download Invoice</button>
        <button className="btn btn-secondary">Pay Now</button>
      </div>
    </div>
  );
}
