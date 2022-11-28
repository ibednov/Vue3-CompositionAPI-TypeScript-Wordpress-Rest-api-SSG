import { createApp } from 'vue';
import { createPinia } from 'pinia';

import router from './router';
import store from './store';

import { i18n } from './plugins/i18n.js';

import '@/assets/style.css';
import App from '@/components/App.vue';

const pinia = createPinia();

createApp(App).use(i18n).use(pinia).use(router).use(store).mount('#app');
