import { createApp } from 'vue';
import { createPinia } from 'pinia';

import router from './router';

import { i18n } from './plugins/i18n.js';

import '@/assets/style.css';
import App from '@/components/App.vue';

const pinia = createPinia();

const Vue = createApp(App);
Vue.use(i18n).use(router).use(pinia).mount('#app');
