import { createApp } from 'vue'
import { i18n } from './plugins/i18n.js'
import router from './router'
import 'flowbite';

import './style.css'
import './assets/css/tailwind.css'

import App from './App.vue'

createApp(App)
.use(i18n)
.use(router)
.mount('#app')