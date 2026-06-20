import { createApp, type App as VueAppInstance } from 'vue';
import { defineMicroAppElement } from '@openmf/core/client';
import VueCommerceApp from './VueCommerceApp.vue';
import './app.css';

const MicroVueCommerceApp = defineMicroAppElement('micro-vue-commerce-app', {
  mount(host) {
    const app: VueAppInstance = createApp(VueCommerceApp);
    app.mount(host);

    return () => app.unmount();
  },
});

export { MicroVueCommerceApp };
