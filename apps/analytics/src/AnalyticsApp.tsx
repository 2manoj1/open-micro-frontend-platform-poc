import { useState, useEffect } from 'react';

interface Metric {
  label: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
}

export function AnalyticsApp() {
  const [metrics] = useState<Metric[]>([
    { label: 'Total Users', value: '12,543', change: 15, trend: 'up' },
    { label: 'Sessions', value: '45,230', change: 8, trend: 'up' },
    { label: 'Conversion Rate', value: '3.2%', change: -2, trend: 'down' },
    { label: 'Avg. Session Duration', value: '4m 32s', change: 12, trend: 'up' },
  ]);

  useEffect(() => {
    console.log('[AnalyticsApp] Micro app loaded');

    // Listen for platform events
    const handleEvent = (event: any) => {
      console.log('[AnalyticsApp] Event received:', event.detail);
    };

    window.addEventListener('platform-event', handleEvent);
    return () => window.removeEventListener('platform-event', handleEvent);
  }, []);

  return (
    <div className="micro-app-container">
      <div className="micro-app-header">
        <h1>📊 Analytics Dashboard</h1>
        <p>Real-time insights and performance metrics</p>
      </div>

      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <div className="metric-label">{metric.label}</div>
            <div className="metric-value">{metric.value}</div>
            <div className={`metric-change trend-${metric.trend}`}>
              <span className="trend-icon">{metric.trend === 'up' ? '↑' : metric.trend === 'down' ? '↓' : '→'}</span>
              <span>{Math.abs(metric.change)}% {metric.trend === 'neutral' ? 'stable' : metric.trend === 'up' ? 'increase' : 'decrease'}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="charts-section">
        <h2>Traffic Overview</h2>
        <div className="chart-placeholder">
          <div className="chart-mock">
            <div className="bar" style={{ height: '60%' }}></div>
            <div className="bar" style={{ height: '75%' }}></div>
            <div className="bar" style={{ height: '85%' }}></div>
            <div className="bar" style={{ height: '70%' }}></div>
            <div className="bar" style={{ height: '80%' }}></div>
            <div className="bar" style={{ height: '90%' }}></div>
            <div className="bar" style={{ height: '95%' }}></div>
          </div>
          <p className="chart-label">Last 7 days</p>
        </div>
      </div>

      <div className="events-section">
        <h2>Recent Events</h2>
        <div className="events-list">
          <div className="event-item">
            <div className="event-icon">🚀</div>
            <div className="event-content">
              <div className="event-title">New User Signup</div>
              <div className="event-time">2 minutes ago</div>
            </div>
          </div>
          <div className="event-item">
            <div className="event-icon">💰</div>
            <div className="event-content">
              <div className="event-title">Purchase Completed</div>
              <div className="event-time">15 minutes ago</div>
            </div>
          </div>
          <div className="event-item">
            <div className="event-icon">⚠️</div>
            <div className="event-content">
              <div className="event-title">High API Latency Detected</div>
              <div className="event-time">1 hour ago</div>
            </div>
          </div>
          <div className="event-item">
            <div className="event-icon">✅</div>
            <div className="event-content">
              <div className="event-title">Deployment Successful</div>
              <div className="event-time">3 hours ago</div>
            </div>
          </div>
        </div>
      </div>

      <div className="actions">
        <button className="btn btn-primary">Export Report</button>
        <button className="btn btn-secondary">View Detailed Analytics</button>
      </div>
    </div>
  );
}
