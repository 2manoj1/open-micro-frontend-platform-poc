import { useEffect, useMemo, useState } from 'react';

interface Customer {
  id: string;
  name: string;
  segment: 'Enterprise' | 'Growth' | 'Startup';
  health: number;
  mrr: number;
  owner: string;
}

const customers: Customer[] = [
  { id: 'CUS-1042', name: 'Northstar Retail', segment: 'Enterprise', health: 94, mrr: 18400, owner: 'Aarav' },
  { id: 'CUS-1188', name: 'Nimbus Health', segment: 'Growth', health: 82, mrr: 7200, owner: 'Maya' },
  { id: 'CUS-1201', name: 'Orbit Labs', segment: 'Startup', health: 68, mrr: 2300, owner: 'Ishan' },
];

export function CustomerApp() {
  const [selectedSegment, setSelectedSegment] = useState<Customer['segment'] | 'All'>('All');

  const visibleCustomers = useMemo(
    () => customers.filter((customer) => selectedSegment === 'All' || customer.segment === selectedSegment),
    [selectedSegment]
  );

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('platform-event', {
      detail: {
        type: 'app:loaded',
        source: 'customer',
        payload: { count: customers.length },
        timestamp: Date.now(),
      },
    }));
  }, []);

  return (
    <section className="micro-app-container">
      <header className="micro-app-header">
        <span>CRM</span>
        <h1>Customer Operations</h1>
        <p>Account health, ownership, and lifecycle visibility.</p>
      </header>

      <div className="toolbar">
        {(['All', 'Enterprise', 'Growth', 'Startup'] as const).map((segment) => (
          <button
            className={selectedSegment === segment ? 'chip active' : 'chip'}
            key={segment}
            onClick={() => setSelectedSegment(segment)}
          >
            {segment}
          </button>
        ))}
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total MRR</div>
          <div className="stat-value">${visibleCustomers.reduce((sum, customer) => sum + customer.mrr, 0).toLocaleString()}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Avg Health</div>
          <div className="stat-value">{Math.round(visibleCustomers.reduce((sum, customer) => sum + customer.health, 0) / visibleCustomers.length)}%</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Accounts</div>
          <div className="stat-value">{visibleCustomers.length}</div>
        </div>
      </div>

      <div className="list-section">
        {visibleCustomers.map((customer) => (
          <article className="row-card" key={customer.id}>
            <div>
              <strong>{customer.name}</strong>
              <span>{customer.id} · {customer.segment} · Owner {customer.owner}</span>
            </div>
            <div className="health">
              <span>{customer.health}%</span>
              <div><i style={{ width: `${customer.health}%` }} /></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
