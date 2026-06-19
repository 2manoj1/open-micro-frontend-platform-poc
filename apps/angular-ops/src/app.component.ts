import { Component, signal } from '@angular/core';
import { emitMicroAppEvent } from '@micro-frontend/platform-sdk/client';

interface OperationSignal {
  label: string;
  value: string;
  tone: string;
}

@Component({
  selector: 'angular-ops-root',
  standalone: true,
  template: `
    <section class="micro-app-container">
      <header class="micro-app-header">
        <span>Angular Operations</span>
        <h1>Operations Control</h1>
        <p>Angular 22 runtime island for incidents, workflows, and platform execution.</p>
      </header>

      <div class="ops-grid">
        @for (signal of signals; track signal.label) {
          <article>
            <span>{{ signal.label }}</span>
            <strong>{{ signal.value }}</strong>
            <small>{{ signal.tone }}</small>
          </article>
        }
      </div>

      <div class="ops-panel">
        <div>
          <span>Workflow channel</span>
          <strong>{{ activeWorkflow() }}</strong>
          <p>Angular app publishes workflow updates through the platform event bus.</p>
        </div>
        <button type="button" (click)="publishWorkflow()">Publish workflow</button>
      </div>
    </section>
  `,
})
export class AppComponent {
  protected readonly signals: OperationSignal[] = [
    { label: 'Open incidents', value: '4', tone: '2 urgent' },
    { label: 'Automations', value: '18', tone: 'healthy' },
    { label: 'SLA', value: '99.91%', tone: 'rolling 30d' },
  ];

  protected readonly activeWorkflow = signal('ops.workflow.remediate');

  protected publishWorkflow(): void {
    emitMicroAppEvent('ops:workflow-published', 'angular-ops', {
      workflow: this.activeWorkflow(),
      priority: 'high',
    });
  }
}
