import 'zone.js';
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import './app.css';

const tagName = 'micro-angular-ops-app';

async function defineAngularOpsElement() {
  if (customElements.get(tagName)) return;

  const app = await createApplication();
  const element = createCustomElement(AppComponent, { injector: app.injector });
  customElements.define(tagName, element);
}

await defineAngularOpsElement();

export { AppComponent };
