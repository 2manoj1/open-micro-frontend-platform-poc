import { designSystemContract } from '@micro-frontend/design-system';
import { defineMicroAppElement, emitMicroAppEvent } from '@micro-frontend/platform-sdk/client';
import './app.css';

const tagName = 'micro-design-system-app';
const headerTagName = 'omf-platform-header';
const footerTagName = 'omf-platform-footer';

function readToken(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function render(host: HTMLElement): void {
  const tokens = [
    ['Brand', '--omf-color-brand'],
    ['Accent', '--omf-color-accent'],
    ['AI', '--omf-color-ai'],
    ['Surface', '--omf-color-surface'],
    ['Border', '--omf-color-border'],
  ];

  host.innerHTML = `
    <section class="ds-app">
      <header class="ds-hero">
        <span>${designSystemContract.name}</span>
        <h1>Singleton Design Contract</h1>
        <p>The shell owns the token stylesheet once. React, Vue, Angular, static, and AI-native apps consume the same CSS variables at runtime.</p>
      </header>

      <div class="ds-grid">
        ${tokens
          .map(([label, token]) => {
            const value = readToken(token);
            return `
              <article class="ds-token">
                <i style="background:${value || '#2563eb'}"></i>
                <span>${label}</span>
                <strong>${token}</strong>
                <code>${value || 'fallback'}</code>
              </article>
            `;
          })
          .join('')}
      </div>

      <div class="ds-panel">
        <div>
          <span>Contract version</span>
          <strong>${designSystemContract.version}</strong>
          <p>Enforced by registry metadata, peer dependency policy, CI checks, and shell-owned token delivery.</p>
        </div>
        <button type="button" data-action="announce">Publish design-system event</button>
      </div>
    </section>
  `;

  host.querySelector('[data-action="announce"]')?.addEventListener('click', () => {
    emitMicroAppEvent('design-system:contract-announced', 'design-system', {
      version: designSystemContract.version,
      singleton: designSystemContract.singleton,
    });
  });
}

defineMicroAppElement(tagName, {
  mount(host) {
    render(host);
    return () => host.replaceChildren();
  },
});

class OmfPlatformHeader extends HTMLElement {
  static observedAttributes = ['shell-name', 'active'];

  connectedCallback(): void {
    this.render();
  }

  attributeChangedCallback(): void {
    this.render();
  }

  private render(): void {
    const shellName = this.getAttribute('shell-name') ?? 'Open Micro Platform';
    const active = this.getAttribute('active') ?? 'composition';

    this.innerHTML = `
      <header class="omf-runtime-header">
        <a class="omf-runtime-brand" href="/dashboard" aria-label="${shellName}">
          <span>OMF</span>
          <strong>${shellName}</strong>
        </a>
        <nav aria-label="Platform navigation">
          ${[
            ['Dashboard', '/dashboard', 'dashboard'],
            ['Composition', '/dashboard/composition', 'composition'],
            ['Design System', '/dashboard/design-system', 'design-system'],
          ]
            .map(([label, href, key]) => `<a href="${href}" ${active === key ? 'aria-current="page"' : ''}>${label}</a>`)
            .join('')}
        </nav>
      </header>
    `;
  }
}

class OmfPlatformFooter extends HTMLElement {
  static observedAttributes = ['shell-name'];

  connectedCallback(): void {
    this.render();
  }

  attributeChangedCallback(): void {
    this.render();
  }

  private render(): void {
    const shellName = this.getAttribute('shell-name') ?? 'Open Micro Platform';
    this.innerHTML = `
      <footer class="omf-runtime-footer">
        <span>${shellName}</span>
        <span>Runtime-loaded design system shell chrome</span>
        <span>Tokens v${designSystemContract.version}</span>
      </footer>
    `;
  }
}

if (!customElements.get(headerTagName)) {
  customElements.define(headerTagName, OmfPlatformHeader);
}

if (!customElements.get(footerTagName)) {
  customElements.define(footerTagName, OmfPlatformFooter);
}
