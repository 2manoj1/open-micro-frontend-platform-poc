import { useState } from 'react';

const flags = [
  { key: 'rsc-streaming-shell', label: 'RSC streaming shell', enabled: true, audience: '100%' },
  { key: 'ai-assistant-beta', label: 'AI assistant beta', enabled: true, audience: '25%' },
  { key: 'billing-autopay', label: 'Billing autopay flow', enabled: false, audience: '0%' },
];

export function AdminApp() {
  const [items, setItems] = useState(flags);

  function toggleFlag(key: string) {
    setItems((current) =>
      current.map((item) => item.key === key ? { ...item, enabled: !item.enabled, audience: item.enabled ? '0%' : '25%' } : item)
    );
  }

  return (
    <section className="micro-app-container">
      <header className="micro-app-header">
        <span>Governance</span>
        <h1>Platform Admin</h1>
        <p>Tenant controls, rollout policy, and operational audit signals.</p>
      </header>

      <div className="summary-grid">
        <div>
          <strong>12</strong>
          <span>Active tenants</span>
        </div>
        <div>
          <strong>{items.filter((flag) => flag.enabled).length}</strong>
          <span>Enabled flags</span>
        </div>
        <div>
          <strong>99.98%</strong>
          <span>Shell availability</span>
        </div>
      </div>

      <div className="flags">
        {items.map((flag) => (
          <article key={flag.key}>
            <div>
              <strong>{flag.label}</strong>
              <span>{flag.key} · Audience {flag.audience}</span>
            </div>
            <button className={flag.enabled ? 'toggle on' : 'toggle'} onClick={() => toggleFlag(flag.key)} aria-pressed={flag.enabled}>
              <i />
            </button>
          </article>
        ))}
      </div>

      <div className="audit">
        <h2>Recent Audit Events</h2>
        <p>Feature flag updated by platform.admin@example.com</p>
        <p>Tenant policy synced to app registry</p>
        <p>Permissions cache refreshed successfully</p>
      </div>
    </section>
  );
}
